# Abdelrhman Sadat — Cybersecurity Portfolio

> Built by **Hady Essa** for his friend **Abdelrhman Sadat**.

Personal portfolio of **Abdelrhman Sadat — GRC Manager & Information Security Lead**,
specializing in Governance, Risk & Compliance, SOC Operations, and Offensive Security
for banking, fintech, and regulated-sector clients.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- Framer Motion · Lucide icons
- No backend, no database — fully static, data-driven UI

## Features

- Editorial dark-first design with a warm light theme (`data-theme` tokens in `app/globals.css`)
- Full English / Arabic (RTL) support — typed dictionaries in `app/lib/i18n/`, persisted locale
- Theme toggle persisted across visits, respects `prefers-color-scheme` as fallback
- Sticky asymmetric Expertise layout (desktop), normal stacking on mobile
- Certifications with verified issuer logos (`public/certification-issuers/`, see `certification-issuer-verification.md`)
- Hash-free in-page navigation (`app/lib/scroll.ts`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy

Static build (`npm run build`) — ready for Vercel or any static host.

## Credits

- **Development:** Hady Essa ([@HadyEssa](https://github.com/HadyEssa))
- **Portfolio owner:** Abdelrhman Sadat — GRC Manager & Information Security Lead
