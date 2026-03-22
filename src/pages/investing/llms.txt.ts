/**
 * src/pages/investing/llms.txt.ts
 *
 * Generates /investing/llms.txt — an LLM-friendly plain-text version of the
 * Investing page.
 *
 * Reads src/pages/investing.md at build time, strips YAML frontmatter, and
 * returns the raw markdown body with a brief header.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/investing.md");
  const raw = readFileSync(filePath, "utf-8");

  // Strip YAML frontmatter block.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Investing — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/investing`,
    `**LLM version:** ${SITE.website}/investing/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
