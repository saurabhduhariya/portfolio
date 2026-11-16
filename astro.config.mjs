// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL, used for canonical links, Open Graph URLs, robots.txt and the sitemap.
// Set SITE_URL in the host's build settings once the domain is final (see docs/DEPLOYMENT.md).
// TODO(decision): replace the fallback with the real domain.
const SITE_URL = process.env.SITE_URL ?? 'https://saurabhduhariya.github.io';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
