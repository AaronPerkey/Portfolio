import { ICON_PYTHON, ICON_UNITY, ICON_EMAIL, ICON_LINKEDIN, ICON_GITHUB } from '../data/icons';

const HERO_CHIP_ICONS: Record<string, string> = {
  Python: ICON_PYTHON,
  Unity: ICON_UNITY,
};

const HERO_CHIPS: { label: string; icon?: string }[] = [
  { label: 'C#' },
  { label: 'Python', icon: HERO_CHIP_ICONS.Python },
  { label: 'SQL' },
  { label: 'Claude Code' },
  { label: 'Unity', icon: HERO_CHIP_ICONS.Unity },
];


export function renderHero(): string {
  return `
    <section class="panel hero" id="hero">
      <!-- Top bar: monogram, z-index 5 -->
      <div class="hero__topbar" aria-hidden="true">
        <div class="hero__monogram">
          <span class="hero__monogram-box">A<span class="hero__monogram-p">P</span></span>
          <span class="hero__monogram-name">AARON PERKEY</span>
        </div>
      </div>

      <!-- Main text column, z-index 4 -->
      <div class="hero__text">
        <p class="hero__eyebrow">Computer Science Graduate</p>
        <h1 class="hero__headline">
          <span class="hero__hl-line">Building solutions.</span>
          <span class="hero__hl-line hero__hl-accent">Solving problems.</span>
        </h1>
        <div class="hero__rule" aria-hidden="true"></div>
        <p class="hero__body">Computer Science graduate with a passion for writing clean, efficient code and building user-focused applications. Eager to contribute, learn, and grow as a software engineer.</p>
        <div class="hero__chips">
          ${HERO_CHIPS.map(c => `<span class="hero__chip">${c.icon ?? ''}${c.label}</span>`).join('')}
        </div>
        <div class="hero__socials">
          <a href="mailto:aarontperkey@gmail.com" aria-label="Email" title="Email">${ICON_EMAIL}</a>
          <a href="https://www.linkedin.com/in/aaronperkey1/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${ICON_LINKEDIN}</a>
          <a href="https://github.com/AaronPerkey" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${ICON_GITHUB}</a>
        </div>
      </div>

      <!-- Scroll indicator: centered bottom, z-index 5 -->
      <div class="hero__scroll" aria-hidden="true">
        <span class="hero__scroll-label">SCROLL</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8502A"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </div>

    </section>
  `;
}
