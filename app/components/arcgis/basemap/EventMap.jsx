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
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";


const SERVICIOS = [
  {
    id: "comercios",
    title: "Comercios",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/0",
    iconUrl: basePath + "/img/calendario/services/comercio.svg",
  },
  {
    id: "restaurantes",
    title: "Restaurantes",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/1",
    iconUrl: basePath + "/img/calendario/services/restaurant.svg",
  },
  {
    id: "hoteles",
    title: "Hoteles",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/2",
    iconUrl: basePath + "/img/calendario/services/hotel.svg",
  },
  {
    id: "parqueos",
    title: "Parqueos",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/3",
    iconUrl: basePath + "/img/calendario/services/park.svg",
  },
  {
    id: "bancos",
    title: "Bancos",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/4",
    iconUrl: basePath + "/img/calendario/services/banco.svg",
  },
  {
    id: "cajeros",
    title: "Cajeros",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/8",
    iconUrl: basePath + "/img/calendario/services/atm.svg",
  },
  {
    id: "asisMedica",
    title: "Asistencia médica",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/6",
    iconUrl: basePath + "/img/calendario/services/asistenciaMedica.svg",
  },
  {
    id: "cuerSocorro",
    title: "Cuerpos de socorro",
    url: "https://services9.arcgis.com/KpHXbQVRsuq80m4J/ArcGIS/rest/services/Servicios_procesiones_2024/FeatureServer/7",
    iconUrl: basePath + "/img/calendario/services/asistenciaMedica.svg",
  },
];



function esc(v = "") {

  return String(v).replace(/'/g, "''");
}


export default function EventMap({ event, eventLayerUrl }) {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);
  const eventoLayerRef = useRef(null);
  const serviciosLayersRef = useRef({});

  const [legendOpen, setLegendOpen] = useState(false);

  const [servicesVisibility, setServicesVisibility] = useState(() =>
    Object.fromEntries(SERVICIOS.map((s) => [s.id, false]))
  );


  const urlEventos =
    eventLayerUrl ||
    "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/2";


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

    const eventosLayer = new FeatureLayer({
      url: urlEventos,
      outFields: ["*"],
      popupEnabled: true,
      title: "Eventos",
      popupTemplate: {
        title: "{descripcion}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              { fieldName: "direccion", label: "Dirección" },
              { fieldName: "horario", label: "Horario" },
              { fieldName: "fecha_inicio", label: "Fecha inicio" },
              { fieldName: "fecha_fin", label: "Fecha fin" },
            ],
          },
        ],
      },
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

        popupEnabled: true,
        popupTemplate: {
          title: `{${"direccion" /* si no existe, igual no afecta */}}`,
          lastEditInfoEnabled: false, 
          content: (feature) => {
            const a = feature?.graphic?.attributes || {};
            const dir = a.direccion ?? a.DIRECCION ?? a.Direccion ?? "";
            if (!dir) return "<b>Dirección:</b> (sin dato)";
            return `<b>Dirección:</b> ${String(dir)}`;
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
      zoom: 16,
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

  useEffect(() => {
    if (!event || !viewRef.current || !eventoLayerRef.current) return;

    const view = viewRef.current;
    const layer = eventoLayerRef.current;

    let cancelled = false;

    (async () => {
      try {
        await view.when();
        await layer.load();

        // construir WHERE
        const oid = Number(event.id);
        let where = "";

        if (Number.isFinite(oid)) {
          where = `objectid = ${oid}`;
        } else if (event.descripcion) {
          where = `descripcion = '${esc(event.descripcion)}'`;
        } else if (event.title) {
          where = `descripcion = '${esc(event.title)}'`;
        } else {
          console.warn("Evento sin id/descripcion/title para filtrar:", event);
          return;
        }

        // ✅ FILTRAR para que SOLO se vea el seleccionado
        layer.definitionExpression = where;

        // Esperar a que el filtro se aplique visualmente
        await layer.when();

        // Traer el feature con geometría para enfocar
        const result = await layer.queryFeatures({
          where,
          outFields: ["*"],
          returnGeometry: true,
          outSpatialReference: view.spatialReference,
        });

        if (cancelled) return;

        const feature = result?.features?.[0];
        if (!feature?.geometry) {
          console.warn("No se encontró geometría para:", where);
          return;
        }

        // resaltar seleccionado
        view.graphics.removeAll();
        view.graphics.add({
          geometry: feature.geometry,
          symbol: {
            type: "simple-marker",
            color: [44, 184, 119],
            size: 12,
            outline: { color: [151, 215, 255], width: 2 },
          },
        });

        await view.goTo({ target: feature.geometry, zoom: 18 }, { duration: 800 });
      } catch (err) {
        if (!cancelled) console.error("Error enfocando evento:", err);
      }
    })();

    return () => {
      cancelled = true;

      // ✅ limpiar resaltado (opcional)
      const v = viewRef.current;
      if (v && !v.destroyed) v.graphics.removeAll();

      // ✅ IMPORTANTÍSIMO: quitar filtro si se cambia o se cierra modal
      const l = eventoLayerRef.current;
      if (l) l.definitionExpression = "1=1";
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

      {/* Overlay para cerrar al dar click afuera */}
      {legendOpen && (
        <button
          aria-label="Cerrar leyenda"
          onClick={() => setLegendOpen(false)}
          className="absolute inset-0 z-40 cursor-default"
          style={{ background: "transparent" }}
        />
      )}

      {/* Leyenda / panel de servicios */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-50">
        {/* Popup */}
        {legendOpen && (
          <div className="mb-2 w-[260px] rounded-xl bg-white/95 shadow-lg border border-gray-200 p-2 backdrop-blur">
            <p className="text-xs font-bold text-gray-700 px-2 py-1">
              Servicios
            </p>

            <div className="max-h-56 overflow-auto">
              {SERVICIOS.map((srv) => {
                const checked = !!servicesVisibility[srv.id];

                return (
                  <label
                    key={srv.id}
                    className="flex items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={srv.iconUrl}
                        alt=""
                        className="w-5 h-5 shrink-0"
                      />
                      <span className="text-xs font-medium text-gray-800 truncate">
                        {srv.title}
                      </span>
                    </div>

                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleToggleService(srv.id)}
                      className="w-4 h-4 bg-muni-verde"
                    />
                  </label>
                );
              })}
            </div>

            <div className="flex gap-2 mt-2 px-2">
              <button
                onClick={() => {
                  // apaga todo
                  setServicesVisibility((prev) => {
                    const next = { ...prev };
                    for (const k of Object.keys(next)) next[k] = false;
                    return next;
                  });
                  // apaga capas
                  Object.values(serviciosLayersRef.current).forEach((l) => {
                    if (l) l.visible = false;
                  });
                }}
                className="flex-1 text-xs font-bold py-2 rounded-lg bg-muni-verde hover:bg-muni-verde/90 text-white"
              >
                Apagar todo
              </button>
            </div>
          </div>
        )}

        {/* Botón */}
        <button
          onClick={() => setLegendOpen((v) => !v)}
          className="w-[260px] py-3 rounded-xl text-white font-extrabold shadow-lg bg-muni-azul hover:bg-muni-azul/90"
        >
          Servicios
        </button>
      </div>
    </div>
  );

}
