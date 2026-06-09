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

**Entry point:** `src/main.ts` — renders all sections into `#app`, then initializes interactivity (snap-scroll, reveal, modal).

**Rendering pattern:** Each `src/sections/*.ts` file exports a function that returns an HTML string. `main.ts` concatenates them and sets `innerHTML`. There is no virtual DOM or component lifecycle.

**Data layer:** `src/data/projects.ts` and `src/data/skills.ts` export typed arrays consumed by the section renderers.

**Interactivity:**
- `src/lib/snap-scroll.ts` — wheel/keyboard/touch panel navigation (one `.panel` per scroll unit)
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
- Project data: `src/data/projects.ts`
- Hero sub-copy: `src/sections/hero.ts`
- Bio copy + social links: `src/sections/about.ts`
- Footer contact/links: `src/sections/skills.ts`
- Headshot: `public/images/headshot.jpg` (referenced in `src/sections/about.ts`)
