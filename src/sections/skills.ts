import { skillGroups } from '../data/skills';

export function renderSkills(): string {
  const groups = skillGroups
    .map(
      (g) => `
    <div class="skills__group reveal">
      <p class="skills__group-label">${g.category}</p>
      <div class="skills__tags">
        ${g.items.map((item) => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');

  return `
    <section class="panel" id="skills">
      <div class="skills">
        <div class="skills__header reveal">
          <span class="skills__label">03</span>
          <h2 class="skills__title">Skills</h2>
        </div>
        <div class="skills__groups">
          ${groups}
        </div>
      </div>
    </section>
  `;
}
