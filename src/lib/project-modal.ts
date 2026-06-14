import type { Project } from '../data/projects';

export function initProjectModal(projects: Record<string, Project>): void {
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

    const existingVideo = document.getElementById('modalVideo');
    if (existingVideo) existingVideo.remove();

    if (p.media.endsWith('.mp4')) {
      mediaEl.style.backgroundImage = '';
      const video = document.createElement('video');
      video.id = 'modalVideo';
      video.className = 'modal-video';
      video.src = p.media;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      mediaEl.insertBefore(video, mediaEl.firstChild);
    } else {
      mediaEl.style.backgroundImage = p.media ? `url('${p.media}')` : '';
    }

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
  }

  function close(): void {
    overlay.classList.remove('open');
    const existingVideo = document.getElementById('modalVideo');
    if (existingVideo) existingVideo.remove();
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
