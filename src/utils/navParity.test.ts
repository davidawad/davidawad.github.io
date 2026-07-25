/**
 * src/utils/navParity.test.ts
 *
 * Nav-link parity test.
 *
 * Parses Header.astro to extract the route paths used in navLinks, then
 * verifies that each locale × route has a corresponding page file on disk.
 * Fails with a clear message naming the missing locale + route so the class
 * of bug that caused /ar/about to 404 is caught immediately at test time.
 *
 * To stay robust as new nav links are added: the path list is extracted
 * directly from Header.astro via regex, so adding a new entry there
 * automatically adds it to this test without any manual update.
 */

import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const ROOT = resolve(process.cwd());
const PAGES_DIR = join(ROOT, "src", "pages");
const HEADER_PATH = join(ROOT, "src", "components", "Header.astro");

// ---------------------------------------------------------------------------
// Locale definitions
// ---------------------------------------------------------------------------

const LOCALES = [
  { locale: "en", prefix: "" },
  { locale: "ar", prefix: "/ar" },
  { locale: "zh", prefix: "/zh" },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Extract the `path:` values from the navLinks array in Header.astro.
 * Matches string literals like  path: "/posts"  inside the navLinks const.
 * Returns paths in the order they appear in the file.
 */
function extractNavPathsFromHeader(): string[] {
  const source = readFileSync(HEADER_PATH, "utf-8");

  // Isolate the navLinks array so we don't accidentally pick up other
  // `path:` occurrences (e.g. destructuring patterns like `{ href, label, path }`).
  const navLinksMatch = source.match(
    /const\s+navLinks\s*=\s*\[([\s\S]*?)\];/
  );
  if (!navLinksMatch) {
    throw new Error(
      `Could not locate navLinks array in ${HEADER_PATH}. ` +
        "Update the regex if the variable was renamed."
    );
  }

  const navLinksBlock = navLinksMatch[1];
  const matches = [...navLinksBlock.matchAll(/path:\s*["'](\/[^"']+)["']/g)];
  const paths = matches.map((m) => m[1]);

  if (paths.length === 0) {
    throw new Error(
      `No path entries found in navLinks block of ${HEADER_PATH}. ` +
        "The header structure may have changed."
    );
  }

  return paths;
}

/**
 * Return true if any of the canonical file candidates for the given route
 * exist on disk.
 *
 * A route like "/ar/about" maps to candidates under src/pages/:
 *   src/pages/ar/about.astro
 *   src/pages/ar/about.md
 *   src/pages/ar/about/index.astro
 *   src/pages/ar/about/index.md
 */
function routeHasPageFile(route: string): { found: boolean; checked: string[] } {
  const candidates = [
    join(PAGES_DIR, `${route}.astro`),
    join(PAGES_DIR, `${route}.md`),
    join(PAGES_DIR, `${route}`, "index.astro"),
    join(PAGES_DIR, `${route}`, "index.md"),
  ];
  return {
    found: candidates.some((p) => existsSync(p)),
    checked: candidates.map((p) => p.replace(ROOT + "/", "")),
  };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("Nav link parity — every nav-linked route has a page file", () => {
  const navPaths = extractNavPathsFromHeader();

  for (const { locale, prefix } of LOCALES) {
    describe(`locale: ${locale}`, () => {
      for (const path of navPaths) {
        const route = `${prefix}${path}`;
        it(`route "${route}" resolves to a page file`, () => {
          const { found, checked } = routeHasPageFile(route);
          expect(
            found,
            `Broken nav link: locale="${locale}" links to "${route}" ` +
              `but no page file was found.\n` +
              `Checked:\n${checked.map((c) => `  • ${c}`).join("\n")}\n` +
              `Fix: create one of the above files.`
          ).toBe(true);
        });
      }
    });
  }
});
