import { getRelativeLocalePath } from "@/i18n/utils";

/**
 * Given the unlocalized pathname (e.g. /posts/my-slug), the current locale,
 * a map of which post slugs exist per locale, and the full list of supported
 * locales, return the target URL for each locale.
 *
 * Slug conventions:
 *   - AR posts append "-ar" to the base slug
 *   - EN and ZH posts use the same base slug (no suffix)
 */
export function computeLocaleUrls(
  unLocalizedPathname: string,
  currentLocale: string,
  postSlugsByLocale: Record<string, Set<string>>,
  locales: string[]
): Record<string, string> {
  const postMatch = unLocalizedPathname.match(/^\/posts\/([^/]+)\/?$/);

  if (postMatch) {
    const currentSlug = postMatch[1];
    // AR slugs carry a "-ar" suffix; strip it to get the shared base slug
    const baseSlug =
      currentLocale === "ar" ? currentSlug.replace(/-ar$/, "") : currentSlug;

    const result: Record<string, string> = {};
    for (const locale of locales) {
      const targetSlug = locale === "ar" ? `${baseSlug}-ar` : baseSlug;
      if (postSlugsByLocale[locale]?.has(targetSlug)) {
        result[locale] = getRelativeLocalePath(locale, `/posts/${targetSlug}`);
      } else {
        result[locale] = getRelativeLocalePath(locale, "/posts");
      }
    }
    return result;
  }

  // Non-post page: simple locale prefix swap
  const result: Record<string, string> = {};
  for (const locale of locales) {
    result[locale] = getRelativeLocalePath(locale, unLocalizedPathname);
  }
  return result;
}
