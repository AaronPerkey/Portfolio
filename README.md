# Aaron Perkey — Portfolio

A static portfolio site built with Vite + vanilla TypeScript. Cream background, DM Serif Display headings, burnt-orange accent, paper-grain overlay, and poster-card project showcases with reveal-on-scroll.

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production output → dist/
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages).

## Replace these placeholders

Before publishing, update the following TODOs in the source:

| What | Where |
|------|-------|
| Headshot image | `src/sections/about.ts` — swap the `<span>` block for a real `<img>` and add the file to `public/images/` |
| Email address | `src/sections/about.ts` + `src/sections/footer.ts` — replace `you@email.com` |
| GitHub URL | `src/sections/about.ts` + `src/sections/footer.ts` — replace `#` |
| LinkedIn URL | `src/sections/about.ts` + `src/sections/footer.ts` — replace `#` |
| Project cards (×3) | `src/data/projects.ts` — name, type, desc, tech stack, and gradient art |
| Hero sub-copy | `src/sections/hero.ts` — the paragraph under your name |
| Bio copy | `src/sections/about.ts` — the two paragraphs in `.about__bio` |
