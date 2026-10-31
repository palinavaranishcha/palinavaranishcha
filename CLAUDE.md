# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React + TypeScript portfolio website for artist Palina Varanishcha, deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/static.yml`. Vite is the build tool (`base: './'` in `vite.config.ts`) — the workflow runs `npm run build` and deploys `dist/`.

## Stack

- React 18, TypeScript, Vite
- React Router v6 with `HashRouter` (required for GitHub Pages — no server-side routing)
- Plain CSS (`css/style.css` and `css/font-awesome.min.css`, imported globally in `src/main.tsx`)

## Pages and routes

Routes are defined in `src/App.tsx`.

| Route | Component | Notes |
|-------|-----------|-------|
| `/#/` | `src/pages/Work.tsx` | Home: hero carousel of random available paintings, "Available" slider, story/about preview, collections preview, contact CTA |
| `/#/collections` | `src/pages/Collections.tsx` | Grid of all collections |
| `/#/collections/:slug` | `src/pages/CollectionDetail.tsx` | Paintings in one collection, with status dots and legend |
| `/#/paintings/:id` | `src/pages/PaintingDetail.tsx` | Single painting; shows price and mailto inquiry button only when available |
| `/#/available` | `src/pages/Available.tsx` | All available paintings, with a mailto inquiry form |
| `/#/about` | `src/pages/About.tsx` | Artist bio with photos (`artist-photo-*.jpeg`) |
| `/#/contact` | `src/pages/Contact.tsx` | Contact links |

Shared components in `src/components/`: `Header` (logo + nav: collections, available, about, contact), `Footer`, and `ScrollToTop` (scrolls to top on route change).

## CSS

`css/style.css` is the one file to edit for all visual changes. It contains the full design system: CSS variables (e.g. `--blue`, `--red`, `--grey`), base resets, layout, components, and responsive breakpoints (`@media (min-width: 901px)`, `@media (max-width: 900px)` and `@media (max-width: 600px)`).

## Data

### Paintings

Artwork images live in `public/images/paintings/` (also holds the logo and artist photos). To add a painting:
1. Place the image in `public/images/paintings/`.
2. Add an entry to the `paintings` array in `src/data/paintings.ts` with a unique `id` and `src` like `images/paintings/<file>`.
3. Increment the two-digit number in the `number` field.
4. Set `status` to `'available'`, `'temporarily-unavailable'` or `'unavailable'` (omitted = unavailable). Use the `isAvailable()` / `paintingStatus()` helpers rather than reading `status` directly.
5. Optional fields: `collection`, `colors`, `medium`, `dimensions`, `year`, `description`, `price`.

Only `'available'` paintings appear on the home page carousel/slider and the Available page, and only they show a price and inquiry button. The collection detail page shows a blue (available) / grey (temporarily unavailable) / red (unavailable) dot per painting; labels come from `STATUS_LABELS`.

Entries with id 8–24 are mock data reusing existing images — replace them with real paintings.

### Collections

Collection metadata (`slug`, `name`, `description`, `coverSrc`) lives in `src/data/collections.ts`. Each painting's `collection` field holds the slug of its collection.

## Development

```bash
npm install
npm run dev
npm run build    # tsc -b && vite build
npm run preview
```

## HashRouter note

The site uses `HashRouter` so that all routes work on GitHub Pages without a server. Links use React Router's `<Link>` and `<NavLink>` components — never bare `<a href="">` tags for internal navigation (`mailto:` and external links are fine as `<a>`). Image paths are relative (`images/...`, no leading slash) so they resolve under the GitHub Pages subpath.
