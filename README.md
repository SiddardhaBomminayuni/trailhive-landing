# TrailHive — SaaS Nature Company landing page

Pixel-matched, fully responsive build of the Figma file
*SaaS — Nature Company — Webflow Landing Page Design* (figmamarket.com).

**Stack:** React 19 · Vite · Tailwind CSS v4 · no UI or animation libraries.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Structure

```
src/
  App.jsx                    page composition
  data.js                    nav links, feature cards, partner logos, footer links
  index.css                  Tailwind + design tokens (@theme), buttons, reveal animations
  hooks/useReveal.js         IntersectionObserver scroll-reveal
  components/
    Navbar.jsx               sticky rounded header, animated mobile menu
    Hero.jsx                 "Your Ultimate Outdoor Companion"
    Features.jsx             "Stay Active and Healthy" + 3 cards
    Testimonial.jsx          quote on topographic pattern + partner logos (marquee on mobile)
    Trails.jsx               "Find new trails…" + full-width photo
    PhotoTestimonial.jsx     quote over hiker photo
    Footer.jsx               links, newsletter form, legal + socials
    Reveal.jsx
public/images, public/logos  assets exported from the Figma frame
```

## Design tokens

| Token | Value |
|---|---|
| Forest (dark bg / dark text) | `#232E26` |
| Mint (light bg / light text) | `#D9EFDE` |
| Fonts | Lato 400/700 · Montserrat 300/500 ("Trusted by" line) |
| H1 | 85px / 100% / -2% |
| Desktop frame | 1440px, content width 1200px, panel radius 40px |

## Animations

- Scroll reveal (fade + slide / zoom) on every section, staggered on cards
- Hover: button lift + colour swap, image zoom, animated link underlines
- Sticky header shadow on scroll, animated hamburger → close icon, collapsing mobile menu
- Partner-logo marquee below 1024px
- All motion is disabled for users with *Reduce motion* turned on

## Responsive breakpoints

- **≥1280px** – exact Figma desktop layout
- **1024–1279px** – same layout, fluid columns and heading size
- **768–1023px** – stacked hero, 3-up feature cards, hamburger menu
- **<768px** – single column, marquee logos, 2-column footer links

## Deploy

**Vercel:** import the GitHub repo → preset *Vite* → Deploy.
**Netlify:** build `npm run build`, publish `dist`.
