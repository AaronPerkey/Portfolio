export function renderHero(): string {
  return `
    <section class="panel" id="hero">
      <div class="hero">
        <p class="hero__eyebrow">Available for work</p>
        <h1 class="hero__name">Aaron <em>Perkey</em></h1>
        <!-- TODO: replace sub-copy with your real value proposition -->
        <p class="hero__sub">
          Software engineer crafting clean, considered solutions. Focused on backend systems,
          developer tooling, and the occasional thing that renders on a screen.
        </p>
        <div class="hero__ctas">
          <a class="hero__cta hero__cta--primary" href="#work">View Work</a>
          <a class="hero__cta hero__cta--secondary" href="#contact">Get in Touch</a>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true">
        <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2,2 12,10 22,2"/>
        </svg>
      </div>
    </section>
  `;
}
