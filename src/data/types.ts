// Shapes for everything in src/data/. See docs/CONTENT_GUIDE.md.

export interface NavItem {
  /** Stable id, used to mark the current page. */
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

export interface Fact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  handle: string;
  host: string;
  tagline: string;
  bio: string[];
  /** neofetch-style key/value block on the About page. */
  quickFacts: Fact[];
  education: {
    school: string;
    schoolUrl: string;
    degree: string;
    coursework: string[];
  };
  /** Path under public/. The link only renders if the file exists at build time. */
  resumePath: string;
}

export interface SkillGroup {
  title: string;
  /** `icon` is a simple-icons slug, e.g. "typescript". Omit when no logo exists. */
  items: { name: string; icon?: string }[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  /** Stable, kebab-case, used in the URL. Never change once published. */
  slug: string;
  name: string;
  /** One line, under 70 characters. */
  summary: string;
  /** Short headline number, e.g. "7k+ downloads in 30 days". */
  metric?: string;
  stack: string[];
  /** 2-4 bullets for the detail page. Start with a verb. */
  highlights: string[];
  links: ProjectLink[];
  year: number;
}

export interface Achievement {
  title: string;
  date?: string;
  detail: string[];
  url?: string;
}

export interface Hobby {
  name: string;
  /** Shown systemctl-style: active (running) / active (idle) / inactive (dead). */
  status: 'active' | 'often' | 'rarely';
  description: string;
  url?: string;
}

export type ContactIcon = 'mail' | 'github' | 'linkedin';

export interface Contact {
  label: string;
  handle: string;
  /** https:// or mailto: */
  url: string;
  icon: ContactIcon;
}

export interface Credit {
  name: string;
  url: string;
  note: string;
}
