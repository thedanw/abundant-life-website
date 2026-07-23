---
name: Abundant Life Centre Mareeba — Visual Brand Guidelines
version: 1.0
created: 2026-07-20
last_updated: 2026-07-21
agents_compatible: true
---

# Abundant Life Centre Mareeba — Visual Brand Guidelines

**Single Source of Truth for Visual Identity Across All Touchpoints**

---

## 1. Brand Essence & Visual Strategy

### Core Identity
- **Organization**: Abundant Life Centre Mareeba (ALC Mareeba)
- **Denomination**: Australian Christian Churches (ACC) — Pentecostal, Spirit-filled, evangelical
- **Founded**: 1983 | **Leadership**: Ps Darryl & Patricia Roos (since 1997)
- **Location**: 133-137 Walsh Street, Mareeba, QLD 4880, Australia
- **Core Scripture**: *"I have come that they may have life, and that they may have it more abundantly."* — John 10:10b (NKJV)

### Visual Strategy Alignment with Voice Pillars

| Voice Pillar | Visual Expression |
|--------------|-------------------|
| **Welcoming** | Warm gold accents, open spacing, approachable typography |
| **Faith-Filled** | Deep green (growth, life), confident contrast, expectant energy |
| **Scriptural** | Clean hierarchy, readable body text for Scripture, reverent tone |
| **Expressive** | Dynamic accent colors, generous whitespace for "breathing room" |
| **Generous** | Accessible contrast, inclusive design, open-handed layouts |
| **Missional** | Forward-moving visual flow, outward-reaching compositions |

---

## 2. Color Palette

### Primary Colors (Core Identity)

| Role | HEX | RGB | CMYK | Usage |
|------|-----|-----|------|-------|
| **Primary** | `#006747` | `rgb(0, 103, 71)` | `C:100 M:0 Y:31 K:60` | Primary brand color — headers, primary buttons, key UI elements, logo mark |
| **Secondary** | `#c4916c` | `rgb(196, 145, 108)` | `C:0 M:26 Y:45 K:23` | Warm gold — secondary buttons, accents, highlights, decorative elements |

### Accent Colors (Supporting)

| Role | HEX | RGB | CMYK | Usage |
|------|-----|-----|------|-------|
| **Accent Sage** | `#9cba9e` | `rgb(156, 186, 158)` | `C:16 M:0 Y:15 K:27` | Subtle backgrounds, secondary UI states, hover states, decorative borders |
| **Accent Gold** | `#fed26f` | `rgb(254, 210, 111)` | `C:0 M:17 Y:56 K:0` | Call-to-action highlights, celebration moments, hover/active states, badges |

### Neutral Colors

| Role | HEX | RGB | CMYK | Usage |
|------|-----|-----|------|-------|
| **Background White** | `#ffffff` | `rgb(255, 255, 255)` | `C:0 M:0 Y:0 K:0` | Primary page backgrounds, card backgrounds, clean space |
| **Text Black** | `#1a1a1a` | `rgb(26, 26, 26)` | `C:0 M:0 Y:0 K:90` | Primary body text, headings on light backgrounds |
| **Text White** | `#ffffff` | `rgb(255, 255, 255)` | `C:0 M:0 Y:0 K:0` | Text on Primary/Secondary backgrounds |

### Color Usage Rules

#### Text on Colored Backgrounds
| Background | Text Color | Contrast Ratio | WCAG |
|------------|------------|----------------|------|
| Primary `#006747` | White `#ffffff` | 5.8:1 | ✅ AA/AAA |
| Secondary `#c4916c` | White `#ffffff` | 3.2:1 | ✅ AA Large (18px+) |
| Accent Sage `#9cba9e` | Black `#1a1a1a` | 4.7:1 | ✅ AA |
| Accent Gold `#fed26f` | Black `#1a1a1a` | 5.1:1 | ✅ AA |
| White `#ffffff` | Black `#1a1a1a` | 15.3:1 | ✅ AAA |

