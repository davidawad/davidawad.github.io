/**
 * llmContent.ts
 *
 * Shared helpers for generating LLM-friendly plain-text / Markdown content.
 * All endpoints under /[page]/llms.txt import from here.
 *
 * Design principles:
 *  - Use post.body (raw markdown) directly — zero HTML scraping.
 *  - Keep output deterministic: same input always produces same output.
 *  - Strip nothing from post body; add structured metadata header.
 */

import type { CollectionEntry } from "astro:content";
import slugify from "@utils/slugify";
import { SITE } from "@config";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Post = CollectionEntry<"blog">;

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

/** ISO date string → "YYYY-MM-DD" */
function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "";
  const date = d instanceof Date ? d : new Date(d);
  return date.toISOString().slice(0, 10);
}

/** Absolute URL for a post given its slug. */
export function postUrl(post: Post): string {
  return `${SITE.website}/posts/${slugify(post.data)}`;
}

/** Absolute URL for a post's llms.txt endpoint. */
export function postLlmUrl(post: Post): string {
  return `${SITE.website}/posts/${slugify(post.data)}/llms.txt`;
}

// ---------------------------------------------------------------------------
// Full post formatter
// ---------------------------------------------------------------------------

/**
 * Returns the full LLM-friendly representation of a single blog post.
 *
 * Structure:
 *   # Title
 *   (metadata block)
 *   ---
 *   (raw markdown body verbatim)
 *
 * post.body is the raw markdown source from the content collection — no
 * rendering, no HTML, no scraping required.
 */
export function formatPostAsMarkdown(post: Post): string {
  const { title, description, pubDatetime, modDatetime, tags, author } =
    post.data;

  const slug = slugify(post.data);
  const lines: string[] = [];

  lines.push(`# ${title}`);
  lines.push("");

  // Metadata block
  lines.push(`**URL:** ${SITE.website}/posts/${slug}`);
  lines.push(`**LLM version:** ${SITE.website}/posts/${slug}/llms.txt`);
  if (author) lines.push(`**Author:** ${author}`);
  lines.push(`**Published:** ${fmtDate(pubDatetime)}`);
  if (modDatetime) lines.push(`**Updated:** ${fmtDate(modDatetime)}`);
  if (tags?.length) lines.push(`**Tags:** ${tags.join(", ")}`);
  if (description) lines.push(`**Description:** ${description}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Raw markdown body — this is the actual source content, not rendered HTML.
  lines.push(post.body ?? "");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Post summary line (used in index / llms.txt files)
// ---------------------------------------------------------------------------

/**
 * A single compact line summarising one post for use in index files.
 * Format:  - [Title](url) — description (YYYY-MM-DD)
 */
export function formatPostSummaryLine(post: Post): string {
  const { title, description, pubDatetime } = post.data;
  const url = postUrl(post);
  const date = fmtDate(pubDatetime);
  const desc = description ? ` — ${description}` : "";
  return `- [${title}](${url})${desc} *(${date})*`;
}

// ---------------------------------------------------------------------------
// Post index block (used in /posts/llms.txt and /llms.txt)
// ---------------------------------------------------------------------------

/**
 * Formats a list of posts as a markdown section.
 * `heading` is the section heading text (e.g. "Recent Posts").
 */
export function formatPostList(posts: Post[], heading: string): string {
  const lines: string[] = [`## ${heading}`, ""];
  for (const post of posts) {
    lines.push(formatPostSummaryLine(post));
  }
  return lines.join("\n");
}
