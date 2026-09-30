"use client";

import React from "react";
import { useLocale } from "../../lib/i18n/context";

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({
  compact = false,
}) => {
  const { locale, toggleLocale, t } = useLocale();
  const isEN = locale === "en";

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={`flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0.5 ${
        compact ? "text-[11px]" : "text-xs"
      } font-mono-tech`}
    >
      <button
        type="button"
        onClick={() => (isEN ? undefined : toggleLocale())}
        aria-pressed={isEN}
        aria-label="English"
        className={`px-2.5 py-1.5 rounded-[5px] transition-colors cursor-pointer font-semibold tracking-wider ${
          isEN
            ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)] border border-[var(--border-medium)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] border border-transparent"
        }`}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-[var(--border-medium)] px-0.5">
        /
      </span>
      <button
        type="button"
        onClick={() => (!isEN ? undefined : toggleLocale())}
        aria-pressed={!isEN}
        aria-label="العربية"
        className={`px-2.5 py-1.5 rounded-[5px] transition-colors cursor-pointer font-semibold tracking-wider ${
          !isEN
            ? "bg-[var(--bg-surface-raised)] text-[var(--text-primary)] border border-[var(--border-medium)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] border border-transparent"
        }`}
      >
        AR
      </button>
    </div>
  );
};
