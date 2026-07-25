/**
 * src/pages/zh/investing/llms.txt.ts
 *
 * Generates /zh/investing/llms.txt — an LLM-friendly plain-text version of
 * the Chinese Investing page.
 *
 * Renders the asset-class breakdown from src/data/investing.ts with the
 * Chinese copy from src/data/investing-i18n.ts (the same sources the page
 * uses) so the text version never drifts from the rendered page.
 */

import { SITE } from "@config";
import { assetClasses } from "@/data/investing";
import { investingStrings } from "@/data/investing-i18n";

export async function GET() {
  const s = investingStrings.zh;

  const body = assetClasses
    .map(a => {
      const t = { ...a, ...(s.assets[a.id] ?? {}) };
      const lines = [
        `## [${t.num}] ${t.name} — ${t.category}`,
        t.philosophy,
        t.detail,
      ];
      if (t.public && t.public.length > 0) {
        const label = t.publicLabel ?? "Public";
        const items = t.public
          .map(p => (p.href ? `${p.name} (${p.href})` : p.name))
          .join(", ");
        lines.push(`${label}: ${items}`);
      }
      return lines.join("\n");
    })
    .join("\n\n");

  const header = [
    `# Investing (Chinese) — ${SITE.author}`,
    "",
    `**URL:** ${SITE.website}/zh/investing`,
    `**LLM version:** ${SITE.website}/zh/investing/llms.txt`,
    "",
    s.description,
    "",
    "---",
    "",
  ].join("\n");

  return new Response(header + body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
