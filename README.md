# Abdelrhman Sadat — Cybersecurity Portfolio / Security Control Room

> Personal portfolio and professional brand website for **Abdelrhman Sadat Kawther — GRC Manager & Information Security Lead**, specializing in Governance, Risk & Compliance, SOC Operations, and Offensive Security for banking, fintech, and regulated sectors.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4)
![License](https://img.shields.io/badge/License-All_Rights_Reserved-red)

---

## 🔗 GitHub About (Copy-Paste)

**Description (for GitHub → About → Edit description):**

```
GRC Manager & InfoSec Lead portfolio — Security Control Room built with Next.js 16, React 19, Tailwind v4. Bilingual EN/AR, dark/light, case files, frameworks & certification vault.
```

**Alternative shorter (140 chars):**

```
Security Control Room portfolio for GRC Manager Abdelrhman Sadat — Next.js 16 + React 19 + Tailwind, EN/AR RTL, audit-ready case files.
```

**Suggested Topics (GitHub → About → Topics):**

```
nextjs, react, typescript, tailwindcss, framer-motion, cybersecurity, grc, risk-management, compliance, soc, portfolio, bilingual, rtl, arabic
```

**Suggested Website field:** your Vercel URL after deploy (e.g. `https://abdelrhman-sadat.vercel.app`)

---

## ✨ Features

### 1. Identity Gate Intro
Cinematic entry experience — `HUMAN → SYSTEM`:
Portrait → Scan → `IDENTITY VERIFIED` → Control Room boot. Skippable, `prefers-reduced-motion` aware.
`app/components/intro/IdentityGate.tsx` + `app/page.tsx`

### 2. Security Control Room Shell
Persistent console-style shell: TopBar, side navigation, command palette feel, hash-free smooth scroll (`app/lib/scroll.ts`), replay-intro action.
`app/components/shell/PortfolioShell.tsx`

### 3. Bilingual EN / AR with RTL
Typed dictionaries in `app/lib/i18n/`, persisted locale in `localStorage`, auto-detect from browser, full `dir="ltr" / "rtl"` switching.
No hard-coded strings in UI — everything via `t()`.

### 4. Dark-first + Warm Light Theme
CSS-variable design tokens in `app/globals.css` via `data-theme="dark" | "light"`. Persisted, respects `prefers-color-scheme`. No FOUC (inline head script in `app/layout.tsx`).

### 5. Signature Sections
- **Hero Control Room** + System Status Panel + Metrics strip (5+ yrs, 20+ clients, 8-12 team, 500+ assets)
- **Impact Command Center** — 60% manual reporting ↓, 100% audit readiness, 45% critical exposures ↓, etc.
- **Career Evolution Timeline** — Valeo → Paymob → Optima SOC L2 → Spark GRC (IT → SOC → GRC → Leadership)
- **Case Files** — PCI DSS Program, Archer IRM Rollout, Vulnerability Management (Qualys VMDR)
- **GRC Capability Map + Framework Matrix** — PCI DSS, ISO 27001/27701, GDPR, SOC 2, NIST CSF, CBE, SAMA, NCA, FRA
- **SOC Operations + Offensive Security** — QRadar/Splunk/Wazuh/XSOAR, eWAPTX/eCPPT/eMAPT/eJPT
- **Certification Vault** — tabbed (GRC / Offensive / SOC-IR / Network-Cloud) with verified issuer logos in `public/certification-issuers/`
- **Leadership / Training / Secure Channel Contact + Footer**

### 6. Static, Data-Driven, No Backend
All content typed in `app/lib/*.ts` (`certifications.ts`, i18n dictionaries). No DB, no API routes. Fast static build, deployable anywhere.

---

## 🛠 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.3.7 App Router |
| UI | React 19.2.8 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + CSS variables |
| Motion | Framer Motion 13 |
| Icons | Lucide React |
| Fonts | Space Grotesk (display) + Inter (body) + JetBrains Mono (terminal labels) |
| i18n | Custom typed dictionaries, no external dep |
| Hosting | Vercel / any static host (`next build`) |

---

## 📁 Project Structure

```
abdelrhamn-profile/
├── app/
│   ├── page.tsx                  # intro ↔ portfolio state switch
│   ├── layout.tsx                # fonts, metadata, theme/i18n bootstrap, providers
│   ├── globals.css               # design tokens (dark/light), grid, scanlines
│   ├── components/
│   │   ├── intro/IdentityGate.tsx
│   │   ├── shell/PortfolioShell.tsx
│   │   ├── hero/                 # HeroControlRoom, StatusPanel, Metrics
│   │   ├── home/                 # Impact, Timeline, CaseFiles, Frameworks, Certs...
│   │   ├── navigation/           # TopBar, SideNav
│   │   ├── section/              # Section wrappers, headings
│   │   └── ui/                   # Buttons, badges, cards
│   └── lib/
│       ├── i18n/                 # en.ts, ar.ts, types — all UI copy
│       ├── certifications.ts     # vault data model
│       ├── scroll.ts             # hash-free smooth scroll
│       ├── providers.tsx         # Theme + Locale context
│       └── theme/
├── public/
│   ├── abdelrhman-portrait.jpg
│   ├── ABDELRHMAN-SADAT-Resume.pdf
│   ├── *.png                     # case-file covers
│   └── certification-issuers/    # verified logos (see certification-issuer-verification.md)
├── design-system/                # MASTER.md + page overrides
├── abdelrhman-cybersecurity-portfolio-spec.md  # full creative + content spec
├── certification-issuer-verification.md
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

**Requirements:** Node.js 20+ / npm 10+

```bash
# 1. Install
npm install

# 2. Dev (http://localhost:3000)
npm run dev

# 3. Direct to portfolio (skip intro) for testing
# http://localhost:3000/?view=portfolio
```

### Scripts

```bash
npm run dev    # start dev server
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
npx tsc --noEmit  # typecheck
```

---

## 🌍 Internationalization — Add / Edit Copy

1. Edit `app/lib/i18n/en.ts` and `app/lib/i18n/ar.ts` (same keys).
2. Types enforced — missing key = TS error.
3. Add new section: add keys, use `useLocale()` → `t.section.key`.
4. RTL is automatic via `dir` on `<html>`. Test both: toggle language in TopBar.

## 🎨 Theming — Add / Edit Tokens

All colors in `app/globals.css`:

```css
:root, [data-theme="dark"] { --bg-main: #030706; --accent-green: #00D084; ... }
[data-theme="light"] { --bg-main: #FAF8F3; ... }
```

Rules:
- Never hard-code hex in components — use `var(--*)` + Tailwind arbitrary: `bg-[var(--bg-main)]`.
- Green = action / selected / status / key metric only.
- Check contrast in both themes before shipping.

## 📄 Resume / CV

Replace `public/ABDELRHMAN-SADAT-Resume.pdf` with the latest version (keep filename or update links in Hero + Contact + Footer). The Download CV buttons point to this file.

## 🖼 Images

- Portrait: `public/abdelrhman-portrait.jpg` (dark monochrome + green rim recommended)
- Case covers: `public/*.png`
- Issuer logos: `public/certification-issuers/` — only verified logos, documented in `certification-issuer-verification.md`

Optimize with `next/image` where possible, lazy-load below fold.

---

## ✅ Validation Before Push

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Checklist:
- [ ] EN + AR render without overflow (especially RTL timeline/case cards)
- [ ] Dark + Light contrast OK
- [ ] Intro skippable + `?view=portfolio` works
- [ ] Keyboard focus visible, reduced-motion path works
- [ ] No fake employers / certs / breach stats (CV is source of truth)

---

## ☁️ Deploy (Vercel — Recommended)

1. Push to GitHub.
2. Vercel → New Project → Import repo → Framework: Next.js (auto).
3. Build: `npm run build`, Output: `.next` (default).
4. Add domain, set as Website in GitHub About.

Any static host works: `npm run build && npm run start`.

---

## 👤 Author

**Abdelrhman Sadat Kawther — GRC Manager · Information Security Lead**
- 5+ years: GRC · SOC Operations · Offensive Security
- 20+ banking / fintech / regulated clients · Led 8–12 cross-functional members
- Frameworks: PCI DSS, ISO 27001/27701, GDPR, SOC 2, NIST CSF, CBE, SAMA, NCA
- Platforms: Archer IRM, ServiceNow GRC, QRadar, Splunk, Wazuh, Cortex XSOAR, Qualys VMDR

Contact via Secure Channel section (LinkedIn / Email / CV download).

---

## 📌 Source of Truth

Content (titles, dates, metrics, certs) must match the CV:
`ABDELRHMAN SADAT KAWTHER - GRC Manager Resume.pdf`

Do not invent employers, clients, certifications, incidents, or telemetry. Visualized metrics must come from the CV or be labeled illustrative.

Full spec: `abdelrhman-cybersecurity-portfolio-spec.md`

---

## 📝 License

© 2026 Abdelrhman Sadat Kawther — All rights reserved. Portfolio code is private to the author unless otherwise stated.
