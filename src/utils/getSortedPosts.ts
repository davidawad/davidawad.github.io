/// <reference types="astro/client" />
import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"blog">[], lang: 'en' | 'ar' = 'en') =>
  posts
    .filter(post => {
      const isArabicPost = post.slug.startsWith('ar/');
      return lang === 'ar' ? isArabicPost : !isArabicPost;
    })
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );

export default getSortedPosts;
