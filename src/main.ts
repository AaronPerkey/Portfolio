import './styles/tokens.css';
import './styles/base.css';
import './styles/hero.css';
import './styles/featuredProjects.css';
import './styles/skills.css';
import './styles/dot-nav.css';

import { renderHero } from './sections/hero';
import { renderWork } from './sections/featuredProjects';
import { renderSkills } from './sections/skills';
import { renderDotNav } from './sections/dot-nav';
import { initReveal } from './lib/reveal';
import { initProjectModal } from './lib/project-modal';
import { initDotNav } from './lib/dot-nav';
import { projects } from './data/projects';
import type { Project } from './data/projects';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = [renderHero(), renderWork(), renderSkills(), renderDotNav()].join('');

const projectMap: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.id, p]));

initProjectModal(projectMap);
initReveal();
initDotNav();
