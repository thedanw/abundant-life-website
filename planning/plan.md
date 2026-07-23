# Plan: Abundant Life Centre Mareeba Website Redesign

**Goal:** Rebuild the Abundant Life Centre Mareeba website using modern web technologies to create a welcoming, accessible, and effective online presence that helps first-time visitors plan a visit.

**Approach:** Build a static site with modern build tools (likely Next.js or similar) for optimal performance, SEO, and accessibility. Use the comprehensive brand guidelines and existing page content. Implement WCAG 2.1 AA compliance throughout. Scrape images from existing website and optimize for web.

**Branch:** `feature/website-redesign` (from `main`)

## Scope
- **In:** 
  - All pages from site map (Home, About Us, What We Believe, Plan Your Visit, Connect hub, Give, Media, Contact Us, 404)
  - Responsive design (mobile-first)
  - WCAG 2.1 AA accessibility
  - SEO optimization with schema markup
  - Brand guidelines implementation
  - Image scraping and optimization
  - Basic navigation with mobile hamburger menu
  - Contact form integration
  - Social media links

- **Out:** 
  - E-commerce functionality
  - Member portal/login system
  - Complex sermon archive system
  - Events calendar system
  - Content management system (static content for now)
  - Multi-language support
  - Advanced animations or complex interactions

## Context Optimization Strategy

To ensure efficient execution and high-quality output within LLM context limits, the following strategies will be applied throughout the project:

### 1. Compaction (Summarization)
- **Trigger:** When processing large source files like `SITE_MAP.md` or `BRAND_VOICE.md`.
- **Action:** Summarize sections of these files immediately after extracting the necessary information for a specific task. This keeps the active context window focused on the current page being rewritten.

### 2. Observation Masking
- **Trigger:** After reading file contents or running terminal commands.
- **Action:** Replace verbose tool outputs with compact references (e.g., "[Obs: SITE_MAP.md section 2 extracted]") once the data has been used to populate a planning page.

### 3. Context Partitioning (Sub-Agents)
- **Trigger:** During Batch 4 (Page Content Rewrite) and Batch 9 (SEO & Schema Markup).
- **Action:** Process pages in isolation using sub-agents where possible. Each sub-agent will handle a single page's rewrite or schema implementation, preventing cross-page context pollution.

### 4. Budget Management
- **Action:** Prioritize the most relevant context (Current Copy, Brand Voice) over general project metadata when approaching context limits.

## Action Items

### Batch 1: Project Setup & Foundation
- [ ] Task 1.1: Initialize project with chosen framework (Next.js recommended for SSG/SSR)
  Run: `npx create-next-app@latest abundant-life-website --typescript --tailwind --eslint --app --src-dir`
- [ ] Task 1.2: Configure brand tokens in Tailwind config
  Code: `tailwind.config.ts` — add colors, fonts, spacing from BRAND_VISUAL_GUIDELINES.md
- [ ] Task 1.3: Set up global styles with CSS variables
  Code: `src/app/globals.css` — add CSS custom properties for colors, typography, spacing
- [ ] Task 1.4: Create layout components (Header, Footer, MobileNav)
  Code: `src/components/layout/` — Header.tsx, Footer.tsx, MobileNav.tsx
- [ ] Task 1.5: Set up font loading (Merriweather + Source Sans 3)
  Code: `src/app/layout.tsx` — configure Google Fonts with font-display: swap
- [ ] **Commit:** `chore: initialize project with brand tokens and layout components`

### Batch 2: Core Components (TDD)
- [ ] Task 2.1: **Write failing test** for Button component
  Code: `src/components/__tests__/Button.test.tsx`
  Line: `test('renders with correct brand colors', () => { ... })`
- [ ] Task 2.2: **Run test** to verify it fails
  Run: `npm test Button.test.tsx`
  Expected: FAIL (Button not found)
- [ ] Task 2.3: **Implement Button component** with brand variants
  Code: `src/components/Button.tsx` — primary, secondary, outline, accent variants
- [ ] Task 2.4: **Run test** to verify it passes
  Run: `npm test Button.test.tsx`
  Expected: PASS
