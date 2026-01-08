// app/fonts.js
import localFont from "next/font/local";

/* Fuente principal */
export const muni = localFont({
  src: [
    {
      path: "./Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-muni",
});

/* Marcellus */
export const MarcellusRegular = localFont({
  src: "./Marcellus-Regular.ttf",
});

/* Monsterrat */
export const MontserratLightItalic = localFont({
  src: "./Montserrat-LightItalic.ttf",
});

export const MontserratSemiBoldItalic = localFont({
  src: "./Montserrat-SemiBoldItalic.ttf",
});

export const MontserratMediumItalic = localFont({
  src: "./Montserrat-MediumItalic.ttf",
});

export const MontserratBlack3 = localFont({
  src: "./Montserrat-Black_3.ttf",
});
