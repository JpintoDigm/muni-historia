import { basePath } from "@/next.config.mjs";


const EJE_ICON = {
  1: basePath + "/img/calendario/10.png",
  2: basePath + "/img/calendario/11.png",
  3: basePath + "/img/calendario/12.png",
};

const EJE_COLOR = {
  1: "bg-[#FF9E9E]", // Impulsando oportunidades
  2: "bg-[#E8F216]",   // Inspirando sueños
  3: "bg-[#23C9A7]",  // Conectando metas
};

export default function CalendarGrid({
  month,
  events,
  selectedDay,
  onSelectDay,
  tab,
  loading,
}) {
  const days = ["D", "L", "M", "M", "J", "V", "S"];

  const start = new Date(month.getFullYear(), month.getMonth(), 1);
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);

  const cells = [];
  const firstDay = start.getDay();
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= end.getDate(); d++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  }

  return (
    <div className="mt-6 rounded-2xl bg-white/20 p-4">
      {/* Header días */}
      <div className="grid grid-cols-7 text-center text-sm font-extrabold text-muni-azul/80">
        {days.map((d, i) => (
          <div key={`${d}-${i}`}>{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-2 grid grid-cols-7 gap-1 md:gap-2">
        {cells.map((date, idx) => {
          if (!date)
            return <div key={idx} className="h-5 md:h-35" />;

          const isSelected =
            selectedDay?.toDateString() === date.toDateString();

          const dayEvents = events.filter(
            (e) => e.date?.toDateString() === date.toDateString()
          );

          const ejesDelDia = [...new Set(dayEvents.map(e => e.eje))];


          return (
            <button
              key={idx}
              onClick={() => onSelectDay(date)}
              className={`
                relative
                h-15 md:h-35 rounded-xl border p-1 sm:p-2 text-left transition
                ${isSelected ? "border-muni-azul ring-2 ring-yellow-300/30" : "border-white/80"}
                hover:bg-white/10
              `}
            >
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-xs sm:text-sm font-bold">{date.getDate()}</div>

              {/* Iconos por eje */}
              {ejesDelDia.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {ejesDelDia.slice(0, 4).map((eje) => (
                    EJE_ICON[eje] && (
                      <img  
                        key={eje}
                        src={EJE_ICON[eje]}
                        alt={`Eje ${eje}`}
                        className="h-3 w-3 sm:h-6 sm:w-6 object-contain"
                      />
                    )
                  ))}
                </div>
              )}

              <div className="hidden md:block">
                {dayEvents.slice(0, 4).map((e, i) => (
                  <div key={i} className="mt-1 flex items-center gap-1 text-xs sm:text-sm">
                    <span
                      className={`h-1.5 w-1.5 rounded-full border-1 border-muni-azul border-solid ${
                        EJE_COLOR[e.eje] || "bg-gray-300"
                      }`}
                    />
                    <span className="truncate text-muni-azul">{e.title}</span>
                  </div>
                ))}
              </div>

            </button>
          );
        })}
      </div>

      {loading && (
        <div className="mt-4 text-center text-muni-azul/70">
          Cargando eventos…
        </div>
      )}
    </div>
  );
}
