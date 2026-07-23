# Task Plan: Abundant Life Centre Mareeba Website Redesign

**Status:** In Progress
**Started:** 2026-07-20
**Last Updated:** 2026-07-22

## Phase 1: Brainstorm
- [x] Understanding Summary confirmed
- [x] Decision tree explored (2-3 approaches)
- [x] Decision.md written and confirmed

## Phase 2: Plan
- [x] Plan.md written with atomic tasks
- [x] Task plan initialized
- [x] Quality gates defined

## Phase 3: Execute & Review
| Task | Status | Commit | Notes |
|------|--------|--------|-------|
| 1.1: Initialize project with Next.js | ✓ | | Next.js 16.2.10, TypeScript, Tailwind CSS v4 |
| 1.2: Configure brand tokens in Tailwind | ✓ | | DM Sans, brand colors, spacing scale |
| 1.3: Set up global styles with CSS variables | ✓ | | Complete design tokens in globals.css |
| 1.4: Create layout components | ✓ | | Header, Footer, MobileNav with floating header |
| 1.5: Set up font loading | ✓ | | DM Sans variable font (400/500/600/700) |
| 2.1-2.7: Core Components (TDD) | ☐ | | Button, Card, etc. |
| 3.1-3.6: Page Templates (TDD) | ☐ | | Homepage, etc. |
| 4.1-4.14: Page Content Rewrite (Batch 4) | ✓ | | All 14 planning pages rewritten with brand-aligned content, encoding fixed |
| 5.1-5.5: Utility Pages | ☐ | | Plan Your Visit, Give, Watch, Contact, 404 |
| 6.1-6.4: Image Optimization & Assets | ☐ | | Responsive images, WebP, lazy loading |
| 7.1-7.4: SEO & Schema Markup | ☐ | | JSON-LD, meta tags, sitemap |
| 8.1-8.5: Accessibility & Testing | ☐ | | WCAG 2.1 AA compliance |
| 9.1-9.5: Performance & Polish | ☐ | | Core Web Vitals, animations |
| 10.1-10.5: Deployment & Documentation | ☐ | | GitHub Pages, README |

### Design Refinements (UI/UX Pro Max — Batch 1)
| Refinement | Status | Notes |
|------------|--------|-------|
| Focus states (3px gold outline) | ✓ | WCAG 2.1 AA compliant |
| Touch target sizes (44x44px) | ✓ | Mobile menu button updated |
| Z-index scale (10-60) | ✓ | Consistent layering system |
| Floating header effect | ✓ | Rounded corners, margin spacing |
| Footer social links | ✓ | Updated to actual church profiles |
| Mobile nav transitions | ✓ | Smooth opacity transitions |
| Cursor-pointer on interactive elements | ✓ | Global CSS utility |
| Color contrast verification | ✓ | Documented in globals.css |

### Design Refinements (UI/UX Pro Max — Batch 2)
| Refinement | Status | Notes |
|------------|--------|-------|
| Skip-to-content link | ✓ | SkipLink component for keyboard users |
| Line length limit | ✓ | .prose (75ch) and .prose-wide (85ch) utilities |
| Button component | ✓ | primary, secondary, outline, accent variants |
| Card component | ✓ | White bg, sage border, gold left border on hover |
| Header hover pill style | ✓ | Rounded-full hover states on nav items |
| Dropdown pill hover | ✓ | Sage background pill on dropdown items |
| Consistent transitions | ✓ | All interactive elements use duration-200 |
| Mobile nav hover states | ✓ | Rounded-full hover with bg-white/10 |
| CTA button polish | ✓ | Active scale, tracking, consistent padding |

## Phase 4: Review
- [ ] Summary generated
- [ ] Context files updated
- [ ] Lessons learned captured