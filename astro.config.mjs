// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL, used for canonical links, Open Graph URLs, robots.txt and the sitemap.
// Cloudflare Pages sets SITE_URL in its build settings; the fallback is the live site, so local
// builds match production (see docs/DEPLOYMENT.md).
const SITE_URL = process.env.SITE_URL ?? 'https://sauduhariya.pages.dev';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