- [ ] Task 2.5: **Write failing test** for Card component
  Code: `src/components/__tests__/Card.test.tsx`
  Line: `test('renders with proper accessibility', () => { ... })`
- [ ] Task 2.6: **Implement Card component** with hover states
  Code: `src/components/Card.tsx` — with accent gold border on hover
- [ ] Task 2.7: **Run test** to verify it passes
  Run: `npm test Card.test.tsx`
  Expected: PASS
- [ ] **Commit:** `feat: add Button and Card components with brand styling`

### Batch 2.5: Design System & Component Library
- [ ] Task 2.5.1: Create design tokens documentation
  Code: `src/design-system/tokens.md` — colors, typography, spacing, shadows
- [ ] Task 2.5.2: Create component variants documentation
  Code: `src/design-system/components.md` — all component states and variations
- [ ] Task 2.5.3: Create layout patterns documentation
  Code: `src/design-system/patterns.md` — page templates, section layouts
- [ ] Task 2.5.4: Create StyleGuide component for visual reference
  Code: `src/components/StyleGuide.tsx` — interactive component showcase
- [ ] Task 2.5.5: Create consistency checklist
  Code: `src/design-system/checklist.md` — quality gates for visual consistency
- [ ] **Commit:** `docs: add design system documentation and StyleGuide component`

### Batch 3: Source Content Mapping (QUALITY GATE)

> **⚠️ BLOCKING BATCH — Every planning page must have a `## 📄 Current Copy (from SITE_MAP.md)` section before Batch 4 can begin.**
> This batch copies verified content from `SITE_MAP.md` into each planning page. No rewriting yet.

#### Mapping Prompt

Use the following prompt to process one page at a time. Process sequentially using the todo tool.

```
## Role
You are a content mapper for the Abundant Life Centre Mareeba website project. You perform exact copy operations — transferring verified content from the source of truth into planning files. You never write, edit, or improve content.

## Situation
Each planning page in `planning/pages/` (and `planning/pages/connect/`) needs a standardized `## 📄 Current Copy (from SITE_MAP.md)` section. This section contains the raw scraped content from the live site — the source material that Batch 4 will rewrite. Some pages already have this section (home.md, about-us.md); most do not. Without this section, Batch 4 has nothing to rewrite.

## Goal
After this batch, every planning page (except `00-site-map.md`) will have a `## 📄 Current Copy (from SITE_MAP.md)` section containing verified, exact content from SITE_MAP.md — or a `[No live content — PROPOSED PAGE]` marker for new pages with no live equivalent.

## Instructions
Process one page at a time. For each page:

1. **Read the source:** Open `SITE_MAP.md` in full — this is the ONLY content source you may copy from.
2. **Read the mapping:** Open `planning/pages/00-site-map.md` to confirm which SITE_MAP.md section maps to which planning file.
3. **Read the target:** Open the target `{page}.md` and note its current section structure.
4. **Locate the content:** Using the Mapping Table below, find the corresponding section in SITE_MAP.md.
5. **Check for existing section:**
   - If the page already has a `## 📄 Current Copy (from SITE_MAP.md)` section → **replace** the existing content with the fresh copy from SITE_MAP.md.
   - If the page does NOT have this section → **insert** a new `## 📄 Current Copy (from SITE_MAP.md)` section between the `## 🔍 SEO Strategy` and the next section (`## ✍️ REWRITE` or `## Notes`).
6. **Copy exactly:** Transfer the content character-for-character from SITE_MAP.md. Do not edit, paraphrase, reformat, summarize, or clean up anything. Preserve all headings, lists, links, blockquotes, bold/italic, and whitespace.
7. **Proposed pages:** If the page is marked PROPOSED in the Mapping Table and has no live content, write: `[No live content — PROPOSED PAGE]` and nothing else.
8. **Track progress:** Mark the todo item complete, then move to the next page.

