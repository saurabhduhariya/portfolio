import type { Hobby } from './types';

// Source: resume ("Sports-Engagements" and achievements).
// TODO(content): statuses are a guess; set how often you really do each one.
export const hobbies: Hobby[] = [
  {
    name: 'competitive-programming',
    status: 'active',
    description: '1000+ problems solved on LeetCode and Codeforces',
    url: 'https://github.com/saurabhduhariya/competitive-programming',
  },
  { name: 'hackathons', status: 'active', description: 'Building something new in a weekend' },
  { name: 'chess', status: 'often', description: 'Over the board and online' },
  { name: 'cricket', status: 'often', description: 'Weekend matches with friends' },
  { name: 'table-tennis', status: 'often', description: 'Fast rallies between classes' },
];
