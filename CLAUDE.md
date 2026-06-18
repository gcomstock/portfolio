# Portfolio site — context for next session

Greg Comstock's personal portfolio. Product designer who specializes in tools for software
engineers; the visual language should evoke a polished IDE/developer tool.

## Stack

- **Vite + React 18 + plain JavaScript** (no TypeScript — chosen for ease-of-evolution on a
  single-developer portfolio; safety not a concern).
- **React Router v6** for routing.
- **Framer Motion** — used **only** for cross-route page transitions (`AnimatePresence` + a
  `<PageTransition>` wrapper). Not used for parallax.
- **`react-scroll-parallax` v3** — owns all parallax (3-layer depth, see Effects).
- **MDX** (`@mdx-js/rollup` + `@mdx-js/react`) for case-study content.
- **Hosting:** GitHub Pages. Clean URLs via `public/404.html` SPA redirect; receiver script in
  `index.html`. `vite.config.js` uses `base: './'`.

## Information architecture

- `/` — Home, also serves as the Work entry page.
- `/about` — About page (intro + "How I use AI" section).
- `/work/:slug` — single template for both case studies and smaller projects. The MDX content
  differs in verbosity; layout is the same.

Header items: **Greg Comstock** (left brand, full name at all widths) · Work · About · Resume
(links to `/resume.pdf`, drop the file into `public/` later) · LinkedIn (collapses to icon on
mobile).

Footer (rich-black, darker than page): name, "San Francisco Bay Area" in mono, email + LinkedIn +
Resume links.

## Design system

All tokens in `src/styles/tokens.css` — change layout/colors/type there, propagates everywhere.

- **Type:** Geist (sans, body + titles) + Geist Mono (eyebrows, metadata, key-value pairs).
  Loaded from Google Fonts in `index.html`. Body/main titles must stay **sans** per Greg's
  direction — do NOT introduce serif display fonts even though moodboard image #2 used serif.
- **Palette:** dark IDE. Surfaces `--bg`, `--bg-elevated`, `--surface`, `--surface-2`. Accents
  `--accent-blue/purple/green/amber/pink` — used sparingly for syntax-pop and per-block
  gradients. Footer uses `--rich-black`.
- **Layout:** `--page-gutter: 24px`, `--page-max: 1800px` (deliberately wide; expect to look
  sparse on huge screens — content asset planning needs to match), `--reading-max: 720px` for
  long-form prose so it stays readable inside the wide page. 12-col grid with
  `--grid-gap: 24px` matching gutter.
- **Breakpoint:** single, `900px`. Above = desktop. Below = mobile. Tablet (768–1024) will look a
  little awkward; accepted trade-off.
- **Header height:** `--header-h: 64px` desktop / `--header-h-mobile: 48px`.

## The 3-layer parallax model (important — refined through several rounds)

1. **Back layer:** `<BgTexture>` — subtle repeating dot pattern (placeholder until Greg provides
   a real texture asset). Slow negative drift (~`-20`). **No animated gradient blobs in the
   background** — Greg ruled these out as distracting.
2. **Content layer:** body prose, normal scroll, no parallax.
3. **Front-accent layer:** `<FeatureBlock>` — the dominant content unit (image + subhead +
   description). Drifts at small positive speed (default `+6`). Half-dozen+ per case study is the
   norm. Each block has a subtle per-accent radial gradient (`::before` in `FeatureBlock.css`)
   that helps it pop. Generous top/bottom margin (`80px`) so drift doesn't collide with
   neighbors.

**Explicitly rejected** (do NOT reintroduce):
- Slanted / `rotateZ` colored panels (Greg abandoned the signature effect from his old portfolio).
- Gradient blobs in the back layer.
- The clip-path side menu from the old portfolio (new site uses the horizontal glassy header).
- A `<SlantedPanel>` component.

## Key components