## Constraints
- **Copy only.** This is a copy operation, NOT a rewrite. Content must match SITE_MAP.md exactly.
- **No additions.** Do not add content that does not exist in SITE_MAP.md.
- **No deletions.** Do not remove content that exists in SITE_MAP.md.
- **No reformatting.** Preserve original headings, lists, links, emphasis, and blockquotes exactly as scraped.
- **No fabrication.** If a page has no live content, use the placeholder — never invent content.
- **No modifications to other sections.** Only add or replace the `## 📄 Current Copy` section. Do not touch Page Overview, SEO Strategy, REWRITE, Internal Linking, or Checklist sections.
- **Context Optimization:** After extracting the section for the current page, summarize the remaining parts of SITE_MAP.md to keep the context window lean for subsequent pages.

## File Structure Target

Each planning page should have this structure after this batch:

    # [Page Title] → `[URL]`
    
    ## 📫 Page Overview
    [existing — do not modify]
    
    ## 🔍 SEO Strategy
    [existing — do not modify]
    
    ## 📄 Current Copy (from SITE_MAP.md)
    [NEW — content copied EXACTLY from SITE_MAP.md]
    
    ## ✍️ REWRITE — [Page Name]
    [existing — Batch 4 will populate this]
    
    ## 🔗 Internal Linking Opportunities
    [existing — do not modify]
    
    ## ✅ Rewrite Checklist
    [existing — do not modify]

## Mapping Table

| Planning File | SITE_MAP.md Section | Notes |
|---------------|---------------------|-------|
| `home.md` | 1. HOME | Already has Current Copy section — replace with fresh copy |
| `about-us.md` | 2. ABOUT US | Already has Current Copy section — replace with fresh copy |
| `what-we-believe.md` | 3. WHAT WE BELIEVE | |
| `connect/events.md` | 4. EVENTS | Live URL was /events → maps to /connect/events |
| `connect/prayer.md` | 5. PRAYER | Live URL was /prayer → maps to /connect/prayer |
| `connect/missions.md` | 6. MISSIONS | Live URL was /missions → maps to /connect/missions |
| `give.md` | 7. GIVE | |
| `watch.md` | 8. DOWNLOADS | Live URL was /downloads → maps to /watch |
| `contact-us.md` | 9. CONTACT US | |
| `connect/index.md` | — | PROPOSED PAGE — no live content |
| `connect/groups.md` | — | PROPOSED PAGE — no live content |
| `connect/serve.md` | — | PROPOSED PAGE — no live content |
| `plan-your-visit.md` | — | PROPOSED PAGE — no live content |
| `404.md` | — | PROPOSED PAGE — no live content |
| `00-site-map.md` | — | Meta file — skip entirely |

## Sense Check
After completing all pages, verify each:
- [ ] Every page (except 00-site-map.md) has a `## 📄 Current Copy (from SITE_MAP.md)` section
- [ ] Content in each Current Copy section matches SITE_MAP.md exactly
- [ ] Proposed pages show `[No live content — PROPOSED PAGE]`
- [ ] No hallucinated, fabricated, or edited content exists in any Current Copy section
- [ ] Original formatting (headings, links, blockquotes, lists) is preserved
- [ ] No other sections were accidentally modified (Page Overview, SEO Strategy, REWRITE, etc.)
```

#### Quality Gate (Before Batch 4)

**⚠️ DO NOT PROCEED TO BATCH 4 UNTIL ALL CHECKS PASS**

- [x] Every planning page (except 00-site-map.md) has a `## 📄 Current Copy (from SITE_MAP.md)` section
- [x] Content matches SITE_MAP.md exactly — no edits, no paraphrasing
- [x] Proposed pages are marked `[No live content — PROPOSED PAGE]`
- [x] No hallucinated or fabricated content in any Current Copy section
- [x] **User sign-off received**

---

### Batch 4: Page Content Rewrite (QUALITY GATE)

> **⚠️ BLOCKING BATCH — Do not proceed to Batch 5 until all pages pass the quality gate.**
> Content must come exclusively from `SITE_MAP.md`. No hallucination, no presumption.

#### Rewrite Prompt (RSCIT-Optimised)

Use the following prompt to rewrite one page at a time. Process pages sequentially using the todo tool.

```
## Role
You are a church copywriter rewriting website content for Abundant Life Centre Mareeba — a Pentecostal church (ACC) in Far North Queensland.

## Situation
Each planning page in `planning/pages/` now has a `## 📄 Current Copy (from SITE_MAP.md)` section with the raw scraped content and a `## ✍️ REWRITE` section to be populated. Your job: replace the REWRITE section with fresh brand-aligned copy derived exclusively from the Current Copy section.

