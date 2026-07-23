# Abundant Life Centre Mareeba ??? Sitemap & Strategy

**Platform:** Next.js (static export) ??? GitHub Pages
**Source URL:** http://www.abundantlifemareeba.org.au/
**Last Updated:** 2026-07-21
**Status:** Proposed Structure ??? Ready for Implementation
**Design Philosophy:** Zero-maintenance static site ??? All content is set once at build time. Dynamic content (sermons, livestreams) links directly to YouTube.
**Design Principles:** [Church Web Design Skill](../../.agents/skills/boss/ui-ux/church-webdesign/SKILL.md)

---

## ??????? SITE MAP

### Content Files (`planning/pages/`)

```
planning/pages/
????????? 00-site-map.md              ??? This file
????????? 404.md                      ??? /404 (Custom error page)
????????? home.md                     ??? / (Home)
????????? about-us.md                 ??? /about-us
???   ????????? #our-leadership (FIRST ??? most sought-after)
???   ????????? #our-history
???   ????????? #our-affiliation
????????? what-we-believe.md          ??? /what-we-believe
????????? plan-your-visit.md          ??? /plan-your-visit (NEW)
????????? give.md                     ??? /give
????????? watch.md                    ??? /watch (REPLACES /downloads)
????????? contact-us.md               ??? /contact-us
????????? connect/
???   ????????? index.md                ??? /connect (HUB page)
???   ????????? events.md               ??? /connect/events
???   ????????? prayer.md               ??? /connect/prayer
???   ????????? missions.md             ??? /connect/missions
???   ????????? groups.md               ??? /connect/groups
???   ????????? serve.md                ??? /connect/serve
????????? privacy-policy.md           ??? /privacy-policy (NEW ??? Legal)
????????? terms-of-service.md         ??? /terms-of-service (NEW ??? Legal)
```

### Live URL Structure

```
https://www.abundantlifemareeba.org.au/ (HTTPS enforced)
????????? / (Home)
????????? /about-us
???   ????????? #our-leadership (Meet the Pastors)
???   ????????? #our-history (Humble Beginnings)
???   ????????? #our-affiliation (Australian Christian Churches)
????????? /what-we-believe
???   ????????? #statement-of-faith
???   ????????? #worship-practices
???   ????????? #spiritual-gifts
???   ????????? #healing-prayer
???   ????????? #communion-baptism
???   ????????? #eschatology
????????? /connect (HUB)
???   ????????? /connect/events
???   ????????? /connect/prayer
???   ????????? /connect/missions
???   ????????? /connect/groups
???   ????????? /connect/serve
????????? /plan-your-visit (NEW ??? First-time visitor onboarding)
????????? /give
????????? /watch (REPLACES /downloads ??? YouTube links only)
????????? /contact-us
????????? /privacy-policy (NEW ??? Legal requirement)
????????? /terms-of-service (NEW ??? Legal requirement)
????????? /404 (Custom ??? with search + site map)
```

**Removed:** `/abundant-life-apostolic-conference` (orphan page ??? Conference content moves to `/connect/events` as featured event)

---

## ???? NAVIGATION ARCHITECTURE

> **Principle:** Limit main navigation to **5???7 items maximum** to reduce cognitive load (Church Web Design Skill ??2). First-time visitors must find what they need in ???2 clicks.

### Primary Navigation (Header)

| # | Label | URL | Rationale |
|---|-------|-----|-----------|
| 1 | Plan Your Visit | `/plan-your-visit` | **#1 priority for first-time visitors** ??? placed first |
| 2 | About Us | `/about-us` | Includes sub-nav: Leadership, Our History, What We Believe |
| 3 | Connect | `/connect` | Hub for Events, Prayer, Missions, Groups, Serve |
| 4 | Give | `/give` | Standalone ??? high-intent action |
| 5 | Watch | `/watch` | YouTube ??? church online, past services, sermons |
| 6 | Contact | `/contact-us` | Always accessible |

**Home** is accessed via the logo (always links to `/`). No dedicated nav item ??? Saves a slot.
**What We Believe** lives under About Us (sub-nav) to keep main nav at 6 items. It remains a full standalone page at `/what-we-believe`.

