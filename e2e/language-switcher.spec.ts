/**
 * e2e/language-switcher.spec.ts
 *
 * Comprehensive E2E coverage for the LanguageSwitcher dropdown.
 *
 * Post routing tests are fully data-driven: posts are discovered from the
 * filesystem at test-registration time (same slug-computation logic as the
 * unit tests), then grouped by which locale translations exist.  Every
 * possible routing direction is covered automatically — no post names are
 * hardcoded here.
 *
 * Groups:
 *   • All three (EN + AR + ZH)  → 6-direction tests
 *   • EN + AR only              → 4 tests (2 valid, 2 fallbacks to /zh/posts)
 *   • EN + ZH only              → 4 tests (2 valid, 2 fallbacks to /ar/posts)
 *   • EN only                   → 2 fallback tests
 */

import { test, expect } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { slug as githubSlug } from "github-slugger";

// ---------------------------------------------------------------------------
// Filesystem discovery (mirrors getTranslationUrl.test.ts)
// ---------------------------------------------------------------------------

const ROOT = resolve(process.cwd());
const EN_DIR = join(ROOT, "src", "data", "blog", "en");
const AR_DIR = join(ROOT, "src", "data", "blog", "ar");
const ZH_DIR = join(ROOT, "src", "data", "blog", "zh");

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return (parseYaml(match[1]) as Record<string, unknown>) ?? {};
}

function computeSlug(fm: Record<string, unknown>): string {
  const postSlug = fm.postSlug as string | undefined;
  const title = fm.title as string;
  return postSlug ? githubSlug(postSlug) : githubSlug(title);
}

function readSlugs(dir: string): Set<string> {
  const out = new Set<string>();
  for (const file of readdirSync(dir).filter(f => f.endsWith(".md"))) {
    const fm = parseFrontmatter(readFileSync(join(dir, file), "utf-8"));
    if (fm.draft !== true) out.add(computeSlug(fm));
  }
  return out;
}

const enSlugs = Array.from(readSlugs(EN_DIR));
const arSlugs = readSlugs(AR_DIR); // includes the "-ar" suffix in each slug
const zhSlugs = readSlugs(ZH_DIR);

// Partition EN posts by which translations exist
const allThree  = enSlugs.filter(s =>  arSlugs.has(`${s}-ar`) &&  zhSlugs.has(s));
const enArOnly  = enSlugs.filter(s =>  arSlugs.has(`${s}-ar`) && !zhSlugs.has(s));
const enZhOnly  = enSlugs.filter(s => !arSlugs.has(`${s}-ar`) &&  zhSlugs.has(s));
const enOnly    = enSlugs.filter(s => !arSlugs.has(`${s}-ar`) && !zhSlugs.has(s));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function clickLocale(page: import("@playwright/test").Page, name: string) {
  await page.getByRole("button", { name: /select language/i }).click();
  await page.locator("#language-menu a").filter({ hasText: name }).click();
}

// ---------------------------------------------------------------------------
// Dropdown presence & homepage navigation
// ---------------------------------------------------------------------------

test.describe("LanguageSwitcher — dropdown", () => {
  test("button is present on the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /select language/i })).toBeVisible();
  });

  test("lists all three locales", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /select language/i }).click();
    await expect(page.locator("#language-menu")).toBeVisible();
    await expect(page.locator("#language-menu a")).toHaveCount(3);
  });

  test("EN homepage → ZH", async ({ page }) => {
    await page.goto("/");
    await clickLocale(page, "中文");
    await expect(page).toHaveURL(/\/zh\//);
  });

  test("EN homepage → AR", async ({ page }) => {
    await page.goto("/");
    await clickLocale(page, "العربية");
    await expect(page).toHaveURL(/\/ar\//);
  });
});

// ---------------------------------------------------------------------------
// Non-post page routing
// ---------------------------------------------------------------------------

test.describe("LanguageSwitcher — non-post pages", () => {
  test("/posts → /zh/posts", async ({ page }) => {
    await page.goto("/posts");
    await clickLocale(page, "中文");
    await expect(page).toHaveURL("/zh/posts");
  });

  test("/posts → /ar/posts", async ({ page }) => {
    await page.goto("/posts");
    await clickLocale(page, "العربية");
    await expect(page).toHaveURL("/ar/posts");
  });
});

// ---------------------------------------------------------------------------
// Posts with all three translations — 6 directions each
// ---------------------------------------------------------------------------

test.describe("6-direction routing — EN + AR + ZH posts", () => {
  for (const slug of allThree) {
    const en = `/posts/${slug}`;
    const ar = `/ar/posts/${slug}-ar`;
    const zh = `/zh/posts/${slug}`;

    test(`EN→ZH  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL(zh);
    });

    test(`EN→AR  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL(ar);
    });

    test(`ZH→EN  ${slug}`, async ({ page }) => {
      await page.goto(zh);
      await clickLocale(page, "English");
      await expect(page).toHaveURL(en);
    });

    test(`ZH→AR  ${slug}`, async ({ page }) => {
      await page.goto(zh);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL(ar);
    });

    test(`AR→EN  ${slug}`, async ({ page }) => {
      await page.goto(ar);
      await clickLocale(page, "English");
      await expect(page).toHaveURL(en);
    });

    test(`AR→ZH  ${slug}`, async ({ page }) => {
      await page.goto(ar);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL(zh);
    });
  }
});

// ---------------------------------------------------------------------------
// Posts with EN + AR only — valid directions + ZH fallbacks
// ---------------------------------------------------------------------------

test.describe("Routing — EN + AR posts (ZH falls back to listing)", () => {
  for (const slug of enArOnly) {
    const en = `/posts/${slug}`;
    const ar = `/ar/posts/${slug}-ar`;

    test(`EN→AR  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL(ar);
    });

    test(`AR→EN  ${slug}`, async ({ page }) => {
      await page.goto(ar);
      await clickLocale(page, "English");
      await expect(page).toHaveURL(en);
    });

    test(`EN→ZH fallback  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL("/zh/posts");
    });

    test(`AR→ZH fallback  ${slug}`, async ({ page }) => {
      await page.goto(ar);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL("/zh/posts");
    });
  }
});

// ---------------------------------------------------------------------------
// Posts with EN + ZH only — valid directions + AR fallbacks
// ---------------------------------------------------------------------------

test.describe("Routing — EN + ZH posts (AR falls back to listing)", () => {
  for (const slug of enZhOnly) {
    const en = `/posts/${slug}`;
    const zh = `/zh/posts/${slug}`;

    test(`EN→ZH  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL(zh);
    });

    test(`ZH→EN  ${slug}`, async ({ page }) => {
      await page.goto(zh);
      await clickLocale(page, "English");
      await expect(page).toHaveURL(en);
    });

    test(`EN→AR fallback  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL("/ar/posts");
    });

    test(`ZH→AR fallback  ${slug}`, async ({ page }) => {
      await page.goto(zh);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL("/ar/posts");
    });
  }
});

// ---------------------------------------------------------------------------
// EN-only posts — both missing-translation fallbacks
// ---------------------------------------------------------------------------

test.describe("Routing — EN-only posts (AR + ZH fall back to listings)", () => {
  for (const slug of enOnly) {
    const en = `/posts/${slug}`;

    test(`EN→AR fallback  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "العربية");
      await expect(page).toHaveURL("/ar/posts");
    });

    test(`EN→ZH fallback  ${slug}`, async ({ page }) => {
      await page.goto(en);
      await clickLocale(page, "中文");
      await expect(page).toHaveURL("/zh/posts");
    });
  }
});