## Constraints (Non-Negotiable)
- **Source of truth:** `SITE_MAP.md` — every fact, date, name, URL, and detail must come from here. If it's not in SITE_MAP.md, it doesn't exist.
- **If unsure, say so.** Write `[NEEDS VERIFICATION: ...]` rather than guessing. Never fabricate.
- **Brand voice:** `BRAND_VOICE.md` — match the tone spectrum for this page type, use approved vocabulary, avoid forbidden terms.
- **Australian spelling:** Centre, organise, programme, realise, etc.
- **Scripture format:** Book Chapter:Verse — e.g. "John 10:10b (NKJV)"
- **No AI slop.** Zero tolerance for: "delve", "tapestry", "leverage", "robust", "cutting-edge", "seamless", "elevate", "transformative", "vibrant", "empower", "landscape" (as metaphor).
- **Every rewrite** must pass `"C:\Users\theda\AppData\Local\Programs\Python\Python312\Scripts\unslop.exe" --stdin --deterministic` with zero changes before saving.
- **Context Optimization:** Use observation masking for previously read sections of SITE_MAP.md and BRAND_VOICE.md once the current page's requirements are met.
- **No SEO Clusters:** The SEO strategy is strictly on-page (meta titles, descriptions, schema markup). Do not write blog posts, articles, or "SEO cluster" content.
- **Evergreen Content:** Write for long-term relevance. Avoid "current" news, specific dates (unless permanent fixtures like service times), or time-sensitive language. The site should not require regular updating.

## Instructions
1. Read `SITE_MAP.md` in full — this is your only fact source.
2. Read `BRAND_VOICE.md` in full — this is your tone/vocabulary guide.
3. Read the target `{page}.md` — note Page Overview, SEO Strategy, and Current Copy.
4. Extract the relevant section from SITE_MAP.md for this page.
5. Write the new REWRITE section:
   - H1: clear value prop + brand name (e.g. "About Us — Abundant Life Centre Mareeba")
   - Body: factual content from SITE_MAP.md, organised with H2/H3 headings
   - CTAs: link to other pages using the internal linking table
   - FAQ: only questions answerable from SITE_MAP.md
6. Run: `echo "$REWRITE" | "C:\Users\theda\AppData\Local\Programs\Python\Python312\Scripts\unslop.exe" --stdin --deterministic`
7. If unslop changes anything, re-run until output is stable (zero diff).
8. Replace the REWRITE section in `{page}.md` with the clean output.
9. Reset the Rewrite Checklist — uncheck all, then re-check only verified items.
10. Mark the todo item complete, move to next page.

## Output Template

    ## ✍️ REWRITE — [Page Name]
    
    ### [H1: Clear value prop with brand name]
    
    [Opening paragraph — 2-3 sentences, warm and inviting, using tone from BRAND_VOICE.md Tone Spectrum for this page type]
    
    ### [H2 Section: Key topic from SITE_MAP.md]
    
    [Body content — factual, concise, brand-voice compliant]
    
    ### [H2 Section: Another topic]
    
    [Body content]
    
    ---
    
    **CTA:** [Action] → [internal link]

## Example (Contact Us page)

    ## ✍️ REWRITE — Contact Us
    
    ### Contact Us — Abundant Life Centre Mareeba
    
    We'd love to hear from you. Whether you're planning a visit, have a question, or need prayer — our team is here.
    
    ### Church Office
    
    **Hours:** 9:00 am – 1:00 pm, Monday to Friday
    **Phone:** +61 7 4092 5004
    **Email:** info@alcmareeba.com.au
    **Address:** 133-137 Walsh Street, Mareeba QLD 4850
    
    ### Sunday Service
    
    Join us every Sunday at 9:30 am for praise, worship, and fellowship.
    
    ---
    
    **CTA:** Plan Your Visit → `/plan-your-visit`
