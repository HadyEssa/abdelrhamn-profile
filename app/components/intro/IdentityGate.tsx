"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, SkipForward } from "lucide-react";
import { useLocale } from "../../lib/i18n/context";

interface IdentityGateProps {
  onEnter: () => void;
  onSkip: () => void;
}

export const IdentityGate: React.FC<IdentityGateProps> = ({
  onEnter,
  onSkip,
}) => {
  const { t } = useLocale();

  // Allow Esc key to immediately skip intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSkip]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 sm:p-10 bg-[var(--bg-main)]">
      {/* Top utility row */}
      <div className="absolute top-6 inset-x-6 flex items-center justify-between text-xs font-mono-tech text-[var(--text-muted)] z-20">
        <span className="tracking-wider uppercase text-[11px] text-[var(--text-secondary)]">
          {t.intro.eyebrow}
        </span>
        <button
          onClick={onSkip}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-subtle)] hover:border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group"
          title={t.intro.skipTitle}
        >
          <span>{t.intro.skip}</span>
          <SkipForward className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          <kbd className="hidden sm:inline-block ms-1 px-1 py-0.5 text-[10px] bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] rounded text-[var(--text-muted)]">
            ESC
          </kbd>
        </button>
      </div>

      {/* Central Portrait & Identity Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg portfolio-card p-8 sm:p-12 flex flex-col items-center text-center relative z-10 shadow-2xl"
      >
        {/* Authentic Portrait with refined framing */}
        <div className="relative mb-6">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-2 ring-[var(--accent-green-border)] shadow-lg">
            <Image
              src="/abdelrhman-portrait.jpg"
              alt={t.intro.portraitAlt}
              fill
              sizes="(max-width: 640px) 128px, 144px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Identity & Titles */}
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] uppercase mb-2">
          {t.intro.name}
        </h1>
        <p className="font-mono-tech text-xs sm:text-sm text-[var(--accent-green-muted)] font-medium tracking-wider uppercase mb-5">
          {t.intro.title}
        </p>

        {/* Experience Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-xs font-mono-tech text-[var(--text-secondary)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green-muted)]" />
          <span>{t.intro.experiencePill}</span>
        </div>

        {/* Core Domains */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs font-mono-tech text-[var(--text-secondary)]">
          {t.intro.domains.map((domain) => (
            <span
              key={domain}
              className="px-2.5 py-1 rounded-md bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)]"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Enter Action */}
        <button
          onClick={onEnter}
          className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--text-primary)] hover:opacity-90 text-[var(--bg-main)] font-mono-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
        >
          <span>{t.intro.enter}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
        </button>

        {/* Editorial Subtitle */}
        <p className="text-xs text-[var(--text-muted)] mt-6 max-w-sm leading-relaxed">
          {t.intro.subtitle}
        </p>
      </motion.div>
    </div>
  );
};
