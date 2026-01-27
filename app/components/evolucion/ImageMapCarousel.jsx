"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { basePath } from "@/next.config.mjs";

const ExampleMap = dynamic(() => import("../arcgis/basemap/BaseMap"), {
  ssr: false,
});

// animación simple de “parpadeo”
const pulseClass = "arrow-blink";

export default function ImageMapCarousel({ imageSrc, imageAlt, nombre, caption }) {
  const [slide, setSlide] = useState(0);

  const isImage = slide === 0;
  const isMap = slide === 1;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative z-10 bg-white overflow-hidden rounded-xl">
        {isImage ? (
          <>
            <div className="w-full h-64 md:h-65">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="object-cover w-full h-full"
              />
            </div>

            {caption && (
              <div className="px-4 py-1 bg-white">
                <p className="text-sm text-muni-azul font-semibold italic text-center">
                  {caption}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-64 md:h-80">
            <ExampleMap nombre={nombre} />
            <p className="text-center text-muni-azul text-sm italic">
              Vista actual año 2026
            </p>
          </div>
        )}
      </div>

      {/* ✅ Flecha IZQUIERDA: solo en el mapa */}
      {isMap && (
        <button
          onClick={() => setSlide(0)}
          aria-label="Volver a la imagen"
          className={`
            absolute left-[-1rem] top-1/2 -translate-y-1/2 z-20
            md:left-[-2rem]
            ${pulseClass}
          `}
        >
          <img
            src={`${basePath}/img/backtotop.svg`}
            alt="Anterior"
            className="w-12 md:w-14 -rotate-90"   // ✅ más grande
          />
        </button>
      )}

      {/* ✅ Flecha DERECHA: solo en la imagen */}
      {isImage && (
        <button
          onClick={() => setSlide(1)}
          aria-label="Ver mapa"
          className={`
            absolute right-[-1rem] top-1/2 -translate-y-1/2 z-20
            md:right-[-2rem]
            ${pulseClass}
          `}
        >
          <img
            src={`${basePath}/img/backtotop.svg`}
            alt="Siguiente"
            className="w-12 md:w-14 rotate-90"    // ✅ más grande
          />
        </button>
      )}
    </div>
  );
}
