"use client";

import { useState } from "react";
import { useArcGISEvents } from "@/app/hooks/useArcGISEvents";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import DayEvents from "./DayEvents";

export default function CalendarioEventos({ featureLayerUrl }) {
  const [month, setMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [tab, setTab] = useState("actividad");

  const { events, loading } = useArcGISEvents({
    featureLayerUrl,
    monthDate: month,
  });

  return (
    <div className="mx-auto max-w-6xl text-white">
      <CalendarHeader
        month={month}
        onPrev={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
        onNext={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
        onToday={() => {
          const t = new Date();
          setMonth(new Date(t.getFullYear(), t.getMonth(), 1));
          setSelectedDay(t);
        }}
        tab={tab}
        setTab={setTab}
      />

      <CalendarGrid
        month={month}
        events={events}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        tab={tab}
        loading={loading}
      />

      <DayEvents
        day={selectedDay}
        events={events}
        tab={tab}
      />
    </div>
  );
}
