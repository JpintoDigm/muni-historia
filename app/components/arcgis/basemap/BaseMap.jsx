"use client";

import { useEffect, useRef, useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Home from "@arcgis/core/widgets/Home";
import Viewpoint from "@arcgis/core/Viewpoint";
import { basePath } from "@/next.config.mjs";

function esc(v = "") {
  return String(v).replace(/'/g, "''");
}

export default function BaseMap({ nombre }) {
  const mapDiv = useRef(null);

  // refs para controlar capas desde el panel
  const layer0Ref = useRef(null);
  const layer1Ref = useRef(null);

  // estado UI
  const [legendOpen, setLegendOpen] = useState(false);
  const [vis0, setVis0] = useState(true);
  const [vis1, setVis1] = useState(true);

  const layerUrlPoligonos =
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/0";

  const layerUrl3D =
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/1";

  // cuando cambian los toggles, aplica visibilidad a las capas
  useEffect(() => {
    if (layer0Ref.current) layer0Ref.current.visible = vis0;
  }, [vis0]);

  useEffect(() => {
    if (layer1Ref.current) layer1Ref.current.visible = vis1;
  }, [vis1]);

  useEffect(() => {
    if (!mapDiv.current) return;

    const where = `Nombre = '${esc(nombre)}'`;

    const layer0 = new FeatureLayer({
      url: layerUrlPoligonos,
      title: "Polígonos (2D)",
      outFields: ["*"],
      popupEnabled: true,
      definitionExpression: where,
      elevationInfo: { mode: "on-the-ground" },
      visible: vis0,
    });

    layer0.renderer = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [60, 180, 140, 0.30],
        outline: { color: [20, 120, 90, 0.9], width: 1.5 },
      },
    };

    const layer1 = new FeatureLayer({
      url: layerUrl3D,
      title: "Elementos (3D)",
      outFields: ["*"],
      popupEnabled: true,
      definitionExpression: where,
      elevationInfo: { mode: "on-the-ground" },
      visible: vis1,
    });

    layer1.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 40,
            material: { color: [122, 167, 255, 0.9] },
            edges: { type: "solid", color: [255, 255, 255, 0.9], size: 1 },
          },
        ],
      },
    };

    // guarda refs para el panel
    layer0Ref.current = layer0;
    layer1Ref.current = layer1;

    const map = new Map({
      basemap: "gray-vector",
      ground: "world-elevation",
      layers: [layer0, layer1],
    });

    const view = new SceneView({
      container: mapDiv.current,
      map,
      qualityProfile: "high",
    });

    // Widgets
    const homeWidget = new Home({ view });
    view.ui.add(new BasemapToggle({ view, nextBasemap: "hybrid" }), "top-right");
    view.ui.add(homeWidget, "top-right");
    view.ui.add(new Fullscreen({ view }), "bottom-right");

    view.when(() => {
      view.environment = {
        starsEnabled: false,
        atmosphere: { quality: "high" },
        weather: { type: "sunny" },
        lighting: {
          type: "virtual",
          date: new Date("2025-01-01T18:00:00Z"), // 12:00 GT
          directShadowsEnabled: true,
          ambientOcclusionEnabled: true,
        },
      };
    });

    (async () => {
      try {
        await Promise.all([layer0.load(), layer1.load()]);
        const [e0, e1] = await Promise.all([
          layer0.queryExtent({ where }),
          layer1.queryExtent({ where }),
        ]);

        const ex0 = e0?.extent;
        const ex1 = e1?.extent;

        let target = null;
        if (ex0 && ex1) target = ex0.union(ex1);
        else target = ex0 || ex1;

        if (target) {
          await view.goTo({ target: target.expand(0.7), tilt: 70 }, { duration: 900 });

          homeWidget.viewpoint = new Viewpoint({
            targetGeometry: target.expand(1.6),
            camera: view.camera.clone(),
          });
        }
      } catch (e) {
        console.warn("Error enfocando:", e);
      }
    })();

    return () => {
      view.destroy();
      layer0Ref.current = null;
      layer1Ref.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombre]);

  return (
    <div className="relative w-full h-full">
      {/* MAPA */}
      <div ref={mapDiv} className="w-full h-full" />

      {/* BOTON "LEYENDA" */}
      <button
        onClick={() => setLegendOpen((v) => !v)}
        className="absolute w-8 left-4 bottom-5 z-50 rounded-full bg-white text-white font-extrabold shadow-lg"
      >
        <img src={`${basePath}/img/leyenda.png`} alt=""/>
      </button>

      {/* PANEL CUSTOM */}
      {legendOpen && (
        <div className="absolute left-4 bottom-16 z-50 w-[280px] rounded-2xl bg-muni-azul/60 shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/15">
            <p className="text-white font-extrabold text-sm">
              Elementos (simbología)
            </p>
          </div>

          {/* Items */}
          <div className="px-3 py-3 space-y-2">
            {/* Item 1 */}
            <label className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2 border border-white/15">
              <input
                type="checkbox"
                checked={vis0}
                onChange={(e) => setVis0(e.target.checked)}
                className="h-4 w-4 accent-lime-400"
              />
              <span className="h-9 w-9 rounded-full bg-[#3cb48c4d] flex items-center justify-center text-white font-black">
                <img src={`${basePath}/img/pentagon.png`} alt=""/>
              </span>
              <span className="text-white font-semibold text-xs">
                Polígonos (2D)
              </span>
            </label>

            {/* Item 2 */}
            <label className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2 border border-white/15">
              <input
                type="checkbox"
                checked={vis1}
                onChange={(e) => setVis1(e.target.checked)}
                className="h-4 w-4 accent-lime-400"
              />
              <span className="h-9 w-9 rounded-full bg-sky-400/90 flex items-center justify-center text-white font-black">
                <img src={`${basePath}/img/build.png`} alt=""/>
              </span>
              <span className="text-white font-semibold text-xs">
                Construcciones (3D)
              </span>
            </label>
          </div>

          {/* Footer buttons */}
          {/* <div className="px-3 pb-3 flex gap-2 justify-end">
            <button
              onClick={() => {
                setVis0(true);
                setVis1(true);
              }}
              className="rounded-lg bg-white/10 border border-white/20 text-white font-bold px-4 py-2 hover:bg-white/15"
            >
              Todos
            </button>

            <button
              onClick={() => {
                setVis0(false);
                setVis1(false);
              }}
              className="rounded-lg bg-white/10 border border-white/20 text-white font-bold px-4 py-2 hover:bg-white/15"
            >
              Ninguno
            </button>
          </div> */}



        </div>
      )}
    </div>
  );
}
