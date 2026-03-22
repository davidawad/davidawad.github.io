/**
 * src/utils/llmContent.test.ts
 *
 * Unit tests for the llmContent utility functions.
 *
 * These tests verify that:
 *  - The formatting helpers produce structurally correct output.
 *  - URL patterns are stable (regression protection for the /llms.txt scheme).
 *  - Metadata fields appear in the output when present / are absent when not.
 *  - The raw markdown body is passed through verbatim.
 */

import { describe, it, expect } from "vitest";
import {
  formatPostAsMarkdown,
  formatPostSummaryLine,
  formatPostList,
  postUrl,
  postLlmUrl,
  type Post,
} from "@utils/llmContent";
import { SITE } from "@config";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Creates a minimal mock Post (CollectionEntry<"blog">) for testing.
 * Cast via `as unknown as Post` so we don't have to satisfy every field of
 * the full Astro CollectionEntry type.
 */
function makePost(overrides: {
  title: string;
  postSlug?: string;
  description?: string;
  pubDatetime?: Date;
  modDatetime?: Date | null;
  tags?: string[];
  author?: string;
  body?: string;
}): Post {
  return {
    id: "test-id",
    collection: "blog",
    data: {
      title: overrides.title,
      postSlug: overrides.postSlug,
      description: overrides.description ?? "",
      pubDatetime: overrides.pubDatetime ?? new Date("2024-06-15T00:00:00Z"),
      modDatetime: overrides.modDatetime ?? null,
      tags: overrides.tags ?? ["test"],
      author: overrides.author,
      draft: false,
      featured: false,
    },
    body: overrides.body ?? "This is the post body.",
    filePath: "src/data/blog/en/test.md",
    // CollectionEntry also requires `render` at runtime but llmContent never
    // calls it, so we omit it here.
  } as unknown as Post;
}

// ---------------------------------------------------------------------------
// postUrl
// ---------------------------------------------------------------------------

describe("postUrl", () => {
  it("uses SITE.website as the base", () => {
    const post = makePost({ title: "My Post" });
    expect(postUrl(post).startsWith(SITE.website)).toBe(true);
  });

  it("builds URL from title when no postSlug is given", () => {
    const post = makePost({ title: "How Bitcoin Works" });
    expect(postUrl(post)).toBe(`${SITE.website}/posts/how-bitcoin-works`);
  });

  it("uses postSlug when provided", () => {
    const post = makePost({ title: "Ignored", postSlug: "my-custom-slug" });
    expect(postUrl(post)).toBe(`${SITE.website}/posts/my-custom-slug`);
  });

  it("URL never has a trailing slash", () => {
    const post = makePost({ title: "Test Post" });
    expect(postUrl(post)).not.toMatch(/\/$/);
  });
});

// ---------------------------------------------------------------------------
// postLlmUrl
// ---------------------------------------------------------------------------

describe("postLlmUrl", () => {
  it("ends with /llms.txt", () => {
    const post = makePost({ title: "Test Post" });
    expect(postLlmUrl(post)).toMatch(/\/llms\.txt$/);
  });

  it("follows the convention: postUrl + /llms.txt", () => {
    const post = makePost({ title: "Some Article", postSlug: "some-article" });
    expect(postLlmUrl(post)).toBe(`${postUrl(post)}/llms.txt`);
  });

  it("includes the SITE base URL", () => {
    const post = makePost({ title: "Test", postSlug: "test-slug" });
    expect(postLlmUrl(post)).toBe(
      `${SITE.website}/posts/test-slug/llms.txt`
    );
  });
});

// ---------------------------------------------------------------------------
// formatPostAsMarkdown
// ---------------------------------------------------------------------------

