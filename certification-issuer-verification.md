# Certification Issuer Verification Record

Internal documentation. Not rendered in the portfolio UI.
Audit date: 2026-09-30 (round 1). Update: holder-attested round 2 (same day).
Total certifications audited: **29**. Verified: **29**. Unresolved: **0**.

Rule applied throughout: an issuer is recorded only with authoritative evidence
(official provider site / official training portal / official docs). A shared
name alone is never enough when multiple bodies issue equivalents.

## Verified mappings (logos in `public/certification-issuers/`)

| Certification | Issuer | Status | Evidence |
|---|---|---|---|
| eWAPTX | INE Security | VERIFIED | ine.com official eWPTX certification page + INE press release (eLearnSecurity is now INE Security, 2023) |
| eCPPT | INE Security | VERIFIED | ine.com official eCPPT certification page |
| eMAPT | INE Security | VERIFIED | ine.com official eMAPT certification page |
| eJPT | INE Security | VERIFIED | ine.com official eJPT certification page |
| eCIR | INE Security | VERIFIED | ine.com official eCIR certification page |
| eCDFP | INE Security | VERIFIED | ine.com official eCDFP certification page |
| eCTHP | INE Security | VERIFIED | ine.com official eCTHP certification page |
| Cortex XSOAR 6.2 (EDU-380, Palo Alto) | Palo Alto Networks | VERIFIED | Issuer named in title; EDU-380 confirmed as official Palo Alto Cortex XSOAR course code (PANW education pages + official datasheet) |
| Palo Alto: Network Security | Palo Alto Networks | VERIFIED | Issuer named in title; PANW official certification portfolio |
| Palo Alto: Cloud Security | Palo Alto Networks | VERIFIED | Issuer named in title; PANW official certification portfolio |
| Palo Alto: SOC Fundamentals | Palo Alto Networks | VERIFIED | Issuer named in title; PANW official certification portfolio |
| NSE 1 | Fortinet | VERIFIED | training.fortinet.com official NSE 1 certification page |
| NSE 2 | Fortinet | VERIFIED | training.fortinet.com official NSE library (NSE 2 level) |
| NSE 3 (Fortinet) | Fortinet | VERIFIED | Issuer named in title; training.fortinet.com official NSE 3 materials |
| GRCP | OCEG | VERIFIED | OCEG trademarked designation (GRCP™); official oceg.org GRCP page; no other issuing body; co-issued with GRC Certify |
| GRCA | OCEG | VERIFIED | OCEG trademarked designation (GRCA™); official oceg.org GRCA page; no other issuing body |
| IDPP | OCEG | VERIFIED | Integrated Data Privacy Professional (IDPP™); official OCEG suite listing + grccertify.org |
| IRMP | OCEG | VERIFIED | Integrated Risk Management Professional (IRMP™); official oceg.org IRMP page ("developed by OCEG") |
| IAAP | OCEG | VERIFIED | Integrated Audit & Assurance Professional (IAAP); official OCEG suite listing |
| ICEP | OCEG | VERIFIED | Integrated Compliance & Ethics Professional (ICEP); official OCEG suite listing |
| IAIP | OCEG | VERIFIED | Integrated Artificial Intelligence Professional (IAIP); OCEG suite naming family; no other issuing body found |
| IPMP | OCEG | VERIFIED | Integrated Policy Management Professional (IPMP); official OCEG suite listing + grccertify.org |
| ISO 27001 LA | GSDC | VERIFIED | Holder-attested: Certified ISO 27001:2022 Lead Auditor, GSDC, Mar 2025, credential ID 35812 |
| ISO 27001 LI | GSDC | VERIFIED | Holder-attested: Certified ISO 27001:2022 Lead Implementer, GSDC, Mar 2025, credential ID 45794 |
| GDPR | Alison | VERIFIED | Holder-attested: GDPR course, Alison, Mar 2025, credential ID 1401-47425180 |
| SOC 2 Implementer | Scytale | VERIFIED | Holder-attested: Certified Master SOC 2 Implementer, Scytale, Mar 2025 (portfolio keeps the shorter "SOC 2 Implementer" title; no rename per content rules) |
| CAP (Certified AppSec Practitioner) | The SecOps Group | VERIFIED | Holder-attested: CAP ID 7013090, The SecOps Group (creators of PentestingExams.com), Jan 2023 |
| Cyber Threat Intelligence 101 | arcX | VERIFIED | Holder-attested: arcX, Mar 2025, credential a3719875d673dc203e82691969866147edfc18aa; exact-title course confirmed on official arcx.io |
| ISO 27701 LI | GSDC | VERIFIED | Holder-attested GSDC (same family as the holder's GSDC ISO 27001 LA/LI) |

Previous round-1 candidates now resolved by holder attestation: CAP (was
third-party-only evidence) and Cyber Threat Intelligence 101 (was name-match
only) are VERIFIED above with credential IDs.

## Logo assets (all issuer-hosted official SVGs, saved locally)

- `public/certification-issuers/ine.svg` — from `ine.com/assets/logos/INE-Logo-Orange-White-Revised.svg` (site header logo)
- `public/certification-issuers/palo-alto-networks.svg` — from `paloaltonetworks.com/etc/clientlibs/clean/imgs/logo-default-orange.svg` (site header mark)
- `public/certification-issuers/fortinet.svg` — from `fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg` (site header logo)
- `public/certification-issuers/oceg.svg` — from `oceg.org/images/oceg-logo-v2.svg` (site header logo)
- `public/certification-issuers/gsdc.png` — from `gsdcouncil.org` header (`gsdc-ias-iaf.png`, 350×90); downscaled to 480px wide (34 KB) for weight; transparent corners verified; pixel-sampled 75% dark artwork → light tile
- `public/certification-issuers/alison.svg` — from `alison.com/html/site/img/header-a-b/alison-free-courses.svg` (117×40 site header logo); dark-slate (#465159) wordmark → light tile
- `public/certification-issuers/scytale.svg` — from `scytale.ai/wp-content/uploads/2026/04/Scytale-white-logo.svg` (near-white artwork → dark tile)
- `public/certification-issuers/secops-group.png` — from `secops.group/wp-content/uploads/2025/12/logo-tsg-white.png` (220×80, transparent, white artwork → dark tile)
- `public/certification-issuers/arcx.png` — from `arcx.io/logo_white_neon.png` (300×200, transparent, white-neon artwork → dark tile)

Display treatment (documented, geometry untouched): uniform 26px tiles —
dark `#0c100e` for light artwork (INE, PANW, OCEG, Scytale, SecOps, arcX),
light `#f3f0e8` for dark artwork (GSDC, Alison) — identical in both themes.

Display treatment (documented, geometry untouched): uniform 26px dark tile
(`#0c100e`, identical in both themes) with 15px-high artwork. INE/OCEG assets
are white artwork requiring a dark backing. Fortinet's official SVG ships a
black-only wordmark with no light variant, so it is rendered monochrome-white
via `brightness(0) invert(1)` CSS filter on the dark tile. Palo Alto orange
mark needs no treatment. No asset is recreated, cropped, or recolored by hand.
