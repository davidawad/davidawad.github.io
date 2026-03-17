import { BLOG_PATH } from "@/content.config";
import { type LocaleKey } from "@/i18n/config";
import { getCollection, type CollectionEntry } from "astro:content";

type GetPostsOptions = {
  draft?: boolean;
  allowedLocales?: LocaleKey[];
};

export const getLocaleFromPost = (
  post: CollectionEntry<"blog">,
  blogPath: string = BLOG_PATH
): string => {
  const relative = post.filePath
    ?.replace(blogPath, "")
    ?.replace(/^\/+/, "")
    ?.split("/")[0];
  return relative ?? "";
};

export const getPostsByLocale = async (
  locale: LocaleKey,
  { draft = true }: { draft?: boolean } = {}
): Promise<CollectionEntry<"blog">[]> => {
  const grouped = await getPostsGroupedByLocale({ draft, allowedLocales: [locale] });
  return grouped[locale] || [];
};

export const getPostsGroupedByLocale = async ({
  draft = true,
  allowedLocales = [],
}: GetPostsOptions = {}): Promise<Record<string, CollectionEntry<"blog">[]>> => {
  const posts = await getPosts({ draft, allowedLocales });
  return groupPostsByLocale(posts, { allowedLocales });
};

export const getPosts = async ({
  draft = true,
  allowedLocales = [],
}: GetPostsOptions = {}): Promise<CollectionEntry<"blog">[]> =>
  getCollection("blog", ({ filePath, data }) => {
    const locale = filePath
      ?.replace(BLOG_PATH, "")
      ?.replace(/^\/+/, "")
      ?.split("/")[0];

    return (
      (draft || !data.draft) &&
      (!allowedLocales.length || allowedLocales.includes(locale as LocaleKey))
    );
  });

export const groupPostsByLocale = (
  posts: CollectionEntry<"blog">[],
  { allowedLocales = [] }: { allowedLocales?: LocaleKey[] } = {}
): Record<string, CollectionEntry<"blog">[]> => {
  const postsByLocale = posts.reduce(
    (acc, post) => {
      const locale = getLocaleFromPost(post);
      return {
        ...acc,
        [locale]: [...(acc[locale] || []), post],
      };
    },
    {} as Record<string, CollectionEntry<"blog">[]>
  );

  if (!allowedLocales.length) return postsByLocale;

  const result: Record<string, CollectionEntry<"blog">[]> = {};
  for (const locale of allowedLocales) {
    result[locale] = postsByLocale[locale] || [];
  }
  return result;
};
