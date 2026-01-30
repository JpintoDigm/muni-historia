import { basePath } from "@/next.config.mjs";

function fmtDayES(d) {
  const weekday = d.toLocaleDateString("es-GT", { weekday: "long" });
  const day = d.getDate();
  const month = d.toLocaleDateString("es-GT", { month: "long" });
  const year = d.getFullYear();

  return `${weekday} ${day} de ${month} ${year}`;
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

export default function DayEvents({ day, events, tab, onSelectEvent }) {
  const list = events.filter((e) => e.date?.toDateString() === day.toDateString());

  return (
    <div className="mt-8 border-t border-white/20 pt-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold normal-case text-muni-azul">Eventos <span className="font-normal">del {fmtDayES(day)}</span> </h3>
        <p className="text-sm text-muni-azul/70 font-normal">{list.length} evento(s)</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white/10 p-4 border border-white/10 text-muni-azul/80">
            No hay eventos para este día.
          </div>
        ) : (
          list.map((e) => (
            <button key={e.id} type="button" onClick={() => onSelectEvent?.(e)} className="text-start rounded-2xl bg-white/10 p-4 border border-white/10 hover:border-white/40 hover:bg-white/20 flex flex-col h-full" >
              <div className="flex items-center justify-start gap-3 mb-2">

                {EJE_ICON[e.eje] && (
                  <img
                    src={EJE_ICON[e.eje]}
                    alt={EJE_LABEL[e.eje] ?? "Eje"}
                    className="h-10 w-10 object-contain"
                  />
                )}

                {EJE_LABEL[e.eje] && (
                  <div
                    className={`inline-flex rounded-full px-5 py-1 text-base font-bold border-1 border-solid text-muni-azul
                      ${EJE_BG[e.eje] || "bg-white/10 text-white"}
                    `}
                  >
                    {(() => {
                      const [firstWord, ...rest] = EJE_LABEL[e.eje].split(" ");
                      return (
                        <>
                          <span className="font-normal capitalize ">{firstWord}</span>
                          {rest.length > 0 && (
                            <span className="font-black ml-1 capitalize ">{rest.join(" ")}</span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}

              </div>

              <div className=" text-muni-azul text-base font-extrabold">{e.title}</div>


              {/* Día + Hora */}
              <div className="mt-2 text-sm text-muni-azul">
                <span className="font-extrabold">Dirección:</span> {(e.address)}
              </div>

              {/* Día + Hora */}
              <div className="mt-2 text-sm text-muni-azul/80">
                <span className="font-extrabold">Fecha:</span> {fmtDayES(e.date)}
              </div>

              <div className="mt-2 text-sm text-muni-azul/80">
                <span className="font-extrabold">Hora:</span> {e.time ? e.time : fmtHourES(e.date)}
              </div>

              <div className="flex items-center justify-end mt-auto pt-3">
                <div 
                  className="flex items-center justify-end gap-2 px-3 py-2 bg-muni-verde/35 hover:bg-muni-verde/45 text-sm sm:text-base rounded-xl"
                >
                  <p className="text-center text-muni-azul">Ver más</p>
                  <img src={`${basePath}/img/backtotop.svg`} alt="" className="max-w-5 rotate-90"/>
                </div>

              </div>

            </button>
          ))
        )}
      </div>
    </div>
  );
}
