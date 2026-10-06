# Plan: Artist portfolio — React implementation

## Current state (as of 2026-10-06)

The site was rebuilt from static HTML into **React 18 + TypeScript + Vite**, deployed to GitHub Pages via `.github/workflows/static.yml` which runs `npm run build` and deploys `dist/`.

### What exists

| Route | Component | Status |
|-------|-----------|--------|
| `/#/` | `src/pages/Work.tsx` | Done — hero, 7-painting grid, about preview, contact preview |
| `/#/about` | `src/pages/About.tsx` | Done — photo + text two-column grid, contact preview |
| `/#/contact` | `src/pages/Contact.tsx` | Done — email link |

Shared: `src/components/Header.tsx` (top nav: Work / About / Contact), `src/components/Footer.tsx`.

Routing uses `HashRouter` (required for GitHub Pages). All internal navigation uses React Router `<Link>` / `<NavLink>`.

Painting data lives in `src/data/paintings.ts` (`Painting` interface + `paintings` array). Collection data lives in `src/data/collections.ts` (`Collection` interface + `collections` array). Images live in `public/images/paintings/`.

The `Painting` type has: `id`, `number`, `title`, `src`, `collection` (slug), `available`, `dimensions`, `description`, `price`. All 7 paintings are assigned to collection `'first-collection'`.

---

## Outstanding work

### 1. Add Instagram link to Contact
Contact page has no social link yet. Add an Instagram URL (artist to supply) with an inline SVG icon, `target="_blank" rel="noopener"`.

### 2. Available / purchase page
A new `/#/available` route showing paintings marked `available: true`, with a mailto form:
- `<select>` of available painting titles, pre-selectable via `?painting=<id>` query param
- On submit, JS builds `mailto:palinavaranishcha@gmail.com?subject=...&body=...` with `encodeURIComponent` and navigates with `window.location.href`
- A short note tells visitors their mail app will open

### 5. Collections
If the artist wants to group paintings by series:
- Add a `collection` field to the `Painting` interface in `Work.tsx`
- New route `/#/collections` — grid of collection cards
- New route `/#/collections/:slug` — paintings filtered by that collection
- "Request to purchase" link on painting cards if `available: true`, pointing to `/#/available?painting=<id>`

### 6. Individual painting pages (optional)
Route `/#/paintings/:id` — large image, title, size, collection, description. Not yet needed if the current lightbox-style (clicking opens image in new tab) is acceptable.

### 7. About carousel
Currently the About page has a static two-column layout. If additional photos are provided, replace the right column with a CSS `scroll-snap` carousel and prev/next buttons.

### 8. Logo image
`Header.tsx` references `/images/paintings/logo.jpg`. Confirm this file exists and looks correct; replace with a text logo if not.

---

## Decisions carried forward

- **No Jekyll / Pages CMS** — content editing requires a code change (update `src/data/paintings.ts` and add an image to `public/`). This is acceptable for now.
- **No third-party form service** — purchase enquiries use `mailto:`.
- **Breakpoints:** `@media (max-width: 900px)` and `@media (max-width: 600px)`.
- **Painting grid:** 3 columns desktop, 2 tablet, 1 mobile.
- **Do not push to `main` without explicit approval.**
