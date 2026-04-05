# SPEC.md — Emerge Private Fitness Studio

## 1. Concept & Vision

A cinematic, high-octane fitness brand that commands respect. The site should feel like walking into a premium gym — dark, powerful, charged. Every scroll should feel like a rep: deliberate, intense, rewarding. This isn't a gym listing — it's a digital transformation.

## 2. Design Language

**Aesthetic:** Dark athletic luxury — think Nike Training Club meets premium nightclub. Bold, unapologetic, elite.

**Color Palette:**
- Background: `#0a0a0a` (near black)
- Primary: `#f5f5f5` (off-white text)
- Accent: `#d4ff00` (electric lime — energy, action)
- Secondary accent: `#1a1a1a` (card surfaces)
- Muted: `#666666` (secondary text)

**Typography:**
- Headlines: `Bebas Neue` (bold, condensed, athletic)
- Body: `Inter` (clean, modern, readable)

**Motion Philosophy:**
- Hero: full-screen video/image with staggered text reveal (Framer Motion entry variants)
- Scroll-driven parallax on hero image
- Section reveals: fade-up with slight scale, staggered children
- CTA buttons: magnetic hover effect with scale + glow

**Visual Assets:**
- Hero: dark gym atmosphere image from Unsplash (dark fitness/training)
- Icons: Lucide React (consistent stroke weight)
- Decorative: CSS gradient orbs, grain texture overlay

## 3. Layout & Structure

```
[NAV] — Fixed, transparent → solid on scroll, logo left, CTA right
[HERO] — Full viewport, video/image bg, massive headline, subtext, CTA
[ABOUT] — Split layout: text left, image right, scroll reveal
[SERVICES] — Dark cards with icon + title + description, grid
[MEMBERSHIP] — Pricing tiers with accent highlights
[TESTIMONIALS] — Carousel or stacked quotes
[GALLERY] — Horizontal scroll or masonry grid
[CONTACT] — Split: form left, info right
[FOOTER] — Minimal: logo, socials, copyright
```

**Responsive:** Mobile-first. Hero text scales down. Grid collapses to single column. Nav becomes hamburger below 768px.

## 4. Features & Interactions

- **Smooth scroll** between sections
- **Scroll-triggered animations** on every section (Framer Motion `whileInView`)
- **Nav blur** — backdrop-blur activates on scroll past hero
- **Mobile hamburger** with slide-in menu
- **Contact form** — name, phone, email, message (frontend only, ready for backend)
- **WhatsApp CTA float** — fixed bottom-right button
- **Membership tier highlighting** — middle tier has accent border

## 5. Component Inventory

| Component | States |
|-----------|--------|
| `Nav` | transparent, solid (scrolled), mobile-open |
| `Hero` | default, animated entry |
| `SectionReveal` | hidden, visible (whileInView) |
| `ServiceCard` | default, hover (scale + glow) |
| `PricingCard` | default, featured (accent border) |
| `ContactForm` | idle, focus, submitted |
| `WhatsAppFloat` | default, hover |
| `Footer` | default |

## 6. Technical Approach

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font`
- **Images:** Unsplash (direct URLs, no local storage)
- **Deployment:** Vercel (push to GitHub, connect once)

## 7. Business Info

- **Name:** Emerge Private Fitness Studio
- **Location:** Rajarajeshwari Nagar, Bangalore
- **Phone:** 09606292814
- **Services:** Gym, Aerobics, Crossfit, Zumba, Personal Training (₹4,800/month)
- **Verified:** Justdial verified listing
- **Ratings:** 4.9 · 520 reviews
