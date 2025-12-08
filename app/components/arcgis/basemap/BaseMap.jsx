'use client';

import { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config.js";
// import Map from "@arcgis/core/Map.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";

export default function ExampleMap( {webmapId} ) {
  const mapDiv = useRef(null);

  useEffect(() => {
    // Si usarás servicios de Location (basemap, geocodificación, rutas, etc.),
    // coloca tu API Key de ArcGIS Platform:
    esriConfig.portalUrl = "https://gis.muniguate.com/portal";

    const webmap = new WebMap({
      portalItem: {
        id: webmapId, // copia el ID de tu mapa público
      },
    });

    const view = new MapView({
      container: mapDiv.current,
      map: webmap,

    });

    // Limpieza al desmontar
    return () => {
      view.destroy();
    };
  }, [webmapId]);

  // Asegúrate de dar altura al contenedor, si no, el mapa no se verá
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div ref={mapDiv} style={{ height: "80%", width: "100%" }} />
    </div>
  );
}
