import type { Profile } from '@/data/types';

export interface SeoInput {
  /** Page heading, e.g. "Skills". Omit for the home page. */
  pageTitle?: string;
  description: string;
  pathname: string;
  site: URL | undefined;
  profile: Profile;
}

export interface Seo {
  title: string;
  description: string;
  canonical: string | undefined;
}

export function buildSeo({ pageTitle, description, pathname, site, profile }: SeoInput): Seo {
  const title =
    pageTitle === undefined
      ? `${profile.name} · ${profile.tagline}`
      : `${pageTitle} · ${profile.name}`;
  const canonical = site === undefined ? undefined : new URL(pathname, site).href;
  return { title, description, canonical };
}

/** schema.org Person block for the home page. `sameAs` lists profile URLs (GitHub, LinkedIn). */
export function personJsonLd(profile: Profile, site: URL | undefined, sameAs: string[]): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    description: profile.tagline,
    url: site?.href,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: profile.education.school,
      url: profile.education.schoolUrl,
    },
    sameAs,
  };
  // Escape "<" so the JSON can never close the surrounding <script> tag.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