```

#### Page Processing Order

- [x] Task 4.1: Rewrite `home.md`
  Source: Current Copy section (1. HOME)
- [x] Task 4.2: Rewrite `about-us.md`
  Source: Current Copy section (2. ABOUT US)
- [x] Task 4.3: Rewrite `what-we-believe.md`
  Source: Current Copy section (3. WHAT WE BELIEVE)
- [x] Task 4.4: Rewrite `plan-your-visit.md`
  Source: PROPOSED PAGE — write from scratch using SITE_MAP.md facts
- [x] Task 4.5: Rewrite `give.md`
  Source: Current Copy section (7. GIVE)
- [x] Task 4.6: Rewrite `watch.md`
  Source: Current Copy section (8. DOWNLOADS)
- [x] Task 4.7: Rewrite `contact-us.md`
  Source: Current Copy section (9. CONTACT US)
- [x] Task 4.8: Rewrite `404.md`
  Source: PROPOSED PAGE — site navigation links only
- [x] Task 4.9: Rewrite `connect/index.md`
  Source: PROPOSED PAGE — overview of sub-pages
- [x] Task 4.10: Rewrite `connect/events.md`
  Source: Current Copy section (4. EVENTS)
- [x] Task 4.11: Rewrite `connect/prayer.md`
  Source: Current Copy section (5. PRAYER)
- [x] Task 4.12: Rewrite `connect/missions.md`
  Source: Current Copy section (6. MISSIONS)
- [x] Task 4.13: Rewrite `connect/groups.md`
  Source: PROPOSED PAGE — no live content
- [x] Task 4.14: Rewrite `connect/serve.md`
  Source: PROPOSED PAGE — no live content

#### Quality Gate (Before Batch 5)

**✅ ALL CHECKS PASSED — Batch 4 complete**

- [x] Every REWRITE section contains only facts from `SITE_MAP.md`
- [x] No fabricated statistics, names, dates, or links
- [x] All encoding corruption fixed (`???` → `—`, `→`, `–`)
- [x] Rewrite Checklists reset and verified
- [x] Brand voice compliance: correct tone per page type
- [x] Vocabulary compliance: no forbidden terms
- [x] Australian spelling throughout
- [x] Scripture references use Book Chapter:Verse (NKJV)
- [x] **User sign-off received**

---

### Batch 5: Homepage Landing Page Template (QUALITY GATE)
> Scope: `home.md` only — `/` route
- [ ] Task 5.1: **Write failing test** for PageTemplate component
  Code: `src/components/__tests__/PageTemplate.test.tsx`
  Line: `test('renders with proper SEO metadata', () => { ... })`
- [ ] Task 5.2: **Implement PageTemplate** with SEO, breadcrumbs, layout
  Code: `src/components/PageTemplate.tsx` — reusable page structure
- [ ] Task 5.3: **Run test** to verify it passes
  Run: `npm test PageTemplate.test.tsx`
  Expected: PASS
- [ ] Task 5.4: Create homepage hero section
  Code: `src/components/homepage/Hero.tsx` — "Have a heart of worship" with service times, CTAs
- [ ] Task 5.5: Create homepage welcome section
  Code: `src/components/homepage/Welcome.tsx` — church identity, mission statement
- [ ] Task 5.6: Create homepage service times section
  Code: `src/components/homepage/ServiceTimes.tsx` — Sunday service details
- [ ] Task 5.7: Create homepage watch online section
  Code: `src/components/homepage/WatchOnline.tsx` — YouTube, Facebook, audio links
- [ ] Task 5.8: Create homepage Mareeba Markets section
  Code: `src/components/homepage/Markets.tsx` — market details, CTA
- [ ] Task 5.9: Create homepage impact section
  Code: `src/components/homepage/Impact.tsx` — missions, community impact cards
- [ ] Task 5.10: Create homepage call-to-action section
  Code: `src/components/homepage/CallToAction.tsx` — Plan Your Visit, Give, Contact
- [ ] Task 5.11: Create homepage FAQ section
  Code: `src/components/homepage/FAQ.tsx` — common questions for first-time visitors
- [ ] Task 5.12: Assemble homepage from components
  Code: `src/app/page.tsx` — combine all homepage sections
- [ ] Task 5.13: **QUALITY GATE: Visual Review**
  Run: `npm run dev` — preview homepage
  Checklist:
  - [ ] Hero section matches brand guidelines (colors, typography, spacing)
  - [ ] All CTAs are clear and accessible
  - [ ] Responsive design works on mobile, tablet, desktop
  - [ ] Images are optimized and properly sized
  - [ ] Accessibility audit passes (WCAG 2.1 AA)
  - [ ] Brand consistency check passes
- [ ] Task 5.14: **QUALITY GATE: User Testing**
  Run: Manual testing with 2-3 people
  Checklist:
  - [ ] First-time visitors can find service times immediately
  - [ ] Primary CTA "Plan Your Visit" is prominent
  - [ ] Navigation is intuitive
  - [ ] Page loads quickly (< 2.5s LCP)
  - [ ] Content is readable and engaging
- [ ] Task 5.15: **QUALITY GATE: Brand Review**
  Run: Compare against BRAND_VISUAL_GUIDELINES.md and BRAND_VOICE.md
  Checklist:
  - [ ] Colors match brand palette exactly
  - [ ] Typography follows brand guidelines
  - [ ] Voice and tone align with brand pillars
  - [ ] Scripture references are properly formatted
  - [ ] Australian spelling used throughout
- [ ] Task 5.16: **HOMEPAGE FINALIZATION**
  Run: User approval required before proceeding
  **⚠️ DO NOT PROCEED TO BATCH 6 UNTIL THIS GATE IS PASSED**
- [ ] **Commit:** `feat: add homepage landing page template with quality gates`

### Batch 6: Connect Hub & Subpages
- [ ] Task 6.1: Create Connect hub page
  Code: `src/app/connect/page.tsx` — hub with links to Events, Prayer, Missions, Groups, Serve
- [ ] Task 6.2: Create Events page
  Code: `src/app/connect/events/page.tsx` — simple event listings
- [ ] Task 6.3: Create Prayer page with request form
  Code: `src/app/connect/prayer/page.tsx` — confidential prayer request form
- [ ] Task 6.4: Create Missions page
  Code: `src/app/connect/missions/page.tsx` — IMLA, Living Waters, etc.
- [ ] Task 6.5: Create Groups page
  Code: `src/app/connect/groups/page.tsx` — small groups information
- [ ] Task 6.6: Create Serve page
  Code: `src/app/connect/serve/page.tsx` — volunteer opportunities
- [ ] **Commit:** `feat: add Connect hub and subpages`

### Batch 7: Utility Pages
- [ ] Task 7.1: Create Plan Your Visit page
  Code: `src/app/plan-your-visit/page.tsx` — service times, location, what to expect
- [ ] Task 7.2: Create Give page with giving options
  Code: `src/app/give/page.tsx` — Tithe.ly integration, bank details
- [ ] Task 7.3: Create Media page
  Code: `src/app/watch/page.tsx` — links to YouTube, Facebook, audio recordings
- [ ] Task 7.4: Create Contact Us page with form
  Code: `src/app/contact-us/page.tsx` — contact form, office hours, map
- [ ] Task 7.5: Create 404 page with site map
  Code: `src/app/not-found.tsx` — custom 404 with search and navigation
- [ ] **Commit:** `feat: add utility pages (Plan Visit, Give, Media, Contact, 404)`

### Batch 8: Image Optimization & Assets
- [ ] Task 8.1: Download and optimize scraped images
  Run: Script to download images from Jina AI results, compress, convert to WebP
- [ ] Task 8.2: Create responsive image components
  Code: `src/components/ResponsiveImage.tsx` — with lazy loading, srcset
- [ ] Task 8.3: Add images to pages
  Code: Update page files with optimized images
- [ ] Task 8.4: Create favicon and meta images
  Code: `public/` — favicon.ico, og-image.png, etc.
- [ ] **Commit:** `feat: add optimized images and responsive image component`

### Batch 9: SEO & Schema Markup
> Scope: All 14 page routes + sitemap
- [ ] Task 9.1: Create schema utility library
  Code: `src/lib/schema.ts` — Church, Organization, LocalBusiness, Event, Person schemas
- [ ] Task 9.2: Add schema to `home.md` → `src/app/page.tsx`
  Schema: Church, Organization, LocalBusiness, Service, Event (Markets)
- [ ] Task 9.3: Add schema to `about-us.md` → `src/app/about-us/page.tsx`
  Schema: Organization, Person (pastors), AboutPage, FAQPage
- [ ] Task 9.4: Add schema to `what-we-believe.md` → `src/app/what-we-believe/page.tsx`
  Schema: WebPage, FAQPage
- [ ] Task 9.5: Add schema to `plan-your-visit.md` → `src/app/plan-your-visit/page.tsx`
  Schema: WebPage, Service
- [ ] Task 9.6: Add schema to `give.md` → `src/app/give/page.tsx`
  Schema: WebPage, DonationAction
- [ ] Task 9.7: Add schema to `watch.md` → `src/app/watch/page.tsx`
  Schema: WebPage, VideoObject (YouTube links)
- [ ] Task 9.8: Add schema to `contact-us.md` → `src/app/contact-us/page.tsx`
  Schema: ContactPage, LocalBusiness, PostalAddress
- [ ] Task 9.9: Add schema to `404.md` → `src/app/not-found.tsx`
  Schema: none (error page)
- [ ] Task 9.10: Add schema to `connect/index.md` → `src/app/connect/page.tsx`
  Schema: WebPage, ItemList (sub-pages)
- [ ] Task 9.11: Add schema to `connect/events.md` → `src/app/connect/events/page.tsx`
  Schema: Event, ItemList
- [ ] Task 9.12: Add schema to `connect/prayer.md` → `src/app/connect/prayer/page.tsx`
  Schema: WebPage
- [ ] Task 9.13: Add schema to `connect/missions.md` → `src/app/connect/missions/page.tsx`
  Schema: WebPage, Organization (partners)
- [ ] Task 9.14: Add schema to `connect/groups.md` → `src/app/connect/groups/page.tsx`
  Schema: WebPage
- [ ] Task 9.15: Add schema to `connect/serve.md` → `src/app/connect/serve/page.tsx`
  Schema: WebPage, VolunteerAction
- [ ] Task 9.16: Add meta tags and Open Graph data to all pages
  Code: Update layout and pages with proper meta tags
- [ ] Task 9.17: Create sitemap.xml and robots.txt
  Code: `src/app/sitemap.ts`, `src/app/robots.ts`
- [ ] Task 9.18: Test SEO with Google Rich Results Test
  Run: Manual testing with Google tools
- [ ] **Commit:** `feat: add SEO optimization and schema markup`

### Batch 10: Accessibility & Testing
> Scope: All 14 page routes — test each page individually
- [ ] Task 10.1: Add focus indicators and skip links (global)
  Code: `src/components/SkipLink.tsx`, update global styles
- [ ] Task 10.2: Test keyboard navigation — `home.md` → `/`
- [ ] Task 10.3: Test keyboard navigation — `about-us.md` → `/about-us`
- [ ] Task 10.4: Test keyboard navigation — `what-we-believe.md` → `/what-we-believe`
- [ ] Task 10.5: Test keyboard navigation — `plan-your-visit.md` → `/plan-your-visit`
- [ ] Task 10.6: Test keyboard navigation — `give.md` → `/give`
- [ ] Task 10.7: Test keyboard navigation — `watch.md` → `/watch`
- [ ] Task 10.8: Test keyboard navigation — `contact-us.md` → `/contact-us`
- [ ] Task 10.9: Test keyboard navigation — `404.md` → `/not-found`
- [ ] Task 10.10: Test keyboard navigation — `connect/index.md` → `/connect`
- [ ] Task 10.11: Test keyboard navigation — `connect/events.md` → `/connect/events`
- [ ] Task 10.12: Test keyboard navigation — `connect/prayer.md` → `/connect/prayer`
- [ ] Task 10.13: Test keyboard navigation — `connect/missions.md` → `/connect/missions`
- [ ] Task 10.14: Test keyboard navigation — `connect/groups.md` → `/connect/groups`
- [ ] Task 10.15: Test keyboard navigation — `connect/serve.md` → `/connect/serve`
- [ ] Task 10.16: Add ARIA labels and roles
  Code: Update components with proper ARIA attributes
- [ ] Task 10.17: Run accessibility audit
  Run: `npm run build && npx axe-cli http://localhost:3000`
