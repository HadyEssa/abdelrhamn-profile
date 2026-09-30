// app/components/section/Expertise.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
/* Lucide icons */
import {
  Users,
  BriefcaseBusiness,
  ShieldAlert,
  Scale,
  ClipboardCheck,
  GitBranch,
  Settings2,
  Database,
  Workflow,
  Radar,
  Siren,
  Bug,
  Crosshair,
  Terminal,
} from "lucide-react";
import { useLocale } from "../../lib/i18n/context";

const ICONS: React.ReactNode[] = [
  <React.Fragment key="g01">
    <Users className="inline-block me-2" size={20} />
    <BriefcaseBusiness className="inline-block" size={20} />
  </React.Fragment>,
  <React.Fragment key="g02">
    <ShieldAlert className="inline-block me-2" size={20} />
    <Scale className="inline-block" size={20} />
  </React.Fragment>,
  <ClipboardCheck key="g03" className="inline-block" size={20} />,
  <React.Fragment key="g04">
    <GitBranch className="inline-block me-2" size={20} />
    <Settings2 className="inline-block" size={20} />
  </React.Fragment>,
  <React.Fragment key="g05">
    <Database className="inline-block me-2" size={20} />
    <Workflow className="inline-block" size={20} />
  </React.Fragment>,
  <React.Fragment key="g06">
    <Radar className="inline-block me-2" size={20} />
    <Siren className="inline-block" size={20} />
  </React.Fragment>,
  <React.Fragment key="g07">
    <Bug className="inline-block me-2" size={20} />
    <Crosshair className="inline-block" size={20} />
  </React.Fragment>,
  <Terminal key="g08" className="inline-block me-2" size={20} />,
];

/** Helper to apply brand-specific class for known platforms */
const brandClass = (item: string): string => {
  const lower = item.toLowerCase();
  if (lower.includes("qualys")) return "brand-qualys";
  if (lower.includes("archer")) return "brand-archer";
  if (lower.includes("servicenow")) return "brand-servicenow";
  if (lower.includes("qradar")) return "brand-qradar";
  if (lower.includes("splunk")) return "brand-splunk";
  if (lower.includes("wazuh")) return "brand-wazuh";
  if (lower.includes("cortex")) return "brand-cortex";
  if (lower.includes("trellix")) return "brand-trellix";
  return "";
};

/** Helper to generate skill-specific CSS class (Latin keys only, stable across locales) */
const skillClass = (item: string): string => {
  return (
    "skill-" +
    item
      .toLowerCase()
      .replace(/[ &]/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
  );
};

// Stable Latin keys aligned with EN items order — used only for CSS class names
const EN_KEYS: string[][] = [
  [
    "Team Leadership",
    "Stakeholder Management",
    "Strategic Planning",
    "Audit Management",
    "Executive Reporting",
    "Regulatory Reporting",
    "Metrics & KPIs",
  ],
  [
    "Risk Assessment",
    "Risk Registers",
    "Risk Quantification",
    "Risk Appetite",
    "KRI & KPI",
    "Control Libraries",
    "Risk Treatment",
    "Third-Party Risk Management",
    "NIST CSF",
  ],
  [
    "PCI DSS",
    "ISO 27001",
    "ISO 27701",
    "GDPR",
    "SOC 2",
    "NIST CSF",
    "CBE",
    "SAMA",
    "NCA",
    "FRA",
    "Business Continuity",
    "Control Testing",
    "Internal & External Audit",
  ],
  [
    "Control Mapping",
    "Control Testing",
    "Vulnerability Management",
    "Policy & Procedure Development",
    "Regulatory Assessments",
    "Regulatory Reporting",
    "Change Management",
  ],
  [
    "Archer IRM Platform Administration and System Ownership",
    "ServiceNow GRC",
    "Risk Workflow Automation",
    "Compliance Dashboards",
  ],
  [
    "QRadar",
    "Splunk",
    "Wazuh",
    "Cortex XSOAR",
    "Trellix",
    "Incident Response",
    "Threat Intelligence",
  ],
  [
    "Web Penetration Testing",
    "Mobile Penetration Testing",
    "Network Penetration Testing",
    "Vulnerability Assessment",
    "Risk-based Remediation",
  ],
  [
    "Qualys VMDR",
    "Python",
    "Java",
    "C#",
    "Windows Server",
    "Active Directory",
    "Linux",
  ],
];

const Row: React.FC<{
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  keyItems: string[];
}> = ({ id, title, icon, items, keyItems }) => {
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
          {icon}
          {title}
        </span>
      </div>
      <div className="skill-tags flex flex-wrap">
        {items.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className={`skill-tag ${brandClass(keyItems[idx] ?? item)} ${skillClass(keyItems[idx] ?? item)}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="divider my-6 border-b border-[var(--border-subtle)]" />
    </motion.div>
  );
};

export const Expertise: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="expertise"
      className="py-16 px-4 md:px-12 lg:px-12 bg-[var(--bg-main)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="expertise-wrapper flex flex-col md:flex-row gap-8 md:gap-12">
          {/* START – sticky editorial anchor (desktop/tablet only) */}
          <div className="expertise-intro md:w-4/12 lg:w-3/12 flex flex-col text-start md:sticky md:top-28 md:self-start">
            <h2 className="section-header text-3xl md:text-4xl mb-2">
              {t.expertise.title}
            </h2>
            <p className="font-display text-lg md:text-xl text-[var(--text-primary)] mb-4">
              {t.expertise.intro}
            </p>
            <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
              {t.expertise.flow}
            </p>
          </div>
          {/* END – competency list */}
          <div className="expertise-list flex-1">
            {t.expertise.groups.map((g, gi) => (
              <Row
                key={g.title}
                id={String(gi + 1).padStart(2, "0")}
                title={g.title}
                icon={ICONS[gi]}
                items={g.items}
                keyItems={EN_KEYS[gi] ?? g.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
