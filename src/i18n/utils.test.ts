import {
  DEFAULT_LOCALE,
  localeToProfile,
  SUPPORTED_LOCALES,
  type LocaleKey,
} from "@/i18n/config";
import { UnsupportedLocale } from "@/i18n/errors";
import {
  buildPrefix,
  getLocaleInfo,
  getLocaleMsgs,
  getRelativeLocalePath,
  getSlugWithoutLocale,
  isLocaleKey,
  stripBaseAndLocale,
  translateFor,
} from "@/i18n/utils";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/i18n/config", async importOriginal => {
  const original = await importOriginal<typeof import("@/i18n/config")>();
  return {
    ...original,
    localeToProfile: {
      en: {
        name: "English",
        langTag: "en-EN",
        googleFontName: "IBM+Plex+Mono",
        messages: {
          home: "Home",
          pageWithNo: "Page {no}",
        },
        direction: "ltr",
        default: true,
      },
      ar: {
        name: "العربية",
        langTag: "ar-EG",
        googleFontName: "Cairo",
        messages: {
          home: "الصفحة الرئيسية",
          pageWithNo: "صفحة رقم {no}",
        },
        direction: "rtl",
      },
    },
    SUPPORTED_LOCALES: ["en", "ar"],
    DEFAULT_LOCALE: "en",
  };
});

describe("translateFor", () => {
  it("should throw error if no locale is provided", () => {
    expect(() => translateFor(undefined)).toThrow(UnsupportedLocale);
  });

  it("should throw error for unsupported locale", () => {
    expect(() => translateFor("fr")).toThrow(UnsupportedLocale);
  });

  it("should return a function that translates a key for English locale", () => {
    const translate = translateFor("en");
    expect(translate("home")).toBe("Home");
  });

  it("should return a function that translates a key for Arabic locale", () => {
    const translate = translateFor("ar");
    expect(translate("home")).toBe("الصفحة الرئيسية");
  });

  it("should substitute placeholders in the translation", () => {
    const translate = translateFor("en");
    const translation = translate("pageWithNo", { no: "1" });
    expect(translation).toBe("Page 1");
  });

  it("should substitute placeholders in Arabic translation", () => {
    const translate = translateFor("ar");
    const translation = translate("pageWithNo", { no: "١" });
    expect(translation).toBe("صفحة رقم ١");
  });
});

describe("getLocaleMsgs", () => {
  it("should return messages for a supported locale", () => {
    const locale = "en" as LocaleKey;
    expect(getLocaleMsgs(locale, getLocaleInfo)).toEqual(
      localeToProfile[locale].messages
    );
  });

  it("should throw an error for an unsupported locale", () => {
    const locale = "fr" as LocaleKey;
    expect(() => getLocaleMsgs(locale)).toThrow(UnsupportedLocale);
  });
});

describe("isLocaleKey", () => {
  it("should return true for supported locales", () => {
    SUPPORTED_LOCALES.forEach(locale => {
      expect(isLocaleKey(locale)).toBe(true);
    });
  });

  it("should return false for unsupported locales", () => {
    expect(isLocaleKey("fr")).toBe(false);
    expect(isLocaleKey("zh")).toBe(false);
  });

  it("should return false for undefined", () => {
    expect(isLocaleKey(undefined)).toBe(false);
  });
});

describe("getLocaleInfo", () => {
  it("should return the locale profile for a supported locale", () => {
    const locale = SUPPORTED_LOCALES[0];
    expect(getLocaleInfo(locale)).toEqual(localeToProfile[locale]);
  });

  it("should return rtl direction for Arabic", () => {
    expect(getLocaleInfo("ar").direction).toBe("rtl");
  });

  it("should throw error for an unsupported locale", () => {
    expect(() => getLocaleInfo("fr")).toThrowError(UnsupportedLocale);
  });

  it("should throw if no locale is provided", () => {
    expect(() => getLocaleInfo(undefined)).toThrowError(UnsupportedLocale);
  });
});

