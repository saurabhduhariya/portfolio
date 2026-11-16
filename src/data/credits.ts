import type { Credit } from './types';

export const inspiration: Credit = {
  name: 'crypticsaiyan.me',
  url: 'https://crypticsaiyan.me/',
  note: 'Rahul Joshi’s portfolio gave me the split-pane, file-tree idea. No code or content was copied.',
};

export const credits: Credit[] = [
  { name: 'Astro', url: 'https://astro.build/', note: 'static site framework' },
  { name: 'Preact', url: 'https://preactjs.com/', note: 'tiny interactive islands' },
  {
    name: 'JetBrains Mono',
    url: 'https://www.jetbrains.com/lp/mono/',
    note: 'the typeface, self-hosted via Fontsource',
  },
  { name: 'Gruvbox', url: 'https://github.com/morhetz/gruvbox', note: 'colour scheme by morhetz' },
  { name: 'Lucide', url: 'https://lucide.dev/', note: 'interface icons' },
  { name: 'Simple Icons', url: 'https://simpleicons.org/', note: 'technology logos' },
];
