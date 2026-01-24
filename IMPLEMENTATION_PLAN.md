Scanium Website Rebuild — Implementation Plan
Overview
Rebuild the Scanium marketing site as a dark, tech-forward Astro project with GSAP-powered parallax scrolling and scroll-triggered animations. The site stays in the scanium-site repo and deploys as static HTML to Hostinger.

1. Project Setup
Initialize Astro project in-place
Run npm create astro@latest in /home/ilpeppino/dev/scanium-site (or manually init)
Install dependencies:
astro — static site generator
gsap — animation engine (ScrollTrigger plugin is bundled)
tailwindcss + @astrojs/tailwind — utility-first styling
Move existing website/ content to a backup branch or archive folder
Keep account-deletion.html as a standalone page (copy into public/)
Folder Structure

scanium-site/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── assets/
│   │   ├── logo/
│   │   │   └── scanium-logo-primary.svg
│   │   │   └── scanium-icon-mark.svg
│   │   ├── badges/
│   │   │   └── google-play-badge.svg
│   │   ├── mockups/          ← AI-generated phone mockups
│   │   └── illustrations/   ← Feature icons / decorative SVGs
│   ├── account-deletion.html
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── UseCases.astro
│   │   ├── DownloadCTA.astro
│   │   └── Footer.astro
│   ├── scripts/
│   │   └── animations.ts     ← GSAP ScrollTrigger setup
│   ├── styles/
│   │   └── global.css         ← Tailwind directives + custom props
│   └── pages/
│       ├── index.astro        ← Main landing page
│       ├── privacy.astro      ← Privacy policy (migrate content)
│       └── tos.astro          ← Terms of service (migrate content)
2. Design Tokens (Tailwind Config)

// tailwind.config.mjs
colors: {
  navy: '#050B18',
  'navy-light': '#0A1628',
  'scanium-blue': '#1F4BFF',
  'scanium-cyan': '#00D4FF',
  'scanium-purple': '#A259FF',
  'scanium-yellow': '#FFD400',
  'text-primary': '#E8ECF4',
  'text-muted': 'rgba(232, 236, 244, 0.6)',
}
Font: Inter (loaded via Google Fonts or @fontsource/inter)

3. Section Specifications
3.1 Header (Header.astro)
Position: Fixed, transparent background with blur on scroll
Content: Logo + "Scanium" brand name (left), "Download" CTA button (right)
Behavior: Background opacity increases on scroll (JS listener)
Mobile: Hamburger not needed (single CTA), keep minimal
3.2 Hero (Hero.astro)
Layout: Full viewport height (h-screen), centered content
Background: Deep navy with radial gradient glow (cyan center, fading out)
Parallax layers (3):
Background: Subtle grid/scan-line pattern (CSS), moves slowest
Middle: Floating geometric shapes (circles, scan beams) with parallax offset
Foreground: Main content (text + phone mockup)
Content:
Headline: "Scan it. Select it. Sell it." (large, white, yellow S initials)
Subheadline: "AI-powered object detection and pricing in your pocket"
Google Play badge CTA
Phone mockup (right side on desktop, below text on mobile) with scan-beam glow effect
Animations:
Title text: Fade-up stagger on load (GSAP timeline)
Phone mockup: Float-in from right with subtle continuous float animation
Background glow: Slow pulse animation (CSS keyframes)
Scan beam: Animated line sweeping across phone mockup
3.3 Features (Features.astro)
Layout: Section title + 2×3 grid of feature cards (stacked on mobile)
Section title: "Intelligent Scanning, Instant Results"
Cards (6 features):
Real-Time Detection — "Point your camera and watch objects get identified instantly"
Privacy First — "All processing happens on-device. Your data never leaves your phone"
Smart Pricing — "Get instant price estimates based on market data"
AI Assistant — "Generate product descriptions and marketplace listings automatically"
Export Anywhere — "CSV, ZIP bundles, or direct to eBay and marketplace apps"
23 Categories — "Furniture, electronics, fashion, and more — trained to recognize what matters"
Card design: Dark card (navy-light bg), cyan left border accent, icon top, title, description
Animations: Cards fade-up + slide-in staggered as they enter viewport (ScrollTrigger)
3.4 How It Works (HowItWorks.astro)
Layout: Horizontal step sequence (vertical on mobile)
Section title: "From Camera to Cash in Seconds"
Steps (4):
Point — Camera icon, "Open Scanium and point at any item"
Detect — Bounding box icon, "AI identifies the object in real-time"
Price — Price tag icon, "Get an instant market value estimate"
Export — Share icon, "Export to CSV or list on marketplaces"
Visual: Connected line/path between steps (SVG), animated dash drawing on scroll
Animations:
Steps reveal one-by-one as user scrolls (ScrollTrigger scrub)
Connecting line draws progressively
Each step icon has a subtle glow pulse when active
3.5 Use Cases (UseCases.astro)
Layout: Alternating left/right content blocks (image + text)
Section title: "Built for People Who Sell"
Cases (3):
Resellers — "Photograph 50 items, get prices, export listings — in one session"
Estate Sales — "Sort an entire household by value in minutes, not days"
Downsizers — "Know what your stuff is worth before you post it"
Visual: Each block has a stylized illustration/mockup showing the use case
Animations: Blocks slide in from alternating sides (left/right) on scroll
3.6 Download CTA (DownloadCTA.astro)
Layout: Centered section with gradient background (navy → scanium-blue gradient)
Content:
Headline: "Ready to start scanning?"
Subtext: "Download Scanium free on Google Play"
Large Google Play badge button
Small text: "Available on Android. No account required."
Animations: Fade-up on scroll, badge has hover glow effect
3.7 Footer (Footer.astro)
Layout: Simple centered footer
Content: Privacy Policy | Terms of Service | © 2026 Scanium
Style: Dark background, muted text, blue links
4. Animation Implementation (src/scripts/animations.ts)
GSAP ScrollTrigger Strategy

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Hero parallax layers
gsap.to('.hero-bg-layer', { yPercent: 30, scrollTrigger: { trigger: '.hero', scrub: true } });
gsap.to('.hero-mid-layer', { yPercent: 15, scrollTrigger: { trigger: '.hero', scrub: true } });

