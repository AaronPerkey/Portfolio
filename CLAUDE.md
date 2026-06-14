# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server at http://localhost:5173
npm run build     # TypeScript type-check + production build → dist/
npm run preview   # Preview production build locally
```

No test runner is configured.

## Architecture

Vanilla TypeScript portfolio site built with Vite — no UI framework, no runtime dependencies.

**Entry point:** `src/main.ts` — renders all sections into `#app`, then initializes interactivity (reveal, modal). Scrolling is native (no scroll-snap).

**Rendering pattern:** Each `src/sections/*.ts` file exports a function that returns an HTML string. `main.ts` concatenates them and sets `innerHTML`. There is no virtual DOM or component lifecycle.

**Sections & page order:** Four full-screen `.panel` sections render in order — `hero.ts` → `work.ts` (Featured Projects) → `about.ts` → `skills.ts`. The contact footer is markup at the bottom of `skills.ts`'s output, pinned via CSS — there is no separate `footer.ts`. `work.ts` renders the project posters plus a single `.modal-overlay` container; `initProjectModal()` populates it from `data/projects.ts` when a poster is clicked.

**Data layer:** `src/data/projects.ts` and `src/data/skills.ts` export typed arrays consumed by the section renderers.

**Interactivity:**
- `src/lib/reveal.ts` — `IntersectionObserver`-based scroll-reveal (`.reveal` elements)
- `src/lib/project-modal.ts` — click-open/close modal for project cards

**Styles:** Per-section CSS files in `src/styles/`. Design tokens (colors, fonts) live in `src/styles/tokens.css`. Fonts are loaded via Google Fonts in `index.html`.

**Design tokens:**
- Background: `#F5F0E8` (cream)
- Accent: `#C8502A` (burnt orange)
- Text: `#0F0D0A` (dark ink)
- Fonts: DM Serif Display (headings), Outfit (body), DM Mono (code)

## Personalization TODOs

Outstanding items marked in the codebase:
- Project content: `src/data/projects.ts` — all three entries are placeholders (names, descriptions, `github` URLs, `media`, `stack`)
- Hero sub-copy: `src/sections/hero.ts`
- Contact/social links (email, LinkedIn, GitHub): placeholders in both `src/sections/about.ts` (socials row) and `src/sections/skills.ts` (footer)

Headshot is done: `public/images/headshot.jpg` exists and is referenced from `src/sections/about.ts`.
