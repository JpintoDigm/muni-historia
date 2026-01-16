"use client";

import { useEffect, useRef, useState } from "react";
import { basePath } from "@/next.config.mjs"

import "@arcgis/core/assets/esri/themes/light/main.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Home from "@arcgis/core/widgets/Home";

const SERVICIOS = [
  {
    id: "comercios",
    title: "Comercios",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/0",
    iconUrl: basePath + "/img/calendario/comercio.svg",
  },
  {
    id: "restaurantes",
    title: "Restaurantes",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/1",
    iconUrl: basePath + "/img/calendario/restaurant.svg",
  },
  {
    id: "hoteles",
    title: "Hoteles",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/2",
    iconUrl: basePath + "/img/calendario/hotel.svg",
  },
  {
    id: "parqueos",
    title: "Parqueos",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/3",
    iconUrl: basePath + "/img/calendario/park.svg",
  },
  {
    id: "bancos",
    title: "Bancos",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/4",
    iconUrl: basePath + "/img/calendario/banco.svg",
  },
  {
    id: "cajeros",
    title: "Cajeros",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/8",
    iconUrl: basePath + "/img/calendario/atm.svg",
  },
  {
    id: "asisMedica",
    title: "Asistencia médica",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/6",
    iconUrl: basePath + "/img/calendario/asistenciaMedica.svg",
  },
  {
    id: "cuerSocorro",
    title: "Cuerpos de socorro",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/7",
    iconUrl: basePath + "/img/calendario/asistenciaMedica.svg",
  },
];



function esc(v = "") {
  // Escapa comillas simples para usar en el WHERE
  return String(v).replace(/'/g, "''");
}

export default function EventMap({ event, eventLayerUrl }) {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);
  const eventoLayerRef = useRef(null);
  const serviciosLayersRef = useRef({});

  const [servicesVisibility, setServicesVisibility] = useState(() =>
    Object.fromEntries(SERVICIOS.map((s) => [s.id, false])) //apagados al inicio
  );  

  const urlEventos =
    eventLayerUrl ||
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/2";

  // Crear mapa + capa + widgets (solo una vez por URL)
  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({
      basemap: "gray-vector",
    });

    const eventosLayer = new FeatureLayer({
      url: urlEventos,
      outFields: ["*"],
      popupEnabled: true,
      title: "Eventos",      
    });

    map.add(eventosLayer);
    eventoLayerRef.current = eventosLayer;

    const serviciosLayersObj = {};

    SERVICIOS.forEach((srv) => {
      const fl = new FeatureLayer({
        url: srv.url,
        title: srv.title,
        outFields: ["*"],
        visible: false,
        renderer: {
          type: "simple",
          symbol: {
            type: "picture-marker",
            url: srv.iconUrl,
            width: "24px",
            height: "24px",
          },
        },
      });

      map.add(fl);
      serviciosLayersObj[srv.id] = fl;
    });

    serviciosLayersRef.current = serviciosLayersObj;

    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [-90.52, 14.64],
      zoom: 11,
    });

    viewRef.current = view;

    const homeWidget = new Home({ view });
    view.ui.add(new BasemapToggle({ view, nextBasemap: "hybrid" }), "top-right");
    view.ui.add(homeWidget, "top-left");
    view.ui.add(new Fullscreen({ view }), "bottom-left");

    view.when().catch(console.warn);

    return () => {
      view.destroy();
      viewRef.current = null;
      eventoLayerRef.current = null;
      serviciosLayersRef.current = {};
    };
  }, [urlEventos]);

  // Cuando cambia el evento -> filtrar capa + enfocar
  useEffect(() => {
    if (!event || !viewRef.current || !eventoLayerRef.current) return;

    const view = viewRef.current;
    const layer = eventoLayerRef.current;
    let cancelled = false;

    (async () => {
      try {
        await layer.load();

        let where = "";

        if (event.id != null) {
          // con OBJECTID es suficiente normalmente
          where = `OBJECTID = ${event.id}`;
        } else if (event.descripcion) {
          where = `descripcion = '${esc(event.descripcion)}'`;
        } else {
          console.warn("Evento sin id ni descripcion, no se puede localizar");
          return;
        }

        console.log("WHERE usado en mapa:", where);

        layer.definitionExpression = where;

        const result = await layer.queryFeatures({
          where,
          outFields: ["*"],
          returnGeometry: true,
        });

        if (cancelled) return;

        if (!result.features.length) {
          console.warn("No se encontró feature para:", where);
          return;
        }

        const feature = result.features[0];
        if (!feature.geometry) {
          console.warn("El feature no tiene geometría");
          return;
        }

        const v = viewRef.current;
        if (!v || v.destroyed) return;

        v.graphics.removeAll();
        v.graphics.add({
          geometry: feature.geometry,
          symbol: {
            type: "simple-marker",
            color: [0, 122, 255, 0.95],
            size: 12,
            outline: {
              color: [255, 255, 255],
              width: 2,
            },
          },
          attributes: feature.attributes,
        });

        v.goTo({
          target: feature.geometry,
          zoom: 17,
        });
      } catch (err) {
        if (!cancelled) {
          console.error("Error enfocando evento en el mapa:", err);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [event]);

  // Checkboxes para la leyenda
  const handleToggleService = (id) => (e) => {
    const checked = e.target.checked;

    setServicesVisibility((prev) => ({
      ...prev,
      [id]: checked,
    }));

    const layer = serviciosLayersRef.current[id];
    if (layer) {
      layer.visible = checked;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Mapa */}
      <div className="w-full h-full" ref={mapDiv} />

      {/* Leyenda / panel de servicios */}
      <div className="absolute mx-auto bottom-0 rounded-xl bg-white/90 shadow px-3 py-2 text-xs max-w-50">

        <button
          onClick={() => setLegendOpen((v) => !v)}
          className="mx-auto w-full bottom-0 py-4 text-white font-extrabold shadow-lg bg-amber-300"
        > 
          {/* <img src={`${basePath}/img/leyenda.png`} alt=""/> */}

          Leyenda
        </button>
        



        
      </div>
    </div>
  );
}
