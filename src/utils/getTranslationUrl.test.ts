/**
 * src/utils/getTranslationUrl.test.ts
 *
 * Unit tests for the language-switcher routing utility.
 *
 * EN/AR post pairs are discovered automatically by reading the actual markdown
 * files in src/data/blog/ar/ at test time:
 *   • Every Arabic post whose computed slug ends in "-ar" is matched with its
 *     English counterpart (same slug minus the "-ar" suffix).
 *   • No post names are hardcoded — new translated posts are covered
 *     automatically.
 *
 * The slug computation mirrors src/utils/slugify.ts exactly:
 *   slug = postSlug ? githubSlug(postSlug) : githubSlug(title)
 */

import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { slug as githubSlug } from "github-slugger";
import {
  getTranslationUrl,
  computePostSlug,
  type PostForSlug,
} from "@utils/getTranslationUrl";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const ROOT = resolve(process.cwd());
const EN_DIR = join(ROOT, "src", "data", "blog", "en");
const AR_DIR = join(ROOT, "src", "data", "blog", "ar");

// ---------------------------------------------------------------------------
// Helpers (mirror llmRoutes.test.ts pattern)
// ---------------------------------------------------------------------------

/** Parse YAML frontmatter from raw markdown. */
function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return (parseYaml(match[1]) as Record<string, unknown>) ?? {};
}

/** Compute the URL slug from frontmatter, matching slugify.ts. */
function computeSlugFromFm(fm: Record<string, unknown>): string {
  const postSlug = fm.postSlug as string | undefined;
  const title = fm.title as string;
  return postSlug ? githubSlug(postSlug) : githubSlug(title);
}

/** Build a PostForSlug mock from a frontmatter record. */
function toPost(fm: Record<string, unknown>): PostForSlug {
  return {
    data: {
      postSlug: fm.postSlug as string | undefined,
      title: fm.title as string,
    },
  };
}

/** Read all non-draft .md files from a directory. */
function readPosts(dir: string): Array<{ file: string; slug: string; post: PostForSlug }> {
  return readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(file => {
      const raw = readFileSync(join(dir, file), "utf-8");
      const fm = parseFrontmatter(raw);
      return { file, fm, draft: fm.draft === true };
    })
    .filter(e => !e.draft)
    .map(({ file, fm }) => ({
      file,
      slug: computeSlugFromFm(fm),
      post: toPost(fm),
    }));
}

// ---------------------------------------------------------------------------
// Discover all EN/AR pairs automatically
// ---------------------------------------------------------------------------

const enEntries = readPosts(EN_DIR);
const arEntries = readPosts(AR_DIR);

/** All AR entries whose slug ends in "-ar" (the translation convention). */
const translatedArEntries = arEntries.filter(e => e.slug.endsWith("-ar"));

/**
 * For each AR entry find the matching EN entry (slug = arSlug without "-ar").
 * Skip any AR entries that have no matching EN post (shouldn't happen, but
 * be defensive so we don't get cryptic test failures).
 */
const pairs = translatedArEntries
  .map(ar => {
    const expectedEnSlug = ar.slug.replace(/-ar$/, "");
    const en = enEntries.find(e => e.slug === expectedEnSlug);
    return { ar, en, expectedEnSlug };
  })
  .filter((p): p is typeof p & { en: (typeof enEntries)[0] } => p.en !== undefined);

// All mock data for every test
const allEnPosts = enEntries.map(e => e.post);
const allArPosts = arEntries.map(e => e.post);

// ---------------------------------------------------------------------------
// computePostSlug
// ---------------------------------------------------------------------------

describe("computePostSlug", () => {
  it("uses postSlug when present (normalised through slugger)", () => {
    const post: PostForSlug = { data: { postSlug: "My-Mixed-Case-Slug", title: "Ignored" } };
    expect(computePostSlug(post)).toBe("my-mixed-case-slug");
  });

  it("falls back to title when postSlug is absent", () => {
    const post: PostForSlug = { data: { title: "Hello World" } };
    expect(computePostSlug(post)).toBe("hello-world");
  });

  it("falls back to title when postSlug is null", () => {
    const post: PostForSlug = { data: { postSlug: null, title: "Hello World" } };
    expect(computePostSlug(post)).toBe("hello-world");
  });
});

