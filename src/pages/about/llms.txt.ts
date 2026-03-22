/**
 * src/pages/about/llms.txt.ts
 *
 * Generates /about/llms.txt — an LLM-friendly plain-text version of the
 * About page.
 *
 * We read src/pages/about.md directly at build time (Astro SSG), strip the
 * YAML frontmatter block, and return the raw markdown body.  This avoids any
 * duplication — the about page source of truth stays in about.md.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  // Read the about.md source file.  import.meta.url gives us the absolute
  // path of this compiled file; we resolve relative to the project src root.
  const aboutPath = resolve(process.cwd(), "src/pages/about.md");
  const raw = readFileSync(aboutPath, "utf-8");

  // Strip YAML frontmatter (the --- ... --- block at the top of the file).
  // Frontmatter is not useful for LLM consumers — they want the content.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# About — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/about`,
    `**LLM version:** ${SITE.website}/about/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  const body = header + withoutFrontmatter;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
