"use client";

import React from "react";
import { useLocale } from "../../lib/i18n/context";

export const CareerEvolution: React.FC = () => {
  const { t, locale } = useLocale();
  const milestones = t.career.milestones.map((m, i) => ({
    ...m,
    isCurrent: i === t.career.milestones.length - 1,
  }));

  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 text-start">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-green-muted)] mb-2">
              {t.career.eyebrow}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              {t.career.title}
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            {t.career.sub}
          </p>
        </div>

        {/* Desktop Horizontal Timeline (lg screens) */}
        <div className="hidden lg:block relative" dir={locale === "ar" ? "rtl" : "ltr"}>
          {/* Continuous connecting horizontal line */}
          <div className="absolute top-[22px] inset-x-0 h-[1px] bg-[var(--border-medium)] z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {milestones.map((item) => (
              <div key={item.role} className="space-y-4 pt-1 text-start">
                {/* Timeline node */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 ${
                      item.isCurrent
                        ? "bg-[var(--accent-green-muted)] border-[var(--text-primary)] ring-4 ring-[var(--accent-green-soft)]"
                        : "bg-[var(--bg-main)] border-[var(--border-medium)]"
                    }`}
                  />
                  <span
                    className={`text-xs font-mono-tech font-semibold tracking-wider ${
                      item.isCurrent
                        ? "text-[var(--accent-green-muted)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5 pe-2">
                  <h3 className="font-display text-sm font-bold text-[var(--text-primary)] uppercase leading-snug">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono-tech text-[var(--accent-green-muted)] font-medium">
                    {item.company}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed pt-1">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (< lg screens) */}
        <div className="lg:hidden relative ms-0 ps-6 border-s border-[var(--border-medium)] space-y-10 text-start">
          {milestones.map((item) => (
            <div key={item.role} className="relative space-y-2">
              {/* Timeline node dot */}
              <div
                className={`absolute start-[-31px] top-1 w-3.5 h-3.5 rounded-full border-2 ${
                  item.isCurrent
                    ? "bg-[var(--accent-green-muted)] border-[var(--text-primary)] ring-4 ring-[var(--accent-green-soft)]"
                    : "bg-[var(--bg-main)] border-[var(--border-medium)]"
                }`}
              />

              <div className="text-xs font-mono-tech text-[var(--accent-green-muted)] font-medium">
                {item.year} · {item.company}
              </div>
              <h3 className="font-display text-base font-bold text-[var(--text-primary)] uppercase">
                {item.role}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
