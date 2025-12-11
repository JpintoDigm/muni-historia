"use client";

import { useState } from "react";
import dynamic from "next/dynamic";


const ExampleMap = dynamic(() => import("../arcgis/basemap/BaseMap"), {ssr: false});

export default function ImageMapCarousel({ imageSrc, imageAlt, webmapId }) {
  const [slide, setSlide] = useState(0); // 0 = imagen | 1 = mapa

  return (
    <div className="relative z-10 w-full max-w-3xl mx-auto bg-white">

      {/* Carrusel */}
      <div className="overflow-hidden rounded-xl border border-slate-200">
        {slide === 0 ? (
          // 🖼 Imagen
          <div className="relative w-full h-64 md:h-80">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          // 🗺 Mapa Web
          <div className="w-full h-64 md:h-80">
            <ExampleMap webmapId={webmapId} />
          </div>
        )}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={() => setSlide(0)}
        className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500 
        text-muni-azul font-extrabold px-3 py-2 rounded-full shadow hover:bg-white"
      >
        ←
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => setSlide(1)}
        className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500
        text-muni-azul font-extrabold px-3 py-2 rounded-full shadow hover:bg-white"
      >
        →
      </button>

      {/* Indicadores */}
      {/* <div className="mt-2 flex justify-center gap-2">
        <span
          onClick={() => setSlide(0)}
          className={`h-2 w-2 rounded-full cursor-pointer ${
            slide === 0 ? "bg-muni-azul" : "bg-slate-300"
          }`}
        ></span>
        <span
          onClick={() => setSlide(1)}
          className={`h-2 w-2 rounded-full cursor-pointer ${
            slide === 1 ? "bg-muni-azul" : "bg-slate-300"
          }`}
        ></span>
      </div> */}
    </div>
  );
}
