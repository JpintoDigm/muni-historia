"use client";

import { useState } from "react";
import { useArcGISEvents } from "@/app/hooks/useArcGISEvents";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import DayEvents from "./DayEvents";
import EventMapModal from "./EventMapModal";

export default function CalendarioEventos({ featureLayerUrl }) {
  const [month, setMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [tab, setTab] = useState("actividad");

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);


  const { events, loading } = useArcGISEvents({
    featureLayerUrl,
    monthDate: month,
  });

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsMapOpen(true);
  };

console.log("month", month, "events", events.length);


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
        onSelectEvent={handleSelectEvent}
      />

      <EventMapModal
        open={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        event={selectedEvent}
        eventLayerUrl={featureLayerUrl}
      />      

    </div>
  );
  
}
