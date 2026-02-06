# OptiPlan Showcase Website

A polished, client-facing showcase website for the OptiPlan platform — a unified infrastructure project management system for Israeli engineering firms.

## Deployment to GitHub Pages

### Option 1: Deploy from `showcase/` subfolder

1. Push the repository to GitHub
2. Go to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch and `/showcase` folder (or set up GitHub Actions)
5. Save — site will be live at `https://<username>.github.io/<repo>/showcase/`

### Option 2: Deploy as standalone repo

1. Copy the `showcase/` folder contents to a new repository
2. Push to GitHub
3. Go to **Settings** > **Pages**
4. Select `main` branch and `/ (root)` folder
5. Site will be live at `https://<username>.github.io/<repo>/`

### Option 3: Custom domain

1. Deploy via either option above
2. Add a `CNAME` file in the root with your domain (e.g., `optiplan.site`)
3. Configure DNS: CNAME record pointing to `<username>.github.io`

## Local Preview

Simply open `index.html` in any modern browser. No build step or server required.

```bash
# Or use a simple HTTP server for best results:
npx serve .
# or
python -m http.server 8000
```

## Features

- **Light mode default** with dark mode toggle (persisted in localStorage)
- **Hebrew/English toggle** with RTL/LTR support (persisted in localStorage)
- **Lucide icons** via CDN — no custom SVGs or emojis
- **Bento grid layout** for product cards (asymmetric, modern)
- **Glassmorphism cards** with backdrop-filter blur
- **Cursor-tracking glow** on product and number cards
- **Grain texture overlay** on sections for visual depth
- **Responsive design** — desktop, tablet, mobile
- **Scroll-triggered animations** via Intersection Observer
- **Counter animations** for key metrics
- **Interactive product cards** with mini-prototypes
- **Pure HTML/CSS/JS** — no build tools, no frameworks

## File Structure

```
showcase/
├── index.html          Main entry point
├── css/
│   ├── style.css       Main styles + light/dark theme system
│   ├── animations.css  Animation definitions
│   └── responsive.css  Media queries + bento breakpoints
├── js/
│   ├── main.js         Scroll animations, counters, theme toggle, cursor glow
│   ├── i18n.js         HE/EN toggle logic and all translations
│   └── nav.js          Navbar scroll, hamburger, smooth scrolling
├── assets/
│   └── logo.png        OptiPlan logo
└── README.md           This file
```

## Color Palette (from PNG logo)

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#1E4D7B` | Primary navy |
| `--color-primary-dark` | `#12314F` | Darkest shade |
| `--color-primary-light` | `#3B7AB5` | Lighter blue |
| `--color-accent` | `#5B9BD5` | Interactive accents |
| `--color-accent-light` | `#3B7AB5` (light) / `#7BB8E8` (dark) | Accent highlights |
