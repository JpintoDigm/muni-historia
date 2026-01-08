"use client";

import { ThemeProvider } from "@material-tailwind/react";

const customTheme = {
  dialog: {
    styles: {
      base: {
        backdrop: {
          //modal
          backgroundColor: "bg-transparent", 
          backgroundOpacity: "bg-opacity-10", 
          backdropFilter: "",          
        },
      },
    },
  },
};

export function Providers({ children }) {
  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
}