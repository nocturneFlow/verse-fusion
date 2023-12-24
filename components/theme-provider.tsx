"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Snowfall from "react-snowfall";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Snowfall
        snowflakeCount={50}
        speed={[1.0, 1.0]}
        radius={[0.8, 2.0]}
        color="#b8b8b8"
      />
      {children}
    </NextThemesProvider>
  );
}
