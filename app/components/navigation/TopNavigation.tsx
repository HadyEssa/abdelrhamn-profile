"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X, RotateCcw } from "lucide-react";
import { useLocale } from "../../lib/i18n/context";
import { scrollToSection } from "../../lib/scroll";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

interface TopNavigationProps {
  onReplayIntro?: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  onReplayIntro,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLocale();

  const NAV_LINKS = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "work", label: t.nav.work },
    { id: "expertise", label: t.nav.expertise },
    { id: "certifications", label: t.nav.certifications },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Start: Brand Identity */}
        <div className="min-w-0">
          <Link
            href="/"
            className="font-display text-base font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors uppercase block leading-none truncate"
          >
            {t.meta.brandName}
          </Link>
          <span className="text-xs text-[var(--text-muted)] tracking-wider mt-1 block font-mono-tech truncate">
            {t.meta.role}
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* End: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <ThemeSwitcher />
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono-tech text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer"
              title={t.nav.replayIntro}
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.nav.intro}</span>
            </button>
          )}

          <a
            href="/ABDELRHMAN-SADAT-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--bg-surface-raised)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] text-xs font-mono-tech font-medium text-[var(--text-primary)] transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-green-muted)]" />
            <span>{t.nav.resume}</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label={t.nav.toggleMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection(link.id);
                }}
                className="py-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-start cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2">
            <LanguageSwitcher compact />
            <span className="text-xs font-mono-tech text-[var(--text-muted)]">
              {t.nav.languageLabel}
            </span>
          </div>

          {onReplayIntro && (
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-subtle)] text-xs font-mono-tech text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.nav.replayIntro}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
