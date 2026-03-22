/**
 * src/pages/posts/[slug]/llms.txt.ts
 *
 * Generates /posts/{slug}/llms.txt for every published English blog post.
 *
 * Content: structured metadata header + the raw markdown body verbatim.
 * post.body is the raw markdown source from the Astro content collection —
 * no HTML rendering, no scraping, no lossy transformation.
 *
 * Example: /posts/how-does-bitcoin-work/llms.txt
 */

import type { APIContext } from "astro";
import type { CollectionEntry } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { getPostsByLocale } from "@utils/posts";
import slugify from "@utils/slugify";
import { formatPostAsMarkdown } from "@utils/llmContent";

export interface Props {
  post: CollectionEntry<"blog">;
}

export async function getStaticPaths() {
  // Only published (non-draft) English posts get an llms.txt endpoint.
  const posts = await getPostsByLocale("en", { draft: false });
  const sortedPosts = getSortedPosts(posts);

  return sortedPosts.map(post => ({
    params: { slug: slugify(post.data) },
    props: { post },
  }));
}

export async function GET({ props }: APIContext) {
  const { post } = props as Props;
  const body = formatPostAsMarkdown(post);

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
