/**
 * src/pages/ar/investing/llms.txt.ts
 *
 * Generates /ar/investing/llms.txt — an LLM-friendly plain-text version of
 * the Arabic Investing page.
 *
 * Reads src/pages/ar/investing.md at build time, strips YAML frontmatter, and
 * returns the raw markdown body with a brief header.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/ar/investing.md");
  const raw = readFileSync(filePath, "utf-8");

  // Strip YAML frontmatter block.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Investing (Arabic) — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/ar/investing`,
    `**LLM version:** ${SITE.website}/ar/investing/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
