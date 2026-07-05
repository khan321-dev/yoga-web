# Surya Yoga Rishikesh — Website

A fully responsive, SEO-optimized, animated marketing website for a Yoga Teacher Training School in Rishikesh, India.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (custom earthy theme)
- **Framer Motion** (scroll animations, carousel, parallax)
- **Radix UI** (Accordion, Tabs, Dialog)
- **React Hook Form + Zod** (form validation)
- **Lucide React** (icons)

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo>
cd nextproject1
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact/booking form emails |
| `NEXT_PUBLIC_SITE_URL` | Your production domain |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps Embed API key (optional) |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── layout.tsx              # Root layout (fonts, Navbar, Footer)
├── page.tsx                # Home page
├── sitemap.ts              # Dynamic sitemap.xml
├── robots.ts               # robots.txt
├── courses/[slug]/         # Course detail pages
├── book/                   # Multi-step booking form
├── accommodation/          # Accommodation page
├── blog/                   # Blog listing + [slug] detail
└── contact/                # Contact page + form

components/
├── layout/
│   ├── Navbar.tsx          # Sticky navbar with dropdown
│   └── Footer.tsx          # Full footer with links
├── ui/
│   ├── AnimatedSection.tsx # whileInView scroll animation wrapper
│   ├── AnimatedCounter.tsx # Animated number counter
│   ├── Button.tsx          # Polymorphic button
│   ├── Accordion.tsx       # Radix UI accordion
│   └── Tabs.tsx            # Radix UI tabs
└── sections/
    ├── HeroSection.tsx     # Full-bleed parallax hero
    ├── WhyRishikesh.tsx    # Benefits section
    ├── CourseCards.tsx     # Course card grid
    ├── StatsSection.tsx    # Animated counters
    ├── WhyChooseUs.tsx     # Feature blocks
    ├── AccommodationPreview.tsx
    ├── DailySchedule.tsx   # Tabbed schedule
    ├── TestimonialsCarousel.tsx
    ├── FAQSection.tsx      # Accordion + JSON-LD
    └── CTASection.tsx      # Contact form

lib/
├── courses.ts              # All course data
├── structured-data.ts      # JSON-LD schema helpers
├── motion-variants.ts      # Shared Framer Motion variants
└── utils.ts                # cn() utility
```

## Pages

| Route | Description |
|---|---|
| `/` | Home page |
| `/courses/[slug]` | Course detail (100/200/300/500hr + retreat) |
| `/book` | Multi-step booking form |
| `/accommodation` | Accommodation guide |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail |
| `/contact` | Contact form + map |

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy — Vercel auto-detects Next.js

## SEO Features

- Next.js Metadata API on all pages (title, description, OG, Twitter)
- Dynamic `sitemap.xml` at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- JSON-LD: `LocalBusiness`, `Course`, `FAQPage`, `BreadcrumbList`
- Semantic HTML with proper heading hierarchy
- Descriptive alt text on all images
- `next/font` optimized fonts (Fraunces + Manrope)

## Customization

### School Name / Details
Edit `lib/structured-data.ts` → `localBusinessSchema()` to update:
- School name, address, phone, email
- Social media links
- Aggregate rating

### Course Data
Edit `lib/courses.ts` to update pricing, dates, curriculum, and schedule.

### Color Palette
Edit `app/globals.css` → `@theme inline` block to adjust the terracotta, sage, and gold color scales.

### Fonts
Edit `app/layout.tsx` to swap `Fraunces` / `Manrope` for any Google Font.
