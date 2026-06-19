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
        <div class="about__grid">

          <div class="about__left reveal">
            <div class="about__photo">
              <img src="/images/aboutme_pro.png" alt="Aaron Perkey" style="object-position: center top" />
            </div>
            <div class="socials">
              <a href="mailto:aarontperkey@gmail.com" aria-label="Email" title="Email">${EMAIL_ICON}</a>
              <a href="https://www.linkedin.com/in/aaronperkey1/" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${LINKEDIN_ICON}</a>
              <a href="https://github.com/AaronPerkey" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">${GITHUB_ICON}</a>
            </div>
          </div>

          <div class="about__right reveal">
            <div class="about__intro">
              <h3 class="about__name">Aaron Perkey</h3>
            </div>

            <div class="about__tabs">
              <div class="about__tabs-nav" role="tablist" aria-label="About sections">
                <button
                  role="tab"
                  id="tab-btn-professional"
                  aria-selected="true"
                  aria-controls="tab-professional"
                  class="about__tab-btn"
                  tabindex="0"
                  data-photo="/images/aboutme_pro.png"
                  data-pos="center top"
                >PROFESSIONAL</button>
                <button
                  role="tab"
                  id="tab-btn-how-i-work"
                  aria-selected="false"
                  aria-controls="tab-how-i-work"
                  class="about__tab-btn"
                  tabindex="-1"
                  data-photo="/images/aboutme_pro.png"
                  data-pos="center top"
                >HOW I WORK</button>
                <button
                  role="tab"
                  id="tab-btn-hobbies"
                  aria-selected="false"
                  aria-controls="tab-hobbies"
                  class="about__tab-btn"
                  tabindex="-1"
                  data-photo="/images/aboutme_hobbies.png"
                  data-pos="right center"
                >HOBBIES</button>
              </div>

              <div class="about__tab-panels">
                <div
                  role="tabpanel"
                  id="tab-professional"
                  aria-labelledby="tab-btn-professional"
                  class="about__tab-panel"
                >
                  <p>
                    I'm a Computer Science grad who works on full-stack and backend problems. 
                    Most recently I built a warranty management system that tracks data across thousands of semi-truck parts. 
                    That kind of project lives or dies on data integrity and clean architecture, so that's where I put my attention. 
                    I aim to write code that is organized and holds up to the test of time.
                  </p>
                </div>
                <div
                  role="tabpanel"
                  id="tab-how-i-work"
                  aria-labelledby="tab-btn-how-i-work"
                  class="about__tab-panel"
                  hidden
                >
                  <p>
                    I like to keep things simple, organized, and intentional. I start by understanding the problem, then work in small, 
                    testable increments so nothing gets ahead of itself. I keep my work structured and easy to follow, and I care about 
                    clean abstractions, clear naming, and code that still makes sense months later. I'm comfortable working on my own, 
                    but I flag things early when they might affect the team.
                  </p>
                </div>
                <div
                  role="tabpanel"
                  id="tab-hobbies"
                  aria-labelledby="tab-btn-hobbies"
                  class="about__tab-panel"
                  hidden
                >
                  <p>
                  Gaming has always been my main way to unwind, whether I'm chasing objectives solo or playing something with friends. Outside of that, I'm usually out on a trail or playing with my dog.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
