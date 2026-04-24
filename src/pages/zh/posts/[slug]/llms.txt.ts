/**
 * src/pages/zh/posts/[slug]/llms.txt.ts
 *
 * Generates /zh/posts/{slug}/llms.txt for every published Chinese blog post.
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
  const posts = await getPostsByLocale("zh", { draft: false });
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
