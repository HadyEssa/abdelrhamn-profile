"use client";

import React from "react";
import { LocaleProvider } from "./i18n/context";
import { ThemeProvider } from "./theme/context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  );
}
