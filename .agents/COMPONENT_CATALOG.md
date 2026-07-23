# Component Catalog

Authoritative reference for all UI components in the Abundant Life Centre website. Use this when building new pages or features to ensure consistency.

---

## Core Components (`src/components/`)

### Button
**File:** `src/components/Button.tsx`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'accent'` | `'primary'` | Visual style |
| `href` | `string` | — | Renders as `<Link>` (Next.js) when provided |
| `children` | `ReactNode` | — | Button label |
| `className` | `string` | — | Additional classes |
| `onClick` | `() => void` | — | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disabled state |
| `ariaLabel` | `string` | — | Accessible label |

**Color Conventions:**
- `primary` → Green (`--color-primary`)
- `secondary` → Secondary brown (`--color-secondary`)
- `accent` → Gold (`--color-accent-gold`) — use for high-emphasis CTAs
- `outline` → Transparent with border

**Critical:** When placing buttons on dark/green backgrounds, override outline borders: `!border-white !text-white`.

---

### Card
**File:** `src/components/Card.tsx`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card content |
| `className` | `string` | — | Additional classes |
| `hoverEffect` | `boolean` | `true` | Enable hover border animation |
| `as` | `'div' \| 'article' \| 'section'` | `'div'` | Wrapper element |
| `ariaLabel` | `string` | — | Accessible label |

**Styling:** White bg, sage border, gold left-border appears on hover.

---

### PageTemplate
**File:** `src/components/PageTemplate.tsx`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Page content |
| `title` | `string` | — | Main heading |
| `subtitle` | `string` | — | Optional subtitle |
| `className` | `string` | — | Additional classes |

**Accessibility:** Renders `<main role="main">` with `id="main-content"` for SkipLink targeting.

---

### SkipLink
**File:** `src/components/SkipLink.tsx`

**No props.** Renders a skip-to-content link anchored to `#main-content`. Visually hidden until focused via keyboard (`Tab`), then shows with gold background.

---

## Layout Components (`src/components/layout/`)

### Header
**File:** `src/components/layout/Header.tsx`  
**Type:** `"use client"` — interactive, requires client-side JS.

**Features:**
- Sticky positioning, green background
- Logo (SVG, inline)
- Desktop: nav links with dropdown menus (About Us, Connect sub-menus)
- Mobile: hamburger toggle → `<MobileNav>` overlay

**MobileNav:** Separate component in `src/components/layout/MobileNav.tsx`.

---

### Footer
**File:** `src/components/layout/Footer.tsx`  
**Type:** Server component.

**Structure:** 4-column nav layout:
1. **Visit** — service times, location link
2. **Connect** — small groups, events, serve, missions
3. **Learn** — what we believe, watch online
4. **Resources** — contact, give, privacy

**Extras:** Logo (inverted), social links (Facebook, YouTube), copyright.

---

## Homepage Sections (`src/components/homepage/`)

### Hero
**File:** `src/components/homepage/Hero.tsx`

**Features:**
- Background image via `next/image` (`fill` + `priority`)
- Dark overlay using `color-mix(in srgb, #352616 50%, transparent)`
- **CSS Specificity Warning:** `globals.css` heading rule (`h1` gets `color: var(--color-primary)`) overrides Tailwind. Use `!text-white` prefix to override.
- Service times card with `backdrop-blur`
- CTAs: "Plan Your Visit" (accent) + "Church Online" (primary → YouTube)

---

### Welcome
**File:** `src/components/homepage/Welcome.tsx`

Church identity section. Links to `/about-us`. Content-driven, no interactive state.

---

### ServiceTimes
**File:** `src/components/homepage/ServiceTimes.tsx`

Sage green background. Service details in white card. "Plan Your Visit" primary button.

---

### WatchOnline
**File:** `src/components/homepage/WatchOnline.tsx`

YouTube link (primary button) + Sermon Archive link (secondary button).

---

### CallToAction
**File:** `src/components/homepage/CallToAction.tsx`

Green primary background. Three CTAs:
- "Plan Your Visit" — accent button
- "Give Online" — outline button (`!border-white !text-white`)
- "Contact Us" — outline button (`!border-white !text-white`)

**Critical:** Outline buttons on dark bg require the `!` prefix overrides.

---

### FAQ
**File:** `src/components/homepage/FAQ.tsx`  
**Type:** `"use client"` — uses `useState` for accordion toggle.

**Content:** 5 questions — service times, location, dress code, kids, prayer.

---

### Markets & Impact
**Files:** `src/components/homepage/Markets.tsx`, `Impact.tsx`

**Status:** Exist on disk but **NOT imported** in `page.tsx`. Reserved for future use.

---

## Design Token Reference

All tokens defined in `src/app/globals.css` as CSS custom properties:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#006747` | Green — headers, primary buttons, links |
| `--color-secondary` | `#c4916c` | Brown — secondary elements |
| `--color-accent-sage` | `#9cba9e` | Sage — borders, section backgrounds |
| `--color-accent-gold` | `#fed26f` | Gold — hover accents, skip link bg |

**Font:** DM Sans (loaded via `next/font/google` in `layout.tsx`).

---

## Common Patterns

1. **Client vs Server:** Only use `"use client"` when state or browser APIs are needed (Header, MobileNav, FAQ). All other components should be server components.
2. **Link rendering:** Button with `href` renders as Next.js `<Link>`. No `<a>` tags needed.
3. **Dark backgrounds:** Always use `!text-white` on headings placed over dark backgrounds due to the `h1-h6` color rule in `globals.css`.
4. **Outline on dark bg:** Use `!border-white !text-white` to override outline button defaults.
5. **Accessibility:** SkipLink targets `#main-content` (set by PageTemplate). All interactive elements need `ariaLabel` when text content is insufficient.
