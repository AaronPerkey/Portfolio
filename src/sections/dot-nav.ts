export function renderDotNav(): string {
  return `
    <nav class="dot-nav" aria-label="Section navigation">
      <button class="dot-nav__dot" data-target="hero" aria-label="Home">
        <span class="dot-nav__dot-inner"></span>
        <span class="dot-nav__label">Home</span>
      </button>
      <button class="dot-nav__dot" data-target="projects" aria-label="Featured Projects">
        <span class="dot-nav__dot-inner"></span>
        <span class="dot-nav__label">Featured Projects</span>
      </button>
      <button class="dot-nav__dot" data-target="skills" aria-label="Skills">
        <span class="dot-nav__dot-inner"></span>
        <span class="dot-nav__label">Skills</span>
      </button>
      <div class="dot-nav__divider" aria-hidden="true"></div>
      <button class="dot-nav__dot dot-nav__dot--contact" data-target="hero" aria-label="Contact me">
        <span class="dot-nav__dot-inner"></span>
        <span class="dot-nav__label">Contact</span>
      </button>
    </nav>
  `;
}
