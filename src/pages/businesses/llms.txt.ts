/**
 * src/pages/businesses/llms.txt.ts
 *
 * Generates /businesses/llms.txt — an LLM-friendly plain-text version of the
 * Businesses page.
 *
 * Reads src/pages/businesses.md at build time, strips YAML frontmatter, and
 * returns the raw markdown body with a brief header.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/businesses.md");
  const raw = readFileSync(filePath, "utf-8");

  // Strip YAML frontmatter block.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Businesses — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/businesses`,
    `**LLM version:** ${SITE.website}/businesses/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
