const EMAIL_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
  stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <polyline points="3,5 12,13 21,5"/>
</svg>`;

const LINKEDIN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
  stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5"/>
  <line x1="8" y1="10" x2="8" y2="17"/>
  <line x1="8" y1="6.5" x2="8" y2="7.5"/>
  <line x1="12" y1="10" x2="12" y2="17"/>
  <path d="M12 13a3 3 0 0 1 6 0v4"/>
</svg>`;

const GITHUB_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
  stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>`;

export function renderAbout(): string {
  return `
    <section class="panel" id="about">
      <div class="about">
        <div class="about__header reveal">
          <span class="about__label">02</span>
          <h2 class="about__title">About Me</h2>
        </div>
        <div class="about__body">
          <div class="about__left reveal">
            <div class="about__photo">
              <img src="/images/aboutme.png" alt="Aaron Perkey" />
            </div>
            <div class="socials">
              <a href="mailto:aarontperkey@gmail.com" aria-label="Email" title="Email">${EMAIL_ICON}</a>
              <a href="https://www.linkedin.com/in/aaronperkey1/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${LINKEDIN_ICON}</a>
              <a href="https://github.com/AaronPerkey" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${GITHUB_ICON}</a>
            </div>
          </div>
          <div class="about__bio reveal">
            <h3>Hi, I'm Aaron.</h3>
            <p>
              Computer Science graduate from the University of Nebraska who builds full-stack web applications. 
              I primarily work in C#, Python, and SQL, and have experience with React, Angular, .NET, and MySQL.
            </p>
            <p>
              As part of my senior design program, I helped design and build a web app that tracks warranty information for over 8,000 semi-truck parts. 
              I worked across the full stack and was responsible for developing new features and resolving issues throughout the platform. I enjoy projects like this, where the goal is to take a disorganized process and build something that brings structure to it.
            </p>
            <p>
              My background covers web development, database-backed applications, automation tools, and data analysis. I focus on writing clean code and building software that holds up over time.
            </p>
            <p>
              I'm interested in full-stack or backend roles where I can work on real features and continue growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
