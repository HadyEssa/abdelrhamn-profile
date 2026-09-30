"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IdentityGate } from "./components/intro/IdentityGate";
import { PortfolioShell } from "./components/shell/PortfolioShell";

type PageState = "intro" | "portfolio";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("intro");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("view") === "portfolio") {
        setTimeout(() => {
          setPageState("portfolio");
        }, 0);
      }
    }
  }, []);

  const handleEnterPortfolio = () => {
    setPageState("portfolio");
  };

  const handleReplayIntro = () => {
    setPageState("intro");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <AnimatePresence mode="wait">
        {pageState === "intro" ? (
          <motion.div
            key="identity-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-screen"
          >
            <IdentityGate
              onEnter={handleEnterPortfolio}
              onSkip={handleEnterPortfolio}
            />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-screen"
          >
            <PortfolioShell onReplayIntro={handleReplayIntro} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
