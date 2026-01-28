"use client";

import dynamic from "next/dynamic";
import { basePath } from "@/next.config.mjs";
import { MarcellusRegular, MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";

// Import dinámico del mapa de eventos
const EventMap = dynamic(() => import("@/app/components/arcgis/basemap/EventMap"), {
  ssr: false,
});

function fmtHourES(d) {
  return d.toLocaleTimeString("es-GT", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function fmtDayES(d) {
  const weekday = d.toLocaleDateString("es-GT", { weekday: "long" });
  const day = d.getDate();
  const month = d.toLocaleDateString("es-GT", { month: "long" });
  const year = d.getFullYear();

  return `${weekday} ${day} de ${month} ${year}`;
}

export default function EventMapModal({
  open,
  onClose,
  event,
  eventLayerUrl, // url capa 3
}) {
  if (!open || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-[95%] max-w-5xl h-[80vh] rounded-3xl bg-white/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-start justify-between px-6 py-4 bg-gradient-to-r from-[#F57EB6]/90 via-[#E8F216]/80 to-[#23C9A7]/90 text-muni-azul">
          <div>
            <h2 className={` ${MontserratMediumItalic.className} text-lg md:text-xl font-semibold`}>
              {event.title}
            </h2>
            <p className={` ${muni.className} text-xs md:text-base line-clamp-1 flex items-center justify-start gap-1`}>
              <img src={`${basePath}/img/calendario/ubicacion.svg`} alt="Direccion" className="max-w-5 max-h-5"/>
              
              {event.address}            
            </p>
            <p className="text-xs md:text-base  line-clamp-1 flex items-center justify-start gap-1">
              <img src={`${basePath}/img/calendario/calendario.svg`} alt="Fecha" className="max-w-5 max-h-5" />

              {fmtDayES(event.date)}           
            </p>

            <p className="text-xs md:text-base  line-clamp-1 flex items-center justify-start gap-1">
              <img src={`${basePath}/img/calendario/reloj.svg`} alt="Fecha" className="max-w-5 max-h-5" />
              
              {event.time ? event.time : fmtHourES(event.date)}    
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-muni-azul text-lg font-bold shadow-md hover:bg-white/30"
            aria-label="Cerrar mapa"
          >
            ✕
          </button>
        </header>

        {/* Contenedor del mapa */}
        <div className="flex-1 bg-[#0b1120]/60">
          <EventMap event={event} eventLayerUrl={eventLayerUrl} />
        </div>
      </div>
    </div>
  );
}
