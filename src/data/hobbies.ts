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
  { name: 'hackathons', frequency: 'often', description: 'Shipping something new in a weekend' },
  { name: 'chess', frequency: 'often', description: 'Over the board and online' },
  { name: 'cricket', frequency: 'sometimes', description: 'Weekend matches with friends' },
  { name: 'table tennis', frequency: 'sometimes', description: 'Quick rallies between classes' },
];
