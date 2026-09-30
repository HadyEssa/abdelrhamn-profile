import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030706",
};

export const metadata: Metadata = {
  title: "Abdelrhman Sadat — GRC Manager & Information Security Lead",
  description:
    "Portfolio of Abdelrhman Sadat — GRC Manager and Information Security Lead specializing in Governance, Risk & Compliance, SOC Operations, and Offensive Security.",
  keywords: [
    "Abdelrhman Sadat",
    "GRC Manager",
    "Information Security Lead",
    "Cybersecurity",
    "SOC Operations",
    "Archer IRM",
    "PCI DSS",
    "ISO 27001",
    "Risk Management",
    "Compliance",
  ],
  authors: [{ name: "Abdelrhman Sadat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-theme="dark"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.classList.toggle("light",t==="light");var l=localStorage.getItem("portfolio-locale");if(l!=="en"&&l!=="ar"){l=(navigator.language||"en").toLowerCase().indexOf("ar")===0?"ar":"en";}document.documentElement.setAttribute("lang",l);document.documentElement.setAttribute("dir",l==="ar"?"rtl":"ltr");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-green-soft)] selection:text-[var(--text-primary)]">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
