/**
 * src/pages/posts/llms.txt.ts
 *
 * Generates /posts/llms.txt — an LLM-friendly index of all published posts.
 *
 * This is the machine-readable counterpart to the /posts HTML page.
 * It lists every post with its title, URL, description, and date.
 */

import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import { getPostsByLocale } from "@utils/posts";
import { formatPostSummaryLine, postLlmUrl } from "@utils/llmContent";

export async function GET() {
  const posts = await getPostsByLocale("en", { draft: false });
  const sortedPosts = getSortedPosts(posts);

  const lines: string[] = [];

  lines.push(`# ${SITE.title} — All Posts`);
  lines.push("");
  lines.push(
    `Complete archive of blog posts on ${SITE.website}. ` +
      `Posts cover physics, mathematics, law, technology, and philosophy.`
  );
  lines.push("");
  lines.push(`**Total posts:** ${sortedPosts.length}`);
  lines.push(`**Archive page:** ${SITE.website}/posts`);
  lines.push(`**RSS feed:** ${SITE.website}/rss.xml`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Posts (newest first)");
  lines.push("");

  for (const post of sortedPosts) {
    lines.push(formatPostSummaryLine(post));
    // Also link to the post's own llms.txt for deep access
    lines.push(`  *(full text: ${postLlmUrl(post)})*`);
  }

  lines.push("");
  lines.push("---");
  lines.push(
    `*Append \`/llms.txt\` to any post URL to get its full LLM-friendly text.*`
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