### Footer Navigation

All pages listed in the sitemap are accessible from the footer, including Privacy Policy, Terms of Service, and the 404 page's site map.

### Mobile Navigation
- Hamburger menu for all screen widths below 768px
- Touch targets minimum 44??44px (WCAG 2.1 ??2.5.5)
- "Plan Your Visit" and "Give" pinned as persistent bottom-bar CTAs on mobile

---

## ???? GLOBAL SEO STRATEGY

### Primary Keyword Targets (Site-Wide)

| Tier | Keywords | Target Pages |
|------|----------|--------------|
| **Brand** | "Abundant Life Centre Mareeba", "ALC Mareeba" | All pages |
| **Local Church** | "church Mareeba", "Pentecostal church Mareeba QLD", "church near Mareeba" | Home, Plan Your Visit, Contact |
| **Service Times** | "Sunday service Mareeba 9:30am", "church times Mareeba" | Home, Plan Your Visit |
| **Denominational** | "Australian Christian Churches Mareeba", "Assemblies of God Mareeba" | About Us, What We Believe |

### Content Cluster Strategy

> **Zero-maintenance approach:** No dynamic content, no CMS, no regular updates. All content is static HTML built once. Sermons and livestreams link to YouTube ??? no local hosting.

```
PILLAR PAGES (Static ??? set once)
????????? / (Home)                    ??? Service times, welcome, CTAs
????????? /about-us                   ??? Leadership, history, affiliation
????????? /what-we-believe            ??? Statement of faith (standalone)
????????? /plan-your-visit            ??? First-time visitor guide
????????? /give                       ??? Giving information + Tithe.ly
????????? /watch                      ??? YouTube channel links (church online, sermons)
????????? /connect                    ??? Hub for engagement
???   ????????? /connect/events         ??? Recurring events (static list)
???   ????????? /connect/prayer         ??? Prayer request form (EmailJS)
???   ????????? /connect/missions       ??? Mission partners (static)
???   ????????? /connect/groups         ??? Group information (static)
???   ????????? /connect/serve          ??? Volunteer teams (static)
????????? /contact-us                 ??? Contact form (EmailJS) + info
????????? /privacy-policy             ??? Legal (static)
????????? /terms-of-service           ??? Legal (static)
```

### Schema Markup Requirements (Per Page)

| Page | Required Schema | Enhanced Schema |
|------|----------------|-----------------|
| Home | `Church`, `Organization`, `LocalBusiness` | `Service` (Sunday), `Event` (markets) |
| About Us | `Organization`, `Person` (pastors) | `AboutPage`, `FAQPage` |
| What We Believe | `Article`, `FaithStatement` (custom) | `FAQPage`, `BreadcrumbList` |
| Connect Hub | `WebPage`, `ItemList` | `Event` (upcoming), `Organization` (partners) |
| Plan Your Visit | `Church`, `FAQPage` | `HowTo` (directions), `Place` |
| Give | `WebPage`, `PaymentService` | `FAQPage`, `LocalBusiness` |
| Watch | `WebPage` | `BreadcrumbList` |
| Contact | `LocalBusiness`, `ContactPage` | `FAQPage`, `Place` |
| Privacy Policy | `WebPage` | `BreadcrumbList` |
| Terms of Service | `WebPage` | `BreadcrumbList` |

---

## ???? PAGE-BY-PAGE OVERVIEW

Each page below includes: purpose, keywords, content, **primary CTA**, **visual storytelling notes**, **trust/social proof elements**, and **accessibility requirements**.

---

### 1. Home (`/`)
**Purpose:** Primary landing page ??? Communicate identity, service times, and drive conversions
**Target Keywords:** "church Mareeba", "Pentecostal church Mareeba QLD", "Abundant Life Centre Mareeba", "Sunday service Mareeba 9:30am"

**Primary CTA:** "Plan Your Visit" (repeated 2?? On page ??? Hero + bottom)
**Secondary CTAs:** "Watch Latest Sermon", "Give Online"

