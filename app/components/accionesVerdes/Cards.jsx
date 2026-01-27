"use client";
import { basePath } from "@/next.config.mjs";
import Link from "next/link";

/* =======================
   CARD COMPONENT
======================= */

function ParkCard({ item }) {
  const imgSrc = `${basePath}/img/accionesVerdes/parques/${item.imagen}`;

  return (
    <article
      className="
        group w-full max-w-sm overflow-hidden rounded-2xl
        bg-white/20 backdrop-blur
        ring-1 ring-white/10
        shadow-lg shadow-black/10
        transition
        hover:bg-white/25 hover:ring-white/20
        focus-within:ring-2 focus-within:ring-muni-verde/60
      "
    >
      {/* Imagen (ratio estable) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={imgSrc}
          alt={item.parque}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `${basePath}/img/250añosHero.png`;
          }}
        />
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-5">
        <header className="flex items-start gap-3">
          <img
            src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
            alt=""
            className="h-8 w-8 shrink-0 opacity-90"
          />

          <div className="min-w-0">
            <h3 className="text-muni-azul font-extrabold text-base sm:text-lg leading-snug line-clamp-2">
              {item.parque}
            </h3>
            <p className="mt-1 font-semibold text-sm sm:text-base opacity-95 line-clamp-1">
              {item.tipo}
            </p>
          </div>
        </header>

        <p className="mt-2 text-sm sm:text-base opacity-85 line-clamp-2">
          {item.direccion}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-end">
          {item.link ? (
            <Link
              href={item.link}
              target="_blank"
              className="
                inline-flex items-center gap-2
                rounded-xl bg-muni-verde/35 px-3 py-2
                text-muni-azul font-extrabold text-sm sm:text-base
                transition hover:bg-muni-verde/45
                focus:outline-none focus-visible:ring-2 focus-visible:ring-muni-verde/70
              "
              aria-label={`Ver más sobre ${item.parque}`}
            >
              Ver más
              <img
                src={`${basePath}/img/accionesVerdes/backtotop.svg`}
                alt=""
                className="h-4 w-4 rotate-90 opacity-90"
              />
            </Link>
          ) : (
            <span className="inline-flex items-center rounded-xl bg-white/10 px-3 py-2 text-sm sm:text-base text-muni-azul font-extrabold opacity-70">
              Sin link
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/* =======================
   PAGE
======================= */

export default function Cards({ items = [] }) {
  return (
    <section
      className="
        mt-10 grid gap-5
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        place-items-stretch
      "
    >
      {items.map((item, index) => (
        <ParkCard key={`${item.zona ?? "z"}-${index}`} item={item} />
      ))}
    </section>
  );
}