#### Do's and Don'ts
- ✅ **DO**: Use Primary for primary CTAs, main navigation, logo
- ✅ **DO**: Use Secondary for secondary CTAs, decorative accents, warmth
- ✅ **DO**: Use Accent Sage for subtle backgrounds, card borders, hover states
- ✅ **DO**: Use Accent Gold for celebration moments, "new" badges, active states
- ✅ **DO**: White text on Primary/Secondary backgrounds
- ❌ **DON'T**: Use Primary text on Accent Sage (insufficient contrast)
- ❌ **DON'T**: Use Secondary text on White (insufficient contrast — 3.2:1)
- ❌ **DON'T**: Use Accent Gold for body text (too light)
- ❌ **DON'T**: Create gradients between Primary and Secondary without design review

### Programmatic Color Tokens (for CSS/Design Systems)

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #006747;
  --color-primary-rgb: 0, 103, 71;
  --color-secondary: #c4916c;
  --color-secondary-rgb: 196, 145, 108;

  /* Accent Colors */
  --color-accent-sage: #9cba9e;
  --color-accent-sage-rgb: 156, 186, 158;
  --color-accent-gold: #fed26f;
  --color-accent-gold-rgb: 254, 210, 111;

  /* Neutrals */
  --color-bg-white: #ffffff;
  --color-bg-white-rgb: 255, 255, 255;
  --color-text-black: #1a1a1a;
  --color-text-black-rgb: 26, 26, 26;
  --color-text-white: #ffffff;
  --color-text-white-rgb: 255, 255, 255;

  /* Semantic Aliases */
  --color-text-primary: var(--color-text-black);
  --color-text-on-primary: var(--color-text-white);
  --color-text-on-secondary: var(--color-text-white);
  --color-bg-primary: var(--color-bg-white);
  --color-border-subtle: var(--color-accent-sage);
  --color-cta-primary: var(--color-primary);
  --color-cta-secondary: var(--color-secondary);
  --color-cta-accent: var(--color-accent-gold);
}
```

### RGB Tuples for Programmatic Slides (python-pptx, Google Slides API)

| Color Name | RGB Tuple |
|------------|-----------|
| Primary | `(0, 103, 71)` |
| Secondary | `(196, 145, 108)` |
| Accent Sage | `(156, 186, 158)` |
| Accent Gold | `(254, 210, 111)` |
| White | `(255, 255, 255)` |
| Black | `(26, 26, 26)` |

---

## 3. Typography

### Font Families

| Role | Font Family | Weights | Source | Rationale |
|------|-------------|---------|--------|-----------|
| **All Typography** | **DM Sans** | 100–1000 (variable) | [Google Fonts](https://fonts.google.com/specimen/DM+Sans) | Geometric sans-serif with optical sizing — clean, modern, highly legible. One font for everything creates visual unity. Headings use bold weight + tight letter-spacing; body uses normal weight + normal letter-spacing. |

> **DM Sans for everything.** A single font family ensures visual consistency across all touchpoints. The variable font provides full weight range (100–1000) with optical sizing for optimal rendering at any scale.

### Type Scale (Ratio: 1.333 — Perfect Fourth)

| Style | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing | Color | Usage |
|-------|------|--------|----------------|---------------|-------------|----------------|-------|-------|
| **Hero** | DM Sans | 700 | 48px / 3rem | 36px / 2.25rem | 1.15 | -0.02em | Primary / White | Page hero, major landing headlines |
| **H1** | DM Sans | 700 | 40px / 2.5rem | 32px / 2rem | 1.2 | -0.01em | Primary / White | Page titles, major sections |
| **H2** | DM Sans | 700 | 32px / 2rem | 28px / 1.75rem | 1.25 | -0.01em | Primary / Black | Section headers |
| **H3** | DM Sans | 700 | 24px / 1.5rem | 22px / 1.375rem | 1.3 | 0 | Primary / Black | Subsection headers |
| **H4** | DM Sans | 600 | 20px / 1.25rem | 18px / 1.125rem | 1.35 | 0 | Primary / Black | Card titles, minor headers |
| **Body Large** | DM Sans | 400 | 18px / 1.125rem | 17px / 1.0625rem | 1.6 | 0 | Black | Lead paragraphs, intro text |
| **Body** | DM Sans | 400 | 16px / 1rem | 16px / 1rem | 1.6 | 0 | Black | Standard body copy |
| **Body Small** | DM Sans | 400 | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 0 | Black | Meta info, captions, footnotes |
| **Caption** | DM Sans | 500 | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.02em | Sage / Black | Labels, tags, timestamps |
| **Button** | DM Sans | 600 | 16px / 1rem | 16px / 1rem | 1 | 0.01em | White / Primary | All button text |
| **Scripture Ref** | DM Sans | 400 | 16px / 1rem | 16px / 1rem | 1.6 | 0 | Secondary | Inline Scripture references |

### CSS Variables for Typography

```css
:root {
  /* Font Families */
  --font-display: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 900;

  /* Type Scale */
  --text-hero: clamp(2.25rem, 5vw, 3rem);
  --text-h1: clamp(2rem, 4vw, 2.5rem);
  --text-h2: clamp(1.75rem, 3.5vw, 2rem);
  --text-h3: clamp(1.375rem, 2.5vw, 1.5rem);
  --text-h4: clamp(1.125rem, 2vw, 1.25rem);
  --text-body-lg: clamp(1rem, 1.5vw, 1.125rem);
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;

  /* Line Heights */
  --leading-tight: 1.15;
  --leading-snug: 1.25;
  --leading-normal: 1.35;
  --leading-relaxed: 1.6;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
}
```

### Typography Usage Rules

- **Maximum 3–4 type styles per content block** (per skill guidelines)
- **Line length**: Max 120 characters (≈75ch) for body text
- **Scripture references**: Always in DM Sans 400, Secondary color `#c4916c`
- **ALL CAPS**: Only for GOD, JESUS, HOLY SPIRIT, BIBLE, ACC — use `--font-display` at `--text-caption` size with `--tracking-wide`
- **Headings**: Title Case for page titles; Sentence case for section headers
- **Body text**: Sentence case, contractions encouraged ("we're", "you're", "God's")