describe("formatPostAsMarkdown", () => {
  it("starts with an H1 containing the post title", () => {
    const post = makePost({ title: "My Great Post" });
    const output = formatPostAsMarkdown(post);
    expect(output).toMatch(/^# My Great Post/);
  });

  it("includes a URL metadata line", () => {
    const post = makePost({ title: "Test Post", postSlug: "test-post" });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain(`**URL:** ${SITE.website}/posts/test-post`);
  });

  it("includes an LLM version metadata line", () => {
    const post = makePost({ title: "Test Post", postSlug: "test-post" });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain(
      `**LLM version:** ${SITE.website}/posts/test-post/llms.txt`
    );
  });

  it("includes the author when provided", () => {
    const post = makePost({ title: "Test", author: "David Awad" });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain("**Author:** David Awad");
  });

  it("omits the author line when not provided", () => {
    const post = makePost({ title: "Test", author: undefined });
    const output = formatPostAsMarkdown(post);
    expect(output).not.toContain("**Author:**");
  });

  it("includes the publish date in YYYY-MM-DD format", () => {
    const post = makePost({
      title: "Test",
      pubDatetime: new Date("2024-03-18T12:00:00Z"),
    });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain("**Published:** 2024-03-18");
  });

  it("includes the updated date when modDatetime is set", () => {
    const post = makePost({
      title: "Test",
      pubDatetime: new Date("2024-01-01T00:00:00Z"),
      modDatetime: new Date("2024-06-01T00:00:00Z"),
    });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain("**Updated:** 2024-06-01");
  });

  it("omits the updated date when modDatetime is null", () => {
    const post = makePost({ title: "Test", modDatetime: null });
    const output = formatPostAsMarkdown(post);
    expect(output).not.toContain("**Updated:**");
  });

  it("includes tags as a comma-separated list", () => {
    const post = makePost({ title: "Test", tags: ["physics", "math"] });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain("**Tags:** physics, math");
  });

  it("includes the description when provided", () => {
    const post = makePost({
      title: "Test",
      description: "A fascinating article about things.",
    });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain(
      "**Description:** A fascinating article about things."
    );
  });

  it("includes a horizontal rule separator before the body", () => {
    const post = makePost({ title: "Test" });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain("---");
  });

  it("includes the raw markdown body verbatim", () => {
    const body =
      "## Introduction\n\nThis is **bold** and this is `code`.";
    const post = makePost({ title: "Test", body });
    const output = formatPostAsMarkdown(post);
    expect(output).toContain(body);
  });

  it("handles empty body gracefully", () => {
    const post = makePost({ title: "Test", body: "" });
    expect(() => formatPostAsMarkdown(post)).not.toThrow();
  });

  it("does not contain HTML tags (output stays plain text)", () => {
    const post = makePost({ title: "Clean Output", body: "Just plain text." });
    const output = formatPostAsMarkdown(post);
    // Metadata lines and body should be free of HTML wrappers
    expect(output).not.toMatch(/<(div|span|p|html|head|body)[^>]*>/i);
  });
});

// ---------------------------------------------------------------------------
// formatPostSummaryLine
// ---------------------------------------------------------------------------

describe("formatPostSummaryLine", () => {
  it("contains the post title as a markdown link", () => {
    const post = makePost({ title: "Fermat's Last Theorem", postSlug: "fermat" });
    const line = formatPostSummaryLine(post);
    expect(line).toContain("[Fermat's Last Theorem]");
    expect(line).toContain(`${SITE.website}/posts/fermat`);
  });

  it("contains the description when provided", () => {
    const post = makePost({
      title: "Test",
      description: "Short description here.",
    });
    const line = formatPostSummaryLine(post);
    expect(line).toContain("Short description here.");
  });

  it("contains the date in YYYY-MM-DD format", () => {
    const post = makePost({
      title: "Test",
      pubDatetime: new Date("2015-12-25T00:00:00Z"),
    });
    const line = formatPostSummaryLine(post);
    expect(line).toContain("2015-12-25");
  });

  it("is a single line (no newlines)", () => {
    const post = makePost({ title: "Single Line Post" });
    const line = formatPostSummaryLine(post);
    expect(line).not.toContain("\n");
  });

  it("starts with a markdown list item marker", () => {
    const post = makePost({ title: "List Item" });
    const line = formatPostSummaryLine(post);
    expect(line).toMatch(/^- /);
  });
});

// ---------------------------------------------------------------------------
// formatPostList
// ---------------------------------------------------------------------------

describe("formatPostList", () => {
  it("starts with the given heading as an H2", () => {
    const posts = [makePost({ title: "Post One" })];
    const output = formatPostList(posts, "Recent Posts");
    expect(output).toMatch(/^## Recent Posts/);
  });

  it("includes a summary line for each post", () => {
    const posts = [
      makePost({ title: "Post A", postSlug: "post-a" }),
      makePost({ title: "Post B", postSlug: "post-b" }),
    ];
    const output = formatPostList(posts, "All Posts");
    expect(output).toContain("Post A");
    expect(output).toContain("Post B");
  });

  it("returns just the heading when given an empty list", () => {
    const output = formatPostList([], "Empty Section");
    expect(output).toContain("## Empty Section");
    // Should not crash or contain undefined
    expect(output).not.toContain("undefined");
  });

  it("each post line is a markdown list item", () => {
    const posts = [makePost({ title: "X", postSlug: "x" })];
    const output = formatPostList(posts, "Posts");
    const lines = output.split("\n").filter(l => l.trim().startsWith("- "));
    expect(lines.length).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// URL scheme consistency (regression tests)
// ---------------------------------------------------------------------------

describe("llms.txt URL scheme", () => {
  it("postLlmUrl matches the convention: postUrl + /llms.txt", () => {
    const slugs = ["my-post", "fermat", "03-18-quantum-gravity"];
    for (const s of slugs) {
      const post = makePost({ title: "X", postSlug: s });
      expect(postLlmUrl(post)).toBe(`${postUrl(post)}/llms.txt`);
    }
  });

  it("all URLs use the SITE.website base (no hard-coded domains)", () => {
    const post = makePost({ title: "Test", postSlug: "test" });
    expect(postUrl(post).startsWith(SITE.website)).toBe(true);
    expect(postLlmUrl(post).startsWith(SITE.website)).toBe(true);
  });

  it("postUrl path segment matches /posts/{slug}", () => {
    const post = makePost({ title: "Test Title", postSlug: "test-title" });
    const url = new URL(postUrl(post));
    expect(url.pathname).toBe("/posts/test-title");
  });

  it("postLlmUrl path segment matches /posts/{slug}/llms.txt", () => {
    const post = makePost({ title: "Test Title", postSlug: "test-title" });
    const url = new URL(postLlmUrl(post));
    expect(url.pathname).toBe("/posts/test-title/llms.txt");
  });
});
