export interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: Update items with your real skills, levels, and additional categories as needed
export const skillGroups: SkillGroup[] = [
  {
    category: 'Degrees',
    items: ['Computer Science', 'Mathematics'],
  },
  {
    category: 'Languages',
    items: ['C#', 'Java', 'C', 'C++', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Programs',
    items: ['Visual Studio', 'VS Code', 'Git', 'Linux', 'Figma'],
  },
];