**Key Content:**
- Hero: authentic photo of congregation (not stock), service time overlay, "Plan Your Visit" button
- Welcome summary (2???3 sentences max)
- Community impact cards (static stats ??? Update only when numbers change significantly)
- "Watch on YouTube" link (??? `/watch`)
- Testimonials (2???3 real congregation quotes ??? Set once)
- FAQ (6 questions ??? Scannable accordion)
- Footer CTA: "Plan Your Visit" + "Give"

**What this page does NOT have:**
- ??? No latest sermon feed (links to YouTube via `/watch`)
- ??? No upcoming events carousel (use `/connect/events` for static event list)
- ??? No dynamic content that requires regular updates

**Visual Storytelling:** Tight candid shots of people interacting ??? Families, children, worship. Avoid wide shots of empty rooms. Show diversity of age and activity.

**Trust/Social Proof:** Real photos. ACC affiliation badge.

**Accessibility:** H1 contains "Abundant Life Centre Mareeba ??? Church in Mareeba, QLD". All images have descriptive alt text. Service times in text (not image). Color contrast ???4.5:1.

**Performance:** Hero image optimized to <200KB (WebP). Lazy-load below-fold content. Target: <2s Largest Contentful Paint.

---

### 2. About Us (`/about-us`)
**Purpose:** Introduce leadership first (most sought-after), then tell the 40+ year story, and establish denominational credibility
**Target Keywords:** "Abundant Life Centre Mareeba history", "Pastor Darryl Roos Mareeba", "Australian Christian Churches Mareeba", "Assemblies of God Mareeba history"

**Primary CTA:** "Plan Your Visit" (??? `/plan-your-visit`)
**Secondary CTAs:** "What We Believe", "Contact Us"

**Key Content:**
- **Our Leadership** (FIRST section ??? Most sought-after info): Pastor Darryl & Patricia Roos full bios, photos, ministry philosophy. Associate/youth pastors; ministry team leaders
- Our History: Timeline (1983???present), historical photos
- Our Affiliation: ACC explanation, badge
- FAQ (4 questions)

**Section Order on Page:**
1. `#our-leadership` ??? Meet the Pastors (bios, photos, contact)
2. `#our-history` ??? Humble Beginnings (timeline, archival photos)
3. `#our-affiliation` ??? Australian Christian Churches

**Visual Storytelling:** Professional but warm leadership headshots. Candid shots of staff in ministry contexts. Historical photos from church archives. Facility photos showing the building and grounds.

**Trust/Social Proof:** Real names, real photos, real bios. 40+ years of continuous ministry. Denominational affiliation. Ordination/qualification details where relevant.

**Accessibility:** Leadership cards use `<article>` semantics. Images have alt text with name + role. Timeline uses semantic `<ol>` markup. All historical photos have alt text. Heading hierarchy: H1 ??? H2 (sections) ??? H3 (sub-sections).

---

### 3. What We Believe (`/what-we-believe`)
**Purpose:** broad doctrinal statement ??? Standalone pillar page
**Target Keywords:** "Pentecostal beliefs Australia", "Assemblies of God statement of faith", "what do Pentecostals believe", "baptism of Holy Spirit speaking in tongues", "divine healing prayer"

**Primary CTA:** "Visit Us This Sunday" (??? `/plan-your-visit`)
**Secondary CTAs:** "Contact Us for Questions", "Download Full Statement"

**Key Content:**
- 10 Articles of Faith (full text from SITE_MAP.md source of truth)
- Worship practices, spiritual gifts, healing & prayer, communion & baptism, eschatology
- FAQ (6 questions)
- Breadcrumb navigation: Home ??? About Us ??? What We Believe

**Visual Storytelling:** Warm, reverent imagery ??? Open Bible, worship moments, communion. Avoid sterile/graphic-heavy layouts.

**Trust/Social Proof:** Clear statement that this is the official doctrinal position. Links to ACC national statement of faith for denominational alignment.

**Accessibility:** Long-form content uses sticky table of contents. Scripture references linked to Bible Gateway. Readable font size (???18px for body). Paragraph max-width ???75ch.

**Performance:** Page may be long ??? Implement lazy-loading for sections below the fold. Anchor links for quick navigation.

---

