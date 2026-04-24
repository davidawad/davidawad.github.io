/**
 * src/pages/zh/investing/llms.txt.ts
 *
 * Generates /zh/investing/llms.txt — an LLM-friendly plain-text version of
 * the Chinese Investing page.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE } from "@config";

export async function GET() {
  const filePath = resolve(process.cwd(), "src/pages/zh/investing.md");
  const raw = readFileSync(filePath, "utf-8");

  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, "").trimStart();

  const header = [
    `# Investing (Chinese) — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/zh/investing`,
    `**LLM version:** ${SITE.website}/zh/investing/llms.txt`,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + withoutFrontmatter, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
