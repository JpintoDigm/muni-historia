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
  1: "bg-[#FF9E9E]  text-muni-azul", // Impulsando oportunidades
  2: "bg-[#E8F216] text-muni-azul",     // Inspirando sueños
  3: "bg-[#23C9A7] text-muni-azul",   // Conectando metas
};

export default function DayEvents({ day, events, tab }) {
  const list = events.filter((e) => e.date?.toDateString() === day.toDateString());

  return (
    <div className="mt-8 border-t border-white/20 pt-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold capitalize text-muni-azul">Eventos del {fmtDayES(day)}</h3>
        <p className="text-sm text-muni-azul/70">{list.length} evento(s)</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white/10 p-4 border border-white/10 text-muni-azul/80">
            No hay eventos para este día.
          </div>
        ) : (
          list.map((e) => (
            <div key={e.id} className="rounded-2xl bg-white/10 p-4 border border-white/10">
              <div className="flex items-center justify-between gap-3">

                {EJE_LABEL[e.eje] && (
                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold border-1 border-solid text-muni-azul
                      ${EJE_BG[e.eje] || "bg-white/10 text-white"}
                    `}
                  >
                    {EJE_LABEL[e.eje]}
                  </div>
                )}

                {EJE_ICON[e.eje] && (
                  <img
                    src={EJE_ICON[e.eje]}
                    alt={EJE_LABEL[e.eje] ?? "Eje"}
                    className="h-10 w-10 object-contain"
                  />
                )}
              </div>

              <div className=" text-muni-azul text-base font-extrabold text-shadow-lg/5">{e.title}</div>


              {/* Día + Hora */}
              <div className="mt-2 text-sm text-muni-azul">
                <span className="font-bold">Dirección:</span> {(e.address)}
              </div>

              {/* Día + Hora */}
              <div className="mt-2 text-sm text-muni-azul/80">
                <span className="font-bold">Fecha:</span> {fmtDayES(e.date)}
              </div>

              <div className="mt-2 text-sm text-muni-azul/80">
                <span className="font-bold">Hora:</span> {e.time ? e.time : fmtHourES(e.date)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
