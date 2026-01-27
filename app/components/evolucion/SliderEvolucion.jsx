"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { basePath } from "@/next.config.mjs";

export default function EvolucionSlider({
  MontserratMediumItalic,
  MontserratLightItalic,
}) {
  const items = useMemo(
    () => [
      { href: "#1524-1773", bg: "bg-muni-verde", title: "Fundación y traslado de la ciudad", subtitle: "1524 – 1773" },
      { href: "#1776-1821", bg: "bg-muni-rosado", title: "Traslado al Valle de la Ermita", subtitle: "1776 – 1821" },
      { href: "#1821-1871", bg: "bg-muni-pantone", title: "Independencia y nuevas divisiones territoriales", subtitle: "1821 – 1871" },
      { href: "#1871-1917", bg: "bg-[#8BCFD9]", title: "Período Liberal: ensanches urbanos y modernización", subtitle: "1871 – 1917" },
      { href: "#1917-1931", bg: "bg-muni-verde", title: "Terremotos de 1917-1918 y la reconstrucción", subtitle: "1917 – 1931" },
      { href: "#1931-1944", bg: "bg-muni-rosado", title: "Consolidación de la imagen urbana", subtitle: "1931 – 1944" },
      { href: "#1944-1954", bg: "bg-muni-pantone", title: "La llegada de la modernidad", subtitle: "1944 - 1954" },
      { href: "#1954-1976", bg: "bg-[#8BCFD9]", title: "Conexiones y expansión hacia el norte y occidente", subtitle: "1954 - 1976" },
      { href: "#1976-2000", bg: "bg-muni-verde", title: "Terremotos de 1976 y nuevo desarrollo", subtitle: "1976 - 2000" },
      { href: "#2000-2017", bg: "bg-muni-rosado", title: "Siglo XXI: Expansión Metropolitana", subtitle: "2000 - 2017" },
      { href: "#2018-2026", bg: "bg-muni-pantone", title: "La ciudad más importante de la región", subtitle: "2018 - 2026" },
    ],
    []
  );

  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);      // mobile
      else if (w < 1024) setVisible(3); // md/tablet
      else setVisible(5);              // lg+
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxStart = Math.max(0, items.length - visible);
  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  const pageItems = items.slice(start, start + visible);

  const leftDisabled = start === 0;
  const rightDisabled = start === maxStart;
  
const isMobile = visible === 1;
const clamp = isMobile ? "unset" : 3;

  return (
    <div className="w-full flex justify-center px-2">
      <div className="inline-flex w-fit items-center gap-2">
        {/* Flecha izq */}
        <button
          onClick={prev}
          disabled={leftDisabled}
          className={`w-12 sm:w-14 h-20 sm:h-24 flex items-center justify-center transition
            ${leftDisabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
        >
          <img
            src={`${basePath}/img/backtotop.svg`}
            alt="Anterior"
            width={64}
            height={64}
            className={`-rotate-90 transition ${leftDisabled ? "grayscale" : ""}`}
          />
        </button>

        {/* Cuadros visibles */}
        <div className="inline-flex items-center gap-2 sm:gap-3">
          {pageItems.map((it, i) => (
            <div key={it.href} className="grid place-items-center w-fit relative">
            {/* Fondo: responsive */}
            <img
            src={`${basePath}/img/evolucion/icons/linesButton.svg`}
            alt=""
            className="w-[200px] sm:w-[210px] lg:w-[250px] h-auto col-start-1 row-start-1"
            />


            <Link
            href={it.href}
            className={`col-start-1 row-start-1 flex flex-col items-center justify-center self-center animate-pulse-slow
            w-[130px] sm:w-[140px] lg:w-[160px]
            min-h-[125px] sm:min-h-[125px] lg:min-h-[145px]
            ${it.bg} rounded-2xl border border-white mr-6
            px-2 py-2 sm:py-3 gap-1`}
            >
                <p
                    className={`${MontserratMediumItalic.className} text-muni-azul text-center font-bold
                    text-[12px] sm:text-sm leading-snug`}
                    style={
                    isMobile
                        ? {
                            overflow: "visible",
                            display: "block",
                            whiteSpace: "normal",
                        }
                        : {
                            display: "-webkit-box",
                            WebkitLineClamp: clamp,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }
                    }
                    title={it.title}
                >
                    {it.title}
                </p>

                <p className={`${MontserratLightItalic.className} text-muni-azul text-center text-[12px] sm:text-base leading-none`}>
                    {it.subtitle}
                </p>
            </Link>



            </div>
          ))}
        </div>

        {/* Flecha der */}
        <button
          onClick={next}
          disabled={rightDisabled}
          className={`w-12 sm:w-14 h-20 sm:h-24 flex items-center justify-center transition
            ${rightDisabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
        >
          <img
            src={`${basePath}/img/backtotop.svg`}
            alt="Siguiente"
            width={64}
            height={64}
            className={`rotate-90 transition ${rightDisabled ? "grayscale" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
