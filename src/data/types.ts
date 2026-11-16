// Shapes for everything in src/data/. See docs/CONTENT_GUIDE.md.

export interface NavItem {
  /** Stable id, also used for the mobile tab anchor. */
  id: string;
  /** Label shown in the file tree, e.g. "about.md" or "skills/". */
  label: string;
  /** Route with trailing slash, e.g. "/skills/". */
  path: string;
  kind: 'file' | 'directory';
  /** Fake command shown in the pane header, e.g. "cat about.md". */
  command: string;
  /** Human heading for the page <h1> and <title>. */
  title: string;
  /** Meta description for the page. */
  description: string;
}

export interface Profile {
  name: string;
  handle: string;
  host: string;
  tagline: string;
  bio: string[];
  school?: { name: string; url: string; degree: string; years: string };
  location?: string;
  resumePath: string;
  quickFacts: { label: string; value: string }[];
  availability?: string;
  githubUrl: string;
}

export interface SkillGroup {
  title: string;
  items: { name: string; icon?: string; level?: 'daily' | 'comfortable' | 'learning' }[];
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  description?: string;
  stack: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  year: number;
  featured?: boolean;
}

export interface ExperienceEntry {
  hash: string;
  title: string;
  date: string;
  points: string[];
  url?: string;
}

export interface Hobby {
  name: string;
  status: 'active' | 'often' | 'rarely';
  url?: string;
  note?: string;
}

export interface Contact {
  label: string;
  handle: string;
  url: string;
  icon: string;
}