- [ ] Task 10.18: Fix any accessibility issues found
  Code: Update components based on audit results
- [ ] **Commit:** `feat: add accessibility features and fix audit issues`

### Batch 11: Performance & Polish
> Scope: All 14 page routes — verify each page meets Core Web Vitals
- [ ] Task 11.1: Optimize images and fonts (global)
  Run: `npm run build` — check bundle sizes
- [ ] Task 11.2: Add loading states and error boundaries (global)
  Code: `src/components/Loading.tsx`, `src/components/ErrorBoundary.tsx`
- [ ] Task 11.3: LCP audit — `home.md` → `/`
- [ ] Task 11.4: LCP audit — `about-us.md` → `/about-us`
- [ ] Task 11.5: LCP audit — `what-we-believe.md` → `/what-we-believe`
- [ ] Task 11.6: LCP audit — `plan-your-visit.md` → `/plan-your-visit`
- [ ] Task 11.7: LCP audit — `give.md` → `/give`
- [ ] Task 11.8: LCP audit — `watch.md` → `/watch`
- [ ] Task 11.9: LCP audit — `contact-us.md` → `/contact-us`
- [ ] Task 11.10: LCP audit — `404.md` → `/not-found`
- [ ] Task 11.11: LCP audit — `connect/index.md` → `/connect`
- [ ] Task 11.12: LCP audit — `connect/events.md` → `/connect/events`
- [ ] Task 11.13: LCP audit — `connect/prayer.md` → `/connect/prayer`
- [ ] Task 11.14: LCP audit — `connect/missions.md` → `/connect/missions`
- [ ] Task 11.15: LCP audit — `connect/groups.md` → `/connect/groups`
- [ ] Task 11.16: LCP audit — `connect/serve.md` → `/connect/serve`
- [ ] Task 11.17: Test responsive design on multiple devices
  Run: Manual testing on mobile, tablet, desktop
