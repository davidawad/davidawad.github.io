/**
 * src/pages/zh/engineering/llms.txt.ts
 *
 * Generates /zh/engineering/llms.txt — an LLM-friendly plain-text version of
 * the Chinese Engineering page.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/zh/engineering.md");
  const raw = readFileSync(filePath, "utf-8");

  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Engineering (Chinese) — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/zh/engineering`,
    `**LLM version:** ${SITE.website}/zh/engineering/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
