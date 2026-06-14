export interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: Update items with your real skills, levels, and additional categories as needed
export const skillGroups: SkillGroup[] = [
  {
    category: 'Degrees',
    items: ['B.S. Computer Science', 'Minor in Mathematics'],
  },
{
  category: 'Languages',
  items: ['TypeScript', 'Java', 'C#', 'C', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Racket', 'Assembly'],
},
{
  category: 'Frameworks & Libraries',
  items: ['React', '.NET', 'Angular', 'Electron'],
},
{
  category: 'Tools & Platforms',
  items: ['Claude', 'Claude Code', 'ChatGPT', 'Unity', 'GitHub', 'Docker', 'Visual Studio', 'VS Code', 'Eclipse', 'SQL Server'],
},
{
  category: 'Concepts',
  items: ['Object oriented design', 'Backend', 'Agile', 'Unit testing', 'Large scale development', 'System maintenance'],
},
];
