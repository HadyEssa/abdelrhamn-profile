"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/theme/context";
import { useLocale } from "../../lib/i18n/context";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const { t, locale } = useLocale();
  const isDark = theme === "dark";

  const label =
    locale === "ar"
      ? isDark
        ? "التبديل إلى الوضع الفاتح"
        : "التبديل إلى الوضع الداكن"
      : isDark
        ? "Switch to light mode"
        : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`${t.nav.themeLabel}: ${label}`}
      title={label}
      aria-pressed={!isDark}
      className="flex items-center justify-center w-[34px] h-[34px] rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors cursor-pointer"
    >
      {/* Render stable icon pre-hydration to avoid mismatch; theme resolves after mount */}
      {!mounted || isDark ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
};
