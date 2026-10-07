# Palina Varanishcha — Portfolio Website

Static portfolio website for contemporary artist Palina Varanishcha. Built with React + TypeScript + Vite. Deployed automatically to GitHub Pages on every push to `main`.

## Live site

`https://palinavaranishcha.github.io`

## Tech stack

- **React 18** — UI
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **React Router v6** — client-side routing (`HashRouter` for GitHub Pages compatibility)
- Plain CSS, imported globally in `src/main.tsx`

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/#/` | `src/pages/Work.tsx` | Home: gallery of paintings, about/contact previews |
| `/#/collections` | `src/pages/Collections.tsx` | List of collections |
| `/#/collections/:slug` | `src/pages/CollectionDetail.tsx` | Paintings in a single collection |
| `/#/paintings/:id` | `src/pages/PaintingDetail.tsx` | Single painting: details, collection link, enquiry button if available |
| `/#/available` | `src/pages/Available.tsx` | Paintings available for purchase and enquiry form (`?painting=<id>` preselects a painting) |
| `/#/about` | `src/pages/About.tsx` | Artist biography and statement |
| `/#/contact` | `src/pages/Contact.tsx` | Contact details |

## Project structure

```
├── src/
│   ├── main.tsx              # Entry point — imports CSS, wraps App in HashRouter
│   ├── App.tsx               # Route definitions
│   ├── components/
│   │   ├── Header.tsx        # Navigation with active link highlighting
│   │   ├── Footer.tsx        # Footer with nav links and copyright
│   │   └── ScrollToTop.tsx   # Resets scroll position on route change
│   ├── data/
│   │   ├── paintings.ts      # Painting list and Painting type
│   │   └── collections.ts    # Collection list and Collection type
│   └── pages/                # One component per route (see table above)
├── public/
│   └── images/
│       ├── logo.png
│       └── paintings/        # Artwork images
├── css/
│   ├── style.css             # Main stylesheet — all visual changes go here
│   └── font-awesome.min.css
├── fonts/                    # Font Awesome web fonts
├── index.html                # Vite HTML entry point
├── vite.config.ts
├── tsconfig.json
└── .github/
    └── workflows/
        └── static.yml        # Build → deploy to GitHub Pages
```

## Development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check (tsc -b) and production build → dist/
npm run preview  # preview production build locally
```

## Content

### Adding a painting

1. Place the image in `public/images/paintings/`.
2. Add an entry to the `paintings` array in `src/data/paintings.ts`:

   ```ts
   { id: 8, number: '08', title: 'Untitled VIII', src: '/images/paintings/painting-8.jpg', collection: 'first-collection' }
   ```

3. Increment the two-digit `number` field.

Fields: `id`, `number`, `title`, `src` are required. Optional: `collection` (slug of a collection), `available` (lists the painting on `/available`), `dimensions`, `description`, `price`.

### Adding a collection

Add an entry to the `collections` array in `src/data/collections.ts` (`slug`, `name`, `description`, `coverSrc`). Paintings join a collection by setting their `collection` field to its slug.

## Deployment

Pushing to `main` triggers `.github/workflows/static.yml`, which installs dependencies, runs `npm run build`, and deploys the `dist/` folder to GitHub Pages.

## CSS

`css/style.css` is the single file to edit for all visual changes. Responsive breakpoints are at `@media (max-width: 900px)` and `@media (max-width: 600px)`.

## Contact

palinavarani@gmail.com
