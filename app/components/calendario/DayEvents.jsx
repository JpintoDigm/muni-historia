import { basePath } from "@/next.config.mjs";

function fmtDayES(d) {
  return d.toLocaleDateString("es-GT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function fmtHourES(d) {
  return d.toLocaleTimeString("es-GT", {
    hour: "numeric",
    minute: "2-digit",
  });
}

const EJE_ICON = {
  1: basePath + "/img/calendario/10.png",
  2: basePath + "/img/calendario/11.png",
  3: basePath + "/img/calendario/12.png",
};

const EJE_LABEL = {
  1: "Impulsando oportunidades",
  2: "Inspirando sueños",
  3: "Conectando metas",
};

const EJE_BG = {
  1: "bg-pink-400/20 text-white", // Impulsando oportunidades
  2: "bg-yellow-400/20 text-white",     // Inspirando sueños
  3: "bg-green-400/20 text-white",   // Conectando metas
};

export default function DayEvents({ day, events, tab }) {
  const list = events.filter((e) => e.date?.toDateString() === day.toDateString());

  return (
    <div className="mt-8 border-t border-white/20 pt-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold capitalize">Eventos del {fmtDayES(day)}</h3>
        <p className="text-sm text-white/70">{list.length} evento(s)</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white/10 p-4 border border-white/10 text-white/80">
            No hay eventos para este día.
          </div>
        ) : (
          list.map((e) => (
            <div key={e.id} className="rounded-2xl bg-white/10 p-4 border border-white/10">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-bold">{e.title}</div>

                {EJE_ICON[e.eje] && (
                  <img
                    src={EJE_ICON[e.eje]}
                    alt={EJE_LABEL[e.eje] ?? "Eje"}
                    className="h-10 w-10 object-contain"
                  />
                )}
              </div>

              {EJE_LABEL[e.eje] && (
                <div
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold
                    ${EJE_BG[e.eje] || "bg-white/10 text-white"}
                  `}
                >
                  {EJE_LABEL[e.eje]}
                </div>
              )}

              {/* Día + Hora */}
              <div className="mt-3 text-sm text-white/80">
                Fecha: {fmtDayES(e.date)}
              </div>

              <div className="mt-1 text-sm text-white/80">
                Hora: {e.time ? e.time : fmtHourES(e.date)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
