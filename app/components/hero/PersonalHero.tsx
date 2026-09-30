"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { useLocale } from "../../lib/i18n/context";
import { scrollToSection } from "../../lib/scroll";

export const PersonalHero: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Start Column: Editorial Typography & Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-start">
            {/* Domain category */}
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-green-muted)] font-medium">
              {t.hero.eyebrow}
            </div>

            {/* Prominent Name */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-[1.05]">
              {t.hero.nameA} <br className="hidden sm:inline" />
              {t.hero.nameB}
            </h1>

            {/* Executive Role Title */}
            <div className="text-sm sm:text-base font-mono-tech text-[var(--text-secondary)] tracking-wider uppercase font-medium">
              {t.hero.role}
            </div>

            {/* Positioning Statement */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--text-primary)] font-normal leading-relaxed max-w-2xl">
              {t.hero.statement}
            </p>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {t.hero.bio}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[var(--text-primary)] hover:opacity-90 text-[var(--bg-main)] font-mono-tech text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDown
                  className="w-4 h-4 text-[var(--bg-main)]"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-transparent hover:bg-[var(--bg-surface-raised)] border border-[var(--border-medium)] text-[var(--text-primary)] font-mono-tech text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors cursor-pointer"
              >
                <Mail
                  className="w-4 h-4 text-[var(--accent-green-muted)]"
                  aria-hidden="true"
                />
                <span>{t.hero.contact}</span>
              </button>
            </div>

            {/* Subtle Technical Metadata Line */}
            <div className="pt-6 border-t border-[var(--border-subtle)]">
              <p className="text-xs font-mono-tech text-[var(--text-muted)] tracking-wider uppercase">
                {t.hero.metaLine}
              </p>
            </div>
          </div>

          {/* End Column: Authentic Portrait Presentation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl">
              <Image
                src="/abdelrhman-portrait.jpg"
                alt={t.hero.portraitAlt}
                fill
                sizes="(max-width: 1024px) 340px, 400px"
                priority
                className="object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle natural vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Discreet portrait caption */}
              <div className="absolute bottom-4 inset-x-4 text-center">
                <span className="text-[11px] font-mono-tech text-[var(--text-secondary)] tracking-wider uppercase bg-[var(--bg-main)]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                  {t.hero.portraitCaption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
