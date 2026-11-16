import type { Profile } from './types';

// Source: resume (Nov 2026). Phone number and admission number are deliberately left out.
export const profile: Profile = {
  name: 'Saurabh Prajapat',
  handle: 'saurabh',
  host: 'portfolio',
  tagline: 'CS undergrad @ IIT (ISM) Dhanbad · developer tools & AI agents',
  bio: [
    "Hi! I'm Saurabh, a Computer Science and Engineering undergrad at IIT (ISM) Dhanbad.",
    'I like building tools that other developers use every day. Switchyard, my account switcher for the Google Antigravity IDE, passed 7,000 downloads on Open VSX in its first 30 days.',
    'Lately I build AI agents with LangGraph: a Corrective RAG system that answers questions about YouTube videos, and an agent that recovers failed Razorpay payments.',
    'Away from the keyboard I play chess, cricket and table tennis.',
  ],
  quickFacts: [
    { label: 'degree', value: 'B.Tech, Computer Science & Engineering' },
    { label: 'college', value: 'IIT (ISM) Dhanbad' },
    { label: 'cgpa', value: '8.40 / 10' },
    { label: 'graduating', value: 'June 2028' },
    { label: 'location', value: 'Dhanbad, Jharkhand' },
    { label: 'focus', value: 'developer tools, AI agents, backend' },
    { label: 'problems', value: '1000+ solved (LeetCode, Codeforces)' },
  ],
  education: {
    school: 'Indian Institute of Technology (Indian School of Mines), Dhanbad',
    schoolUrl: 'https://www.iitism.ac.in/',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
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
  resumePath: '/resume/resume.pdf',
};
