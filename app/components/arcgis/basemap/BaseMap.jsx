"use client";

import { useEffect, useRef } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const layerUrlPoligonos =
  "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/0";

const layerUrl3D =
  "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/1";

function esc(v = "") {
  return String(v).replace(/'/g, "''");
}

export default function BaseMap({ nombre = "" }) {
  const mapDiv = useRef(null);

  const viewRef = useRef(null);
  const polyRef = useRef(null);
  const bldgRef = useRef(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({
      basemap: "streets-vector",
      ground: "world-elevation",
    });

    const layerPoligonos = new FeatureLayer({
      url: layerUrlPoligonos,
      outFields: ["*"],
      visible: true,
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [0, 0, 0, 0],
          outline: { color: [0, 90, 160, 1], width: 2 },
        },
      },
    });

    const layer3D = new FeatureLayer({
      url: layerUrl3D,
      outFields: ["*"],
      visible: true,
      elevationInfo: { mode: "relative-to-ground" },
      renderer: {
        type: "class-breaks",
        field: "no_pisos",
        defaultSymbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: { type: "expression", expression: "$feature.no_pisos * 3" },
              material: { color: [200, 200, 200, 0.9] },
              edges: { type: "solid", color: [255, 255, 255, 0.35], size: 0.5 },
            },
          ],
        },
        classBreakInfos: [
          {
            minValue: 1,
            maxValue: 2,
            label: "1–2 pisos",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: { type: "expression", expression: "$feature.no_pisos * 3" },
                  material: { color: [225, 225, 225, 0.9] },
                  edges: { type: "solid", color: [255, 255, 255, 0.35], size: 0.5 },
                },
              ],
            },
          },
          {
            minValue: 3,
            maxValue: 4,
            label: "3–4 pisos",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: { type: "expression", expression: "$feature.no_pisos * 3" },
                  material: { color: [180, 180, 180, 0.9] },
                  edges: { type: "solid", color: [255, 255, 255, 0.35], size: 0.5 },
                },
              ],
            },
          },
          {
            minValue: 5,
            maxValue: 6,
            label: "5–6 pisos",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: { type: "expression", expression: "$feature.no_pisos * 3" },
                  material: { color: [120, 120, 120, 0.9] },
                  edges: { type: "solid", color: [255, 255, 255, 0.35], size: 0.5 },
                },
              ],
            },
          },
          {
            minValue: 7,
            maxValue: 99,
            label: "7+ pisos",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: { type: "expression", expression: "$feature.no_pisos * 3" },
                  material: { color: [70, 70, 70, 0.92] },
                  edges: { type: "solid", color: [255, 255, 255, 0.35], size: 0.5 },
                },
              ],
            },
          },
        ],
      },
    });

    map.addMany([layerPoligonos, layer3D]);

    const view = new SceneView({
      container: mapDiv.current,
      map,
      camera: {
        position: { longitude: -90.5133, latitude: 14.6407, z: 5000 },
        tilt: 55,
        heading: 0,
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
            tilt: 70,
            heading: 0,
          },
          { duration: 700 }
        );
      } catch (e) {
        console.warn("❌ Error enfoque:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [nombre]);

  return <div ref={mapDiv} className="w-full h-full" />;
}
