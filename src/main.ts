import './styles/tokens.css';
import './styles/base.css';
import './styles/hero.css';
import './styles/work.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/footer.css';

import { renderHero } from './sections/hero';
import { renderWork } from './sections/work';
import { renderAbout } from './sections/about';
import { renderSkills } from './sections/skills';
import { initReveal } from './lib/reveal';
import { initSnapScroll, setModalOpen } from './lib/snap-scroll';
import { initProjectModal } from './lib/project-modal';
import { projects } from './data/projects';
import type { Project } from './data/projects';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = [renderHero(), renderWork(), renderAbout(), renderSkills()].join('');

const projectMap: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.id, p]));

initSnapScroll();
initProjectModal(projectMap, setModalOpen);
initReveal();
