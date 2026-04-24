/**
 * src/pages/zh/posts/llms.txt.ts
 *
 * Generates /zh/posts/llms.txt — an LLM-friendly index of all published
 * Chinese blog posts.
 */

import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import { getPostsByLocale } from "@utils/posts";
import slugify from "@utils/slugify";
import { formatPostSummaryLine } from "@utils/llmContent";

export async function GET() {
  const posts = await getPostsByLocale("zh", { draft: false });
  const sortedPosts = getSortedPosts(posts);

  const lines: string[] = [];

  lines.push(`# ${SITE.title} — 所有文章 (Chinese Posts)`);
  lines.push("");
  lines.push(`Complete archive of Chinese blog posts on ${SITE.website}/zh/posts.`);
  lines.push("");
  lines.push(`**Total posts:** ${sortedPosts.length}`);
  lines.push(`**Archive page:** ${SITE.website}/zh/posts`);
  lines.push(`**RSS feed:** ${SITE.website}/rss.xml`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Posts (newest first)");
  lines.push("");

  for (const post of sortedPosts) {
    lines.push(formatPostSummaryLine(post));
    const slug = slugify(post.data);
    lines.push(`  *(full text: ${SITE.website}/zh/posts/${slug}/llms.txt)*`);
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
