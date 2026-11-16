import type { SkillGroup } from './types';

// Source: resume, "Technical Skills". `icon` is a simple-icons slug; omitted where none exists.
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C', icon: 'c' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'SQL' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'Scikit-learn', icon: 'scikitlearn' },
      { name: 'Matplotlib' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'LangGraph', icon: 'langgraph' },
      { name: 'SetFit' },
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
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'REST' },
      { name: 'WebSockets' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Pinecone' },
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
