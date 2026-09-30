"use client";

import React from "react";
import { useLocale } from "../../lib/i18n/context";

export const AboutSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="w-full py-20 sm:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Start Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-green-muted)] font-medium">
              {t.about.eyebrow}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              {t.about.title}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="text-sm text-[var(--text-muted)]">{t.about.p3}</p>
            </div>
          </div>

          {/* End Column: Editorial Metric Typography (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-10 pt-2 lg:pt-14 border-t lg:border-t-0 lg:border-s border-[var(--border-subtle)] lg:ps-12 text-start">
            {t.about.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-mono-tech text-[var(--accent-green-muted)] font-semibold uppercase tracking-wider mt-2">
                  {metric.label}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