### 4. Connect Hub (`/connect`)
**Purpose:** Central hub for all community engagement ??? Events, prayer, missions, groups, serving
**Target Keywords:** "church events Mareeba", "Christian community Far North Queensland", "prayer ministry Mareeba", "church groups Mareeba", "volunteer at church Mareeba"

**Primary CTA:** "Join an Event" (??? `/connect/events`)
**Secondary CTAs:** "Submit Prayer Request", "Find a Group", "Start Serving"

**Key Content:**
- Hub navigation cards (5 sub-pages with icons)
- Quick action cards (Events, Prayer, Give, Serve)
- Social proof: Ministry team information

**Visual Storytelling:** Action shots of people serving, praying together, at events. Candid > posed.

**Accessibility:** Card grid uses semantic `<nav>` with aria-labels. Touch targets ???44px. Skip-link to main content.

---

### 5. Connect/Events (`/connect/events`)
**Purpose:** Static list of recurring church gatherings ??? Set once, rarely changes
**Target Keywords:** "church events Mareeba", "Sunday service Mareeba", "youth group Mareeba"
**Maintenance:** Zero ??? Recurring events (Sunday service, Wednesday prayer, etc.) don't change. Special events are announced via Facebook, not the website.

**Primary CTA:** "Plan Your Visit" (??? `/plan-your-visit`)
**Secondary CTAs:** "Watch Online" (??? `/watch`)

**Key Content (all static):**
- Weekly gatherings (4): Sunday Service, Wednesday Prayer, Youth, Kids ??? Times and locations
- Mareeba Markets (recurring: 2nd and 5th Saturday)
- Contact for more information (??? `/contact-us`)

**What this page does NOT have:**
- No ? No dynamic calendar or event dates, ? No registration forms, ? No "upcoming events" that need regular updates.

---

### 6. Connect/Prayer (`/connect/prayer`)
**Purpose:** Prayer request submission + theology of corporate prayer
**Target Keywords:** "prayer request Mareeba", "church prayer team", "submit prayer request online", "intercessory prayer"

**Primary CTA:** "Submit Your Prayer Request" (form on page)
**Secondary CTAs:** "Join the Prayer Team"

**Key Content:**
- Prayer request form (name, email, category, request text)
- How it works (3 steps: submit ??? Prayed for ??? Follow-up)
- Biblical basis (4 passages: Matt 18:19-20, James 5:16, Phil 4:6-7, 1 Thess 5:17)
- FAQ (4 questions)
- Privacy assurance: "Your requests are confidential"

**Visual Storytelling:** Intimate prayer moments. Small groups praying together. Not performative.

**Trust/Social Proof:** "Our prayer team meets weekly to pray for every request." Confidentiality guarantee.

**Accessibility:** Form has proper labels, error messages, and aria-describedby. Submit button has loading state. Keyboard-navigable.

---

### 7. Connect/Missions (`/connect/missions`)
**Purpose:** show Acts 1:8 strategy ??? Local to global partnerships
**Target Keywords:** "Christian missions Australia", "support missionaries Queensland", "church missions program Mareeba", "Living Waters Village Borneo", "IMLA Indigenous ministry"

**Primary CTA:** "Support a Mission" (??? Giving designation)

**Key Content:**
- Missions philosophy (4 spheres: Jerusalem, Judea, Samaria, Ends of the Earth)
- Local outreach (3 partners)
- National partners (3)
- International partners (2: Living Waters Village Borneo, IMLA Indigenous Ministry)
- Engagement pathways (4: give, pray, go, share)
- Deep-dive links for major partners

**Visual Storytelling:** Real photos from mission trips and partner organizations. Maps showing global reach. Before/after impact stories.

**Trust/Social Proof:** Do not hallucinate any data. Named partners with verifiable organizations. No reports other than infor provided.

**Accessibility:** Partner logos have alt text. Map is supplemented with text list. Impact statistics are in text, not infographics only.

---

### 8. Connect/Groups (`/connect/groups`)
**Purpose:** Life groups & community finder ??? NEW PAGE
**Target Keywords:** "church groups Mareeba", "Bible study Mareeba", "life groups Far North Queensland", "Christian community groups"

**Primary CTA:** "Contact Us to Join" (??? `/contact-us`)
**Secondary CTAs:** "Learn About Each Team"

