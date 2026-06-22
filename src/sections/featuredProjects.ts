import { projects } from '../data/projects';
import { ICON_GITHUB } from '../data/icons';

export function renderWork(): string {
  const cards = projects
    .map(
      (p) => `
    <article class="poster reveal" data-project="${p.id}" style="--gradient: ${p.gradient}">
      <div class="poster__art"${p.poster ? ` style="background-image: url('${p.poster}')"` : ''}>
        ${p.poster ? '' : `<span class="poster__glyph">${p.glyph}</span>`}
      </div>
      <div class="poster__panel">
        <p class="poster__type">${p.type}</p>
        <h3 class="poster__name">${p.name}</h3>
      </div>
    </article>
  `
    )
    .join('');

  return `
    <section class="panel" id="projects">
      <div class="work">
        <div class="work__header reveal">
          <span class="work__label">01</span>
          <h2 class="work__title">Featured Projects</h2>
        </div>
        <div class="work__grid">
          ${cards}
        </div>
      </div>
    </section>

    <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modalName">
      <div class="modal-body">
        <div class="modal-info">
          <h2 class="modal-name" id="modalName"></h2>
          <a class="modal-gh" id="modalGh" href="#" target="_blank" rel="noopener"
             aria-label="GitHub repository" title="GitHub repository">
            ${ICON_GITHUB}
          </a>
          <p class="modal-stack-label">Tech Stack</p>
          <div class="modal-stack" id="modalStack"></div>
        </div>
        <div class="modal-media" id="modalMedia">
          <button class="modal-close" id="modalClose" aria-label="Close"><svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/></svg></button>
          <p class="modal-desc" id="modalDesc"></p>
        </div>
      </div>
    </div>
  `;
}
