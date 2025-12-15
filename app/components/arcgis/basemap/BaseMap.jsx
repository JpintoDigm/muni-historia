"use client";

import { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle.js";
import Home from "@arcgis/core/widgets/Home";
import Viewpoint from "@arcgis/core/Viewpoint";




function esc(v = "") {
  return String(v).replace(/'/g, "''");
}

export default function BaseMap({ nombre }) {
  const mapDiv = useRef(null);

  const layerUrl =
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/1";

  useEffect(() => {
    if (!mapDiv.current) return;

    const where = `Nombre = '${esc(nombre)}'`;

    const layer = new FeatureLayer({
      url: layerUrl,
      outFields: ["*"],
      popupEnabled: true,
      definitionExpression: where,
      elevationInfo: { mode: "on-the-ground" },
    });

    const map = new Map({
      basemap: "gray-vector",
      ground: "world-elevation",
      layers: [layer],
    });

    const view = new SceneView({
      container: mapDiv.current,
      map,
      qualityProfile: "high",
      zoom: 50
    });

    const homeWidget = new Home({ view });
    view.ui.add(homeWidget, "top-left");

    (async () => {
      try {
        await layer.load();

        const { extent } = await layer.queryExtent({ where });

        if (extent) {
          //Enfoca al feature filtrado
          await view.goTo({ target: extent.expand(1.5), tilt: 70 }, { duration: 900 });

          //Guarda ese estado como "Home"
          const vp = new Viewpoint({
            targetGeometry: extent.expand(1.5),
            camera: view.camera.clone(), 
          });

          homeWidget.viewpoint = vp;
          return;
        }

        const fs = await layer.queryFeatures({ where, returnGeometry: true, num: 1 });
        if (fs.features.length) {
          await view.goTo({ target: fs.features[0].geometry, zoom: 20, tilt: 70 }, { duration: 900 });
          homeWidget.viewpoint = view.viewpoint.clone();
        }
      } catch (e) {
        console.warn("Home/GoTo error:", e);
      }
    })();

    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "hybrid" // o "hybrid"
    });

    view.ui.add(basemapToggle, "top-right");
    
    view.ui.add(new Fullscreen({ view }), "bottom-right");
    
    view.when(() => {
      view.environment = {
        weather: {
          type: "sunny",
        },

        lighting: {
          type: "virtual",
          date: new Date("2025-01-01T20:00:00Z"), // 12:00 GT
          directShadowsEnabled: true,
          ambientOcclusionEnabled: true,
        },

        atmosphere: {
          quality: "high",
        },

        starsEnabled: false,
      };
    });



    (async () => {
      try {
        await layer.load();

        console.log("geometryType:", layer.geometryType); // <-- revisa esto en consola

        // Renderer 3D para polígonos
        layer.renderer = {
          type: "simple",
          symbol: {
            type: "polygon-3d",
            symbolLayers: [
              {
                type: "extrude",
                size: 40, // sube a 60 si querés más alto
                material: { color: [122, 167, 255, 0.9] },
                edges: { type: "solid", color: [255, 255, 255, 0.9], size: 1 },
              },
            ],
          },
        };

        //Enfocar
        const { extent } = await layer.queryExtent({ where });
        if (extent) {
          await view.goTo({ target: extent.expand(1.5), tilt: 70 }, { duration: 900 });
        }
      } catch (e) {
        console.warn("Error 3D layer:", e);
      }
    })();

    return () => view.destroy();
  }, [nombre]);

  return <div ref={mapDiv} style={{ width: "100%", height: "100%" }} />;
}