**Key Content:**
- Group types (4 categories: Life Groups, Bible Study, Youth, Women's/Men's)
- General description of each type
- Contact information to get connected
- FAQ (3 questions)

**Visual Storytelling:** Small groups in homes, coffee shops, around tables. Intimate, relational imagery.

**Trust/Social Proof:** "25+ groups meeting across Mareeba." Featured leader testimonials. "Average group size: 8???12 people."

**Accessibility:** Filter form is keyboard-navigable with ARIA live regions for results. Group cards are consistently structured.

---

### 9. Connect/Serve (`/connect/serve`)
**Purpose:** Volunteer recruitment & onboarding ??? NEW PAGE
**Target Keywords:** "volunteer at church Mareeba", "serve team church", "church ministry opportunities"

**Primary CTA:** "Contact Us to Start Serving" (??? `/contact-us`)
**Secondary CTAs:** "Learn About Each Team"

**Key Content:**
- 6 ministry teams with descriptions: Worship, Kids, Youth, Tech/AV, Hospitality, Outreach
- Each team: description, time commitment
- Volunteer testimonial quotes (static)
- Contact form for expressions of interest (??? `/contact-us`)

**Visual Storytelling:** People actively serving ??? Running sound, leading kids, setting up chairs, greeting. Action-oriented.

**Trust/Social Proof:** Named team leaders. Role descriptions with clear expectations.

**Accessibility:** Application form is fully accessible. Role descriptions are scannable. Time commitments clearly stated.

---

### 10. Plan Your Visit (`/plan-your-visit`) ??? NEW PAGE
**Purpose:** First-time visitor onboarding ??? Reduce friction, answer every question before arrival
**Target Keywords:** "church near Mareeba", "visit church Mareeba", "Sunday service Mareeba 9:30am", "what to expect at church", "church parking Mareeba"

**Primary CTA:** "Reserve My Seat" (guest registration form ??? Low-commitment)
**Secondary CTAs:** "Get Directions", "See What's On"

