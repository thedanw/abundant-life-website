# Decision: Abundant Life Centre Mareeba Website Redesign

## What & Why
Rebuild the Abundant Life Centre Mareeba website from scratch using modern web technologies (HTML/CSS/JS or framework) to create a welcoming, accessible, and effective online presence that serves first-time visitors and helps them plan a visit. The current Wix site is outdated and doesn't reflect the updated brand identity (logo and colors have changed). The new site will be built on modern web standards with WCAG 2.1 AA compliance, using the comprehensive brand guidelines already established.

## Who
- **Primary users**: First-time visitors looking for a church in Mareeba, QLD
- **Secondary users**: Regular members seeking updates, events, and giving options
- **Target location**: Mareeba, Far North Queensland, Australia

## Constraints
- **Tech stack**: Modern web (HTML/CSS/JS or framework like React, Next.js, etc.)
- **Accessibility**: WCAG 2.1 AA compliance required
- **Timeline**: ASAP — launch as soon as possible
- **Brand guidelines**: Must follow BRAND_VOICE.md and BRAND_VISUAL_GUIDELINES.md
- **Images**: Scrape images from existing website (http://www.abundantlifemareeba.org.au/) using Jina AI (logo and brand colors have changed)
- **Content**: Use existing page content from planning/pages/ folder

## Non-Goals
- **No e-commerce**: No online store or product sales
- **No member portal**: No login system or member-only area
- **No sermon archives**: No full sermon archive system (use YouTube/Facebook links)
- **No events calendar**: No complex events system (use simple listings)

## Assumptions
- **Logo files will be provided**: Assuming new logo files will be supplied separately
- **Brand colors are final**: The brand colors in BRAND_VISUAL_GUIDELINES.md are the new, approved colors
- **Content is ready**: All page content in planning/pages/ is final and approved
- **Existing images are acceptable**: Images from the current website can be reused (except logo)

## Decision Log
| # | Decision | Alternatives | Rationale |
|---|----------|-------------|-----------|
| 1 | Modern web stack over Wix | Wix, WordPress, Custom | Better performance, SEO, accessibility control; aligns with brand guidelines |
| 2 | Focus on first-time visitors | Equal focus on members | Primary goal is increased attendance; visitors are the conversion target |
| 3 | WCAG 2.1 AA compliance | No specific accessibility target | Inclusive design aligns with church values; legal/ethical requirement |
| 4 | Scrape images from existing site | Use stock photos, wait for new photos | Already have relevant images; can be replaced later with professional photos |
| 5 | No complex features (e-commerce, member portal) | Build full-featured site | Keep scope manageable for fast launch; can add features later |
| 6 | Use existing page content | Create new content | Content is already prepared and approved; saves time |

## Approaches Considered
### Recommended: Static Site with Modern Build Tools
**Why this approach:**
- Fast loading times (critical for mobile visitors)
- Excellent SEO control
- Easy to host (Netlify, Vercel, GitHub Pages)
- Can use frameworks like Next.js for SSG/SSR if needed
- Full control over accessibility implementation

### Alternative: React SPA with Client-Side Rendering
**Trade-off summary:**
- Better for dynamic content (sermon player, events)
- Worse for SEO (requires additional setup)
- More complex deployment
- Overkill for primarily static content

### Alternative: WordPress with Custom Theme
**Trade-off summary:**
- Familiar to church staff for content updates
- Requires PHP hosting and maintenance
- Security concerns with plugins
- Less control over performance