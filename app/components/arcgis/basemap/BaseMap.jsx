'use client';

import { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config";
// import Map from "@arcgis/core/Map.js";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";


export default function ExampleMap( {webmapId} ) {
  const mapDiv = useRef(null);

  useEffect(() => {
    esriConfig.portalUrl = "https://gis.muniguate.com/portal";

    const webmap = new WebMap({
      portalItem: {
        id: webmapId,
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

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div ref={mapDiv} style={{ height: "80%", width: "100%" }} />
    </div>
  );
}
