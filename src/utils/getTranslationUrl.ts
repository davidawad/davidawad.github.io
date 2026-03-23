import { slug as slugger } from "github-slugger";

/**
 * Minimal interface for a post entry — only what is needed to compute
 * the URL slug. Structurally compatible with CollectionEntry<"blog"> so
 * the component can pass real posts; test code can pass plain objects.
 */
export type PostForSlug = {
  data: {
    postSlug?: string | null;
    title: string;
  };
};

/**
 * Compute the URL slug for a post, matching the logic in utils/slugify.ts:
 *   slug = postSlug ? githubSlug(postSlug) : githubSlug(title)
 *
 * We apply slugger() here so that any mixed-case or special characters in
 * the raw frontmatter value are normalised the same way as the URL.
 */
export function computePostSlug(post: PostForSlug): string {
  return post.data.postSlug
    ? slugger(post.data.postSlug)
    : slugger(post.data.title);
}

/**
 * Given the current page pathname and active locale, return the URL for the
 * same content in the other locale.
 *
 * Rules
 * ─────
 * • Post pages  — Arabic URL slug = English URL slug + "-ar" (convention).
 *   We match by comparing *computed* (slugger-normalised) slugs on both sides
 *   so that mixed-case postSlug frontmatter values are handled correctly.
 *   Falls back to the other locale's blog listing when no translation exists.
 *
 * • Non-post pages — simply toggle the "/ar" prefix.
 */
export function getTranslationUrl(
  pathname: string,
  currentLocale: "en" | "ar",
  enPosts: PostForSlug[],
  arPosts: PostForSlug[]
): string {
  if (!pathname.includes("/posts/")) {
    // Non-post page: toggle the /ar locale prefix
    if (currentLocale === "ar") {
      return pathname.replace(/^\/ar/, "") || "/";
    }
    return `/ar${pathname}`;
  }

  if (currentLocale === "ar") {
    // Currently on an Arabic post — navigate to the English counterpart
    const arSlug = pathname.split("/ar/posts/")[1]?.replace(/\/$/, "");
    if (!arSlug) return "/posts";

    // Arabic slug convention: <englishSlug>-ar
    const expectedEnSlug = arSlug.replace(/-ar$/, "");
    const enPost = enPosts.find(p => computePostSlug(p) === expectedEnSlug);
    return enPost ? `/posts/${computePostSlug(enPost)}` : "/posts";
  } else {
    // Currently on an English post — navigate to the Arabic counterpart
    const enSlug = pathname.split("/posts/")[1]?.replace(/\/$/, "");
    if (!enSlug) return "/ar/posts";

    const expectedArSlug = `${enSlug}-ar`;
    // Find the AR post whose *computed* slug matches (handles mixed-case postSlugs)
    const arPost = arPosts.find(p => computePostSlug(p) === expectedArSlug);
    return arPost ? `/ar/posts/${computePostSlug(arPost)}` : "/ar/posts";
  }
}