**Key Content:**
- What to expect: arrival ??? Welcome ??? Worship ??? Message ??? Connection
- Kids & youth programs (ages, safety, check-in process)
- Directions + embedded Google Map (with HowTo schema)
- Parking information
- Dress code: "Come as you are"
- Guest registration form (name, # attending, kids ages, prayer request)
- FAQ (7 questions): parking, duration, kids, dress, accessibility, first-timer welcome, what to bring
- Accommodation info for visitors from out of town

**Visual Storytelling:** Welcome team greeting at door. Family arriving. Kids in program. Parking lot. Friendly faces. "This could be you" perspective.

**Trust/Social Proof:** "100+ first-time visitors this year." "Average Sunday attendance: [X]." Guest testimonial: "I felt welcomed from the moment I walked in."

**Accessibility:** Map has text directions as fallback. Form is mobile-optimized. Page works offline (key info cached). Wheelchair accessibility noted.

**Performance:** Page must load in <2s on mobile. Map lazy-loaded. Form submission is optimistic (no full-page reload).

---

### 11. Give (`/give`)
**Purpose:** Secure, simple giving with biblical teaching and transparency
**Target Keywords:** "tithe online Australia", "church giving Mareeba", "donate to church Queensland", "Christian giving biblical basis"

**Primary CTA:** "Give" (external link to Tithe.ly giving page)
**Secondary CTAs:** "Learn Why We Give"

**Key Content:**
- Why we give (5 biblical principles ??? Static)
- Giving methods: Tithe.ly (link), bank transfer details, in-person, post to
- Accountability statement (static)
- FAQ (6 questions)

**Visual Storytelling:** People serving, mission trips, community impact ??? Showing what giving makes possible. Not images of money/plates. Only what is in the documents. Do not hallucinate stories.

**Trust/Social Proof:** Do not hallucinate giving reports.

**Accessibility:** Tithe.ly link provices all accessibility and accountability

**Security:** SSL encryption. PCI-compliant via Tithe.ly. No card data stored on-site. Privacy policy link prominent.

---

### 12. Watch (`/watch`) ??? REPLACES /downloads and /media
**Purpose:** Simple page linking to YouTube for church online, past services, and sermons
**Target Keywords:** "watch church online Mareeba", "sermons YouTube Mareeba", "Pentecostal church online"
**Maintenance:** Zero ??? All content lives on YouTube. This page never needs updating.

**Primary CTA:** "Watch Church Online Live This Sunday"
**Secondary CTAs:** "Watch on YouTube"

**Key Content (all static, set once):**
- Hero: "Watch ??? Church Online & Past Services"
- CTA button: [Watch Live on YouTube](https://www.youtube.com/@abundantlifemareeba)
- "Join us live every Sunday at 9:30 am" (text ??? No dynamic clock)
- Link to YouTube channel for past services and sermons
- Legacy audio archive link (Google Drive ??? Pre-2015 recordings)
- "New to ALC? Plan Your Visit" CTA back to `/plan-your-visit`

**What this page does NOT have:**
- No ? No embedded video player (links to YouTube instead), ? No sermon archive or search (YouTube handles this), ? No podcast subscription links, ? No downloadable resources, ? No dynamic/updated content.

**Accessibility:** All links have descriptive text. YouTube link opens in new tab with `rel="noopener noreferrer"`. Legacy archive links have file type labels.

---

### 13. Contact Us (`/contact-us`)
**Purpose:** Multi-channel contact with LocalBusiness schema for local SEO
**Target Keywords:** "church near Mareeba", "contact Abundant Life Centre", "Mareeba church address", "church office hours Mareeba", "pastor Darryl Roos contact"

**Primary CTA:** "Send Us a Message" (contact form)
**Secondary CTAs:** "Call Us", "Get Directions"

**Key Content:**
- Contact info grid: visit, call, email, social media links
- Contact form (name, email, subject dropdown, message)
- Embedded Google Map + directions
- Office hours
- Special occasions: weddings, funerals, baptisms, pastoral counselling
- FAQ (3 questions)
- Social media links (Facebook, YouTube, Instagram)

**Visual Storytelling:** Exterior photo of church building (easy to recognize from road). Interior of welcome area. Staff member available.

**Trust/Social Proof:** Response time: "We respond within 24 hours." Named contact person. Office hours clearly stated.

**Accessibility:** Form has proper labels and error states. Phone number is a `tel:` link. Email is a `mailto:` link. Map has text address fallback.

---

### 14. Privacy Policy (`/privacy-policy`) ??? NEW PAGE
**Purpose:** Legal requirement ??? Explain data collection, use, and protection
**Key Content:** Data collected (forms, analytics), cookies, third-party services (Tithe.ly, Google Analytics), user rights, contact for questions

**Accessibility:** Plain language. Clear headings. Last-updated date.

---

### 15. Terms of Service (`/terms-of-service`) ??? NEW PAGE
**Purpose:** Legal requirement ??? Website usage terms, disclaimers, intellectual property
**Key Content:** Acceptable use, content ownership, liability limitations, link to privacy policy

**Accessibility:** Plain language. Clear headings. Last-updated date.

---

### 16. 404 Page (`/404`)
**Purpose:** Graceful error recovery ??? Keep visitors on site
**Key Content:**
- Friendly message ("Oops! This page doesn't exist.")
- Search box
- Quick links (6 most popular pages)
- Full site map accordion
- Contact fallback: "Need help? Call us at [phone]"

**Primary CTA:** "Go Home"
**Accessibility:** Clear heading. Search form accessible. Links are keyboard-navigable.

---

## ???? BRAND & VISUAL GUIDELINES

> **Single Source of Truth:** See [BRAND_VISUAL_GUIDELINES.md](../../BRAND_VISUAL_GUIDELINES.md) for the complete visual identity system.

### Core Principles
- **Color Psychology:** Use the primary and secondary palettes defined in the Brand Guidelines to build trust and recognition.
- **Typography:** Follow the system font stack and hierarchy defined in the Brand Guidelines.
- **Photography:** Adhere to the "Authentic Photos Only" standard ??? Real congregation, real events, no stock photos.
- **Accessibility:** All visual choices must meet WCAG 2.1 AA contrast requirements (???4.5:1 for body text).

---

## ??? ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

> **Principle:** Ensure everyone can access your content regardless of ability (Church Web Design Skill ??1).

### Site-Wide Requirements
- **Color contrast:** ???4.5:1 for normal text, ???3:1 for large text
- **Keyboard navigation:** All interactive elements reachable via Tab
- **Skip links:** "Skip to main content" on every page
- **Semantic HTML:** Proper heading hierarchy (H1 ??? H2 ??? H3), landmarks, lists
- **Alt text:** Descriptive alt text for all meaningful images
- **Focus indicators:** Visible focus ring on all interactive elements
- **Error handling:** Form errors announced via `aria-live` regions
- **Language:** `lang="en"` on `<html>` element

### Page-Specific Requirements
- **Forms:** All inputs have associated `<label>` elements
- **Maps:** Text directions as fallback for embedded maps
- **Media:** Captions for video, transcripts for audio
- **Tables:** Proper `<th>` and `<caption>` elements
- **Documents:** PDFs tagged for accessibility where possible

---

## ??? PERFORMANCE TARGETS

> **Principle:** Page load times under 3 seconds ??? every second of delay costs 7% conversions (Church Web Design Skill ??6.1).

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Largest Contentful Paint (LCP)** | <2.5s | Core Web Vitals |
| **First Input Delay (FID)** | <100ms | Core Web Vitals |
| **Cumulative Layout Shift (CLS)** | <0.1 | Core Web Vitals |
| **Total page weight** | <500KB (initial load) | Lighthouse |
| **Time to Interactive** | <3s on 4G | Lighthouse |

### Optimization Strategies
- **Images:** WebP format, responsive `srcset`, lazy-load below fold
- **Fonts:** Google Fonts with `display: swap` (Merriweather + Source Sans 3)
- **Scripts:** Defer non-critical JS. Inline critical CSS.
- **Hosting:** GitHub Pages (global CDN, HTTPS, zero cost)
- **Caching:** Browser caching for repeat visits (GitHub Pages handles this)
- **External content:** YouTube embeds are lazy-loaded via link (not iframe) ??? Zero impact on page weight

---

## ???? MIGRATION MAP: OLD ??? NEW URLs

| Old URL | New URL | Redirect Type | Notes |
|---------|---------|---------------|-------|
| `/` | `/` | ??? | |
| `/about-us` | `/about-us` | ??? | |
| `/what-we-believe` | `/what-we-believe` | ??? | |
| `/events` | `/connect/events` | 301 | |
| `/prayer` | `/connect/prayer` | 301 | |
| `/missions` | `/connect/missions` | 301 | |
| `/downloads` | `/watch` | 301 | |
| `/give` | `/give` | ??? | |
| `/contact-us` | `/contact-us` | ??? | |
| `/abundant-life-apostolic-conference` | `/connect/events#apostolic-conference` | 301 | Conference ??? Events featured |

---

## ???? SECURITY & MAINTENANCE

> **Principle:** Build it once, deploy it, forget it. This is a zero-maintenance static site.

### Why Zero Maintenance?

The church doesn't have staff or volunteers to regularly update website content. Therefore:

- **All content is static** ??? Built once at deploy time, never changes until the next code push
- **No CMS, no admin panel, no login** ??? Nothing to hack, nothing to update
- **No sermon archive to maintain** ??? YouTube is the single source of truth for all media
- **No events calendar to manage** ??? Recurring events are hardcoded as static content
- **No blog or news section** ??? Social media (Facebook/Instagram) handles time-sensitive updates

**What this means in practice:** The website is a digital brochure, not a living platform. It answers the questions first-time visitors ask (Who are you? What do you believe? When are your services? How do I get there?) and stays correct indefinitely because church fundamentals (beliefs, service times, location, leadership) rarely change.

### Security Requirements
- **SSL:** HTTPS enforced (GitHub Pages provides this automatically)
- **No admin panel:** Nothing to brute-force or compromise
- **No database:** No SQL injection, no data breaches
- **Form protection:** EmailJS handles form submission (no server-side processing)
- **Privacy compliance:** Privacy Policy page covers data collected via forms only
- **Dependencies:** Keep npm packages updated quarterly (`pnpm update`)

### What Might?????? Change (And How)

| Change | Trigger | Effort | How |
|--------|---------|--------|-----|
| Service time change | Rare (years) | Edit 1 file, redeploy | Update `layout.tsx` JSON-LD + Footer |
| New pastor | Rare (decades) | Edit About Us page | Update `about-us.md` content file |
| New mission partner | Rare | Edit Missions page | Update `missions.md` content file |
| Phone/email change | Rare | Edit Contact + Footer | Update `contact-us.md` + `Footer.tsx` |
| New social media account | Rare | Edit Footer | Add link to `Footer.tsx` |
| Privacy policy update | Annual | Edit Privacy Policy page | Update `privacy-policy.md` |

**None of these require weekly/monthly attention.** They happen when they happen ??? Typically once a year at most.

### Backup Strategy
- **Code:** Git repository (GitHub) ??? Full history preserved
- **Content:** All page content lives in markdown files in this repo
- **No database to back up:** Nothing to export or restore
- **Deployments:** GitHub Pages maintains deploy history

---

## ??? IMPLEMENTATION PROCESS

> Build once, deploy, done. No ongoing content management required.

### Step 1: Discovery ??? (COMPLETE)
- X x] Scraped existing site content ??? `SITE_MAP.md`, x] Identified platform (Wix) ??? Migrated to Next.js static approach, x] Created content files for all pages.

