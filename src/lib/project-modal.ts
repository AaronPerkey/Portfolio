import type { Project } from '../data/projects';

export function initProjectModal(
  projects: Record<string, Project>,
  setModalOpen: (v: boolean) => void
): void {
  const overlay = document.querySelector<HTMLElement>('.modal-overlay')!;
  if (!overlay) return;

  function getEl(id: string): HTMLElement {
    return document.getElementById(id)!;
  }

  function open(key: string): void {
    const p = projects[key];
    if (!p) return;
    getEl('modalName').textContent = p.name;
    (getEl('modalGh') as HTMLAnchorElement).href = p.github || '#';
    getEl('modalDesc').textContent = p.desc || '';
    const mediaEl = getEl('modalMedia');
    mediaEl.style.backgroundImage = p.media ? `url('${p.media}')` : '';
    getEl('modalStack').innerHTML = (p.stack || [])
      .map(
        (r) => `
        <div class="stack-row">
          <div class="stack-role">${r.role}</div>
          <div class="stack-tags">${r.tags.map((t) => `<span class="stack-tag">${t}</span>`).join('')}</div>
        </div>`
      )
      .join('');
    overlay.classList.add('open');
    setModalOpen(true);
  }

  function close(): void {
    overlay.classList.remove('open');
    setModalOpen(false);
  }

  document.querySelectorAll<HTMLElement>('.poster[data-project]').forEach((card) => {
    card.addEventListener('click', () => open(card.dataset.project!));
  });
  getEl('modalClose').addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
