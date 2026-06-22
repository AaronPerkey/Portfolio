import type { Project } from '../data/projects';

function createVideoElement(src: string): HTMLVideoElement {
  const video = document.createElement('video');
  video.id = 'modalMediaEl';
  video.className = 'modal-video';
  video.src = src;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  return video;
}

function createImageElement(src: string, alt: string): HTMLImageElement {
  const img = document.createElement('img');
  img.id = 'modalMediaEl';
  img.src = src;
  img.alt = alt;
  return img;
}

function renderStackHTML(stack: Project['stack']): string {
  return (stack || [])
    .map(
      (r) => `
      <div class="stack-row">
        <div class="stack-role">${r.role}</div>
        <div class="stack-tags">${r.tags.map((t) => `<span class="stack-tag">${t}</span>`).join('')}</div>
      </div>`
    )
    .join('');
}

export function initProjectModal(projects: Record<string, Project>): void {
  const overlay = document.querySelector<HTMLElement>('.modal-overlay')!;
  if (!overlay) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  let brightnessTimer = 0;

  function getEl(id: string): HTMLElement {
    return document.getElementById(id)!;
  }

  function sampleBrightness(source: HTMLVideoElement | HTMLImageElement): void {
    const btn = document.getElementById('modalClose');
    if (!btn) return;
    const sw = (source as HTMLVideoElement).videoWidth || (source as HTMLImageElement).naturalWidth;
    const sh = (source as HTMLVideoElement).videoHeight || (source as HTMLImageElement).naturalHeight;
    if (!sw || !sh) return;

    const sampleSize = 80;
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const srcX = Math.max(0, sw - sampleSize);
    try {
      ctx.drawImage(source, srcX, 0, sampleSize, sampleSize, 0, 0, sampleSize, sampleSize);
    } catch {
      return;
    }
    let data: Uint8ClampedArray;
    try {
      data = ctx.getImageData(0, 0, sampleSize, sampleSize).data;
    } catch {
      return;
    }

    let sum = 0;
    const pixelCount = data.length / 4;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    const luminance = sum / pixelCount;
    const isDark = luminance < 140;

    btn.classList.toggle('is-dark', isDark);
    btn.classList.toggle('is-light', !isDark);
  }

  function startVideoSampling(video: HTMLVideoElement): void {
    stopSampling();
    const tick = (): void => {
      if (!video.paused && !video.ended) sampleBrightness(video);
      brightnessTimer = window.setTimeout(tick, 400);
    };
    tick();
  }

  function stopSampling(): void {
    if (brightnessTimer) {
      clearTimeout(brightnessTimer);
      brightnessTimer = 0;
    }
  }

  function open(key: string): void {
    const p = projects[key];
    if (!p) return;
    getEl('modalName').textContent = p.name;
    (getEl('modalGh') as HTMLAnchorElement).href = p.github || '#';
    getEl('modalDesc').textContent = p.desc || '';
    const mediaEl = getEl('modalMedia');

    stopSampling();
    const existingMedia = document.getElementById('modalMediaEl');
    if (existingMedia) existingMedia.remove();
    mediaEl.style.backgroundImage = '';

    const btn = document.getElementById('modalClose');
    if (btn) {
      btn.classList.remove('is-dark', 'is-light');
    }

    if (p.media) {
      if (p.media.endsWith('.mp4')) {
        const video = createVideoElement(p.media);
        video.addEventListener('playing', () => startVideoSampling(video), { once: true });
        mediaEl.insertBefore(video, mediaEl.firstChild);
      } else {
        const img = createImageElement(p.media, p.name);
        img.addEventListener('load', () => sampleBrightness(img), { once: true });
        mediaEl.insertBefore(img, mediaEl.firstChild);
      }
    }

    getEl('modalStack').innerHTML = renderStackHTML(p.stack);
    overlay.classList.add('open');
  }

  function close(): void {
    overlay.classList.remove('open');
    stopSampling();
    const existingMedia = document.getElementById('modalMediaEl');
    if (existingMedia) existingMedia.remove();
    const btn = document.getElementById('modalClose');
    if (btn) btn.classList.remove('is-dark', 'is-light');
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
