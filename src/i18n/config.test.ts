import {
  localeToProfile,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALES_TO_LANG,
  type LocaleProfile,
} from "@/i18n/config";
import { describe, it, expect } from "vitest";

describe("SUPPORTED_LOCALES", () => {
  it("should have at least one supported locale", () => {
    expect(SUPPORTED_LOCALES.length).toBeGreaterThan(0);
  });

  it("should contain all keys from localeToProfile", () => {
    expect(SUPPORTED_LOCALES).toEqual(Object.keys(localeToProfile));
  });

  it("should contain valid locale profiles for all supported locales", () => {
    SUPPORTED_LOCALES.forEach(locale => {
      const profile = localeToProfile[locale];
      expect(profile).toBeDefined();
    });
  });

  it("should contain all locale keys as lowercase", () => {
    SUPPORTED_LOCALES.forEach(localeKey =>
      expect(localeKey).toBe(localeKey.toLowerCase())
    );
  });

  it("should have all locale keys compliant with BCP-47", () => {
    SUPPORTED_LOCALES.forEach(localeKey => {
      expect(() => new Intl.Locale(localeKey)).not.toThrow();
    });
  });

  it("should include 'en' as English locale", () => {
    expect(SUPPORTED_LOCALES).toContain("en");
  });

  it("should include 'ar' as Arabic locale", () => {
    expect(SUPPORTED_LOCALES).toContain("ar");
  });
});

describe("DEFAULT_LOCALE", () => {
  it("should have a default locale defined", () => {
    const defaultLocaleProfile: LocaleProfile = localeToProfile[DEFAULT_LOCALE];
    expect(defaultLocaleProfile).toBeDefined();
    expect(defaultLocaleProfile.default).toBe(true);
  });

  it("should be a supported locale", () => {
    expect(SUPPORTED_LOCALES).toContain(DEFAULT_LOCALE);
  });

  it("should be 'en'", () => {
    expect(DEFAULT_LOCALE).toBe("en");
  });
});

describe("localeToProfile", () => {
  it("should have 'en' with ltr direction", () => {
    expect(localeToProfile["en"].direction).toBe("ltr");
  });

  it("should have 'ar' with rtl direction", () => {
    expect(localeToProfile["ar"].direction).toBe("rtl");
  });

  it("each profile should have required fields", () => {
    SUPPORTED_LOCALES.forEach(locale => {
      const profile = localeToProfile[locale];
      expect(profile.name).toBeDefined();
      expect(profile.messages).toBeDefined();
      expect(profile.langTag).toBeDefined();
      expect(profile.direction).toBeDefined();
      expect(profile.googleFontName).toBeDefined();
    });
  });
});

describe("LOCALES_TO_LANG", () => {
  it("should map each locale to its langTag", () => {
    SUPPORTED_LOCALES.forEach(locale => {
      expect(LOCALES_TO_LANG[locale]).toBe(localeToProfile[locale].langTag);
    });
  });

  it("should have all langTags compliant with BCP-47", () => {
    const langTags = Object.values(LOCALES_TO_LANG);
    langTags.forEach(langTag => {
      expect(() => new Intl.Locale(langTag)).not.toThrow();
    });
  });

  it("should map 'en' to 'en-EN'", () => {
    expect(LOCALES_TO_LANG["en"]).toBe("en-EN");
  });

  it("should map 'ar' to 'ar-EG'", () => {
    expect(LOCALES_TO_LANG["ar"]).toBe("ar-EG");
  });
});
