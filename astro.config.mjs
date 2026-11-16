// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(decision): replace with the final domain once it is chosen (see docs/DECISIONS.md).
const SITE_URL = 'https://saurabhduhariya.github.io';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
