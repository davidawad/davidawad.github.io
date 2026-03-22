/**
 * src/pages/publications/llms.txt.ts
 *
 * Generates /publications/llms.txt — an LLM-friendly plain-text version of the
 * Publications page.
 *
 * Reads src/pages/publications.md at build time, strips YAML frontmatter, and
 * returns the raw markdown body with a brief header.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/publications.md");
  const raw = readFileSync(filePath, "utf-8");

  // Strip YAML frontmatter block.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Publications — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/publications`,
    `**LLM version:** ${SITE.website}/publications/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
