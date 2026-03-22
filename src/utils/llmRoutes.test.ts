/**
 * src/utils/llmRoutes.test.ts
 *
 * Build-output coverage test for the llms.txt convention.
 *
 * This test ALWAYS runs a full Astro build (`yarn build`) in beforeAll, then
 * verifies that every expected llms.txt file was emitted to the public/ output
 * directory.  No conditional skipping — if the build is needed, it will run.
 *
 * Slug computation mirrors src/utils/slugify.ts exactly:
 *   slug = postSlug ? githubSlug(postSlug) : githubSlug(title)
 *
 * Frontmatter is parsed with the `yaml` package (an installed Astro dep).
 */

import { describe, it, expect, beforeAll } from "vitest";
import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { slug as githubSlug } from "github-slugger";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const ROOT = resolve(process.cwd());
const PUBLIC = join(ROOT, "public");
const EN_BLOG_DIR = join(ROOT, "src", "data", "blog", "en");
const AR_BLOG_DIR = join(ROOT, "src", "data", "blog", "ar");

// ---------------------------------------------------------------------------
// Build — always runs, never skipped
// ---------------------------------------------------------------------------

beforeAll(() => {
  execSync("yarn build", {
    cwd: ROOT,
    stdio: "inherit",
    timeout: 180_000, // 3 minutes
  });
}, 180_000);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract and parse YAML frontmatter from a raw markdown string. */
function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return (parseYaml(match[1]) as Record<string, unknown>) ?? {};
}

/** Compute the URL slug from a post's frontmatter, matching slugify.ts. */
function computeSlug(frontmatter: Record<string, unknown>): string {
  const postSlug = frontmatter.postSlug as string | undefined;
  const title = frontmatter.title as string;
  return postSlug ? githubSlug(postSlug) : githubSlug(title);
}

/**
 * Read all non-draft .md files from a directory and return their slugs.
 * Draft posts are excluded because the Astro build skips them.
 */
function getPostSlugs(dir: string): Array<{ file: string; slug: string }> {
  return readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(file => {
      const raw = readFileSync(join(dir, file), "utf-8");
      const data = parseFrontmatter(raw);
      return {
        file,
        slug: computeSlug(data),
        draft: data.draft === true,
      };
    })
    .filter(entry => !entry.draft)
    .map(({ file, slug }) => ({ file, slug }));
}

// ---------------------------------------------------------------------------
// Static pages
// ---------------------------------------------------------------------------

describe("Static page llms.txt files exist in public/", () => {
  const staticPages = [
    "llms.txt",
    "about/llms.txt",
    "investing/llms.txt",
    "engineering/llms.txt",
    "publications/llms.txt",
    "reading/llms.txt",
    "businesses/llms.txt",
    "posts/llms.txt",
    "ar/investing/llms.txt",
    "ar/engineering/llms.txt",
    "ar/posts/llms.txt",
  ];

  for (const page of staticPages) {
    it(`public/${page}`, () => {
      const filePath = join(PUBLIC, page);
      expect(existsSync(filePath), `Missing: public/${page}`).toBe(true);
    });
  }
});

// ---------------------------------------------------------------------------
// English per-post endpoints
// ---------------------------------------------------------------------------

describe("English post llms.txt files exist in public/posts/{slug}/", () => {
  const posts = getPostSlugs(EN_BLOG_DIR);

  for (const { file, slug } of posts) {
    it(`public/posts/${slug}/llms.txt  (source: ${file})`, () => {
      const filePath = join(PUBLIC, "posts", slug, "llms.txt");
      expect(
        existsSync(filePath),
        `Missing: public/posts/${slug}/llms.txt  (source: ${file})`
      ).toBe(true);
    });
  }
});

// ---------------------------------------------------------------------------
// Arabic per-post endpoints
// ---------------------------------------------------------------------------

describe("Arabic post llms.txt files exist in public/ar/posts/{slug}/", () => {
  const posts = getPostSlugs(AR_BLOG_DIR);

  for (const { file, slug } of posts) {
    it(`public/ar/posts/${slug}/llms.txt  (source: ${file})`, () => {
      const filePath = join(PUBLIC, "ar", "posts", slug, "llms.txt");
      expect(
        existsSync(filePath),
        `Missing: public/ar/posts/${slug}/llms.txt  (source: ${file})`
      ).toBe(true);
    });
  }
});
