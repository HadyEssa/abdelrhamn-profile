"use client";

import React from "react";
import { TopNavigation } from "../navigation/TopNavigation";
import { SelectedWork } from "../section/SelectedWork";
import { Expertise } from "../section/Expertise";
import { Certifications } from "../section/Certifications";
import { Contact } from "../section/Contact";
import { PersonalHero } from "../hero/PersonalHero";
import { CareerEvolution } from "../home/CareerEvolution";
import { AboutSection } from "../home/AboutSection";
import { useLocale } from "../../lib/i18n/context";

interface PortfolioShellProps {
  onReplayIntro: () => void;
}

export const PortfolioShell: React.FC<PortfolioShellProps> = ({
  onReplayIntro,
}) => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col selection:bg-[var(--accent-green-soft)] selection:text-[var(--text-primary)]">
      {/* Editorial Top Navigation */}
      <TopNavigation onReplayIntro={onReplayIntro} />

      {/* Main Full-Width Content Stream (No centered cards!) */}
      <main className="flex-1 w-full">
        {/* Real Personal Hero */}
        <PersonalHero />

        {/* Authentic Career Story Progression */}
        <CareerEvolution />

        {/* Editorial About Section with Large Typography Metrics */}
        <AboutSection />

        {/* Selected Work – editorial case studies */}
        <SelectedWork />

        {/* Specialized Expertise Domain Matrix */}
        <Expertise />

        {/* Verified Industry Certifications */}
        <Certifications />

        {/* Secure Direct Contact Channel */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-main)] py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[var(--text-muted)] text-center sm:text-start">
          <div>{t.footer.identity}</div>
          <div>{t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
};
