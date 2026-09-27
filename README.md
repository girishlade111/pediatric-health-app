# KidCare — Pediatric Health App

KidCare is a web app that gives parents personalized **vaccine recommendations** and **nutrition guidance** based on their child's age. Enter the child's age (in months or years) and get an age-appropriate vaccine schedule plus detailed dietary guidance for that developmental stage.

> Built by Girish Lade — https://ladestack.in

## Features

- **Pediatric healthcare landing page** — overview of vaccine, nutrition, and growth-tracking guidance
- **Child age form** (`/age-form`) — validated age input (months or years) using React Hook Form + Zod
- **Personalized results page** (`/results`) — vaccine schedule and nutrition charts filtered by age in months
- **Vaccine schedule data** — age-organized vaccine list (Hepatitis B, DTaP, Polio, Hib, MMR, and more), based on simplified CDC recommendations (`lib/vaccine-data.ts`)
- **Nutrition guidance data** — age-range-based food groups, serving sizes, feeding tips, and foods to avoid (`lib/nutrition-data.ts`)
- **Growth tracking section** — developmental guidance for every stage
- **Modern UI** — shadcn/ui components (cards, tabs, forms, radio groups), Tailwind CSS, lucide-react icons, dark/light theme toggle via next-themes
- **Fully client-side** — no backend, no database, no accounts; all guidance data is bundled static TypeScript

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19, TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui + Radix UI primitives
- React Hook Form + Zod validation
- next-themes (light/dark mode)
- lucide-react icons

## Quick Start

Prerequisites: Node.js 18+ and npm (or pnpm).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — enter a child's age and view the personalized vaccine + nutrition results.

### Production build (static export)

```bash
npm run build
```

This generates a static site in the `out/` directory (`output: 'export'` in `next.config.mjs`), deployable to any static host — GitHub Pages, Vercel, Netlify, Cloudflare Pages.

> Note: `basePath: '/pediatric-health-app'` in `next.config.mjs` is set for GitHub Pages subpath deployment. Remove it if deploying to a root domain or Vercel.

## Project Structure

```
app/
  page.tsx            # Landing page (vaccine / nutrition / growth cards)
  layout.tsx          # Root layout + theme provider
  globals.css         # Tailwind global styles
  age-form/page.tsx   # Child age input form (react-hook-form + zod)
  results/
    page.tsx          # Personalized vaccine + nutrition results
    loading.tsx       # Loading state for results
components/
  ui/                 # shadcn/ui primitives (button, card, form, input, tabs, ...)
  theme-provider.tsx  # next-themes wrapper
lib/
  vaccine-data.ts     # Vaccine schedule keyed by age in months
  nutrition-data.ts   # Nutrition guidance keyed by age ranges
  utils.ts            # cn() class-merging helper
public/               # Static assets
```

## Environment Variables

None — the app needs no API keys, database URLs, or secrets. Everything runs client-side.

## Deployment

The repository is configured for static deployment:

1. Build with `npm run build` → outputs to `out/`
2. Deploy the `out/` folder to GitHub Pages (this repo's live deploy), Vercel, Netlify, or Cloudflare Pages

The project was originally generated with [v0.app](https://v0.app) and may stay in sync with v0 deployments.

---

*Disclaimer: the vaccine and nutrition data here is simplified guidance for general information only — always consult a pediatrician for medical decisions.*
