"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// npm install --save-dev @types/next-themes {install next-themes types}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
