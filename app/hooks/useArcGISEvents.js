"use client";

import { useEffect, useMemo, useState } from "react";

function monthRange(monthDate) {
  const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);
  return { start, end };
}

export function useArcGISEvents({ featureLayerUrl, monthDate }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { start, end } = useMemo(() => monthRange(monthDate), [monthDate]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setError("");

        // ⚠️ Ajusta nombres de campos según tu capa
        const DATE_FIELD = "fecha";      // ej: "fecha_evento"
        const TITLE_FIELD = "titulo";    // ej: "nombre"
        const TYPE_FIELD = "tipo";       // ej: "categoria"
        const TIME_FIELD = "hora";       // opcional
        const PLACE_FIELD = "lugar";     // opcional

        // ArcGIS usa epoch ms para fechas si el campo es tipo Date
        const where = `${DATE_FIELD} >= ${start.getTime()} AND ${DATE_FIELD} < ${end.getTime()}`;

        const url =
          `${featureLayerUrl}/query` +
          `?where=${encodeURIComponent(where)}` +
          `&outFields=${encodeURIComponent([DATE_FIELD, TITLE_FIELD, TYPE_FIELD, TIME_FIELD, PLACE_FIELD].join(","))}` +
          `&returnGeometry=false&f=json`;

        const res = await fetch(url);
        const json = await res.json();

        if (!res.ok || json.error) {
          throw new Error(json?.error?.message || "No se pudo consultar ArcGIS.");
        }

        const mapped = (json.features || []).map((f) => {
          const a = f.attributes || {};
          const d = new Date(a[DATE_FIELD]);
          return {
            id: a.OBJECTID ?? `${a[TITLE_FIELD]}-${a[DATE_FIELD]}`,
            date: d, // Date object
            type: a[TYPE_FIELD] ?? "actividad",
            title: a[TITLE_FIELD] ?? "Evento",
            time: a[TIME_FIELD] ?? "",
            place: a[PLACE_FIELD] ?? "",
          };
        });

        if (!cancelled) setEvents(mapped);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Error desconocido");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [featureLayerUrl, start, end]);

  return { events, loading, error };
}
