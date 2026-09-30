export type IssuerKey =
  | "ine"
  | "paloalto"
  | "fortinet"
  | "oceg"
  | "gsdc"
  | "alison"
  | "scytale"
  | "secops"
  | "arcx";

export interface IssuerMeta {
  key: IssuerKey;
  /** Official issuer name in Latin form (never translated). */
  name: string;
  /** Local official logo asset. */
  logo: string;
  /** Logo aspect ratio (width / height) from the asset viewBox/dimensions. */
  logoAspect: number;
  /** Tile background: dark artwork needs "dark", dark artwork needs "light". */
  tile: "dark" | "light";
  /** Official issuer site (internal reference only, not rendered as UI text). */
  url: string;
  /**
   * Optional CSS filter applied to the logo image for legibility.
   * Used only where the official asset has no light-background variant
   * (Fortinet wordmark ships black-only) and geometry is left untouched.
   */
  logoFilter?: string;
  /** Authoritative source used to verify the issuer mapping (internal). */
  source: string;
}

export const ISSUERS: Record<IssuerKey, IssuerMeta> = {
  ine: {
    key: "ine",
    name: "INE Security",
    logo: "/certification-issuers/ine.svg",
    logoAspect: 599.7 / 182.65,
    tile: "dark",
    url: "https://ine.com",
    source:
      "ine.com official certification pages (eJPT, eCPPT, eMAPT, eWPTX) + INE Security catalog listing eCIR/eCDFP/eCTHP; eLearnSecurity is now INE Security per INE newsroom.",
  },
  paloalto: {
    key: "paloalto",
    name: "Palo Alto Networks",
    logo: "/certification-issuers/palo-alto-networks.svg",
    logoAspect: 33 / 26,
    tile: "dark",
    url: "https://www.paloaltonetworks.com",
    source:
      "Issuer named in the certification title itself; Palo Alto Networks official education pages confirm EDU-380 (Cortex XSOAR course code) and the Certified XSOAR Engineer certification.",
  },
  fortinet: {
    key: "fortinet",
    name: "Fortinet",
    logo: "/certification-issuers/fortinet.svg",
    logoAspect: 487.6 / 55,
    tile: "dark",
    url: "https://www.fortinet.com",
    source:
      "training.fortinet.com (Fortinet Training Institute) official NSE 1/2/3 certification pages.",
  },
  oceg: {
    key: "oceg",
    name: "OCEG",
    logo: "/certification-issuers/oceg.svg",
    logoAspect: 528 / 174,
    tile: "dark",
    url: "https://www.oceg.org",
    source:
      "oceg.org official certification suite pages (GRCP, GRCA, IRMP, IDPP, IPMP, IAAP, ICEP are OCEG trademarked designations; certificates co-issued with GRC Certify).",
  },
  gsdc: {
    key: "gsdc",
    name: "GSDC",
    logo: "/certification-issuers/gsdc.png",
    logoAspect: 1580 / 228,
    tile: "light",
    url: "https://gsdcouncil.org",
    source:
      "Holder-attested credentials: Certified ISO 27001:2022 Lead Auditor (ID 35812) + Lead Implementer (ID 45794), GSDC, Mar 2025. Pixel-sampled artwork is dark-on-transparent, hence light tile.",
  },
  alison: {
    key: "alison",
    name: "Alison",
    logo: "/certification-issuers/alison.svg",
    logoAspect: 123 / 36,
    tile: "light",
    url: "https://alison.com",
    source:
      "Holder-attested credential: GDPR (ID 1401-47425180), Alison, Mar 2025. Wordmark is dark slate (#465159), hence light tile.",
  },
  scytale: {
    key: "scytale",
    name: "Scytale",
    logo: "/certification-issuers/scytale.svg",
    logoAspect: 143 / 28,
    tile: "dark",
    url: "https://scytale.ai",
    source:
      "Holder-attested credential: Certified Master SOC 2 Implementer, Scytale, Mar 2025. Near-white artwork, hence dark tile.",
  },
  secops: {
    key: "secops",
    name: "The SecOps Group",
    logo: "/certification-issuers/secops-group.png",
    logoAspect: 220 / 80,
    tile: "dark",
    url: "https://secops.group",
    source:
      "Holder-attested credential: CAP ID 7013090, The SecOps Group (creators of PentestingExams.com), Jan 2023. White artwork, hence dark tile.",
  },
  arcx: {
    key: "arcx",
    name: "arcX",
    logo: "/certification-issuers/arcx.png",
    logoAspect: 300 / 200,
    tile: "dark",
    url: "https://arcx.io",
    source:
      "Holder-attested credential: Cyber Threat Intelligence 101, arcX (credential a3719875d673dc203e82691969866147edfc18aa), Mar 2025; exact-title course confirmed on official arcx.io. White-neon artwork, hence dark tile.",
  },
};