describe("getRelativeLocalePath", () => {
  it("should return the correct localized path for the default locale", () => {
    const path = getRelativeLocalePath(DEFAULT_LOCALE, "/posts/1");
    expect(path).toBe("/posts/1");
  });

  it("should return the correct localized path for Arabic", () => {
    const path = getRelativeLocalePath("ar", "/posts/1");
    expect(path).toBe("/ar/posts/1");
  });

  it("should add a trailing slash", () => {
    const pathWithSlash = getRelativeLocalePath("ar", "/posts/1/");
    expect(pathWithSlash).toBe("/ar/posts/1/");
  });

  it("should not contain a trailing slash", () => {
    const pathWithoutSlash = getRelativeLocalePath("ar", "/posts/1");
    expect(pathWithoutSlash).toBe("/ar/posts/1");
  });

  it("should throw an error for an unsupported locale", () => {
    expect(() => getRelativeLocalePath("fr", "/posts/1")).toThrow();
  });

  it("should not remove trailing slash for root path '/'", () => {
    const _isLocaleKey = (_locale?: string): _locale is LocaleKey => true;
    expect(
      getRelativeLocalePath(DEFAULT_LOCALE, "/", { _isLocaleKey })
    ).toBe("/");
  });

  it("should return '/' if no path supplied for default locale", () => {
    expect(getRelativeLocalePath(DEFAULT_LOCALE, undefined)).toBe("/");
  });
});

describe("getSlugWithoutLocale", () => {
  it("should remove the locale prefix from Arabic slug", () => {
    expect(getSlugWithoutLocale("ar/my-post")).toBe("my-post");
  });

  it("should return the original slug if no locale prefix is present", () => {
    expect(getSlugWithoutLocale("my-post")).toBe("my-post");
  });

  it("should handle slugs with multiple slashes", () => {
    expect(getSlugWithoutLocale("ar/category/my-post")).toBe(
      "category/my-post"
    );
  });

  it("should not remove parts of the slug that look like a locale but aren't", () => {
    expect(getSlugWithoutLocale("not-a-locale/my-post")).toBe(
      "not-a-locale/my-post"
    );
  });

  it("should return original slug for English posts (default locale)", () => {
    expect(getSlugWithoutLocale("en/my-post")).toBe("my-post");
  });
});

describe("stripBaseAndLocale", () => {
  it("should throw error for unsupported locale", () => {
    expect(() => stripBaseAndLocale("fr", "/posts/1")).toThrowError(
      UnsupportedLocale
    );
  });

  it("should throw error for undefined locale", () => {
    expect(() => stripBaseAndLocale(undefined, "/posts/1")).toThrowError(
      UnsupportedLocale
    );
  });

  describe("for '/' as Base URL", () => {
    describe("for default locale (en)", () => {
      it("return '/' for path '/'", () => {
        expect(stripBaseAndLocale(DEFAULT_LOCALE, "/")).toBe("/");
      });

      it("return '/posts/1'", () => {
        expect(stripBaseAndLocale(DEFAULT_LOCALE, "/posts/1")).toBe("/posts/1");
      });

      it("appends trailing slash if path has it", () => {
        expect(stripBaseAndLocale(DEFAULT_LOCALE, "/posts/1/")).toBe("/posts/1/");
      });
    });

    describe("for Arabic locale", () => {
      it("return '/' for path '/ar'", () => {
        expect(stripBaseAndLocale("ar", "/ar")).toBe("/");
      });

      it("return '/posts/1' for path '/ar/posts/1'", () => {
        expect(stripBaseAndLocale("ar", "/ar/posts/1")).toBe("/posts/1");
      });

      it("appends trailing slash if path has it", () => {
        expect(stripBaseAndLocale("ar", "/ar/posts/1/")).toBe("/posts/1/");
      });
    });
  });
});

describe("buildPrefix", () => {
  describe("for root '/' as Base URL", () => {
    it("should return '/' for default locale 'en'", () => {
      expect(buildPrefix(DEFAULT_LOCALE, DEFAULT_LOCALE, "/")).toBe("/");
    });

    it("should return '/ar' for Arabic locale", () => {
      expect(buildPrefix("ar" as LocaleKey, DEFAULT_LOCALE, "/")).toBe("/ar");
    });
  });

  describe("for '/davidawad-blog' as Base URL", () => {
    it("should return '/davidawad-blog' for default locale 'en'", () => {
      expect(buildPrefix(DEFAULT_LOCALE, DEFAULT_LOCALE, "/davidawad-blog")).toBe(
        "/davidawad-blog"
      );
    });

    it("should return '/davidawad-blog/ar' for Arabic locale", () => {
      expect(
        buildPrefix("ar" as LocaleKey, DEFAULT_LOCALE, "/davidawad-blog")
      ).toBe("/davidawad-blog/ar");
    });
  });
});
