import type { SkillGroup } from './types';

// Source: resume, "Technical Skills".
// `icon`: simple-icons slug (the tile colour follows the brand colour).
// `glyph`: generic icon when there is no brand logo. `short`: tile label for long names.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C', icon: 'c' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'SQL', glyph: 'database' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'Scikit-learn', short: 'sklearn', icon: 'scikitlearn' },
      { name: 'Matplotlib', glyph: 'chart' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'LangGraph', icon: 'langgraph' },
      { name: 'SetFit', glyph: 'sparkles' },
    ],
  },
  {
    title: 'Web & Backend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Svelte', icon: 'svelte' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Tailwind CSS', short: 'Tailwind', icon: 'tailwindcss' },
      { name: 'REST', glyph: 'api' },
      { name: 'WebSockets', glyph: 'plug' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Pinecone', glyph: 'tree' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'Pytest', icon: 'pytest' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
];
