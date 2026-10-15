/**
 * src/pages/engineering/llms.txt.ts
 *
 * Generates /engineering/llms.txt — an LLM-friendly plain-text version of the
 * Engineering page.
 *
 * Renders the project list from src/data/engineering.ts (the same source the
 * page uses) so the text version never drifts from the rendered page.
 */

import { SITE } from "@config";
import { projects } from "../../data/engineering";

export async function GET() {
  const sorted = [...projects].sort((a, b) =>
    (b.publishedDate ?? `${b.year}-01-01`).localeCompare(a.publishedDate ?? `${a.year}-01-01`),
  );

  const body = sorted
    .map(p => {
      const links = [p.siteUrl, p.repoUrl ?? p.url].filter(Boolean).join(" | ");
      const date = p.publishedDate ? ` — published ${p.publishedDate}` : "";
      const source = p.dateSource ? ` (date: ${p.dateSource})` : "";
      return `## ${p.name} — ${p.year} [${p.category}]${date}${links ? ` (${links})` : ""}${source}\n${p.blurb}`;
    })
    .join("\n\n");

  const header = [
    `# Engineering — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/engineering`,
    `**LLM version:** ${SITE.website}/engineering/llms.txt`,
    "",
    "Selected software, machine-learning, embedded, and legal-tech projects.",
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
