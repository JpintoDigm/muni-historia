"use client";

import { ThemeProvider } from "@material-tailwind/react";

const customTheme = {
  dialog: {
    styles: {
      base: {
        backdrop: {
          // todo el overlay del modal
          backgroundColor: "bg-transparent", // sin color
          backgroundOpacity: "bg-opacity-0", // sin opacidad
          backdropFilter: "",                // sin blur
        },
      },
    },
  },
};

export function Providers({ children }) {
  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
}