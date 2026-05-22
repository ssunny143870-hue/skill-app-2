export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
};

export type LearningMaterial = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  thumbnail: string;
  type: 'Video' | 'PDF' | 'Roadmap' | 'Notes';
  progress: number;
  url?: string;
};
