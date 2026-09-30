"use client";

/**
 * Scroll to a page section by element id WITHOUT touching the URL.
 * Keeps the address bar clean (no # hash) while preserving the
 * existing scroll-margin offsets and reduced-motion support.
 */
export function scrollToSection(id: string): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduced =
    typeof window !== "undefined" &&
    typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
