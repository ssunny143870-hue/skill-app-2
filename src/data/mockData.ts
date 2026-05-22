import type { LearningMaterial, SkillCategory } from '../types';

export const categories: SkillCategory[] = [
  { id: 'programming', title: 'Programming Languages', icon: 'Code', colorClass: 'from-sky-400 to-indigo-500' },
  { id: 'web', title: 'Web Development', icon: 'LayoutGrid', colorClass: 'from-cyan-400 to-sky-600' },
  { id: 'app', title: 'App Development', icon: 'Smartphone', colorClass: 'from-fuchsia-500 to-violet-600' },
  { id: 'ai', title: 'AI & Machine Learning', icon: 'Cpu', colorClass: 'from-emerald-400 to-teal-600' },
  { id: 'data', title: 'Data Science', icon: 'BarChart3', colorClass: 'from-orange-400 to-amber-600' },
  { id: 'cloud', title: 'Cloud Computing', icon: 'Cloud', colorClass: 'from-sky-500 to-blue-700' },
  { id: 'security', title: 'Cybersecurity', icon: 'ShieldCheck', colorClass: 'from-slate-400 to-slate-600' },
  { id: 'placement', title: 'Placement Preparation', icon: 'Briefcase', colorClass: 'from-cyan-500 to-blue-700' }
];

export const trendingSkills = [
  'React',
  'Python',
  'AWS',
  'Machine Learning',
  'System Design',
  'Interview Coding'
];

export const materials: LearningMaterial[] = [
  {
    id: 'material-01',
    title: 'React.js Career Launchpad',
    description: 'Build modern UI components and prepare for frontend roles.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    duration: '3h 20m',
    thumbnail: '/assets/react-roadmap.jpg',
    type: 'Video',
    progress: 64,
    url: 'https://example.com/react-roadmap'
  },
  {
    id: 'material-02',
    title: 'Problem Solving for Placements',
    description: 'Sharpen aptitude and coding logic with curated practice sets.',
    category: 'Placement Preparation',
    difficulty: 'Beginner',
    duration: '2h 10m',
    thumbnail: '/assets/problem-solving.jpg',
    type: 'PDF',
    progress: 42,
    url: 'https://example.com/problem-solving'
  },
  {
    id: 'material-03',
    title: 'Python for Data Science',
    description: 'Learn Python fundamentals with data analysis examples.',
    category: 'Data Science',
    difficulty: 'Beginner',
    duration: '4h 45m',
    thumbnail: '/assets/python-data.jpg',
    type: 'Roadmap',
    progress: 18,
    url: 'https://example.com/python-data'
  },
  {
    id: 'material-04',
    title: 'Cloud Fundamentals with AWS',
    description: 'Understand cloud services, deployments, and career pathways.',
    category: 'Cloud Computing',
    difficulty: 'Intermediate',
    duration: '2h 55m',
    thumbnail: '/assets/aws-cloud.jpg',
    type: 'Video',
    progress: 76,
    url: 'https://example.com/aws-cloud'
  },
  {
    id: 'material-05',
    title: 'Cybersecurity Essentials',
    description: 'Learn core protection techniques for web and cloud systems.',
    category: 'Cybersecurity',
    difficulty: 'Advanced',
    duration: '3h 10m',
    thumbnail: '/assets/cybersecurity.jpg',
    type: 'Notes',
    progress: 30,
    url: 'https://example.com/cybersecurity'
  }
];

export const roadmapSteps = [
  { title: 'HTML', subtitle: 'Foundations for modern web pages', completed: true },
  { title: 'CSS', subtitle: 'Responsive layouts and visuals', completed: true },
  { title: 'JavaScript', subtitle: 'Interactive browser applications', completed: true },
  { title: 'React', subtitle: 'Component-based UI systems', completed: false },
  { title: 'Projects', subtitle: 'Portfolio and real-world apps', completed: false }
];
