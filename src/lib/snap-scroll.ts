const SNAP_MS = 900; // transition duration (ms) — raise for slower glide

let isModalOpen = false;
export function setModalOpen(v: boolean): void { isModalOpen = v; }

export function initSnapScroll(): void {
  const panels = Array.from(document.querySelectorAll<HTMLElement>('.panel'));
  let current = 0;
  let animating = false;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function goTo(index: number): void {
    index = Math.max(0, Math.min(panels.length - 1, index));
    const startY = window.scrollY;
    const targetY = panels[index].offsetTop;
    const dist = targetY - startY;
    if (Math.abs(dist) < 2) { current = index; return; }
    animating = true;
    current = index;
    const start = performance.now();
    function step(now: number): void {
      const t = Math.min(1, (now - start) / SNAP_MS);
      window.scrollTo(0, startY + dist * easeInOutCubic(t));
      if (t < 1) requestAnimationFrame(step); else animating = false;
    }
    requestAnimationFrame(step);
  }

  window.addEventListener('wheel', (e) => {
    if (isModalOpen) return; // allow native scroll inside the modal
    e.preventDefault();
    if (animating) return;
    if (e.deltaY > 8) goTo(current + 1);
    else if (e.deltaY < -8) goTo(current - 1);
  }, { passive: false });

  window.addEventListener('keydown', (e) => {
    if (isModalOpen || animating) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); goTo(current + 1); }
    else if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); goTo(current - 1); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(panels.length - 1); }
  });

  let touchStartY: number | null = null;
  window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (isModalOpen) return; // allow touch scroll inside the modal
    e.preventDefault();
  }, { passive: false });
  window.addEventListener('touchend', (e) => {
    if (animating || touchStartY === null || isModalOpen) return;
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (dy > 40) goTo(current + 1);
    else if (dy < -40) goTo(current - 1);
    touchStartY = null;
  });

  // hero CTA anchors animate to their target panel
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!.slice(1);
      const idx = panels.findIndex(
        (p) => p.id === id || p.querySelector('#' + CSS.escape(id))
      );
      if (idx >= 0) { e.preventDefault(); goTo(idx); }
    });
  });

  window.addEventListener('resize', () => {
    if (!animating) window.scrollTo(0, panels[current].offsetTop);
  });
}
