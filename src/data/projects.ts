export type StackRow = { role: string; tags: string[] };

export interface Project {
  id: string;
  name: string;
  type: string;
  glyph: string;
  gradient: string;
  tech: string[];          // poster hover chips
  github: string;          // modal: repo URL (TODO placeholder "#")
  desc: string;            // modal: description over the media
  media: string;           // modal: image/video URL ("" → dark fallback)
  stack: StackRow[];       // modal: tech grouped by role
}

// TODO: Replace all three entries with real project data
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Project One',
    type: 'Full-Stack App',
    glyph: 'I',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    tech: ['C#', '.NET', 'SQL'],
    github: '#', // TODO: replace with real GitHub repo URL
    desc: 'A placeholder description for project one. Replace with a real summary of what you built and why it matters.',
    media: '', // TODO: replace with real image/video URL; empty string = dark fallback
    stack: [
      // TODO: replace with real role-grouped tech
      { role: 'Backend', tags: ['C#', '.NET 8', 'SQL Server'] },
      { role: 'Frontend', tags: ['TypeScript', 'HTML', 'CSS'] },
    ],
  },
  {
    id: 'p2',
    name: 'Project Two',
    type: 'Systems / CLI',
    glyph: 'II',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    tech: ['Java', 'Gradle', 'Linux'],
    github: '#',
    desc: 'A placeholder description for project two. Replace with a real summary of what you built and why it matters.',
    media: '',
    stack: [
      { role: 'Language', tags: ['Java 21'] },
      { role: 'Build', tags: ['Gradle', 'GitHub Actions'] },
      { role: 'Platform', tags: ['Linux', 'Docker'] },
    ],
  },
  {
    id: 'p3',
    name: 'Project Three',
    type: 'Game / Simulation',
    glyph: 'III',
    gradient: 'linear-gradient(135deg, #C8502A 0%, #2c1810 100%)',
    tech: ['C', 'OpenGL', 'GLSL'],
    github: '#',
    desc: 'A placeholder description for project three. Replace with a real summary of what you built and why it matters.',
    media: '',
    stack: [
      { role: 'Language', tags: ['C', 'GLSL'] },
      { role: 'Graphics', tags: ['OpenGL', 'GLFW', 'GLM'] },
    ],
  },
];
