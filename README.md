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
