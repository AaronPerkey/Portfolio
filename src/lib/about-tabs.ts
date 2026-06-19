export function initAboutTabs(): void {
  const tabList = document.querySelector<HTMLElement>('#about [role="tablist"]');
  if (!tabList) return;

  const tabs = Array.from(tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]'));

  function activateTab(tab: HTMLButtonElement): void {
    if (tab.getAttribute('aria-selected') === 'true') return;

    tabs.forEach((t) => {
      t.setAttribute('aria-selected', 'false');
      t.tabIndex = -1;
      const panelId = t.getAttribute('aria-controls');
      if (panelId) {
        const panel = document.getElementById(panelId);
        if (panel) panel.hidden = true;
      }
    });

    tab.setAttribute('aria-selected', 'true');
    tab.tabIndex = 0;

    const panelId = tab.getAttribute('aria-controls');
    if (panelId) {
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.hidden = false;
        void panel.offsetHeight;
      }
    }

    const img = document.querySelector<HTMLImageElement>('.about__photo img');
    if (img) {
      const photo = tab.dataset.photo;
      const pos = tab.dataset.pos;
      if (photo) img.src = photo;
      if (pos) img.style.objectPosition = pos;
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', (e: KeyboardEvent) => {
      const idx = tabs.indexOf(tab);
      let next: HTMLButtonElement | null = null;

      if (e.key === 'ArrowRight') {
        next = tabs[(idx + 1) % tabs.length];
      } else if (e.key === 'ArrowLeft') {
        next = tabs[(idx - 1 + tabs.length) % tabs.length];
      } else if (e.key === 'Home') {
        next = tabs[0];
      } else if (e.key === 'End') {
        next = tabs[tabs.length - 1];
      }

      if (next) {
        e.preventDefault();
        next.focus();
        activateTab(next);
      }
    });
  });
}
