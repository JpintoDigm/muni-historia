function fmtMonthES(d) {
  return d.toLocaleDateString("es-GT", { month: "long", year: "numeric" });
}

export default function CalendarHeader({
  month,
  onPrev,
  onNext,
  onToday,
  tab,
  setTab,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold capitalize">{fmtMonthES(month)}</h1>
        <p className="mt-1 text-sm text-white/80">Calendario de eventos</p>
        <p className="mt-1 text-sm text-white/80">Calendario de eventos</p>
        <p className="mt-1 text-sm text-white/80">Calendario de eventos</p>
      </div>

      <div className="flex items-center gap-2">
        {/* Prev Month */}
        <button
          onClick={onPrev}
          className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition"
          aria-label="Mes anterior"
        >
          ‹
        </button>

        {/* Today Button */}
        <button
          onClick={onToday}
          className="h-9 px-3 rounded-lg bg-white/15 hover:bg-white/20 transition text-sm font-semibold"
        >
          Hoy
        </button>

        {/* Next Month */}
        <button
          onClick={onNext}
          className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition"
          aria-label="Mes siguiente"
        >
          ›
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-4 inline-flex rounded-full bg-white/10 p-1">
        <button
          onClick={() => setTab("carrozas")}
          className={`px-4 py-2 text-sm rounded-full transition ${
            tab === "carrozas" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          Eje 1
        </button>
        <button
          onClick={() => setTab("actividades")}
          className={`px-4 py-2 text-sm rounded-full transition ${
            tab === "actividades" ? "bg-white/20" : "hover:bg-white/10"
          }`}
        >
          Eje 2
        </button>
      </div>
    </div>
  );
}