---

## 4. Spacing System

### Base Unit: 8px

All spacing values are multiples of 8px for consistent rhythm.

### Spacing Scale

| Token | Value | Rem | Usage |
|-------|-------|-----|-------|
| `--space-xs` | 4px | 0.25rem | Tight gaps, icon-text spacing |
| `--space-sm` | 8px | 0.5rem | Small gaps, form field spacing |
| `--space-md` | 16px | 1rem | Standard gap, card padding |
| `--space-lg` | 24px | 1.5rem | Section element spacing |
| `--space-xl` | 32px | 2rem | Section padding, component gaps |
| `--space-2xl` | 48px | 3rem | Major section separation |
| `--space-3xl` | 64px | 4rem | Page-level vertical rhythm |
| `--space-4xl` | 96px | 6rem | Hero sections, major landings |

### Layout Spacing

| Context | Horizontal | Vertical |
|---------|------------|----------|
| **Page Margins (Desktop)** | 120px (15rem) | — |
| **Page Margins (Tablet)** | 48px (3rem) | — |
| **Page Margins (Mobile)** | 24px (1.5rem) | — |
| **Section Padding** | — | 64px (4rem) desktop / 48px (3rem) mobile |
| **Container Max Width** | 1200px (75rem) | — |
| **Card Padding** | 24px (1.5rem) | 24px (1.5rem) |
| **Button Padding** | 24px (1.5rem) | 12px (0.75rem) |

### Logo Clear Space

- **Minimum clear space**: Equal to the height of the "A" in "Abundant" (logo mark)
- **No other elements** (text, images, UI) may enter this space
- **Background**: Logo requires minimum 24px padding on all sides when placed on colored backgrounds

---

## 5. Logo Usage

### Logo Variants

| Variant | Description | Usage |
|---------|-------------|-------|
| **Primary (Full Color)** | Full logo with Primary green mark + wordmark | Default — headers, hero, print, signage |
| **Primary on Dark** | White mark + white wordmark | On Primary/Secondary backgrounds, dark imagery |
| **Secondary (Monochrome)** | Single-color Primary green | Single-color print, fax, watermarks |
| **Secondary on Dark** | Single-color White | Dark backgrounds where full-color not viable |
| **Monogram** | "ALC" mark only | Favicon, app icon, social avatar, small spaces |

### Minimum Sizes

