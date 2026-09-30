"use client";

import React from "react";
import { Mail, Phone, FileText, ArrowUpRight } from "lucide-react";
import { useLocale } from "../../lib/i18n/context";

export const Contact: React.FC = () => {
  const { t } = useLocale();

  const cardClass =
    "group p-6 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all flex flex-col justify-between cursor-pointer text-start";

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-[var(--bg-main)] text-[var(--text-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="mb-4 text-start">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-green-muted)] font-medium">
            {t.contact.eyebrow}
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] uppercase mb-6 leading-tight text-start">
          {t.contact.title}
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mb-12 leading-relaxed text-start">
          {t.contact.sub}
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <a href="mailto:eng_a.sadat@hotmail.com" className={cardClass}>
            <div>
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-green-muted)] mb-4 transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {t.contact.email}
              </div>
              <div
                className="text-sm font-medium text-[var(--text-primary)] break-all"
                dir="ltr"
              >
                {t.contact.emailValue}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-mono-tech text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>{t.contact.emailCta}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdelrhman-sadat-a92276aa/"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <div>
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[#0A66C2] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.849 3.368-1.849 3.603 0 4.268 2.371 4.268 5.456v6.284zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.07 0-1.143.925-2.069 2.069-2.069 1.143 0 2.069.926 2.069 2.069 0 1.142-.926 2.07-2.069 2.07zM7.12 20.452H3.553V9h3.567v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <div className="text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {t.contact.linkedin}
              </div>
              <div
                className="text-sm font-medium text-[var(--text-primary)]"
                dir="ltr"
              >
                {t.contact.linkedinValue}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-mono-tech text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>{t.contact.linkedinCta}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+201000055639" className={cardClass}>
            <div>
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-green-muted)] mb-4 transition-colors">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {t.contact.phone}
              </div>
              <div
                className="text-sm font-medium text-[var(--text-primary)]"
                dir="ltr"
              >
                {t.contact.phoneValue}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-mono-tech text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>{t.contact.phoneCta}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Resume */}
          <a
            href="/ABDELRHMAN-SADAT-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <div>
              <div className="w-10 h-10 rounded-md bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-green-muted)] mb-4 transition-colors">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider mb-1">
                {t.contact.resume}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)]">
                {t.contact.resumeValue}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-mono-tech text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>{t.contact.resumeCta}</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
