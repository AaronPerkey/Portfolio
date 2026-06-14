export function renderHero(): string {
  return `
    <section class="panel hero" id="hero">
      <img class="hero-img" src="/images/hero_background.png" alt="" aria-hidden="true" />
      <div class="vignette" aria-hidden="true"></div>
      <div class="left-fade" aria-hidden="true"></div>
      <img class="hero-figure" src="/images/aaron_cutout.png" alt="" aria-hidden="true" />
      <div class="hero__content">
        <h1 class="hero__name">
          <span class="hero__name-line">Aaron</span>
          <span class="hero__name-line hero__name-line--accent">Perkey</span>
        </h1>
        <div class="hero__bar" aria-hidden="true"></div>
        <p class="hero__sub">B.S. Computer Science &middot; Developer</p>
      </div>
      <div class="scroll-cue" aria-hidden="true">
        <span class="scroll-cue__label">Scroll</span>
        <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2,2 12,10 22,2"/>
        </svg>
      </div>
    </section>
  `;
}
