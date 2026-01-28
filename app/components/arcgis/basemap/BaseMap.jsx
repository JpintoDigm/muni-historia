"use client";

import { useEffect, useRef, useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";

const layerUrlPoligonos =
  "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/0";

const layerUrl3D =
  "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/1";

function esc(v = "") {
  return String(v).replace(/'/g, "''");
}

const EXTRUDE_EXPR = "Max(1, DefaultValue($feature.no_pisos, 1)) * 3";


function extrudeColorSymbol(color) {
  return {
    type: "polygon-3d",
    symbolLayers: [
      {
        type: "extrude",
        size: {
          type: "expression",
          expression: EXTRUDE_EXPR,
        },
        material: { color },
        edges: {
          type: "solid",
          color: [255, 255, 255, 0.6],
          size: 1.2,
        },
      },
    ],
  };
}

export default function BaseMap({ nombre = "" }) {
  const mapDiv = useRef(null);

  const viewRef = useRef(null);
  const polyRef = useRef(null);
  const bldgRef = useRef(null);
  const [legendOpen, setLegendOpen] = useState(false);

  // visibilidad por capa
  const [layersVis, setLayersVis] = useState({
    poligonos: true,
    edificios3d: true,
  });

  useEffect(() => {
    if (!mapDiv.current) return;

    const mapaBase2021 = new VectorTileLayer({
      url: "https://vectortileservices9.arcgis.com/KpHXbQVRsuq80m4J/arcgis/rest/services/Mapabase2021General/VectorTileServer",
    });

    const map = new Map({
      basemap: new Basemap({
        baseLayers: [mapaBase2021],
        title: "Mapa base 2021",
        id: "mapaBase2021",
      }),
    });

    // Polígonos (PLANO 2D)
    const layerPoligonos = new FeatureLayer({
      url: layerUrlPoligonos,
      outFields: ["*"],
      visible: layersVis.poligonos,
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [0, 0, 0, 0], // relleno transparente
          outline: { color: [0, 90, 160, 1], width: 2 },
        },
      },
    });

    const layer3D = new FeatureLayer({
      url: layerUrl3D,
      outFields: ["*"],
      visible: layersVis.edificios3d,

      // obligatorio para extrusión
      elevationInfo: {
        mode: "relative-to-ground"
      },

      renderer: {
        type: "class-breaks",
        field: "no_pisos",

        classBreakInfos: [
          // 1 piso
          {
            minValue: 1,
            maxValue: 1,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  // altura (más realista): 1 piso -> 3m
                  size: 3,
                  material: { color: [245, 230, 200, 0.95] }, // beige
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 2 pisos
          {
            minValue: 2,
            maxValue: 2,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 6,
                  material: { color: [220, 200, 165, 0.95] }, // café claro
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 3 pisos
          {
            minValue: 3,
            maxValue: 3,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 9,
                  material: { color: [195, 165, 125, 0.95] }, // café medio
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 4 pisos
          {
            minValue: 4,
            maxValue: 4,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 12,
                  material: { color: [170, 135, 95, 0.95] }, // café tostado
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 5 pisos
          {
            minValue: 5,
            maxValue: 5,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 15,
                  material: { color: [140, 105, 70, 0.95] }, // café oscuro
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 6 pisos
          {
            minValue: 6,
            maxValue: 6,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 18,
                  material: { color: [110, 80, 50, 0.95] }, // café más oscuro
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },

          // 7+ pisos
          {
            minValue: 7,
            maxValue: 99,
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 21, // 7 pisos * 3m
                  material: { color: [80, 55, 35, 0.97] }, // café casi negro
                  edges: { type: "solid", color: [255, 255, 255, 0.6], size: 1 },
                },
              ],
            },
          },
        ],
      }



    });

    map.addMany([layerPoligonos, layer3D]);

    const view = new SceneView({
      container: mapDiv.current,
      map,

      //  cámara inicial con tilt alto para que sí se note el 3D desde el arranque
      camera: {
        position: { longitude: -90.5133, latitude: 14.6407, z: 3000 },
        tilt: 70,
        heading: 0,
      },

      //  sombras/iluminación ayudan un montón a que se vea volumen
      environment: {
        lighting: {
          directShadowsEnabled: true,
          ambientOcclusionEnabled: true,
        },
      },
    });

    viewRef.current = view;
    polyRef.current = layerPoligonos;
    bldgRef.current = layer3D;

    return () => {
      try {
        view.destroy();
      } catch {}
      viewRef.current = null;
      polyRef.current = null;
      bldgRef.current = null;
    };
  }, []);

  // Filtro + enfoque (se enfoca por el polígono)
  useEffect(() => {
    const view = viewRef.current;
    const poly = polyRef.current;
    const bldg = bldgRef.current;
    if (!view || !poly || !bldg) return;

    const n = String(nombre || "").trim();
    const where = n ? `nombre = '${esc(n)}'` : "1=1";

    poly.definitionExpression = where;
    bldg.definitionExpression = where;

    if (!n) return;

    let cancelled = false;

    (async () => {
      try {
        await view.when();
        await poly.load();

        const polyLV = await view.whenLayerView(poly);
        await new Promise((resolve) => {
          const h = polyLV.watch("updating", (updating) => {
            if (!updating) {
              h.remove();
              resolve();
            }
          });
        });

        if (cancelled) return;

        const q = poly.createQuery();
        q.where = where;
        q.returnGeometry = true;
        q.outSpatialReference = view.spatialReference;
        q.num = 1;

        const r = await poly.queryFeatures(q);
        if (cancelled) return;

        const f = r.features?.[0];
        if (!f?.geometry?.extent) return;

        const ext = f.geometry.extent;

        await view.goTo(
          {
            target: ext.expand(1.25),
            tilt: 75, //  tilt alto para notar extrusión
            heading: 0,
          },
          { duration: 700 }
        );
      } catch (e) {
        console.warn(" Error enfoque:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [nombre]);

  const toggleLayer = (key) => (e) => {
  const checked = e.target.checked;

  setLayersVis((prev) => ({ ...prev, [key]: checked }));

    if (key === "poligonos" && polyRef.current) {
      polyRef.current.visible = checked;
    }
    if (key === "edificios3d" && bldgRef.current) {
      bldgRef.current.visible = checked;
    }
  };


return (
  <div className="relative w-full h-full">
    <div ref={mapDiv} className="w-full h-full" />

    {/* Overlay para cerrar al dar click afuera */}
    {legendOpen && (
      <button
        aria-label="Cerrar panel"
        onClick={() => setLegendOpen(false)}
        className="absolute inset-0 z-40 cursor-default"
        style={{ background: "transparent" }}
      />
    )}

    {/* Panel */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-50">
      {legendOpen && (
        <div className="mb-2 w-[260px] rounded-xl bg-white/95 shadow-lg border border-gray-200 p-2 backdrop-blur">
          <p className="text-xs font-bold text-gray-700 px-2 py-1">
            Capas
          </p>

          <div className="max-h-56 overflow-auto">
            {/* Polígonos */}
            <label className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2 min-w-0">
                {/* mini swatch */}
                <span className="inline-block w-4 h-4 rounded-sm border border-gray-300 bg-white" />
                <span className="text-xs font-medium text-gray-800 truncate">
                  Polígonos
                </span>
              </div>

              <input
                type="checkbox"
                checked={!!layersVis.poligonos}
                onChange={toggleLayer("poligonos")}
                className="w-4 h-4"
              />
            </label>

            {/* 3D */}
            <label className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center gap-2 min-w-0">
                {/* mini swatch */}
                <span className="inline-block w-4 h-4 rounded-sm border border-gray-300 bg-[#C7B08A]" />
                <span className="text-xs font-medium text-gray-800 truncate">
                  Edificios 3D
                </span>
              </div>

              <input
                type="checkbox"
                checked={!!layersVis.edificios3d}
                onChange={toggleLayer("edificios3d")}
                className="w-4 h-4"
              />
            </label>
          </div>
        </div>
      )}

      {/* Botón */}
      <button
        onClick={() => setLegendOpen((v) => !v)}
        className="w-[260px] py-3 rounded-xl text-white font-extrabold shadow-lg bg-muni-azul hover:bg-muni-azul/90"
      >
        simbología
      </button>
    </div>
  </div>
);

}
