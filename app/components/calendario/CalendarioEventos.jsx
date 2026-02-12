"use client";

import { useState } from "react";
import { useRef} from "react";
import { useArcGISEvents } from "@/app/hooks/useArcGISEvents";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import DayEvents from "./DayEvents";
import EventMapModal from "./EventMapModal";

const TAB_EJE_MAP = {
  Eje1: 1,
  Eje2: 2,
  Eje3: 3,
};


export default function CalendarioEventos({ featureLayerUrl }) {
  const [month, setMonth] = useState(new Date());
  
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [tab, setTab] = useState("actividad");


    const dayEventsRef = useRef(null);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [selectedEjes, setSelectedEjes] = useState([]);

  const [selectedZona, setSelectedZona] = useState(null);

  const { events, loading } = useArcGISEvents({
    featureLayerUrl,
    monthDate: month,
  });

  const zonasDisponibles = [...new Set(events.map(e => e.zona).filter(Boolean))].sort((a,b)=>a-b);


  const filteredEvents = events
    .filter(e => (selectedEjes.length ? selectedEjes.includes(e.eje) : true))
    .filter(e => (selectedZona ? e.zona === selectedZona : true));

  const handleSelectDay = (date) => {
    setSelectedDay(date);

    requestAnimationFrame(() => {
      dayEventsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsMapOpen(true);
  };

const handleToggleEje = (eje) => {
  setSelectedEjes((prev) => {
    // Si ya está activo
    if (prev.includes(eje)) {
      // Si es el único activo → limpiar todo
      if (prev.length === 1) return [];

      // Si hay más de uno → remover solo este
      return prev.filter((id) => id !== eje);
    }

    // Si NO está activo → agregarlo
    return [...prev, eje];
  });
};


  // const filteredEvents =
  //   selectedEjes.length > 0
  //     ? events.filter((e) => selectedEjes.includes(e.eje))
  //     : events;

  // console.log("month", month, "events", events.length);




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
        selectedEjes={selectedEjes}
        onToggleEje={handleToggleEje}
        tab={tab}
        setTab={setTab}

        zonas={zonasDisponibles}
        selectedZona={selectedZona}
        onZonaChange={setSelectedZona}        
      />

      <CalendarGrid
        month={month}
        events={filteredEvents}
        selectedDay={selectedDay}
        onSelectDay={handleSelectDay}
        tab={tab}
        loading={loading}
      />

      <div ref={dayEventsRef} />

      <DayEvents
        day={selectedDay}
        events={filteredEvents}
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
