import { projects } from '../data/projects';

const GITHUB_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
  stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>`;

export function renderWork(): string {
  const cards = projects
    .map(
      (p) => `
    <article class="poster reveal" data-project="${p.id}" style="--gradient: ${p.gradient}">
      <div class="poster__art">
        <span class="poster__glyph">${p.glyph}</span>
      </div>
      <div class="poster__panel">
        <p class="poster__type">${p.type}</p>
        <h3 class="poster__name">${p.name}</h3>
        <p class="poster__desc">${p.desc}</p>
        <div class="poster__chips">
          ${p.tech.map((t) => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `
    )
    .join('');

  return `
    <section class="panel" id="work">
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
            ${GITHUB_ICON}
          </a>
          <p class="modal-stack-label">Tech Stack</p>
          <div class="modal-stack" id="modalStack"></div>
        </div>
        <div class="modal-media" id="modalMedia">
          <button class="modal-close" id="modalClose" aria-label="Close">&#215;</button>
          <p class="modal-desc" id="modalDesc"></p>
        </div>
      </div>
    </div>
  `;
}
