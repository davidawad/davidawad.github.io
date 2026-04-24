import { getViteConfig } from 'astro/config';
import { coverageConfigDefaults } from 'vitest/config';

export default getViteConfig(
  {
    test: {
      exclude: ["e2e/**", "node_modules/**"],
      coverage: {
        include: ['src/**/*'],
        exclude: [
          'src/assets',
          'src/content',
          'src/data',
          'src/**/types.ts',
          'src/i18n/locales',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  },
  {
    i18n: {
      locales: ['en', 'ar', 'zh'],
      defaultLocale: 'en',
    },
  }
);
