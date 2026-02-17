import React from "react";
import { basePath } from "@/next.config.mjs";

export default function BloqueHistoria({
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
  bgColor = "bg-white"
}) {
  return (
    <div className={`${bgColor}`}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 py-10 gap-2 lg:gap-10">

        {/* IZQUIERDA */}
        <div>
          <p className={`${MontserratLightItalic.className} text-muni-azul text-end text-4xl lg:text-5xl`}>
            {titulo}
          </p>

          <p className={`${muni.className} text-justify mt-10 text-muni-azul`}>
            {descripcion}
          </p>

          <p className={`${muni.className} text-justify mt-10 text-muni-azul`}>
            {texto}
          </p>

          <p className={`${muni.className} text-justify mt-1 text-muni-azul`}>
            {revision}
          </p>
        </div>

        {/* DERECHA */}
        <div className="flex flex-col items-end justify-end mt-10 lg:mt-0">

          <div className="flex justify-center">
            <p className={`${muni.className} text-muni-azul italic text-start w-1/3`}>
              {cita}
            </p>
            <div className="relative lg:ml-30">
              {/* 1776 */}
              <p className={`${MontserratMediumItalic.className} relative z-10 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-left`}>
                {ageStart}
              </p>

              <div className="flex flex-row ml-10">
                {/* Flecha (atrás) */}
                <img
                  src={`${basePath}/img/evolucion/icons/rightArrow.svg`}
                  alt="Arrow"
                  className="
                    pointer-events-none select-none
                    left-7 top-20
                    w-10 lg:w-15
                    rotate-6  
                    opacity-90
                  "
                />

                {/* 1821 */}
                <p className={`${MontserratMediumItalic.className} relative z-10 mt-3 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-start w-50`}>
                  {ageEnd}
                </p>
              </div>
            </div>

          </div>

          <img src={`${basePathHistoria}${imagen}`} alt="" className="w-150" />

          <div>
            <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul`}>
              {lugar}
            </p>

            <p className={`${muni.className} text-justify text-muni-azul`}>
              {fuente}
            </p>

            <p className={`${muni.className} text-justify text-muni-azul`}>
              {ilustracion}
            </p>
          </div>
        </div>
      </div>

      {/* GRID IMAGENES */}
      {imagenes.length > 0 && (
        <div className="container mx-auto px-6 py-10 ">
          <div
            className={`
              grid gap-4
              ${imagenes.length === 1 ? "grid-cols-1" : ""}
              ${imagenes.length === 2 ? "grid-cols-2" : ""}
              ${imagenes.length === 3 ? "grid-cols-2 md:grid-cols-3" : ""}
              ${imagenes.length >= 4 ? "grid-cols-2 md:grid-cols-4" : ""}
            `}
          >
            {imagenes.map((img, i) => (
              <div key={i} className="flex flex-col">
                
                {/* CONTENEDOR ZOOM */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={`${basePath}${img.src}`}
                    className="
                      w-full h-full object-contain
                      transition-transform duration-1000 ease-in-out
                      hover:scale-105
                    "
                  />
                </div>

                <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul mt-2 text-center`}>
                  {img.nombre}
                </p>

                <p className={`${muni.className} text-muni-azul text-center`}>
                  {img.fuente}
                </p>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}
