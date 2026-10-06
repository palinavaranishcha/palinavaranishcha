# Plan: Outstanding work vs. requirements

Compared the artist's requirements against the current implementation.
Everything that is already correct is marked ✅. Items below are the gaps.

---

## 1. Navigation — replace top nav with left sidebar

**Required:** A persistent left sidebar containing:
- Logo / icon at the very top — clicking it returns to the main page
- Links: Collections · Available · About · Contact
- "Work" is NOT listed; the logo is the home link

**Current:** Horizontal top nav (Header.tsx) with Work · Collections · About · Contact. "Available" is missing from the nav.

**What to do:**
- Rewrite `Header.tsx` into a left sidebar component (or rename to `Sidebar.tsx`)
- Remove "Work" link; keep only logo + Collections, Available, About, Contact
- Change the overall page layout: `App.tsx` / CSS must switch from a stacked layout to a two-column grid where the sidebar is fixed on the left and the main content fills the right
- Update all responsive breakpoints — sidebar collapses to a top bar or hamburger on mobile

---

## 2. About page — layout and carousel

**Required:**
- Artist name in large letters at the very top (full-width, above the two columns)
- Left column: text
- Right column: large photo
- Bottom of page (below both columns): full-width photo carousel with left/right arrow buttons and smooth transitions

**Current:**
- Name is inside the right column (text column)
- Photo is on the LEFT, text on the RIGHT — reversed
- Carousel is embedded inside the photo column at top, not at the bottom

**What to do in `About.tsx`:**
1. Move `<h1>Palina Varanishcha</h1>` above the two-column grid (full-width)
2. Swap column order: text left, photo right
3. Remove carousel from the photo column; replace with a single static image
4. Add a new full-width section at the bottom with the arrow carousel (prev ← / next → arrows on either side, smooth CSS transition)

---

## 3. Contact page — copy and email address

**Required heading:** "Contact me"
**Required body copy:**
> For any enquiries, commissions or collaborations, click the link below to drop me an email and I'll get back to you as soon as I can. Thank you!

**Required email:** `palinavaranishcha@gmail.com` (shown as text AND as a `mailto:` link)
**Also:** Instagram link (already present ✅)

**Current issues:**
- Heading is "Let's work together" ❌
- Body copy doesn't match ❌
- Email is `palinavarani@gmail.com` — missing letters ❌

**What to do in `Contact.tsx`:** Update heading, copy, and both occurrences of the email address.

---

## 4. Available page — painting list + form field

**Required:**
- A list of all available paintings (title / size / availability label) before the form
- Form fields: **email address** + painting title selection (dropdown)

**Current:**
- No listing of available paintings — just the form
- Form has "Your name" + "Message" fields instead of an email field

**What to do in `Available.tsx`:**
1. Add a painting list above the form: each entry shows title, dimensions, and an "Available" badge
2. Replace the "name" input with an "email" input (`type="email"`, required)
3. Remove the "message" textarea — keep the form minimal: email + painting select + submit

---

## 5. Painting detail — multiple photos (future)

**Required:** Clicking a painting opens a page with "one or more photos".
**Current:** Single photo only.

Low priority — leave until the artist provides additional angles for individual paintings. The data model (`Painting`) would need a `photos: string[]` field replacing `src: string`.

---

## Already correct ✅

- Main page: large visual, artist name, short description, link to paintings
- Collections: clickable cards, collection page with name + description + painting grid, caption with title/size/availability, links to painting detail
- Painting detail page: image, title, dimensions, collection link, purchase button
- Available: mailto flow, pre-selection via `?painting=<id>`, correct recipient email in the mailto
- Instagram link on Contact
- Footer navigation
- Responsive breakpoints at 900 px and 600 px
