"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLocale } from "../../lib/i18n/context";
import { CERT_GROUPS, ISSUERS } from "../../lib/certifications";
import { IssuerLogo } from "../ui/IssuerLogo";

const Row: React.FC<{
  id: string;
  title: string;
  groupIndex: number;
}> = ({ id, title, groupIndex }) => {
  const items = CERT_GROUPS[groupIndex]?.items ?? [];

  return (
    <motion.div
      className={`category-row category-${id}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="category-header flex items-center gap-2 mb-2 text-start">
        <span className="category-number font-display text-[var(--accent-green-muted)]">
          {id}
        </span>
        <span className="category-title font-display text-[var(--text-primary)] text-2xl flex items-center">
          <Award className="inline-block me-2" size={20} />
          {title}
        </span>
      </div>
      <div className="cert-tags flex flex-wrap items-stretch">
        {items.map((item) => {
          const issuer = item.issuerKey ? ISSUERS[item.issuerKey] : undefined;
          return (
            <span
              key={item.title}
              className="skill-tag inline-flex items-center gap-1.5"
            >
              {issuer && <IssuerLogo issuer={issuer} />}
              <span>{item.title}</span>
              {issuer && (
                <span className="text-[10px] font-mono-tech text-[var(--text-muted)]">
                  · {issuer.name}
                </span>
              )}
            </span>
          );
        })}
      </div>
      <div className="divider my-6 border-b border-[var(--border-subtle)]" />
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="certifications"
      className="py-16 px-4 md:px-12 lg:px-12 bg-[var(--bg-main)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header text-3xl md:text-4xl mb-2">
          {t.certs.title}
        </h2>
        <a
          href="https://www.linkedin.com/in/abdelrhman-sadat-a92276aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium mt-2 text-[#0A66C2] hover:text-[#004182]"
          aria-label={t.certs.linkedinLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={18}
            height={18}
            className="inline-block"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.849 3.368-1.849 3.603 0 4.268 2.371 4.268 5.456v6.284zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.07 0-1.143.925-2.069 2.069-2.069 1.143 0 2.069.926 2.069 2.069 0 1.142-.926 2.07-2.069 2.07zM7.12 20.452H3.553V9h3.567v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z" />
          </svg>
          {t.certs.linkedin}
        </a>
        <p className="text-xs text-[var(--text-muted)] mt-3 mb-2">
          {t.certs.verifiedNote}
        </p>
        <div className="certifications-list flex flex-col gap-8">
          {t.certs.groups.map((g, gi) => (
            <Row
              key={g.title}
              id={String(gi + 1).padStart(2, "0")}
              title={g.title}
              groupIndex={gi}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
