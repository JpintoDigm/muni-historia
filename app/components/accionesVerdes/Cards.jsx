"use client";
import { basePath } from "@/next.config.mjs";
import Link from "next/link";

/* =======================
   CARD COMPONENT
======================= */

function ParkCard({ item }) {
  const imgSrc = `${basePath}/img/accionesVerdes/parques/${item.imagen}`;

  return (
    <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80 w-full">
      {/* Imagen */}
      <div className="w-full h-full">
        <img
          src={imgSrc}
          alt={item.parque}
          className="w-full h-48 object-cover rounded-t-2xl m-0"
          onError={(e) => {
            e.currentTarget.src = `${basePath}/img/250añosHero.png`;
          }}
        />
      </div>

      {/* Contenido */}
      <div className="mt-2">
        <div className="flex gap-2 items-center justify-start">
          <img
            src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
            alt=""
            className="max-w-8"
          />
          <p className="text-muni-azul font-extrabold text-lg">
            {item.parque}
          </p>
        </div>

        <div className="mt-2">
          <p className="font-semibold">{item.tipo}</p>
          <p className="opacity-90">{item.direccion}</p>
        </div>

        <div className="flex items-center justify-end mt-2">
          {item.link ? (
            <Link
              href={item.link}
              target="_blank"
              className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5"
            >
              <p className="text-muni-azul font-extrabold">Ver más</p>
              <img
                src={`${basePath}/img/accionesVerdes/backtotop.svg`}
                alt=""
                className="rotate-90 max-w-5"
              />
            </Link>
          ) : (
            <div className="py-1 px-2 rounded-xl bg-white/10 w-2/5 text-center">
              <p className="text-muni-azul font-extrabold opacity-70">
                Sin link
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =======================
   PAGE
======================= */

export default function Cards({ items = [] }) {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-5 mt-10">
      {items.map((item, index) => (
        <ParkCard key={`${item.zona}-${index}`} item={item} />
      ))}
    </div>
  );
}
