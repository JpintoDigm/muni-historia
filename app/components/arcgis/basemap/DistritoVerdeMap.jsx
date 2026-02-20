"use client";

import { useEffect, useRef, useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import Home from "@arcgis/core/widgets/Home";
import { basePath } from "@/next.config.mjs";

export default function DistritoVerdeMap() {
  const mapDiv = useRef(null);
  const viewRef = useRef(null);
  const [openLegend, setOpenLegend] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    if (!mapDiv.current) return;

const distritoVerdePoligono = new FeatureLayer({
  url: "https://gis.muniguate.com/server/rest/services/Medio_ambiente/dma_gran_distritoverde/FeatureServer/0",
  title: "Distrito Verde",
  outFields: ["*"],
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-fill",
      url: `${basePath}/img/accionesVerdes/copaArbol.png`,
      width: "28px",
      height: "28px",
      xoffset: 0,
      yoffset: 0,
      outline: {
        type: "simple-line",
        color: [69, 117, 110, 0.95],
        width: 1.5
      }
    }
  },
  opacity: 0.95,
  popupTemplate: {
    title: "Distrito Verde",
    content: [
      {
        type: "fields",
        fieldInfos: [
          { fieldName: "nombre", label: "Nombre:" },
          { fieldName: "zona", label: "Zona:" },
          { fieldName: "direccion", label: "Dirección:" },
          { fieldName: "horarios", label: "Horarios:" },
          { fieldName: "costo_de_ingreso", label: "Costo de ingreso:" },
          { fieldName: "costo_de_parqueo", label: "Costo de Parqueo:" }
        ]
      }
    ]
  }
});

    const mapaBase2021 = new VectorTileLayer({
      url: "https://vectortileservices9.arcgis.com/KpHXbQVRsuq80m4J/arcgis/rest/services/Mapabase2021General/VectorTileServer"
    });

    const map = new Map({
      basemap: new Basemap({
        baseLayers: [mapaBase2021],
        title: "Mapa base 2021",
        id: "mapaBase2021"
      }),
      layers: [distritoVerdePoligono]
    });

    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;

    esriConfig.request.interceptors.push({
      urls: /dma_gran_distritoverde|muniguate\.com/i,
      before: (params) => {
        console.log("REQ:", params.url);
      }
    });

    const view = new MapView({
      container: mapDiv.current,
      map,
      center: [-90.484299, 14.62582],
      zoom: isDesktop ? 12 : 10,
      popup: {
        autoOpenEnabled: false
      }   
    });
    view.popupEnabled = false;

    view.on("click", async (event) => {
      const response = await view.hitTest(event);

      const result = response.results.find(
        (r) => r.graphic.layer === distritoVerdePoligono
      );

      if (result) {
        setSelectedPark(result.graphic.attributes);
      } else {
        setSelectedPark(null);
      }
    });

    viewRef.current = view;

    view.ui.add(new Home({ view }), "top-left");

    distritoVerdePoligono.when()
      .then(() => {
        if (distritoVerdePoligono.fullExtent) {
          view.goTo(distritoVerdePoligono.fullExtent.expand(1.1));
        }
      })
      .catch(() => {});

    return () => {
      viewRef.current = null;
      view.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[52vh] sm:h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden">
      {/* MAPA */}
      <div ref={mapDiv} className="w-full h-full" />

      {/* BOTÓN SIMBOLOGÍA */}
      <div className="absolute bottom-4 left-1 lg:left-4 z-20">
        <button
          type="button"
          onClick={() => setOpenLegend((v) => !v)}
          className={`
            font-semibold px-4 py-2 rounded-xl shadow-lg text-lg
            border border-black/10 transition-all duration-300
            hover:scale-105
            ${openLegend
              ? "bg-muni-azul text-muni-verde"
              : "bg-muni-verde text-muni-azul"
            }
          `}
        >
          Simbología
        </button>

        {/* PANEL LEYENDA */}
        {openLegend && (
          <div className="mt-2 bg-white/95 rounded-xl shadow-lg border border-black/10 p-3 w-44 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <img
                src={`${basePath}/img/accionesVerdes/copaArbol.png`}
                alt="Icono parques"
                className="w-6 h-6 object-contain"
              />
              <p className="text-lg font-semibold text-muni-azul">Parques</p>
            </div>
          </div>
        )}
      </div>

      {selectedPark && (
        <div className="absolute top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-30
                        border-l border-black/10 p-6 overflow-y-auto
                        animate-slideIn">
          
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-muni-verde">
              {selectedPark.nombre}
            </h2>
            <button
              onClick={() => setSelectedPark(null)}
              className="text-muni-azul font-bold text-lg hover:text-muni-verde"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-muni-azul">Zona</p>
              <p>{selectedPark.zona}</p>
            </div>

            <div>
              <p className="font-semibold text-muni-azul">Dirección</p>
              <p>{selectedPark.direccion}</p>
            </div>

            <div>
              <p className="font-semibold text-muni-azul">Horarios</p>
              <p>{selectedPark.horarios}</p>
            </div>

            <div>
              <p className="font-semibold text-muni-azul">Ingreso</p>
              <p>{selectedPark.costo_de_ingreso}</p>
            </div>

            <div>
              <p className="font-semibold text-muni-azul">Parqueo</p>
              <p>{selectedPark.costo_de_parqueo}</p>
            </div>
          </div>
        </div>
      )}      
    </div>

    
  );
}