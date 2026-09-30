// app/components/section/SelectedWork.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "../../lib/i18n/context";
import { scrollToSection } from "../../lib/scroll";

/* -------------------------------------------------------------------------- */
/*  Static structural data (image + layout stay identical across locales)     */
/* -------------------------------------------------------------------------- */

const STRUCTURE = [
  {
    number: "01",
    imageSrc: "/PCI DSS Compliance Program.png",
    layout: "text-left-image-right" as const,
  },
  {
    number: "02",
    imageSrc: "/Archer IRM Rollout.png",
    layout: "image-left-text-right" as const,
  },
  {
    number: "03",
    imageSrc: "/Vulnerability Management Program.png",
    layout: "text-left-image-right" as const,
  },
];

/* -------------------------------------------------------------------------- */
/*  Helper components                                                         */
/* -------------------------------------------------------------------------- */

/** Small inline descriptor used for activities – not a bullet list */
const ActivityTag: React.FC<{ label: string }> = ({ label }) => (
  <span className="meta-tag" aria-hidden="true">
    {label}
  </span>
);

/** Layout for a single case study – alternates direction based on layout */
const CaseStudySection: React.FC<{
  index: number;
  number: string;
  imageSrc: string;
  layout: "text-left-image-right" | "image-left-text-right";
  title: string;
  subtitle: string;
  duration: string;
  activities: string[];
  activitiesLabel: string;
  imageAlt: string;
  outcomeValue: string;
  outcomeLines: string[];
}> = ({
  number,
  imageSrc,
  layout,
  title,
  subtitle,
  duration,
  activities,
  activitiesLabel,
  imageAlt,
  outcomeValue,
  outcomeLines,
}) => {
  // Determine flex direction classes — in RTL flex mirrors naturally via dir
  const isReverse = layout === "image-left-text-right";

  return (
    <motion.article
      id={number}
      className="case-section mb-24 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header line – number and subtitle */}
      <div className="flex items-center gap-2 text-sm font-display text-[var(--text-muted)] mb-4 text-start">
        <span className="font-medium text-[var(--text-primary)]">{number}</span>
        <span className="uppercase">{subtitle}</span>
      </div>

      <div className={isReverse ? "case-section row-reverse" : "case-section row"}>
        {/* Textual content */}
        <div className="case-text text-start">
          <h3 className="section-header mb-2">{title}</h3>
          <p className="text-sm text-[var(--text-muted)] mb-2">{duration}</p>
          <div className="flex flex-wrap gap-2 mb-6" aria-label={activitiesLabel}>
            {activities.map((act, i) => (
              <ActivityTag key={i} label={act} />
            ))}
          </div>
          {/* Outcome – large typographic treatment */}
          <div className="mt-6 text-center md:text-start">
            <div
              className="outcome-number"
              style={{ color: "var(--accent-green-muted)" }}
            >
              {outcomeValue}
            </div>
            {outcomeLines.map((ln, i) => (
              <div key={i} className="outcome-label">
                {ln}
              </div>
            ))}
          </div>
        </div>
        {/* Image composition */}
        <div className="case-visual">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-md shadow-lg h-auto w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------------------------------------------------------- */
/*  Exported component – overall Selected Work section                        */
/* -------------------------------------------------------------------------- */

export const SelectedWork: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="work"
      className="py-24 px-4 md:px-12 lg:px-24 bg-[var(--bg-main)] text-[var(--text-primary)]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header border-b border-[var(--border-subtle)] pb-2">
          {t.work.title}
        </h2>
        <p className="text-center text-sm font-display text-[var(--text-muted)] mb-8">
          {t.work.sub}
        </p>
        <nav className="project-index" aria-label={t.work.title}>
          {STRUCTURE.map((s, i) => (
            <button
              key={s.number}
              type="button"
              onClick={() => scrollToSection(s.number)}
              className="cursor-pointer hover:underline hover:decoration-[var(--accent-green-muted)]"
            >
              {" "}
              {s.number} {t.work.cases[i].short}
            </button>
          ))}
        </nav>
        {STRUCTURE.map((s, i) => {
          const c = t.work.cases[i];
          return (
            <CaseStudySection
              key={s.number}
              index={i}
              number={s.number}
              imageSrc={s.imageSrc}
              layout={s.layout}
              title={c.title}
              subtitle={c.subtitle}
              duration={c.duration}
              activities={c.activities}
              activitiesLabel={t.work.activitiesLabel}
              imageAlt={c.imageAlt}
              outcomeValue={c.outcomeValue}
              outcomeLines={c.outcomeLines}
            />
          );
        })}
      </div>
    </section>
  );
};
