"use client";
import React, { useEffect, useRef, useState } from "react";
import { basePath } from "@/next.config.mjs";

export default function BloqueHistoria({
  sectionId,
  titulo,
  descripcion,
  texto,
  revision,
  cita,
  ageStart,
  ageEnd,
  imagen,
  imagenes = [],
  lugar,
  fuente,
  ilustracion,
  basePathHistoria = "",
  MontserratLightItalic,
  MontserratMediumItalic,
  muni,
  bgColor = "bg-white",
}) {
  // animación al entrar en viewport
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // una sola vez
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={sectionId} className={`${bgColor} scroll-mt-28`}>
      <div
        ref={ref}
        className={[
          "container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 py-12 gap-8 lg:gap-12",
          // entrada suave
          "transition-all duration-1500 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* IZQUIERDA */}
        <div
          className={[
            "transition-all duration-1500",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
          ].join(" ")}
        >
          <p className={`${MontserratLightItalic.className} text-muni-azul text-end text-4xl lg:text-5xl`}>
            {titulo}
          </p>

          <p className={`${muni.className} text-justify mt-8 text-muni-azul leading-relaxed`}>
            {descripcion}
          </p>

          {texto && (
            <p className={`${muni.className} text-justify mt-8 text-muni-azul leading-relaxed`}>
              {texto}
            </p>
          )}

          {revision && (
            <p className={`${muni.className} text-justify mt-2 text-muni-azul/80`}>
              {revision}
            </p>
          )}
        </div>

        {/* DERECHA */}
        <div
          className={[
            "flex flex-col items-end justify-end mt-6 lg:mt-0",
            "transition-all duration-1500",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
          ].join(" ")}
        >
          {/* Card derecha con hover */}
          <div className="group w-full max-w-[560px]">
            {/* CITA + AÑOS */}
            <div className="flex justify-between items-start gap-6">
              <p className={`${muni.className} text-muni-azul italic text-start max-w-[220px]`}>
                {cita}
              </p>

              <div className="text-right">
                {/* badge rango */}
                {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1 shadow-sm">
                  <span className={`${muni.className} text-muni-azul text-sm`}>
                    {ageStart} – {ageEnd}
                  </span>
                </div> */}

                <div className="relative mt-2">
                  <p
                    className={[
                      MontserratMediumItalic.className,
                      "text-5xl lg:text-7xl font-bold leading-none text-muni-azul",
                      "transition-transform duration-300",
                      "group-hover:-translate-y-0.5",
                    ].join(" ")}
                  >
                    {ageStart}
                  </p>

                  <div className="flex items-center justify-end gap-3 mt-1">
                    <img
                      src={`${basePath}/img/evolucion/icons/rightArrow.svg`}
                      alt="Arrow"
                      className="pointer-events-none select-none w-10 lg:w-14 rotate-6 opacity-90"
                    />
                    <p
                      className={[
                        MontserratMediumItalic.className,
                        "text-5xl lg:text-7xl font-bold leading-none text-muni-azul",
                        "transition-transform duration-300",
                        "group-hover:translate-y-0.5",
                      ].join(" ")}
                    >
                      {ageEnd}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen principal con “vida” */}
            <div className="mt-6 rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <img
                src={`${basePathHistoria}${imagen}`}
                alt=""
                className="
                  w-full h-auto object-cover
                  transition-transform duration-1500 ease-out
                  group-hover:scale-[1.02]
                "
              />
            </div>

            {/* Pie de imagen */}
            <div className="mt-4">
              <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul`}>
                {lugar}
              </p>

              <p className={`${muni.className} text-muni-azul/90`}>
                {fuente}
              </p>

              {ilustracion && (
                <p className={`${muni.className} text-muni-azul/90`}>
                  {ilustracion}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* GRID IMAGENES */}
      {imagenes.length > 0 && (
        <div className="container mx-auto px-6 pb-14">
          <div
            className={`
              grid gap-5
              ${imagenes.length === 1 ? "grid-cols-1" : ""}
              ${imagenes.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
              ${imagenes.length === 3 ? "grid-cols-1 md:grid-cols-3" : ""}
              ${imagenes.length >= 4 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4" : ""}
            `}
          >
            {imagenes.map((img, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col",
                  "transition-all duration-500",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: `${Math.min(i * 60, 240)}ms` }}
              >
                {/* CONTENEDOR ZOOM + sombra */}
                <div className="overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.10)]">
                  <img
                    src={`${basePath}${img.src}`}
                    alt=""
                    className="
                      w-full h-full object-contain
                      transition-transform duration-1000 ease-in-out
                      hover:scale-105
                    "
                  />
                </div>

                <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul mt-3 text-center`}>
                  {img.nombre}
                </p>

                <p className={`${muni.className} text-muni-azul/90 text-center`}>
                  {img.fuente}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
