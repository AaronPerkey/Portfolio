export type StackRow = { role: string; tags: string[] };

export interface Project {
  id: string;
  name: string;
  type: string;
  glyph: string;
  gradient: string;
  poster?: string;          // featured card: background image (overrides glyph/gradient)
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
  name: 'Glospore Sorcerer',
  type: 'Video Game',
  glyph: 'II',
  gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  poster: '/images/glowspore_poster.png',
  tech: ['Unity', 'C#', 'VR'],
  github: 'https://github.com/AaronPerkey/GlowsporeSorcerer',
  desc: 'Developed a custom virtual reality game implementing core gameplay systems, character abilities, and game logic from scratch, leveraging AI tools for research and technical reference throughout development.',
  media: '/videos/gloswspore_sorcerer_trailer.mp4',
  stack: [
    { role: 'Engine', tags: ['Unity'] },
    { role: 'Language', tags: ['C#'] },
    { role: 'IDE', tags: ['Visual Studio'] },
  ],
  },
  {
  id: 'p2',
  name: 'Warranty Management System',
  type: 'Full-Stack App',
  glyph: 'I',
  gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  poster: '/images/werner_poster.png',
  tech: ['Next.js', 'React', 'SQL Server'],
  github: '#', // TODO: replace with real GitHub repo URL
  desc: 'Built a full-stack warranty management system handling data for 8,000+ semi truck parts, leveraging AI tools for research and technical reference throughout backend and database development.',
  media: '', // TODO: replace with real image/video URL; empty string = dark fallback
  stack: [
    { role: 'Frontend', tags: ['Next.js', 'React', 'Tailwind CSS'] },
    { role: 'Backend', tags: ['Next.js API Routes', 'Prisma'] },
    { role: 'Database', tags: ['Microsoft SQL Server'] },
    { role: 'Testing', tags: ['Jest'] },
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
