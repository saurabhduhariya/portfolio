import type { NavItem } from './types';

// Order here is the order in the file tree and for j/k navigation.
export const navItems: NavItem[] = [
  {
    id: 'about',
    label: 'about.md',
    path: '/',
    kind: 'file',
    command: 'cat about.md',
    title: 'About me',
    description:
      'Saurabh Prajapat, CS undergrad at IIT (ISM) Dhanbad who builds developer tools and AI agents.',
  },
  {
    id: 'skills',
    label: 'skills/',
    path: '/skills/',
    kind: 'directory',
    command: 'ls skills/',
    title: 'Skills',
    description: 'Languages, frameworks, databases and tools I work with.',
  },
  {
    id: 'projects',
    label: 'projects/',
    path: '/projects/',
    kind: 'directory',
    command: 'ls projects/',
    title: 'Projects',
    description: 'Switchyard, TubeTalk, Clawback and other things I have built.',
  },
  {
    id: 'achievements',
    label: 'achievements.log',
    path: '/achievements/',
    kind: 'file',
    command: 'git log achievements.log',
    title: 'Achievements',
    description: 'Hackathon wins, downloads, competitive programming and hackathons I joined.',
  },
  {
    id: 'hobbies',
    label: 'hobbies/',
    path: '/hobbies/',
    kind: 'directory',
    command: 'systemctl status hobbies',
    title: 'Hobbies',
    description: 'What I do when I am not coding.',
  },
  {
    id: 'contact',
    label: 'contact/',
    path: '/contact/',
    kind: 'directory',
    command: 'cat contact.txt',
    title: 'Get in touch',
    description: 'Email, GitHub and LinkedIn.',
  },
  {
    id: 'credits',
    label: 'credits',
    path: '/credits/',
    kind: 'file',
    command: 'cat credits',
    title: 'Credits',
    description: 'Tools, fonts and the site that inspired this one.',
  },
];
