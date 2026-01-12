"use client";

import dynamic from "next/dynamic";

// Import dinámico del mapa de eventos
const EventMap = dynamic(() => import("@/app/components/arcgis/basemap/EventMap"), {
  ssr: false,
});

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

      <div className="relative z-10 w-[95%] max-w-5xl h-[80vh] rounded-3xl bg-white/10 border border-white/30 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#F57EB6]/90 via-[#E8F216]/80 to-[#23C9A7]/90 text-muni-azul">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] font-semibold">
              Mapa del evento
            </p>
            <h2 className="text-lg md:text-xl font-extrabold line-clamp-1">
              {event.title}
            </h2>
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
