const SECTION_IDS = ['hero', 'projects', 'skills'];

export function initDotNav(): void {
  const nav = document.querySelector<HTMLElement>('.dot-nav');
  if (!nav) return;

  const dots = Array.from(nav.querySelectorAll<HTMLButtonElement>('.dot-nav__dot'));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetId = dot.dataset.target;
      document.getElementById(targetId ?? '')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const navDots = dots.filter((dot) => !dot.classList.contains('dot-nav__dot--contact'));

  const sections = SECTION_IDS
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navDots.forEach((dot) => {
          dot.classList.toggle('active', dot.dataset.target === id);
        });
        nav.classList.toggle('on-light', id !== 'hero');
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}
