"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { en, type Dictionary } from "./en";
import { ar } from "./ar";

export type Locale = "en" | "ar";
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, ar };
const STORAGE_KEY = "portfolio-locale";

interface LocaleContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  mounted: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dir: "ltr",
  t: en,
  mounted: false,
  setLocale: () => {},
  toggleLocale: () => {},
});

function getInitialLocale(): Locale {
  return "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [mounted, setMounted] = useState(false);

  // Read persisted / browser preference only on client to avoid hydration mismatch.
  useEffect(() => {
    let next: Locale = "en";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ar") {
        next = stored;
      } else if (
        typeof window.navigator !== "undefined" &&
        window.navigator.language.toLowerCase().startsWith("ar")
      ) {
        next = "ar";
      }
    } catch {
      next = "en";
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-hydration sync from localStorage
    setLocaleState(next);
    setMounted(true);
  }, []);

  // Reflect language + direction on <html>. Preserve scroll position (no navigation).
  useEffect(() => {
    if (!mounted) return;
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", dir);
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable — locale still applies for session
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "en" ? "ar" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: dictionaries[locale],
      mounted,
      setLocale,
      toggleLocale,
    };
  }, [locale, mounted, setLocale, toggleLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
