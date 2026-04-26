# ☀️ Summer-care — Childcare Company Website

A complete, production-ready childcare company website built with **Next.js 15 App Router**, **Tailwind CSS**, and **Lucide React** icons.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
summercare/
├── app/
│   ├── globals.css            # Design system: fonts, animations, utilities
│   ├── layout.tsx             # Root layout with Navbar, Footer, WhatsApp, SEO
│   ├── page.tsx               # Homepage
│   ├── not-found.tsx          # Custom 404 page
│   ├── about/
│   │   └── page.tsx           # About: story, mission, team, certifications
│   ├── services/
│   │   └── page.tsx           # Services: 5 detailed programs
│   ├── gallery/
│   │   └── page.tsx           # Gallery: masonry grid + lightbox + filters
│   ├── enrollment/
│   │   └── page.tsx           # Enrollment form with full validation
│   └── contact/
│       └── page.tsx           # Contact form, map, WhatsApp, office hours
│
├── components/
│   ├── Navbar.tsx             # Sticky nav with mobile hamburger menu
│   ├── Footer.tsx             # 4-column footer with social icons
│   ├── WhatsAppFloat.tsx      # Floating animated WhatsApp CTA button
│   └── ScrollAnimations.tsx   # IntersectionObserver scroll reveal
│
├── public/                    # Static assets (add your favicon, logo, etc.)
├── tailwind.config.js         # Custom design tokens and colors
├── next.config.js             # Image domains and Next.js config
└── tsconfig.json
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Brand Blue | `#4AB8E8` | Primary CTA, links, accents |
| Brand Green | `#6DD5A3` | Secondary CTA, success states |
| Brand Yellow | `#FFD166` | Stars, highlights |
| Brand Coral | `#FF8C74` | Warm accents |
| Brand Navy | `#2D4A8A` | Headings, dark text |
| Text | `#2C3E50` | Body text |

### Typography
- **Display / Headings:** Nunito (extrabold 800–900)
- **Body / UI:** Quicksand (medium–bold 500–700)
- Both loaded from Google Fonts in `layout.tsx`

### Utility Classes
```css
.btn-primary     /* Blue CTA button */
.btn-secondary   /* Outlined CTA button */
.btn-green       /* Green CTA button */
.card            /* White card with soft shadow */
.section-title   /* H2 page section heading */
.section-subtitle/* Muted subtitle under heading */
.reveal          /* Scroll-fade-up animation target */
.reveal-left     /* Scroll-fade-from-left */
.reveal-right    /* Scroll-fade-from-right */
.gradient-text   /* Blue→green gradient text */
.hero-pattern    /* Soft radial-gradient hero background */
.form-input      /* Styled form input */
.form-label      /* Styled form label */
```

---

## ✏️ Customization Guide

### 1. Business Info
Search and replace these placeholder values across all files:

| Placeholder | Replace With |
|-------------|-------------|
| `Summer-care` | Your business name |
| `+1 (555) 123-4567` | Your phone number |
| `hello@summercare.com` | Your email address |
| `123 Sunshine Lane, Meadowbrook, CA 90210` | Your address |
| `15551234567` | Your WhatsApp number (digits only) |

### 2. Social Media Links
In `components/Footer.tsx`, update the `socialLinks` array `href` values:
```tsx
const socialLinks = [
  { href: 'https://instagram.com/yourbusiness', ... },
  { href: 'https://facebook.com/yourbusiness',  ... },
  { href: 'https://twitter.com/yourbusiness',   ... },
  { href: 'https://linkedin.com/company/yourbusiness', ... },
]
```

### 3. WhatsApp Number
In `components/WhatsAppFloat.tsx`:
```tsx
const whatsappNumber = '15551234567' // ← replace with your number (no spaces/dashes)
```
Also update in `app/contact/page.tsx`:
```tsx
const whatsappUrl = `https://wa.me/YOUR_NUMBER?text=...`
```

### 4. Google Maps Embed
In `app/contact/page.tsx`, replace the iframe `src` with your real Google Maps embed URL:
1. Go to [maps.google.com](https://maps.google.com)
2. Search your address → Share → Embed a map → Copy HTML
3. Paste the `src` URL into the iframe

### 5. Images
Replace Unsplash placeholder URLs with your own images. Recommended approach:
- Add images to the `/public` folder
- Reference them as `/your-image.jpg`
- Or update `next.config.js` `remotePatterns` with your CDN domain

### 6. Team Members
In `app/about/page.tsx`, update the `team` array with your real staff names, roles, and bios.

### 7. Programs / Services
In `app/services/page.tsx`, customize the `services` array — change descriptions, age ranges, benefits, and schedules to match your actual offerings.

### 8. Form Submission
Both forms (enrollment and contact) currently use a simulated API delay. To wire them up to a real backend, replace the mock timeout in each page's `handleSubmit` function:

```tsx
// Replace this simulated delay:
await new Promise((r) => setTimeout(r, 1600))

// With your real API call, e.g.:
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

You can use services like **Resend**, **EmailJS**, **Formspree**, or **Netlify Forms** for easy no-backend form handling.

---

## 📄 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, trust indicators, services, testimonials, gallery preview, CTA |
| `/about` | About | Company story, mission & vision, team, certifications, values |
| `/services` | Services | 5 detailed programs: Infant, Toddler, Preschool, After-School, Weekend |
| `/gallery` | Gallery | Masonry photo grid with category filters and lightbox viewer |
| `/enrollment` | Enrollment | Multi-field enrollment form with real-time validation |
| `/contact` | Contact | Contact form, map embed, WhatsApp button, office hours |

---

## ♿ Accessibility
- Semantic HTML throughout (`header`, `main`, `footer`, `nav`, `section`, `article`)
- ARIA labels on interactive elements (hamburger, lightbox buttons)
- Keyboard-navigable forms with proper `id`/`htmlFor` associations
- Color contrast meets WCAG AA standards
- `alt` text on all images
- Focus indicators preserved

---

## 🔍 SEO
- Per-page `metadata` exports with `title`, `description`, `keywords`
- Root layout `openGraph` and `twitter` card metadata
- Semantic heading hierarchy (one `h1` per page)
- `robots: { index: true, follow: true }` in root layout

---

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React + custom inline SVGs
- **Images:** next/image with remote domain config
- **Fonts:** Google Fonts (Nunito + Quicksand)
- **Language:** TypeScript
- **Animations:** CSS Intersection Observer scroll reveals

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 License
MIT — free for personal and commercial use.

---

Made with ❤️ for families everywhere.
