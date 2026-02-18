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
      { href: "#1524-1773", bg: "bg-gradient-to-br from-muni-pantone via-[#7EDBB0] via-50% md:via-50% to-white", title: "Fundación y traslado de la ciudad", subtitle: "1524 – 1773" },
      { href: "#1776-1821", bg: "bg-gradient-to-br from-muni-rosado via-[#f3c5da] via-50% md:via-50% to-white", title: "Traslado al Valle de la Ermita", subtitle: "1776 – 1821" },
      { href: "#1821-1871", bg: "bg-gradient-to-br from-muni-amarillo via-[#F3F6A6] via-50% md:via-50% to-white", title: "Independencia y nuevas divisiones territoriales", subtitle: "1821 – 1871" },
      { href: "#1871-1917", bg: "bg-gradient-to-br from-muni-verde via-[#DFF7B0] via-50% md:via-50% to-white", title: "Período Liberal: ensanches urbanos y modernización", subtitle: "1871 – 1917" },
      { href: "#1917-1931", bg: "bg-gradient-to-br from-muni-pantone via-[#7EDBB0] via-50% md:via-50% to-white", title: "Terremotos de 1917-1918 y la reconstrucción", subtitle: "1917 – 1931" },
      { href: "#1931-1944", bg: "bg-gradient-to-br from-muni-rosado via-[#f3c5da]via-50% md:via-50% to-white", title: "Consolidación de la imagen urbana", subtitle: "1931 – 1944" },
      { href: "#1944-1954", bg: "bg-gradient-to-br from-muni-amarillo via-[#F3F6A6] via-50% md:via-50% to-white", title: "La llegada de la modernidad", subtitle: "1944 - 1954" },
      { href: "#1954-1976", bg: "bg-gradient-to-br from-muni-verde via-[#DFF7B0] via-50% md:via-50% to-white", title: "Conexiones y expansión hacia el norte y occidente", subtitle: "1954 - 1976" },
      { href: "#1976-2000", bg: "bg-gradient-to-br from-muni-pantone via-[#7EDBB0] via-50% md:via-50% to-white", title: "Terremotos de 1976 y nuevo desarrollo", subtitle: "1976 - 2000" },
      { href: "#2000-2017", bg: "bg-gradient-to-br from-muni-rosado via-[#f3c5da] via-50% md:via-50% to-white", title: "Siglo XXI: Expansión Metropolitana", subtitle: "2000 - 2017" },
      { href: "#2018-2026", bg: "bg-gradient-to-br from-muni-verde via-[#DFF7B0] via-50% md:via-50% to-white", title: "La Ciudad más importante de la región", subtitle: "2018 - 2026" },
    ],
    []
  );

  // visible: mobile=2, tablet=2, desktop=5
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 1024) setVisible(2); // mobile
      else setVisible(5);          //  desktop
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

  //  activa
  const [activeHref, setActiveHref] = useState(items?.[0]?.href ?? "#1524-1773");

  useEffect(() => {
    const setFromHash = () => {
      const h = window.location.hash;
      if (h) setActiveHref(h);
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  //  overlap suave cuando visible=2; overlap normal cuando visible=5
  const overlapClass = visible === 2 ? "-ml-4 sm:-ml-6" : "-ml-6 sm:-ml-8";

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

        {/* Cards montadas */}
        <div className="inline-flex items-end overflow-visible">
          {pageItems.map((it, i) => {
            const isActive = it.href === activeHref;

            return (
              <div
                key={it.href}
                className={[
                  "relative",
                  i === 0 ? "" : overlapClass,          
                  isActive ? "z-30" : "z-10 hover:z-20", 
                ].join(" ")}
              >
                <button
                type="button"
                  href={it.href}
                  onClick={() => {
                    setActiveHref(it.href);

                    const id = it.href.replace("#", "");
                    const el = document.getElementById(id);

                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                      // opcional: actualizar hash sin salto
                      history.pushState(null, "", it.href);
                    }
                  }}
                  className={[
                    "relative block",
                    "overflow-hidden",
                    "rounded-2xl",
                    
                    "shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
                    "px-4 sm:px-5 py-3 sm:py-4",
                    "flex flex-col justify-between",
                    it.bg,

                    // MISMO TAMAÑO SIEMPRE
                    "w-[150px] sm:w-[210px] lg:w-[230px]",
                    "h-[150px] sm:h-[150px] lg:h-[200px]",

                    // crece solo la activa
                    isActive ? "-translate-y-2 scale-[1.04]" : "hover:-translate-y-1",
                    "transition-transform duration-300",
                  ].join(" ")}
                >
                  {/* pliegue */}
                  <div className="pointer-events-none absolute left-0 right-0 top-0 h-10 rounded-t-2xl " />

                  {/* lomo */}
                  <div
                    className={`pointer-events-none absolute left-0 top-0 bottom-0 w-4 rounded-l-2xl ${
                      isActive ? "bg-black/2" : "bg-black/2"
                    }`}
                  />

                  {/* titulo (2 líneas) */}
                  <p
                    className={`${MontserratMediumItalic.className} text-muni-azul text-center font-bold text-sm sm:text-base leading-snug`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: visible === 2 ? 4 : 3, 
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                    title={it.title}
                  >
                    {it.title}
                  </p>

                  {/* subtitulo (1 línea) */}
                  <p
                    className={`${MontserratMediumItalic.className} text-muni-azul text-center text-lg sm:text-2xl leading-none`}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {it.subtitle}
                  </p>
                </button>
              </div>
            );
          })}
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
