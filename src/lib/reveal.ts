export function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const index = Array.from(elements).indexOf(el);
          el.style.transitionDelay = `${(index % 4) * 90}ms`;
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}
