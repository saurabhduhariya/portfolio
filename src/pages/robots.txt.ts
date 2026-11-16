import type { APIRoute } from 'astro';

// Generated so the sitemap URL always follows `site` in astro.config.mjs.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site !== undefined) {
    lines.push('', `Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  }
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
