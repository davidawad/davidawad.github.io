/**
 * src/pages/ar/engineering/llms.txt.ts
 *
 * Generates /ar/engineering/llms.txt — an LLM-friendly plain-text version of
 * the Arabic Engineering page.
 *
 * Renders the project list from src/data/engineering.ts with the Arabic
 * blurbs from src/data/engineering-i18n.ts (the same sources the page uses)
 * so the text version never drifts from the rendered page.
 */

import { SITE } from "@config";
import { projects } from "@/data/engineering";
import { engineeringStrings } from "@/data/engineering-i18n";

export async function GET() {
  const s = engineeringStrings.ar;
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  const body = sorted
    .map(p => {
      const link = p.url ? ` (${p.url})` : "";
      const blurb = s.blurbs[p.name] ?? p.blurb;
      return `## ${p.name} — ${p.year} [${p.category}]${link}\n${blurb}`;
    })
    .join("\n\n");

  const header = [
    `# Engineering (Arabic) — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/ar/engineering`,
    `**LLM version:** ${SITE.website}/ar/engineering/llms.txt`,
    "",
    "مشاريع مختارة في البرمجيات وتعلم الآلة والأنظمة المدمجة والتقنية القانونية.",
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