### Step 2: Planning ??? (COMPLETE)
- X x] Created sitemap with optimized information architecture, x] Defined user journeys (first-time visitor, member, returning visitor), x] Established SEO strategy with keyword targets, x] Defined schema markup requirements per page, x] Decided on zero-maintenance static approach.

### Step 3: Design (IN PROGRESS)
- [ ] Wireframes for key pages (Home, Plan Your Visit, About Us)
- [ ] Visual mockups incorporating brand colors and typography
- [ ] Accessibility compliance review of designs
- [ ] Mobile-first responsive design specs

### Step 4: Content Creation (One-time)
- [ ] Home page copy
- [ ] About Us + Person schema (includes leadership bios)
- [ ] What We Believe (validate against SITE_MAP.md source of truth ???)
- [ ] Plan Your Visit (first-time visitor focused)
- [ ] Connect sub-pages (Events, Prayer, Missions, Groups, Serve)
- [ ] Give page with Tithe.ly integration
- [ ] Watch page (YouTube links ??? Simple, static)
- [ ] Contact Us + Privacy Policy + Terms of Service

### Step 5: Development
- [ ] Next.js static site with Tailwind CSS
- [ ] Implement responsive navigation (6-item primary nav)
- [ ] Build all pages with proper schema markup
- [ ] EmailJS integration for contact + prayer forms
- [ ] Deploy to GitHub Pages with custom domain
- [ ] Add custom 404 page
- [ ] Set up breadcrumbs sitewide

