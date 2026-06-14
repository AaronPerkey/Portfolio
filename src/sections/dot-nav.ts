export function renderDotNav(): string {
  return `
    <nav class="dot-nav" aria-label="Section navigation">
      <button class="dot-nav__dot" data-target="hero" aria-label="Home">
        <span class="dot-nav__label">Home</span>
      </button>
      <button class="dot-nav__dot" data-target="projects" aria-label="Featured work">
        <span class="dot-nav__label">Work</span>
      </button>
      <button class="dot-nav__dot" data-target="about" aria-label="About">
        <span class="dot-nav__label">About</span>
      </button>
      <button class="dot-nav__dot" data-target="skills" aria-label="Skills">
        <span class="dot-nav__label">Skills</span>
      </button>
      <div class="dot-nav__divider" aria-hidden="true"></div>
      <button class="dot-nav__dot dot-nav__dot--contact" data-target="about" aria-label="Contact me">
        <span class="dot-nav__label">Contact</span>
      </button>
    </nav>
  `;
}
