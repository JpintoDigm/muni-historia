"use client";

import { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Home from "@arcgis/core/widgets/Home";

function esc(v = "") {
  // Escapa comillas simples para usar en el WHERE
  return String(v).replace(/'/g, "''");
}

export default function EventMap({ event, eventLayerUrl }) {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);
  const layerRef = useRef(null);

  const urlEventos =
    eventLayerUrl ||
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/2";

  // Crear mapa + capa + widgets (solo una vez por URL)
  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({
      basemap: "gray-vector",
    });

    const layer = new FeatureLayer({
      url: urlEventos,
      outFields: ["*"],
      popupEnabled: true,
    });

    map.add(layer);
    layerRef.current = layer;

    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [-90.52, 14.64], // fallback CDG
      zoom: 11,
    });

    viewRef.current = view;

    const homeWidget = new Home({ view });
    view.ui.add(new BasemapToggle({ view, nextBasemap: "hybrid" }), "top-right");
    view.ui.add(homeWidget, "top-right");
    view.ui.add(new Fullscreen({ view }), "bottom-right");

    view.when().catch(console.warn);

    return () => {
      view.destroy();
      viewRef.current = null;
      layerRef.current = null;
    };
  }, [urlEventos]);

  // Cuando cambia el evento -> filtrar capa + enfocar
  useEffect(() => {
    if (!event || !viewRef.current || !layerRef.current) return;

    const view = viewRef.current;
    const layer = layerRef.current;
    let cancelled = false;

    (async () => {
      try {
        await layer.load();

        let where = "";

        if (event.id != null) {
          // 1) más robusto: por OBJECTID
          where = `OBJECTID = ${event.id} && descripcion =  ${event.descripcion}`;
        } else if (event.descripcion) {
          // 2) respaldo: por descripcion
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

        // Aseguramos que la vista siga viva antes de usarla
        const v = viewRef.current;
        if (!v || v.destroyed) {
          console.warn("La vista ya no está disponible (destroyed) cuando se intentó goTo");
          return;
        }

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


  return <div className="w-full h-full" ref={mapDiv} />;
}
