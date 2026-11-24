# CLAUDE.md

Personal portfolio for Umer Khayam (Full Stack & AI Developer). Single-page Vite + React + TypeScript site.

## Commands

- `npm run dev` — dev server on http://localhost:8080
- `npm run build` — production build (must pass before committing)
- `npx tsc --noEmit -p tsconfig.app.json` — type check
- `npm run lint` — ESLint
- `npm test` — Vitest

Use npm (`package-lock.json`); the bun lockfiles were removed.

## Structure

- `src/data/portfolioData.ts` — **single source of truth** for profile, projects, experience, and skills. Edit content here; never hardcode email/phone/links in components — use `profile.*`. `profile` also drives the hero tagline, typewriter `roles`, `focus` chips, `availability`, and `careerStart` (years-experience counter). Every project needs a `domain` (one of `projectDomains`, used for the filter tabs); `link` is optional and omitted for private client work.
- `src/pages/Index.tsx` — section order. `ResumeSection` is currently disabled (commented out); if re-enabled, add `#resume` back to the Navbar links.
- `src/components/*Section.tsx` — one component per page section, anchored by `id` (`#about`, `#skills`, `#experience`, `#projects`, `#contact`).
- `src/components/SandParticleAvatar.tsx` — canvas particle avatar (GSAP-tweened repel radius). Pointer coords are mapped from rendered size to the internal `size`.
- `src/lib/downloadResume.ts` — generates the PDF resume from `portfolioData` with jsPDF.
- `src/lib/techIcons.tsx` — maps skill/tag names to icons; add entries here for new tech tags.
- `src/components/ui/` — shadcn/ui primitives plus custom animated components (`card-stack`, `background-paths`, `timeline-animation`).

## Conventions

- Styling: Tailwind with design tokens in `src/index.css` / `tailwind.config.ts` (`bg-gradient-primary`, `text-gradient-primary`, `shadow-glow`, `card-spline`, `glass`). Reuse these rather than raw colors.
- Animation: Framer Motion for UI motion; GSAP only for the avatar canvas.
- Path alias `@/` → `src/`.
- **Light theme only** — the owner does not want a dark theme. `ThemeProvider` in `App.tsx` forces `light`; don't add dark tokens or a theme toggle.
- `.spotlight` class + `useSpotlight()` (in `Index.tsx`) gives cards a cursor-following glow. `CommandMenu` (Ctrl/⌘K) is opened from anywhere via `openCommandMenu()` in `src/lib/commandMenu.ts`.
- No Lovable branding or `lovable-*` packages — keep it that way.