// Feature cards stagger
gsap.from('.feature-card', {
  y: 60, opacity: 0, stagger: 0.1, duration: 0.8,
  scrollTrigger: { trigger: '.features-grid', start: 'top 80%' }
});

// How-it-works step reveal
gsap.from('.step', {
  y: 40, opacity: 0, stagger: 0.2,
  scrollTrigger: { trigger: '.how-it-works', start: 'top 70%', end: 'bottom 50%', scrub: 1 }
});

// Use case alternating slides
gsap.utils.toArray('.use-case').forEach((el, i) => {
  gsap.from(el, {
    x: i % 2 === 0 ? -80 : 80, opacity: 0,
    scrollTrigger: { trigger: el, start: 'top 85%' }
  });
});
Accessibility
Wrap all GSAP animations in: if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
Provide fallback: elements visible by default, animations enhance only
All content readable without JS
5. Visual Asset Strategy
AI-Generated Mockups (placeholder approach)
Phone mockup: Create or source a generic Android phone frame SVG, overlay app screenshots inside
Feature icons: Simple line-art SVG icons (camera, shield, price-tag, robot, share, grid)
Use case illustrations: Stylized scene illustrations or photo composites
Background elements: SVG scan-beam lines, geometric shapes, dot grids
Initial Implementation
Start with CSS-drawn placeholders and simple SVG icons
Create a /public/assets/mockups/ directory for phone screenshots
Use CSS gradients and shapes for decorative elements (no heavy images initially)
Replace with AI-generated or real assets in a follow-up pass
6. Responsive Design
Breakpoint	Layout Changes
Desktop (1024px+)	Side-by-side hero, 2×3 feature grid, horizontal steps, alternating use cases
Tablet (768px)	Stacked hero, 2×2 feature grid, horizontal steps (smaller), stacked use cases
Mobile (< 768px)	Fully stacked, 1-column features, vertical steps, full-width use cases
Use Tailwind responsive prefixes (md:, lg:)
Parallax effects disabled on mobile (< 768px) for performance
Touch-friendly tap targets (min 48px)
7. Accessibility
Semantic HTML5 elements (<header>, <main>, <section>, <footer>)
aria-labelledby on each section
Skip-to-content link
prefers-reduced-motion disables all GSAP animations
Color contrast: white text on navy meets WCAG AA (ratio ~15:1)
Alt text on all images
Keyboard-navigable CTAs
8. Deployment
Build
npm run build → Astro outputs static HTML/CSS/JS to dist/
All assets inlined or referenced from dist/assets/
Deploy to Hostinger
Copy contents of dist/ to public_html/
Same process as current site, just from dist/ instead of website/
Update README with new deployment instructions
Domain
Keep current domain (gtemp1.com or custom domain)
Update OG meta tags with correct URLs
9. Implementation Order
Project scaffolding — Init Astro, install deps, configure Tailwind, set up folder structure
BaseLayout + Header + Footer — Shell with nav, meta tags, font loading
Hero section — Content, parallax layers, GSAP load animations
Features section — Grid, cards, scroll-triggered reveals
How It Works section — Steps, connecting line, scrub animation
Use Cases section — Alternating blocks, slide-in animations
Download CTA section — Final conversion block
Legal pages — Migrate Privacy Policy and ToS content
Visual polish — Refine gradients, glows, transitions, mockup assets
Responsive + a11y pass — Test all breakpoints, reduced-motion, screen readers
Build + deploy — Verify dist output, deploy to Hostinger
10. Verification
npm run dev — Local dev server, verify all sections render
npm run build — Ensure clean build with no errors
Lighthouse audit — Target 90+ on Performance, Accessibility, SEO
Test on Chrome, Firefox, Safari (desktop + mobile viewports)
Verify prefers-reduced-motion disables animations
Confirm legal pages (Privacy, ToS) content matches current versions
Verify Google Play link opens correct store listing
Test account-deletion.html still works from public/
User approved the plan
Plan approved. Let me set up the task list and start building.

Update Todos

Project scaffolding — Init Astro, install deps, configure Tailwind, set up folder structure

BaseLayout + Header + Footer — Shell with nav, meta tags, font loading

Hero section — Content, parallax layers, GSAP load animations

Features section — Grid, cards, scroll-triggered reveals

How It Works section — Steps, connecting line, scrub animation

Use Cases section — Alternating blocks, slide-in animations

Download CTA section — Final conversion block

Legal pages — Migrate Privacy Policy and ToS content

Animations implementation — GSAP ScrollTrigger setup

Responsive + a11y pass — Test breakpoints, reduced-motion

Build + verify — Ensure clean build, verify output
