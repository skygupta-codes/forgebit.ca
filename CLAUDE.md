# CLAUDE.md — Forgebit Website

## Project Overview

**Business Name:** Forgebit  
**Domain:** forgebit.ca  
**Type:** Sole Proprietorship — Technical Services & Digital Products  
**Location:** Canada  
**Tagline (suggested):** *Build. Launch. Evolve.*

Forgebit is a one-person Canadian tech studio offering websites, AI chatbots, SaaS products, and custom digital tools. The brand is bold, builder-centric, and technically credible — not a generic agency. Every deliverable is crafted with precision.

---

## Services Offered

1. **Website Design & Development** — Custom-built, performant websites for small businesses, startups, and professionals
2. **AI Chatbots** — Intelligent, context-aware chatbots powered by LLMs (Claude, OpenAI, etc.)
3. **SaaS Products** — End-to-end design and development of web-based software tools
4. **Custom Digital Tools** — Internal dashboards, automation tools, scrapers, integrations, and more

---

## Target Audience

- Canadian small-to-medium businesses wanting a professional web presence
- Startups needing MVPs built fast
- Entrepreneurs looking to add AI capabilities to their workflows
- Businesses that want a reliable, technical solo operator — not a bloated agency

---

## Tech Stack (preferred, for reference)

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Python (FastAPI)
- **AI:** Anthropic Claude API, OpenAI API
- **Auth:** Clerk
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel, AWS
- **Payments:** Stripe

---

## Website Structure

Build a single-page marketing website with the following sections, in order:

### 1. `Hero`
- Bold headline communicating what Forgebit does
- Subheadline with value proposition
- Two CTAs: **"See My Work"** (scrolls to portfolio) and **"Get a Quote"** (scrolls to contact)
- Subtle animated background (forge/fire sparks, grid, or circuit texture — fits the brand)

### 2. `Services`
- Four service cards: Websites, AI Chatbots, SaaS Products, Custom Tools
- Each card has an icon, title, short description (2–3 sentences)
- Hover effect on cards

### 3. `How It Works`
- 3-step process: **Discover → Build → Launch**
- Clean numbered steps with short descriptions
- Positions Forgebit as structured and professional

### 4. `Portfolio / Work` *(placeholder)*
- A 2–3 card grid of sample/placeholder projects
- Each card: project name, short description, tech tags, and a "View Project" link (use `#` for now)
- Label section clearly as "Selected Work"

### 5. `Why Forgebit`
- 3–4 differentiators (e.g., Solo operator = direct communication, Fast turnaround, Canadian-based, Full-stack capable)
- Can be icon + headline + short blurb layout

### 6. `Contact / Get a Quote`
- Simple contact form: Name, Email, Project Type (dropdown), Message, Submit button
- Note: Form does not need to be wired up — use a placeholder or mailto fallback
- Include email: hello@forgebit.ca (placeholder)

### 7. `Footer`
- Logo / wordmark
- Navigation links
- © 2025 Forgebit. All rights reserved.
- forgebit.ca

---

## Design Direction

### Aesthetic
**Industrial-Forge meets modern tech.** Think raw steel, heat, precision craftsmanship — but clean and digital. This is NOT a playful startup look. It should feel like a serious builder who delivers quality work.

### Color Palette
```
--color-bg:        #0D0D0D   /* Near-black base */
--color-surface:   #141414   /* Card/section surfaces */
--color-border:    #222222   /* Subtle borders */
--color-accent:    #FF6B2B   /* Forge orange — primary CTA color */
--color-accent-2:  #FFB347   /* Amber/ember — secondary highlight */
--color-text:      #F0EDE8   /* Warm off-white for body text */
--color-muted:     #888888   /* Secondary/muted text */
```

### Typography
- **Display/Headings:** `Bebas Neue` or `Syne` — strong, geometric, commanding
- **Body:** `DM Sans` or `Figtree` — clean, modern, readable
- Import from Google Fonts

### Motion & Effects
- Subtle ember/particle animation in hero (CSS or canvas — keep it lightweight)
- Fade-in + slide-up on scroll for section entries (use Intersection Observer)
- Smooth hover states on all buttons and cards (scale + glow)
- No excessive animations — purposeful motion only

### Layout Rules
- Max content width: `1200px`
- Mobile-first, fully responsive
- Use generous padding (sections: `py-24` equivalent)
- Cards should have dark backgrounds with subtle border and a glow on hover using accent color

---

## Code Requirements

- **Single HTML file** — all CSS and JS inline (no external build tools required)
- Import fonts from Google Fonts CDN
- Use vanilla JS for animations and scroll interactions
- No frameworks needed (pure HTML/CSS/JS)
- Must be **fully responsive** (mobile, tablet, desktop)
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Add smooth scroll behavior: `scroll-behavior: smooth`
- All images: use placeholder images from `https://placehold.co` with dark/branded styling

---

## Tone & Copy Guidelines

- **Confident, not arrogant.** Forgebit is skilled and knows it — but not flashy.
- **Builder language.** Use words like: forge, build, craft, ship, precision, engineered, deployed.
- **No buzzword soup.** Avoid: "synergy", "cutting-edge", "leverage", "paradigm".
- **Direct.** Short sentences. Punchy headlines. Clear CTAs.
- **Canadian but globally capable.** Mention Canadian roots subtly; don't overdo it.

---

## Sample Copy

**Hero Headline:** `We Build Digital Products That Work.`  
**Hero Subheadline:** `Websites, AI chatbots, SaaS tools, and custom software — engineered with precision by a Canadian tech studio.`

**Services intro:** `From a polished landing page to a full AI-powered SaaS product, Forgebit handles the full stack.`

**How It Works — Step 1:** `Discover — We start with a focused conversation about your goals, timeline, and budget. No fluff.`  
**How It Works — Step 2:** `Build — Design and development happen fast, with regular check-ins and transparent progress.`  
**How It Works — Step 3:** `Launch — Your product goes live, tested, and ready. Ongoing support available.`

**CTA Button Text:** `Get a Quote`, `See My Work`, `Let's Build`

---

## File Output

Produce the website as a **single file:** `index.html`

Ensure the file:
- Opens correctly in any modern browser without a build step
- Has no broken links (use `#` for unlinked items)
- Is production-presentable (clean code, commented sections)
- Passes a basic visual check on mobile viewport (375px) and desktop (1440px)