/**
 * All translatable UI strings for the site.
 * Every locale must implement this interface fully.
 */
export interface I18nStrings {
  // Site meta
  "site.title": string;
  "site.desc": string;

  // Navigation
  home: string;
  posts: string;
  "posts.desc": string;
  about: string;
  search: string;
  "search.desc": string;
  "search.placeholder": string;
  investing: string;
  engineering: string;

  // Hero section
  "hero.title": string;
  "hero.body": string;

  // Common UI
  by: string;
  socialLinks: string;
  featured: string;
  recentPosts: string;
  allPosts: string;
  rssFeed: string;
  suggestChanges: string;
  toggleLightAndDark: string;

  // Tags
  tag: string;
  "tag.desc": string;
  tags: string;
  "tags.desc": string;

  // Archives
  archives: string;
  "archives.desc": string;

  // Table of contents
  tableOfContents: string;
  "tableOfContents.desc": string;

  // Pagination
  pages: string;
  page: string;
  pageWithNo: string;
  "pagination.prev": string;
  "pagination.next": string;

  // Navigation actions
  "navigation.goBack": string;
  "navigation.goBackHome": string;
  "navigation.backToTop": string;
  "navigation.nextPost": string;
  "navigation.prevPost": string;

  // 404
  pageNotFound: string;
  notFound: string;

  // Footer
  "footer.text": string;

  // Dates
  "date.published": string;
  "date.updated": string;
  "date.month.1": string;
  "date.month.2": string;
  "date.month.3": string;
  "date.month.4": string;
  "date.month.5": string;
  "date.month.6": string;
  "date.month.7": string;
  "date.month.8": string;
  "date.month.9": string;
  "date.month.10": string;
  "date.month.11": string;
  "date.month.12": string;

  // Share post
  "sharePost.desc": string;

  // Copy button
  copy: string;
  copied: string;

  // Accessibility
  "a11y.skipToContent": string;
  "a11y.rssFeed": string;
  "a11y.openMenu": string;
  "a11y.closeMenu": string;
  "a11y.search": string;
  "a11y.themeButtonDefaultLabel": string;
  "a11y.pagination": string;
  "a11y.breadcrumb": string;
  "a11y.languagePicker": string;
}

export type I18nKeys = keyof I18nStrings;