// Apply monochrome-white display treatment to the Fortinet asset: the official
// SVG ships a black-only wordmark with no light variant, so on the dark logo
// tile it is rendered white via CSS filter. Geometry is untouched.
ISSUERS.fortinet.logoFilter = "brightness(0) invert(1)";

export interface CertItem {
  title: string;
  /** Set only when the issuer is VERIFIED with authoritative evidence. */
  issuerKey?: IssuerKey;
}

export interface CertGroupData {
  id: string;
  items: CertItem[];
}

/**
 * Issuer verification summary (full record in certification-issuer-verification.md):
 * - INE Security (eWAPTX, eCPPT, eMAPT, eJPT, eCIR, eCDFP, eCTHP):
 *   vendor-unique eLearnSecurity/INE designations, confirmed on ine.com.
 * - Palo Alto Networks ("Cortex XSOAR 6.2 (EDU-380, Palo Alto)", 3x "Palo Alto: ..."):
 *   issuer named in the title; EDU-380 confirmed as the official Palo Alto
 *   Cortex XSOAR course code.
 * - Fortinet (NSE 1, NSE 2, NSE 3): confirmed on training.fortinet.com.
 * - OCEG (GRCP, GRCA, IDPP, IRMP, IAAP, ICEP, IAIP, IPMP):
 *   OCEG-trademarked designations with no other issuing body; confirmed on oceg.org.
 * - All 29 certifications verified: only remaining note is that ISO 27701 LI
 *   issuer (GSDC) is holder-attested like the ISO 27001 LA/LI.
 */
export const CERT_GROUPS: CertGroupData[] = [
  {
    id: "01",
    items: [
      { title: "ISO 27001 LA", issuerKey: "gsdc" },
      { title: "ISO 27001 LI", issuerKey: "gsdc" },
      { title: "ISO 27701 LI", issuerKey: "gsdc" },
      { title: "GRCP", issuerKey: "oceg" },
      { title: "GRCA", issuerKey: "oceg" },
      { title: "IDPP", issuerKey: "oceg" },
      { title: "IRMP", issuerKey: "oceg" },
      { title: "GDPR", issuerKey: "alison" },
      { title: "SOC 2 Implementer", issuerKey: "scytale" },
      { title: "IAAP", issuerKey: "oceg" },
      { title: "ICEP", issuerKey: "oceg" },
      { title: "IAIP", issuerKey: "oceg" },
      { title: "IPMP", issuerKey: "oceg" },
    ],
  },
  {
    id: "02",
    items: [
      { title: "eWAPTX", issuerKey: "ine" },
      { title: "eCPPT", issuerKey: "ine" },
      { title: "eMAPT", issuerKey: "ine" },
      { title: "eJPT", issuerKey: "ine" },
      { title: "CAP (Certified AppSec Practitioner)", issuerKey: "secops" },
    ],
  },
  {
    id: "03",
    items: [
      { title: "eCIR", issuerKey: "ine" },
      { title: "eCDFP", issuerKey: "ine" },
      { title: "eCTHP", issuerKey: "ine" },
      {
        title: "Cortex XSOAR 6.2 (EDU-380, Palo Alto)",
        issuerKey: "paloalto",
      },
      { title: "Cyber Threat Intelligence 101", issuerKey: "arcx" },
    ],
  },
  {
    id: "04",
    items: [
      { title: "NSE 1", issuerKey: "fortinet" },
      { title: "NSE 2", issuerKey: "fortinet" },
      { title: "NSE 3 (Fortinet)", issuerKey: "fortinet" },
      { title: "Palo Alto: Network Security", issuerKey: "paloalto" },
      { title: "Palo Alto: Cloud Security", issuerKey: "paloalto" },
      { title: "Palo Alto: SOC Fundamentals", issuerKey: "paloalto" },
    ],
  },
];