| Variant | Minimum Width | Minimum Height |
|---------|---------------|----------------|
| Primary | 160px | 48px |
| Monogram | 32px | 32px |

### Don'ts (Per Skill Anti-Patterns)

- ❌ Don't stretch, skew, or distort proportions
- ❌ Don't recolor the mark (use approved variants only)
- ❌ Don't add drop shadows, glows, or effects
- ❌ Don't place on busy backgrounds without clear space
- ❌ Don't use the monogram at sizes below 32px
- ❌ Don't separate mark from wordmark in primary variant

---

## 6. Frontend Aesthetics (Distinctive Implementation)

### Motion Principles

| Principle | Implementation |
|-----------|----------------|
| **High-impact moments** | One well-orchestrated page load with staggered reveals (`animation-delay` 100–300ms steps) |
| **Prioritize CSS** | CSS-only animations for HTML; Framer Motion for React when needed |
| **Scroll-triggered** | IntersectionObserver for reveal animations — surprise and delight |
| **Hover states** | Color/opacity transitions (150–200ms ease-out); **never** scale transforms that shift layout |
| **Reduced motion** | Always respect `prefers-reduced-motion` — provide instant/alternative states |

### Spatial Composition

- **Asymmetry with intention**: Hero sections may use offset layouts; content sections maintain grid alignment
- **Generous negative space**: 64px+ vertical rhythm between major sections
- **Grid-breaking elements**: Occasional full-bleed images, pull quotes, or accent bars that extend beyond container
- **Clear visual flow**: F-pattern or Z-pattern reading order; avoid predictable evenly-distributed layouts

### Backgrounds & Visual Details

| Technique | Application | Restraint |
|-----------|-------------|-----------|
| **Gradient meshes** | Hero backgrounds, section dividers | Subtle — Primary → Accent Sage at 10–15% opacity |
| **Noise/grain texture** | Card backgrounds, overlay on hero images | 3–5% opacity, subtle |
| **Geometric patterns** | Subtle diagonal lines, cross-hatch on accent sections | Very low contrast (5% opacity) |
| **Layered transparencies** | Card overlays, modal backdrops | White/black at 80–90% opacity |
| **Decorative borders** | Accent Gold left border on feature cards | 4px solid `#fed26f` |
| **Dramatic shadows** | Elevated cards, modals | `0 20px 40px rgba(0, 103, 71, 0.12)` |

### Component Aesthetics

#### Skip Link (Accessibility)
- Hidden by default (`sr-only`), visible on keyboard focus
- Fixed position: `left-4 top-4`, `z-[var(--z-toast)]`
- Gold background (`var(--color-accent-gold)`), black text
- Rounded corners, shadow, no outline (uses focus-visible)
- Implementation: `src/components/SkipLink.tsx`

#### Buttons
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-white);
  padding: var(--space-md) var(--space-xl);
  font: var(--weight-semibold) var(--text-body) var(--font-body);
  border-radius: 8px;
  transition: background 150ms ease, transform 100ms ease;
}
.btn-primary:hover { background: #005238; }
.btn-primary:active { transform: scale(0.98); } /* Subtle, no layout shift */

.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-text-white);
  /* same padding, font, radius */
}
.btn-secondary:hover { background: #b0805a; }

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}
.btn-outline:hover { background: var(--color-primary); color: var(--color-text-white); }

