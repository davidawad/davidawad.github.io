/**
 * src/pages/investing/llms.txt.ts
 *
 * Generates /investing/llms.txt — an LLM-friendly plain-text version of the
 * Investing page.
 *
 * Renders the asset-class breakdown from src/data/investing.ts (the same
 * source the page uses) so the text version never drifts from the rendered
 * page.
 */

import { SITE } from "@config";
import { assetClasses } from "../../data/investing";

export async function GET() {
  const body = assetClasses
    .map(a => {
      const lines = [
        `## [${a.num}] ${a.name} — ${a.category}`,
        a.philosophy,
        a.detail,
      ];
      if (a.public && a.public.length > 0) {
        const label = a.publicLabel ?? "Public";
        const items = a.public
          .map(p => (p.href ? `${p.name} (${p.href})` : p.name))
          .join(", ");
        lines.push(`${label}: ${items}`);
      }
      return lines.join("\n");
    })
    .join("\n\n");

  const header = [
    `# Investing — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/investing`,
    `**LLM version:** ${SITE.website}/investing/llms.txt`,
    "",
    "Investing across eight asset classes — philosophy and approach per box.",
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