- [ ] Task 11.18: Add animations (respect prefers-reduced-motion)
  Code: Add CSS animations for page loads, hover states
- [ ] Task 11.19: Final polish and brand consistency check
  Run: Compare against BRAND_VISUAL_GUIDELINES.md
- [ ] **Commit:** `feat: add performance optimizations and final polish`

### Batch 12: Deployment & Documentation
- [ ] Task 12.1: Set up deployment (Netlify/Vercel/GitHub Pages)
  Run: Configure deployment pipeline
- [ ] Task 12.2: Create deployment documentation
  Code: `README.md` — setup, development, deployment instructions
- [ ] Task 12.3: Add environment variables for contact form
  Code: `.env.example` — required environment variables
- [ ] Task 12.4: Test deployment
  Run: Deploy to staging, test all functionality
- [ ] Task 12.5: Final review and launch
  Run: Deploy to production, verify all pages work
- [ ] **Commit:** `chore: add deployment configuration and documentation`

## Non-Functional Requirements
- **Performance:** 
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Image optimization: WebP format, responsive sizes, lazy loading
  - Font optimization: font-display: swap, preloading critical fonts
  - Code splitting: Automatic with Next.js

- **Security:**
  - HTTPS enforced
  - Content Security Policy headers
  - No sensitive data in client-side code
  - Environment variables for API keys

- **Accessibility:**
  - WCAG 2.1 AA compliance
  - Keyboard navigation for all interactive elements
  - Screen reader compatible
  - Focus indicators with 3px Gold outline
  - Color contrast ratios verified (4.5:1 for text, 3:1 for UI)
  - Respect prefers-reduced-motion

## Integration Points
- **Contact Form:** Formspree, Netlify Forms, or custom API endpoint
- **Giving:** Tithe.ly embed or redirect
- **Social Media:** Facebook, YouTube, Instagram links
- **Maps:** Google Maps embed for location
- **Analytics:** Google Analytics or privacy-focused alternative (Plausible)
- **Deployment:** Netlify, Vercel, or GitHub Pages with CI/CD