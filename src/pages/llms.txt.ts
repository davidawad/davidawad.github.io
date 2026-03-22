/**
 * src/pages/llms.txt.ts
 *
 * Generates the site-wide /llms.txt file.
 *
 * llms.txt is a proposed standard (llmstxt.org) for making websites more
 * accessible to large language models.  This file acts as a structured index
 * of the site: who it belongs to, what it contains, and where to find
 * machine-readable versions of individual pages.
 *
 * Convention on this site:
 *   Any page URL + /llms.txt  →  LLM-friendly plain-text version of that page
 *   e.g.  /posts/my-post  →  /posts/my-post/llms.txt
 */

import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import { getPostsByLocale } from "@utils/posts";
import { formatPostList } from "@utils/llmContent";

export async function GET() {
  const posts = await getPostsByLocale("en", { draft: false });
  const sortedPosts = getSortedPosts(posts);

  // Keep the site index to a reasonable size: list all posts but cap at 50.
  const listedPosts = sortedPosts.slice(0, 50);

  const lines: string[] = [];

  // ----- Site header -----
  lines.push(`# ${SITE.title}`);
  lines.push("");
  lines.push(`> ${SITE.desc}`);
  lines.push("");
  lines.push(`**Site:** ${SITE.website}`);
  lines.push(`**Author:** ${SITE.author}`);
  lines.push("");

  // ----- Important pages -----
  lines.push("## Important Pages");
  lines.push("");
  lines.push(
    `- [Home](${SITE.website}/) — Site root. Recent posts and author introduction. [llms.txt](${SITE.website}/llms.txt)`
  );
  lines.push(
    `- [About](${SITE.website}/about) — Biography, professional background, personality profiles. [llms.txt](${SITE.website}/about/llms.txt)`
  );
  lines.push(
    `- [All Posts](${SITE.website}/posts) — Full post archive. [llms.txt](${SITE.website}/posts/llms.txt)`
  );
  lines.push(
    `- [Engineering](${SITE.website}/engineering) — Engineering work and projects. [llms.txt](${SITE.website}/engineering/llms.txt)`
  );
  lines.push(
    `- [Investing](${SITE.website}/investing) — Investing philosophy and portfolio. [llms.txt](${SITE.website}/investing/llms.txt)`
  );
  lines.push(
    `- [Publications](${SITE.website}/publications) — Public appearances and published work. [llms.txt](${SITE.website}/publications/llms.txt)`
  );
  lines.push(
    `- [Reading](${SITE.website}/reading) — Reading list. [llms.txt](${SITE.website}/reading/llms.txt)`
  );
  lines.push("");

  // ----- RSS / structured feeds -----
  lines.push("## Machine-Readable Feeds");
  lines.push("");
  lines.push(`- [RSS Feed](${SITE.website}/rss.xml) — Atom/RSS feed for all posts`);
  lines.push(`- [Sitemap](${SITE.website}/sitemap-index.xml) — XML sitemap`);
  lines.push("");

  // ----- Post listing -----
  lines.push(formatPostList(listedPosts, "Blog Posts"));

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(
    `*This file is auto-generated. Append \`/llms.txt\` to any page URL on this site to get its LLM-friendly version.*`
  );

  const body = lines.join("\n");

  return new Response(body, {
    headers: {
      // text/plain so browsers render it directly; LLM crawlers read it as-is.
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