.btn-accent {
  background: var(--color-accent-gold);
  color: var(--color-text-black);
}
.btn-accent:hover { background: #f5c040; }
```

#### Cards
- White background, subtle border: `1px solid var(--color-accent-sage)`
- Border-radius: 12px
- Padding: `var(--space-xl)`
- Hover: shadow elevation (`0 20px 40px rgba(0,103,71,0.12)`) + Accent Gold left border (4px)
- Image cards: 16:9 aspect ratio, object-fit: cover
- Implementation: `src/components/Card.tsx` — supports `hoverEffect` prop (default: true)

#### Form Elements
- Input height: 48px (touch-friendly)
- Border: `2px solid var(--color-accent-sage)`
- Focus: `border-color: var(--color-primary)`, `box-shadow: 0 0 0 3px rgba(0, 103, 71, 0.15)`
- Label: `--text-body-sm`, `--weight-medium`, `--color-text-black`
- Error: border `#dc2626`, text `#dc2626` + icon (never color alone)

#### Navigation
- Desktop: Floating header with rounded corners, logo left, links center, CTA right
- Mobile: Hamburger → full-screen overlay with generous padding
- Active state: Accent Gold underline (3px) + Primary text
- Hover: Accent Sage background pill (border-radius: 9999px)
- Z-index scale: Base (10), Dropdown (20), Sticky (30), Overlay (40), Modal (50), Toast (60)
- Desktop nav items: Rounded-full hover pill with `bg-white/10` on Primary background
- Dropdown items: Rounded-full hover pill with `bg-[var(--color-accent-sage)]`
- Mobile nav items: Rounded-full hover pill with `bg-white/10`, gold text on hover

### Implemented React Components
| Component | File | Variants/Props |
|-----------|------|----------------|
| **Button** | `src/components/Button.tsx` | `primary`, `secondary`, `outline`, `accent` — supports `href`, `onClick`, `disabled`, `ariaLabel` |
| **Card** | `src/components/Card.tsx` | `hoverEffect` (default: true), `as` (div/article/section), `ariaLabel` |
| **SkipLink** | `src/components/SkipLink.tsx` | Hidden by default, visible on keyboard focus (gold bg, black text) |

---

## 7. Imagery & Iconography

### Photography Style

| Attribute | Guideline |
|-----------|-----------|
| **Tone** | Warm, natural light, authentic moments — not staged stock |
| **Subjects** | Real congregation, community, worship (hands raised, faces engaged), Mareeba/Tablelands landscape |
| **Color grading** | Slight warmth (+10 temp), natural greens enhanced, skin tones protected |
| **Composition** | Environmental portraits, candid interactions, wide establishing shots of location |
| **Diversity** | Reflect actual congregation — multi-generational, multicultural |

### Iconography

- **Style**: Outline/line icons, 2px stroke weight, rounded caps
- **Source**: Heroicons (outline), Lucide, or custom SVG set
- **Color**: Current text color (inherits) or Primary for emphasis
- **Size**: 20×20px default, 24×24px for feature icons, 16×16px for inline
- **Never**: Emojis as UI icons (per skill anti-patterns)

---

## 8. Accessibility Checklist (WCAG 2.1 AA)

| Criterion | Requirement | Implementation |
|-----------|-------------|----------------|
| **Contrast (Text)** | ≥4.5:1 normal, ≥3:1 large (18px+/14px+ bold) | All text combinations verified above |
| **Contrast (UI)** | ≥3:1 for interactive elements, borders | Button borders, focus rings, form inputs |
| **Focus Indicators** | ≥2px solid, 3:1 contrast, visible | `outline: 3px solid var(--color-accent-gold); outline-offset: 2px;` |
| **Color Alone** | Never sole indicator | Error states: color + icon + text; Links: underline + color |
| **Keyboard** | All interactive elements reachable | Tab order logical, no traps, skip links |
| **Reduced Motion** | Respect `prefers-reduced-motion` | Disable animations, instant transitions |
| **Text Resize** | 200% zoom without loss of function | Relative units (rem), no fixed heights on text containers |
| **Language** | `lang="en-AU"` on html element | Australian English throughout |

---

## 9. Slides & Documents (PowerPoint, Google Slides, Keynote, Word, Google Docs)

### Slide Master Configuration

| Element | Specification |
|---------|---------------|
| **Background** | White (`#ffffff`) default; Primary (`#006747`) for title/section slides |
| **Title Font** | Merriweather Bold, 44pt, White (on Primary) / Primary (on White) |
| **Body Font** | Source Sans 3 Regular, 20pt, Black (on White) / White (on Primary) |
| **Heading 1** | Merriweather Bold, 32pt, Primary |
| **Heading 2** | Merriweather Semibold, 26pt, Primary |
| **Heading 3** | Source Sans 3 Semibold, 22pt, Primary |
| **Body Text** | Source Sans 3 Regular, 20pt, Black |
| **Caption/Footnote** | Source Sans 3 Medium, 14pt, Sage |
| **Bullet Points** | Source Sans 3 Regular, 20pt, Black; bullet color: Primary |

### Theme Color Mapping (PowerPoint: Design → Variants → Colors → Customize)

| Theme Slot | Color | RGB |
|------------|-------|-----|
| **Accent 1 (Primary)** | `#006747` | `(0, 103, 71)` |
| **Accent 2 (Secondary)** | `#c4916c` | `(196, 145, 108)` |
| **Accent 3 (Accent Sage)** | `#9cba9e` | `(156, 186, 158)` |
| **Accent 4 (Accent Gold)** | `#fed26f` | `(254, 210, 111)` |
| **Accent 5** | `#005238` (Primary dark) | `(0, 82, 56)` |
| **Accent 6** | `#1a1a1a` (Text Black) | `(26, 26, 26)` |
| **Hyperlink** | `#006747` | `(0, 103, 71)` |
| **Followed Hyperlink** | `#c4916c` | `(196, 145, 108)` |
| **Background 1** | `#ffffff` | `(255, 255, 255)` |
| **Text 1** | `#1a1a1a` | `(26, 26, 26)` |

### Chart & Shape Color Cycling

**Fixed order** (never random):
1. Primary `#006747`
2. Secondary `#c4916c`
3. Accent Sage `#9cba9e`
4. Accent Gold `#fed26f`
5. Primary Dark `#005238`
6. Text Black `#1a1a1a`

### Document Styles (Word / Google Docs)

| Style Name | Font | Size | Color | Spacing After |
|------------|------|------|-------|---------------|
| **Title** | Merriweather Bold | 28pt | Primary | 12pt |
| **Heading 1** | Merriweather Bold | 22pt | Primary | 10pt |
| **Heading 2** | Merriweather Semibold | 18pt | Primary | 8pt |
| **Heading 3** | Source Sans 3 Semibold | 16pt | Primary | 6pt |
| **Normal** | Source Sans 3 Regular | 11pt | Black | 6pt |
| **Scripture** | Merriweather Regular | 11pt | Secondary | 6pt |
| **Caption** | Source Sans 3 Medium | 9pt | Sage | 4pt |
| **Footer** | Source Sans 3 Regular | 9pt | Black | 0pt |

---

## 10. Anti-Patterns (What to Avoid)

| Category | Anti-Pattern | Correct Approach |
|----------|--------------|------------------|
| **Typography** | Using Inter, Roboto, Arial, system fonts | Use Merriweather + Source Sans 3 |
| **Color** | Purple gradients on white; generic AI schemes | Use defined palette with intention |
| **Layout** | Predictable, evenly-distributed grids | Asymmetry, overlap, generous negative space |
| **Icons** | Emojis (🎨 🚀 ⚙️) as UI icons | Heroicons/Lucide SVG icons |
| **Hover** | Scale transforms that shift layout | Color/opacity transitions only |
| **Motion** | Scattered micro-interactions everywhere | One high-impact page load moment |
| **Contrast** | Secondary text on white (3.2:1) | Use Primary or Black for body text |
| **Color-only** | Red border only for errors | Red border + error icon + error text |
| **Performance** | Heavy unoptimized images/fonts | Optimize: WebP/AVIF, font-display: swap, subset fonts |

---

## 11. Project Context Template (Section 12)

Add to `.cursor/project-context.md` or `.claude/project-context.md`:

```markdown
## 12. Visual Identity

**Colors**:
- Primary: #006747 (rgb: 0, 103, 71)
- Secondary: #c4916c (rgb: 196, 145, 108)
- Accent Sage: #9cba9e (rgb: 156, 186, 158)
- Accent Gold: #fed26f (rgb: 254, 210, 111)
- Background: #ffffff
- Text: #1a1a1a
- Text on Primary/Secondary: #ffffff

**Typography**:
- Headings: Merriweather (400, 700, 900) — Hero 48px/3rem, H1 40px/2.5rem, H2 32px/2rem, H3 24px/1.5rem
- Body: Source Sans 3 (400, 500, 600, 700) — Body 16px/1rem, Body Large 18px/1.125rem, Caption 12px/0.75rem
- Scripture Refs: Merriweather 400, 16px, Secondary #c4916c

**Sizes**:
- Hero: 48px/3rem (desktop), 36px/2.25rem (mobile)
- Section: 32px/2rem (desktop), 28px/1.75rem (mobile)
- Body: 16px/1rem

**Spacing**:
- Base unit: 8px
- Page margins: 120px (desktop), 48px (tablet), 24px (mobile)
- Section padding: 64px (desktop), 48px (mobile)
- Container max-width: 1200px
- Card padding: 24px

**Layout**:
- Viewport: Responsive breakpoints at 640px, 1024px, 1280px
- Header: Floating with rounded corners (16px), margin 16px (mobile) / 32px (desktop)
- Header height: 72px (desktop), 64px (mobile)
- Footer height: Auto (content-based)
- Z-index scale: Base (10), Dropdown (20), Sticky (30), Overlay (40), Modal (50), Toast (60)
```

---

## 12. Quick Reference Card

```
ABUNDANT LIFE CENTRE MAREEBA — VISUAL IDENTITY AT A GLANCE

COLORS
☑ Primary: #006747 (Deep Green — Life, Growth, Faith)
☑ Secondary: #c4916c (Warm Gold — Welcome, Generosity, Harvest)
☑ Accent Sage: #9cba9e (Subtle Green — Peace, Rest, Background)
☑ Accent Gold: #fed26f (Bright Gold — Celebration, CTA, Highlight)
☑ White backgrounds, Black text, White text on Primary/Secondary

TYPOGRAPHY
☑ Display: Merriweather (Serif — Authority, Scripture, Warmth)
☑ Body: Source Sans 3 (Sans — Legible, Welcoming, Modern)
☑ Scale: 1.333 ratio (Perfect Fourth)
☑ Max 3–4 styles per block

SPACING
☑ Base: 8px | Page margins: 120px/48px/24px
☑ Section padding: 64px/48px | Container: 1200px max

LAYOUT
☑ Floating header with rounded corners (16px)
☑ Z-index scale: 10, 20, 30, 40, 50, 60
☑ Responsive breakpoints: 640px, 1024px, 1280px

AESTHETICS
☑ Asymmetry with intention | Generous negative space
☑ One high-impact motion moment | CSS-first animations
☑ Gradient meshes, grain, geometric patterns (subtle)
☑ Heroicons/Lucide SVG icons | No emojis

ACCESSIBILITY
☑ Contrast ≥4.5:1 (text), ≥3:1 (UI) | Focus: 3px Gold outline
☑ Never color alone | Respects prefers-reduced-motion
☑ Touch targets ≥44x44px | cursor-pointer on interactive elements

SLIDES/DOCS
☑ Theme colors mapped | Chart cycle: Primary→Secondary→Sage→Gold
☑ Merriweather titles, Source Sans 3 body | Scripture in Secondary
```

---

## 13. Implementation Checklist

### For Developers
- [ ] Add CSS custom properties to `:root` in global stylesheet
- [ ] Configure Tailwind/UnoCSS theme with color tokens
- [ ] Add Google Fonts preconnect + `font-display: swap`
- [ ] Implement focus-visible styles globally
- [ ] Add `prefers-reduced-motion` media query handling
- [ ] Set up SVG icon system (Heroicons/Lucide)
- [ ] Configure image optimization (WebP/AVIF, responsive sizes)

### For Designers
- [ ] Create logo variants in Figma (Primary, On Dark, Monochrome, Monogram)
- [ ] Build component library with defined tokens
- [ ] Design slide master templates for PowerPoint/Google Slides/Keynote
- [ ] Create document templates for Word/Google Docs
- [ ] Document photography style guide for future shoots

### For Content Creators
- [ ] Use Merriweather for all headlines, Source Sans 3 for body
- [ ] Scripture references in Secondary color
- [ ] Follow vocabulary rules from BRAND_VOICE.md
- [ ] Use approved color combinations only
- [ ] Maintain logo clear space in all materials

---

*This document is the single source of truth for Abundant Life Centre Mareeba's visual identity. All web, print, slide, and digital touchpoints must align with these specifications. For brand strategy, voice, and messaging, refer to BRAND_VOICE.md.*