- `src/components/ParallaxLayer.jsx` — the ONLY parallax primitive. Wraps `useParallax({speed})`,
  respects `prefers-reduced-motion` via `useReducedMotion` hook.
- `src/components/FeatureBlock.jsx` — image+subhead+description block with accent gradient and
  parallax drift. Props: `accent`, `speed`, `reverse`, `eyebrow`, `title`, `media`, children.
  Available in MDX without import.
- `src/components/MetaGrid.jsx` — monospace key-value row (Role / Industry / Duration / Team /
  Impact). Renders N columns from `items` array; falls to 2 on mobile.
- `src/components/Figure.jsx`, `VideoEmbed.jsx` — also available in MDX without import.
- `src/components/Header.jsx`, `Footer.jsx`, `Layout.jsx`, `BgTexture.jsx`,
  `ScrollToTop.jsx`, `PageTransition.jsx` — shell.

## Content structure

```
src/content/projects/
  <slug>/
    meta.js     ← default export: { kind, order, number, company, title, subtitle, accent, metadata: [{label, value}] }
    index.mdx   ← case-study body, can use <FeatureBlock>, <Figure>, <VideoEmbed> without import
    images/     ← create as needed; reference via relative imports in MDX
```

`src/content/projects/index.js` auto-discovers folders via `import.meta.glob`. Add a new project
by creating a folder — no registry edits.

`meta.kind` is `'case-study'` (shown as full-width rows on Home) or `'project'` (shown as 2x2
grid). `meta.order` controls sort.

Currently stubbed: `netflix-explorer`, `netflix-console`, `pandora` (case studies);
`riddikart`, `christy-natsumi`, `advertising-design`, `creative-campaign-manager` (projects).

## Open stubs — explicitly deferred, do not polish prematurely

- **Home hero** — animated typographic visualization. Currently a placeholder box. Greg said
  we'll tackle this separately.
- **About "How I use AI" Gantt chart** — `AIGanttChart`. This is the permanent visualization,
  not a stub. Refine in place; don't swap it for another viz type.
- **Self-portrait, bio paragraph, case-study copy, all images** — placeholders everywhere.
- **Background texture asset** — Greg will provide; currently a CSS dot pattern.
- **Video host** — `<VideoEmbed src="TBD">` renders a placeholder. Candidate hosts: Vimeo
  (recommended), Cloudflare Stream, Bunny Stream. GitHub Pages can't host video well (no CDN,
  100MB file limit, repo bloat).

## Moodboard reads

- **Image 1** (Gemini-ish glassy panel with blue/purple gradient blobs + dot texture): direction
  for glassy header treatment + dot texture in BG. **Do not** put animated gradient blobs in the
  background — Greg vetoed that after seeing this image.
- **Image 2** (light theme case study with serif display + mono eyebrow + 5-col mono metadata):
  borrow the **structural cadence** (mono eyebrow → big display title → sans subhead → rule →
  mono metadata row), but keep titles **sans** per Greg's stated direction.

## Working preferences

- Greg is a designer, not a heavy engineer — prefer prose explanations of trade-offs over deep
  code dives when discussing direction.
- Token-budget conscious; be terse.
- Iterative collaboration — expect refinements after seeing things in motion. Default parallax
  drift conservative (`+6`); easy to dial later.
- Confirm before scaffolding new architecture; small tweaks can land directly.

## Dev

- `npm run dev` — Vite dev server, default port 5173.
- `npm run build` / `npm run preview`.
- No tests or lint configured yet.

## Reference: original effects guide

Greg has a markdown guide titled `PORTFOLIO_EFFECTS_GUIDE.md` describing the old portfolio's
parallax + clip-path nav mechanics. Last seen at `/Users/gmac/Desktop/moodboard/`. The mechanics
mostly aren't being reused (he dropped slanted panels and the clip-path nav), but the doc has
context on `react-scroll-parallax` v3 conventions if needed.

The old CRA portfolio lives at `~/Documents/gregcomstock` — reference only.
