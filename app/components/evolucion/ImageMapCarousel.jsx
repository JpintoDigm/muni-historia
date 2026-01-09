"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ExampleMap = dynamic(
  () => import("../arcgis/basemap/BaseMap"),
  { ssr: false }
);

export default function ImageMapCarousel({ imageSrc, imageAlt, nombre, caption }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative w-full max-w-3xl mx-auto">

      <div className="relative z-10 bg-white overflow-hidden rounded-xl">
        {slide === 0 ? (
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
          </div>
        )}
      </div>

      <button
        onClick={() => setSlide(0)}
        className="
          absolute left-[-1rem] top-1/2 -translate-y-1/2
          bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500
          text-muni-azul font-extrabold px-3 py-2 rounded-full shadow
          hover:bg-white z-20 md:left-[-2rem]
        "
      >
        ←
      </button>

      <button
        onClick={() => setSlide(1)}
        className="
          absolute right-[-1rem] top-1/2 -translate-y-1/2
          bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500
          text-muni-azul font-extrabold px-3 py-2 rounded-full shadow
          hover:bg-white z-20 md:right-[-2rem]
        "
      >
        →
      </button>
    </div>
  );
}
