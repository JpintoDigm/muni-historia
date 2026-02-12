"use client";

import { useEffect, useMemo, useState } from "react";

function monthRange(monthDate) {
  const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);
  return { start, end };
}

function toLocalDateOnlyFromUTC(value) {
  if (value == null) return null;
  const d = new Date(value);
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function sameOrBefore(a, b) {
  return a.getTime() <= b.getTime();
}

function inMonth(d, monthDate) {
  return (
    d.getFullYear() === monthDate.getFullYear() &&
    d.getMonth() === monthDate.getMonth()
  );
}


function extractZona(address) {
  if (!address) return null;

  const match = address.match(/zona\s*(\d+)/i); // detecta Zona 1, zona 21, etc.
  return match ? Number(match[1]) : null;
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

        const OBJECTID_FIELD = "objectid";
        const DEPENDENCIA = "dependencia";
        const DATE_START_FIELD = "fecha_inicio";
        const DATE_END_FIELD = "fecha_fin";
        const TITLE_FIELD = "descripcion";
        const TIME_FIELD = "horario";
        const EJE_FIELD = "eje";
        const ADDRESS = "direccion";

        const outFields = [
          OBJECTID_FIELD,
          DEPENDENCIA,
          DATE_START_FIELD,
          DATE_END_FIELD,
          TITLE_FIELD,
          TIME_FIELD,
          EJE_FIELD,
          ADDRESS,
        ].join(",");

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
            `&orderByFields=${encodeURIComponent(`${DATE_START_FIELD} ASC`)}` +
            `&resultRecordCount=${pageSize}` +
            `&resultOffset=${offset}` +
            `&returnGeometry=false&f=json`;

          const res = await fetch(url);
          const json = await res.json();

          if (!res.ok || json.error) {
            throw new Error(json?.error?.message || "No se pudo consultar ArcGIS.");
          }

          const expanded = [];

          for (const f of json.features || []) {
            const a = f.attributes || {};

            const startDate = toLocalDateOnlyFromUTC(a[DATE_START_FIELD]);
            const endDateRaw = toLocalDateOnlyFromUTC(a[DATE_END_FIELD]);

            // Si no hay fecha_fin, se asume evento de 1 día
            const endDate = endDateRaw || startDate;

            if (!startDate) continue;

            // Si viene mal (fin < inicio), se trata como 1 día
            const safeEnd = endDate && endDate.getTime() >= startDate.getTime() ? endDate : startDate;

            // recorremos del inicio al fin y agregamos los que caen en el mes actual
            let cur = startDate;
            let i = 0;

            while (sameOrBefore(cur, safeEnd) && i < 370) {
              if (inMonth(cur, monthDate)) {
                expanded.push({
                  // id único por día para React key / selección
                  id: `${a[OBJECTID_FIELD]}-${cur.toISOString().slice(0, 10)}`,
                  baseId: a[OBJECTID_FIELD],     
                  date: new Date(cur),
                  dependencia: a[DEPENDENCIA] ?? "",
                  zona: extractZona(a[ADDRESS]),
                  rangeStart: startDate,
                  rangeEnd: safeEnd,
                  title: a[TITLE_FIELD] ?? "Evento",
                  time: a[TIME_FIELD] ?? "",
                  eje: Number(a[EJE_FIELD]),
                  address: a[ADDRESS] ?? "",
                  descripcion: a[TITLE_FIELD] ?? "",
                });
              }
              cur = addDays(cur, 1);
              i++;
            }
          }

          all = all.concat(expanded);

          if (!json.exceededTransferLimit || (json.features || []).length === 0) break;
          offset += pageSize;
        }

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
  }, [featureLayerUrl, start, end, monthDate]);

  return { events, loading, error };
}
