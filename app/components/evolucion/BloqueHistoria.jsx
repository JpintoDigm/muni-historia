import React from "react";

export default function BloqueHistoria({
  titulo,
  descripcion,
  texto,
  revision,
  cita,
  imagen,
  imagenes = [],
  lugar,
  fuente,
  ilustracion,
  basePath = "",
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
          <p className={`${MontserratLightItalic.className} text-muni-azul text-end text-6xl`}>
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
          <p className={`${muni.className} text-muni-azul italic text-start w-1/3`}>
            {cita}
          </p>

          <img src={`${basePath}${imagen}`} alt="" className="w-150" />

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
        <div className="container mx-auto px-6 pb-10">
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
              <img
                key={i}
                src={`${basePath}${img}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
