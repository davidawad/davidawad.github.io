/**
 * src/pages/ar/posts/[slug]/llms.txt.ts
 *
 * Generates /ar/posts/{slug}/llms.txt for every published Arabic blog post.
 *
 * Mirrors src/pages/posts/[slug]/llms.txt.ts exactly, but scoped to the
 * "ar" locale.  Arabic post URLs live under /ar/posts/, so their LLM
 * endpoints follow the same convention: append /llms.txt to the page URL.
 *
 * Example: /ar/posts/03-18-quantum-gravity-unrenormalizable-ar/llms.txt
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
  const posts = await getPostsByLocale("ar", { draft: false });
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
