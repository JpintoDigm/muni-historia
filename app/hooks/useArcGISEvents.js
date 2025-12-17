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

        const DATE_FIELD = "fecha_inicio";
        const TITLE_FIELD = "descripcion";
        const TIME_FIELD = "horario";
        const EJE_FIELD = "eje";
        const ADDRESS = "direccion";

        const outFields = [DATE_FIELD, TITLE_FIELD, TIME_FIELD, EJE_FIELD, ADDRESS].join(",");
        const time = `${start.getTime()},${end.getTime() - 1}`;

        let all = [];
        let offset = 0;
        const pageSize = 2000;

        while (true) {
            const url =
              `${featureLayerUrl}/query` +
              `?where=${encodeURIComponent("1=1")}` +
              `&time=${encodeURIComponent(time)}` +
              `&outFields=${encodeURIComponent(outFields)}` +
              `&orderByFields=${encodeURIComponent(`${DATE_FIELD} ASC`)}` +
              `&resultRecordCount=${pageSize}` +
              `&resultOffset=${offset}` +
              `&returnGeometry=false&f=json`;

          const res = await fetch(url);
          const json = await res.json();

          if (!res.ok || json.error) {
            throw new Error(json?.error?.message || "No se pudo consultar ArcGIS.");
          }

          const page = (json.features || []).map((f) => {
            const a = f.attributes || {};
            return {
              id: a.objectid,
              date: new Date(a[DATE_FIELD]),
              title: a[TITLE_FIELD] ?? "Evento",
              time: a[TIME_FIELD] ?? "",
              eje: Number(a[EJE_FIELD]),
              address: a[ADDRESS] ?? "",
            };
          });

          all = all.concat(page);

          // si ya no hay más páginas
          if (!json.exceededTransferLimit || page.length === 0) break;

          offset += pageSize;
        }

        
        setEvents(all);

        if (!cancelled) setEvents(all);
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