### Step 6: Testing & QA
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Accessibility audit (axe DevTools + manual keyboard testing)
- [ ] Performance audit (Lighthouse score ???90)
- [ ] Form submission testing (contact, prayer)
- [ ] Schema validation (Google Rich Results Test)

### Step 7: Launch
- [ ] Deploy to GitHub Pages
- [ ] Submit sitemap to Google Search Console
- [ ] Claim and optimize Google Business Profile
- [ ] **Done.** No ongoing maintenance required.

---

## ???? SUCCESS METRICS

| Metric | Target | Measurement |
|--------|--------|-------------|
| **First-time visitor ??? Plan Your Visit** | 5% conversion | Google Analytics events |
| **Mobile usability score** | ???95 | Google Search Console |
| **Lighthouse performance** | ???90 | Lighthouse audit |
| **Accessibility score** | ???90 | axe DevTools |
| **Avg. session duration** | >2 min | Google Analytics |
| **Bounce rate (Home)** | <50% | Google Analytics |
| **Form submissions/month** | 10+ | EmailJS dashboard |
| **YouTube channel visits from site** | Track clicks to YouTube | Outbound link tracking |

> **Note:** Success metrics are measured once after launch to validate effectiveness. No ongoing monitoring is required ??? the site will continue to work correctly indefinitely.

---

*Generated 2026-07-19 ??? Updated 2026-07-21 for zero-maintenance static approach*
