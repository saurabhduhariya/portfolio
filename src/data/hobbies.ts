import type { Hobby } from './types';

// Source: resume ("Sports-Engagements" and achievements).
// TODO(content): `frequency` is a guess; set how often you really do each one.
export const hobbies: Hobby[] = [
  {
    name: 'coding',
    frequency: 'daily',
    description: 'Building side projects and solving problems on LeetCode and Codeforces',
    url: 'https://github.com/saurabhduhariya',
  },
  {
    name: 'hackathons',
    frequency: 'regularly',
    description: 'Shipping something new in a weekend',
  },
  { name: 'cricket', frequency: 'often', description: 'Weekend matches with friends' },
  { name: 'chess', frequency: 'often', description: 'Over the board and online' },
  { name: 'table tennis', frequency: 'sometimes', description: 'Quick rallies between classes' },
];
