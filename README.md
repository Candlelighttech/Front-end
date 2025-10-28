# ⚡ Candlelight – Modern SaaS Frontend

A **futuristic, production-ready React + Tailwind CSS** frontend for **Candlelight**, an online web tools platform designed to deliver a sleek, accessible, and animated user experience.  
Built with **modern UI/UX principles**, GSAP animations, responsive layouts, and WCAG AA accessibility standards.

---

## 🚀 Tech Stack

- ⚛️ **React 18+** (Functional components + Hooks)
- 🎨 **Tailwind CSS v3.4.17**
- ✨ **GSAP + ScrollTrigger** (for animations)
- 🧩 **React Router DOM**
- 📦 **Vite** (build tool)
- 🌀 **Three.js** (optional dynamic backgrounds)
- 🧠 **Lazy Loading** for performance
- ♿ **WCAG AA Accessibility Compliant**

---

## 🎨 Design System

### 🎨 Color Palette
| Name | Hex | Usage |
|------|-----|--------|
| Base Dark | `#222831` | Primary background |
| Secondary | `#393E46` | Cards & surfaces |
| Accent | `#FFD369` | CTA, buttons, highlights |
| Text Light | `#EEEEEE` | Headings & body text |

### ✍️ Typography
- **Headings / Logo:** `Orbitron`
- **Body / UI Text:** `Roboto`

---

## 📱 Responsive Design

Built mobile-first using Tailwind’s breakpoints:

| Device | Prefix | Width |
|---------|---------|--------|
| Small | `sm:` | ≥ 640px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |
| Extra Large | `xl:` | ≥ 1280px |
| 2X Large | `2xl:` | ≥ 1536px |

---

## ✨ Animation System (GSAP ScrollTrigger)

| Property | Value |
|-----------|--------|
| Start | `"top 80%"` |
| Stagger Delay | `0.1s–0.2s` |
| Duration | `0.6s–1.2s` |
| Easing | `power2.out`, `power3.out` |
| Types | fade-in, slide-up, slide-left, slide-right, scale-up, stagger |
| Hero | fade-in with slide-up subtitle |
| Cards | staggered fade-up & scale |
| Counters | animate from 0 to target |
| Testimonials | slide-up fade transitions |

All ScrollTrigger instances are cleaned up on component unmount to prevent memory leaks.

---

## 🧱 Component System

### 🔹 Reusable Components
| Component | Description |
|------------|-------------|
| `AnimatedHeading` | Scroll-triggered heading animation |
| `Button` | Gradient button with hover scale |
| `Card` | Base card with dark background |
| `AnimatedCard` | Scroll-triggered card animation |
| `Timeline` | Vertical/horizontal milestone display |
| `Accordion` | Expandable FAQ sections |
| `Slider` | Carousel for testimonials/posts |
| `InputField` | Validated text input |
| `Textarea` | Styled multi-line input |
| `MapContainer` | Embedded map component |

---

## 🧭 Layout Components

### Header
- Three-tier structure: **mini-bar**, **main nav**, **scroll indicator**
- Sticky + semi-transparent on scroll
- Logo gradient: `from-[#FFD369] to-[#EEEEEE]`
- CTA button:  
  ```html
  class="bg-gradient-to-r from-[#FFD369] to-[#FFD369] hover:scale-105 transition"
Footer
Angled top border using clip-path

Four-column layout (responsive → 2 cols tablet, 1 col mobile)

Newsletter form with gradient button

Neon glow social icons: hover text-[#FFD369] drop-shadow-[0_0_10px_#FFD369]

🗂️ Page Structure
Each page contains exactly 7 sections for consistent flow:

🏠 Home
Hero

Tool Categories

How It Works

Featured Tools

Testimonials

Pricing Preview

Footer CTA

👥 About
Hero

Story & Mission

Vision & Values

Team

Milestones Timeline

Testimonials

Footer CTA

⚙️ Features
Hero

Tool Categories

Feature Details

Comparison Table

Interactive Demo

Testimonials

Footer CTA

💰 Pricing
Hero

Plans (3 tiers)

Comparison Table

Benefits

Testimonials

FAQ Accordion

Footer CTA

📰 Blog
Hero + Search

Latest Posts Grid

Popular Posts Slider

Categories/Tags Filter

Author Spotlight

Newsletter CTA

Footer

📞 Contact
Hero

Contact Form

Support Info Cards

Map Display

FAQ Accordion

Testimonials

Footer CTA

⚡ Performance
React.lazy() for all page components

Lazy load Three.js only when needed

Optimized assets & images

Cleanup of all GSAP triggers on unmount

Minimized bundle size

♿ Accessibility
WCAG AA compliance

ARIA labels on all interactive elements

Full keyboard navigation

prefers-reduced-motion respected

Focus indicators for inputs & buttons

High color contrast ratios
