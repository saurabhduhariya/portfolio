import type { Profile } from './types';

// Source: resume (Nov 2026). Phone number and admission number are deliberately left out.
export const profile: Profile = {
  name: 'Saurabh Prajapat',
  handle: 'saurabh',
  host: 'portfolio',
  tagline: 'CS undergrad @ IIT (ISM) Dhanbad · developer tools & AI agents',
  bio: [
    "Hi! I'm Saurabh, a CS undergrad at IIT (ISM) Dhanbad. I build developer tools and AI agents.",
    'Off the keyboard: chess, cricket and table tennis.',
  ],
  quickFacts: [
    { label: 'college', value: 'IIT (ISM) Dhanbad' },
    { label: 'location', value: 'Dhanbad, Jharkhand' },
    { label: 'focus', value: 'developer tools, AI agents, backend' },
    { label: 'problems', value: '1000+ solved (LeetCode, Codeforces)' },
  ],
  education: {
    school: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
    schoolUrl: 'https://www.iitism.ac.in/',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    cgpa: '8.40 / 10',
    graduation: 'Expected June 2028',
    location: 'Dhanbad, Jharkhand',
    coursework: [
      'Data Structures & Algorithms',
      'Design & Analysis of Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Database Management Systems',
      'Computer Architecture & Organization',
      'Probability & Statistics',
    ],
  },
  status: 'open to internships',
  // Update the file in Drive with "Manage versions → Upload new version" so this link never changes.
  resumeUrl: 'https://drive.google.com/file/d/1KqjNzUZSqaG8jRm_KABIp0EK9hKmcjic/view?usp=sharing',
};
