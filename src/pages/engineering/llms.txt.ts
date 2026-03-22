/**
 * src/pages/engineering/llms.txt.ts
 *
 * Generates /engineering/llms.txt — an LLM-friendly plain-text version of the
 * Engineering page.
 *
 * Reads src/pages/engineering.md at build time, strips YAML frontmatter, and
 * returns the raw markdown body with a brief header.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/engineering.md");
  const raw = readFileSync(filePath, "utf-8");

  // Strip YAML frontmatter block.
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Engineering — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/engineering`,
    `**LLM version:** ${SITE.website}/engineering/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
