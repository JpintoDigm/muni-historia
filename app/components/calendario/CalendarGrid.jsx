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
    <div className="mt-6 rounded-2xl bg-white/10 p-4">
      {/* Header días */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-white/80">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-2 grid grid-cols-7 gap-2">
        {cells.map((date, idx) => {
          if (!date)
            return <div key={idx} className="h-24" />;

          const isSelected =
            selectedDay?.toDateString() === date.toDateString();

          const dayEvents = events.filter(
            (e) =>
              e.date.toDateString() === date.toDateString() &&
              e.type === tab
          );

          return (
            <button
              key={idx}
              onClick={() => onSelectDay(date)}
              className={`
                h-24 rounded-xl border p-2 text-left transition
                ${isSelected ? "border-pink-400 ring-2 ring-yellow-300/30" : "border-white/30"}
                hover:bg-white/10
              `}
            >
              <div className="text-sm font-bold">{date.getDate()}</div>

              {dayEvents.slice(0, 2).map((e, i) => (
                <div key={i} className="mt-1 flex items-center gap-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                  <span className="truncate">{e.title}</span>
                </div>
              ))}
            </button>
          );
        })}
      </div>

      {loading && (
        <div className="mt-4 text-center text-white/70">
          Cargando eventos…
        </div>
      )}
    </div>
  );
}
