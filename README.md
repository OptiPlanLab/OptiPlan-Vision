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
# OptiPlan — Product Vision Showcase

> Holistic, AI-powered project management platform for the civil engineering industry.

## What is OptiPlan?

OptiPlan unifies the engineering, administrative, and financial dimensions of infrastructure projects into a single command center — replacing the fragmented landscape of spreadsheets, scattered PDFs, and disconnected tools.

**6 products. One platform. Full control.**

| Product | Domain | What It Does |
|---------|--------|-------------|
| **OptiTrack** | Engineering | Permit coordination across 61+ infrastructure authorities |
| **OptiDocs** | Administrative | Task management, formal letters, meeting summaries with AI |
| **OptiRisk** | Engineering | Risk registry with scoring, trends, and mitigation tracking |
| **OptiGantt** | Engineering | Project scheduling with MS Project import and critical path |
| **OptiBiz** | Financial | Cashflow planning, invoicing, proposals, employment management |
| **Hub Dashboard** | All | Real-time command center aggregating all products |

## View the Showcase

**Live site:** [https://benakiva.github.io/OptiPlan-Vision/](https://benakiva.github.io/OptiPlan-Vision/)

**Features:**
- Hebrew RTL-first with English toggle
- Light/dark theme
- Fully responsive (mobile, tablet, desktop)
- Interactive product mini-prototypes
- Animated counters and scroll effects

**To view locally:** Open `index.html` in a browser.

---

**OptiPlan** — One platform. Every project. Every insight.

© 2026 OptiPlan Ltd.
