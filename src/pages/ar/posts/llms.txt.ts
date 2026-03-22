/**
 * src/pages/ar/posts/llms.txt.ts
 *
 * Generates /ar/posts/llms.txt — an LLM-friendly index of all published
 * Arabic blog posts.
 *
 * Mirrors src/pages/posts/llms.txt.ts exactly, but scoped to the "ar" locale.
 * Arabic post URLs live under /ar/posts/, so their LLM index follows the same
 * convention: /ar/posts/llms.txt.
 */

import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import { getPostsByLocale } from "@utils/posts";
import slugify from "@utils/slugify";
import { formatPostSummaryLine } from "@utils/llmContent";

export async function GET() {
  const posts = await getPostsByLocale("ar", { draft: false });
  const sortedPosts = getSortedPosts(posts);

  const lines: string[] = [];

  lines.push(`# ${SITE.title} — كل المنشورات (Arabic Posts)`);
  lines.push("");
  lines.push(`Complete archive of Arabic blog posts on ${SITE.website}/ar/posts.`);
  lines.push("");
  lines.push(`**Total posts:** ${sortedPosts.length}`);
  lines.push(`**Archive page:** ${SITE.website}/ar/posts`);
  lines.push(`**RSS feed:** ${SITE.website}/rss.xml`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Posts (newest first)");
  lines.push("");

  for (const post of sortedPosts) {
    lines.push(formatPostSummaryLine(post));
    const slug = slugify(post.data);
    lines.push(`  *(full text: ${SITE.website}/ar/posts/${slug}/llms.txt)*`);
  }

  lines.push("");
  lines.push("---");
  lines.push(
    `*Append \`/llms.txt\` to any post URL to get its full LLM-friendly text.*`
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