// ---------------------------------------------------------------------------
// Non-post pages
// ---------------------------------------------------------------------------

describe("getTranslationUrl — non-post pages", () => {
  it("EN root / → /ar", () => {
    expect(getTranslationUrl("/", "en", allEnPosts, allArPosts)).toBe("/ar/");
  });

  it("EN /about → /ar/about", () => {
    expect(getTranslationUrl("/about", "en", allEnPosts, allArPosts)).toBe("/ar/about");
  });

  it("AR /ar → /", () => {
    expect(getTranslationUrl("/ar", "ar", allEnPosts, allArPosts)).toBe("/");
  });

  it("AR /ar/about → /about", () => {
    expect(getTranslationUrl("/ar/about", "ar", allEnPosts, allArPosts)).toBe("/about");
  });

  it("EN /posts (listing) → /ar/posts", () => {
    expect(getTranslationUrl("/posts", "en", allEnPosts, allArPosts)).toBe("/ar/posts");
  });

  it("AR /ar/posts (listing) → /posts", () => {
    expect(getTranslationUrl("/ar/posts", "ar", allEnPosts, allArPosts)).toBe("/posts");
  });
});

// ---------------------------------------------------------------------------
// EN → AR: every discovered pair
// ---------------------------------------------------------------------------

describe("getTranslationUrl — English post → Arabic translation", () => {
  if (pairs.length === 0) {
    it("(no EN/AR pairs found — check src/data/blog/ar/)", () => {
      expect(pairs.length).toBeGreaterThan(0);
    });
  }

  for (const { en, ar } of pairs) {
    const enUrl = `/posts/${en.slug}`;
    const expectedArUrl = `/ar/posts/${ar.slug}`;

    it(`${enUrl}  →  ${expectedArUrl}  (source: ${en.file})`, () => {
      const result = getTranslationUrl(enUrl, "en", allEnPosts, allArPosts);
      expect(result).toBe(expectedArUrl);
    });
  }
});

// ---------------------------------------------------------------------------
// AR → EN: every discovered pair (reverse direction)
// ---------------------------------------------------------------------------

describe("getTranslationUrl — Arabic post → English original", () => {
  if (pairs.length === 0) {
    it("(no EN/AR pairs found — check src/data/blog/ar/)", () => {
      expect(pairs.length).toBeGreaterThan(0);
    });
  }

  for (const { en, ar } of pairs) {
    const arUrl = `/ar/posts/${ar.slug}`;
    const expectedEnUrl = `/posts/${en.slug}`;

    it(`${arUrl}  →  ${expectedEnUrl}  (source: ${ar.file})`, () => {
      const result = getTranslationUrl(arUrl, "ar", allEnPosts, allArPosts);
      expect(result).toBe(expectedEnUrl);
    });
  }
});

// ---------------------------------------------------------------------------
// Fallback: EN posts without an Arabic translation → /ar/posts
// ---------------------------------------------------------------------------

describe("getTranslationUrl — English posts without Arabic translation", () => {
  // Find EN posts for which no AR counterpart exists
  const untranslatedEn = enEntries.filter(
    en => !arEntries.some(ar => ar.slug === `${en.slug}-ar`)
  );

  if (untranslatedEn.length === 0) {
    it("(all EN posts have Arabic translations — nothing to test here)", () => {
      // vacuously pass
    });
    return;
  }

  for (const { file, slug } of untranslatedEn) {
    const enUrl = `/posts/${slug}`;
    it(`${enUrl}  →  /ar/posts  (no translation for: ${file})`, () => {
      const result = getTranslationUrl(enUrl, "en", allEnPosts, allArPosts);
      expect(result).toBe("/ar/posts");
    });
  }
});
