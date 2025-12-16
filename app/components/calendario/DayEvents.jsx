export default function DayEvents({ day, events, tab }) {
  const list = events.filter(
    (e) => e.date.toDateString() === day.toDateString() && e.type === tab
  );

  return (
    <div className="mt-8 border-t border-white/20 pt-6">
      <h3 className="text-lg font-bold">
        Eventos del {day.toLocaleDateString("es-GT")}
      </h3>

      {list.length === 0 && (
        <p className="mt-2 text-white/70">No hay eventos.</p>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {list.map((e) => (
          <div
            key={e.id}
            className="rounded-xl bg-white/10 p-4 border border-white/10"
          >
            <div className="font-semibold">{e.title}</div>
            {e.time && <div className="text-sm">🕒 {e.time}</div>}
            {e.place && <div className="text-sm">📍 {e.place}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
