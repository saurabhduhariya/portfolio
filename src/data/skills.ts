import type { SkillGroup } from './types';

// TODO(content): replace with real skills. `icon` is a simple-icons slug.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript', level: 'daily' },
      { name: 'Python', icon: 'python', level: 'comfortable' },
      { name: 'C++', icon: 'cplusplus', level: 'comfortable' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: 'react', level: 'daily' },
      { name: 'Node.js', icon: 'nodedotjs', level: 'comfortable' },
      { name: 'Astro', icon: 'astro', level: 'learning' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'git', level: 'daily' },
      { name: 'Linux', icon: 'linux', level: 'daily' },
      { name: 'Neovim', icon: 'neovim', level: 'daily' },
    ],
  },
];
