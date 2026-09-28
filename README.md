# Vyom Walia — Web3 Developer & Builder

Personal portfolio. React 19 + TypeScript + Vite + Tailwind CSS v4 + Lucide icons. No animation library: motion is CSS + IntersectionObserver.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Editing content

Everything you'd want to change lives in **`src/data/profile.ts`**:

| What | Where in `profile.ts` |
| --- | --- |
| Name, headline, intro, about paragraphs, status | `profile` |
| X / GitHub / email | `socials` (GitHub and Email buttons only appear once set) |
| Journey timeline | `journey` (add `period: 'Mar 2026'` to show dates) |
| Projects | `projects` (copy the TraceMind object to add more) |
| Tools I'm exploring | `tools` (only list tools you actually use) |
| Ecosystem + Stellar block | `ecosystem`, `stellar` |
| Currently building | `currently` |
| Build log | `buildLog` |
| Latest updates from X | `updates` (paste real posts; no scraping) |

### Things to fill in before launch

These are intentionally empty so nothing is made up. They show an **"Add details"** marker until filled:

- **TraceMind**: `role`, `stack`, `learned`, `github`, `demo`, and optionally a screenshot (put it in `public/projects/` and set `image: '/projects/tracemind.png'`).
- **Tools**: the `items` arrays in `tools`.
- **Socials**: `github`, `email`.
- **Journey dates**: `period` on each step (optional).

When you're ready to go live, set `site.showPlaceholders = false`. Empty fields are then hidden instead of marked, and the Tools section disappears entirely if it's still empty.

## SEO

Title, description, Open Graph and X card tags are in `index.html`. After deploying, add an `og:url` tag and change `og:image` / `twitter:image` to absolute URLs (e.g. `https://your-domain.com/og-image.png`) so link previews work on X.

## Deploy

Static site, no server needed. Build command `npm run build`, output directory `dist`.
Works as-is on Vercel, Netlify and Cloudflare Pages (all auto-detect Vite).

## Structure

```
src/
  data/profile.ts          all content
  components/
    Navbar.tsx, Footer.tsx, Backdrop.tsx
    sections/              Hero, HeroTerminal, About, Journey, Projects, ProjectCard,
                           Tools, Ecosystem, StellarFeature, Now, Contact
    ui/                    Section, Reveal, Button, Placeholder
    icons/                 Logo, XLogo
  hooks/                   useInView, useActiveSection, useScrolled
  lib/content.ts           empty-field helpers
```

Accessibility: semantic landmarks, skip link, visible focus rings, keyboard-operable timeline and menu (Esc closes), `prefers-reduced-motion` respected throughout.
