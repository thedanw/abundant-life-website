# Public Assets

This directory contains all static assets served by Next.js at the root URL (`/`).

## Folder Structure

```
public/
├── images/
│   ├── hero/           # Hero banner images (homepage, page heroes)
│   ├── about/          # About Us page images (history, affiliation)
│   ├── team/           # Leadership & staff photos
│   ├── connect/        # Connect section images (groups, serve)
│   ├── events/         # Event banners and thumbnails
│   ├── missions/       # Mission trip and partner images
│   ├── media/          # General media assets
│   ├── sermons/        # Sermon thumbnails and graphics
│   └── backgrounds/    # Textured/patterned backgrounds, overlays
├── icons/              # Favicons, social icons, UI icons (SVG preferred)
├── documents/          # Downloadable PDFs (bulletins, forms, newsletters)
├── file.svg            # (Default Next.js — remove when ready)
├── globe.svg           # (Default Next.js — remove when ready)
├── next.svg            # (Default Next.js — remove when ready)
├── vercel.svg          # (Default Next.js — remove when ready)
└── window.svg          # (Default Next.js — remove when ready)
```

## Usage in Next.js

Assets in `public/` are served from the root URL:

```tsx
// Image in public/images/hero/welcome.jpg
<img src="/images/hero/welcome.jpg" alt="Welcome to Abundant Life" />

// Using Next.js Image component (recommended)
import Image from "next/image";
<Image src="/images/hero/welcome.jpg" alt="Welcome" width={1200} height={600} />
```

## Image Guidelines

- **Format**: Use `.jpg` for photos, `.png` for graphics with transparency, `.svg` for icons
- **Optimization**: Next.js `<Image>` component auto-optimizes; prefer it over `<img>`
- **Naming**: Use lowercase kebab-case: `hero-church-worship.jpg`
- **Alt text**: Every image must have descriptive alt text for accessibility (WCAG 2.1 AA)
- **Hero images**: Recommended 1920×1080 minimum for full-width heroes
- **Team photos**: Recommended 400×400 (square crop) for consistent grid layout
