# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tom Beckenham's personal site — a single-page React app (`src/App.tsx`) presenting his work as a technical founder building OpenStory. Static Vite build, no backend. Deployed as a static site.

## Commands

- `bun install` — install deps (lockfile is `bun.lock`)
- `bun run dev` — Vite dev server with HMR (check `localhost:5173` before starting; it's often already running)
- `bun run build` — `tsc -b && vite build` (type-check then bundle to `dist/`)
- `bun run lint` — ESLint across the repo
- `bun run preview` — serve the built `dist/` locally
- `bun tsgo --noEmit` — fast standalone type-check (preferred over `tsc --noEmit`)

## Architecture

**Single-file page.** `src/App.tsx` renders the entire site: hero + five anchored sections (`§01 Now`, `§02 OSS`, `§03 Writing`, `§04 Previously`, `§05 Contact`) plus a sticky top nav and status-line footer. Helper components (`SectionHeading`, `PipelineNode`, `Wire`, `Arrow`, `Github`, `OpenStoryMark`) live at the bottom of the same file. If you add a new section, keep this structure — don't fragment into per-section files unless it grows substantially.

**Animations.** GSAP + ScrollTrigger (registered in `App.tsx`). The convention is:
- Mark any element that should fade/slide in with `data-reveal`.
- The hero reveal fires on mount; each section ref (`nowRef`, `ossRef`, etc.) gets a ScrollTrigger that replays its `[data-reveal]` children when scrolled into view.
- New sections need a ref + an entry in the `sections` array inside the scroll `useEffect`.

**Design system — `src/App.css`.** Hand-written CSS, no Tailwind, no component library. Tokens live on `:root`:
- Palette: graphite bg (`--bg`, `--bg-lift`, `--bg-paper`), warm off-white fg (`--fg`, `--fg-mid`, `--fg-mute`), hairline borders (`--hair`, `--hair-bright`), **single accent `--peach` (#e8937a)** plus secondary `--cyan`. Don't introduce new accent colors — peach is the only highlight.
- Type: `--display` (Instrument Serif), `--serif` (Fraunces, body), `--mono` (JetBrains Mono, for `.mono` labels/kickers). Loaded via `<link>` in `index.html`.
- Reusable classes: `.mono`, `.mono-accent`, `.mute`, `.em-peach`, `.underline-peach`, `.link-arrow`, `.btn` / `.btn-primary`, `.sect-head` / `.sect-index` / `.sect-title` / `.sect-rule`, `.card`, `.stat-row`. Prefer composing these over writing new styles.
- Responsive breakpoint is a single `@media (max-width: 900px)` block at the bottom of `App.css`.

**Indentation.** `App.tsx` and `App.css` use **tabs**, not spaces. Match the surrounding file.

## Conventions

- Real Bun is the package manager (`bun.lock`), but the dev server and bundler are **Vite** — don't try to replace Vite with `Bun.serve()`. The generic Bun rules in `.cursor/rules/` do not override this.
- Images live in `src/assets/images/` and are imported as ES modules (Vite handles hashing).
- Icon SVGs are inline React components in `App.tsx` (`Arrow`, `Github`, `OpenStoryMark`) — keep new icons in this style rather than pulling an icon library.
- ESLint config (`eslint.config.js`) extends `typescript-eslint/recommended`, `react-hooks`, and `react-refresh/vite`. `tsconfig.app.json` has `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` enabled.
