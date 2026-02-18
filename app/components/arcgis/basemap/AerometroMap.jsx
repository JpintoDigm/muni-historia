"use client";

import { useEffect, useRef, useState } from "react";

import "@arcgis/core/assets/esri/themes/light/main.css";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Basemap from "@arcgis/core/Basemap";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { basePath } from "@/next.config.mjs";
import Home from "@arcgis/core/widgets/Home.js";



export default function AerometroMap() {
  const mapDiv = useRef(null);
  const [showLegend, setShowLegend] = useState(false);

  useEffect(() => {
    if (!mapDiv.current) return;

    const drawLayer = new GraphicsLayer();

    const lineLayerBlue = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/gp_aereometro/FeatureServer/3",
      renderer: {
        type: "simple",
        symbol: { type: "simple-line", color: [0, 92, 230, 1], width: 3 }
      },
      popupEnabled: true
    });

    const pointsLayerBlue = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/gp_aereometro/FeatureServer/0",
      definitionExpression: "OBJECTID IN (1,2,3,4)",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          color: [0, 92, 230, 1],
          size: 15,
          outline: { color: [255, 255, 255, 1], width: 1 }
        }
      },

    popupTemplate: {
        title: "Estación {OBJECTID}",
        content: [
        {
            type: "fields",
            fieldInfos: [
            
            { fieldName: "nombre", label: "Nombre" },
            { fieldName: "linea", label: "Línea" }
            ]
        }
        ]
    },
      labelsVisible: true,
      labelingInfo: [

        // número dentro del punto
        {
          labelExpressionInfo: { expression: "$feature.OBJECTID" },
          labelPlacement: "center-center",
          symbol: {
            type: "text",
            color: "white",
            haloColor: [0,92,230,1],
            haloSize: 1,
            font: { family: "Arial", size: 11, weight: "bold" }
          }
        },

        // nombre arriba
        {
          where: "1=1",
          
          labelExpressionInfo: {

            expression: `
              var n = Trim($feature.nombre);
              IIf(IsEmpty(n), Text($feature.OBJECTID), Replace(n, ' ', TextFormatting.NewLine))
            `
          },
          
          labelPlacement: "above-center",
          deconflictionStrategy: "none", //
          priority: 9999, 
          
          symbol: {
            type: "text",
            color: "#0B4AA2",
            haloColor: "white",
            haloSize: 1.5,
            font: { family: "Arial", size: 10, weight: "bold" }
          }
        }
      ]

    });

    const lineLayerGreen = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/gp_aereometro/FeatureServer/2",
      renderer: {
        type: "simple",
        symbol: { type: "simple-line", color: [69, 117, 110, 0.8], width: 3 }
      },
      popupEnabled: true
    });

    // Líneas Transmetro
    const transmetroLineas = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/Mobilidad_Urbana/DMU_Transmetro/FeatureServer/1",
      outFields: ["*"],
      title: "Transmetro - Líneas",
      renderer: {
        type: "simple",
        symbol: { type: "simple-line", color: [0, 156, 50, 0.8], width: 3 } // ajusta color/width si quieres
      },
      popupEnabled: true
    });

    // Estaciones Transmetro
    const transmetroEstaciones = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/Mobilidad_Urbana/DMU_Transmetro/FeatureServer/0",
      outFields: ["*"],
      title: "Transmetro - Estaciones",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          color: [0, 156, 50, 0.8],
          size: 12,
          outline: { color: [255, 255, 255, 1], width: 1 }
        }
      },
      popupTemplate: {
        title: "Estación Transmetro {OBJECTID}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              { fieldName: "nombre", label: "Nombre" },
              { fieldName: "linea", label: "Línea" }
            ]
          }
        ]
      },
      labelsVisible: true,
      labelingInfo: [
        // OBJECTID dentro del punto
        {
          labelExpressionInfo: { expression: "$feature.OBJECTID" },
          labelPlacement: "center-center",
          symbol: {
            type: "text",
            color: "white",
            haloColor: [0, 156, 50, 0.8],
            haloSize: 1,
            font: { family: "Arial", size: 10, weight: "bold" }
          }
        },
        // nombre arriba (si existe)
        // {
        //   where: "1=1",
        //   labelExpressionInfo: {
        //     expression: `
        //       var n = Trim($feature.nombre);
        //       IIf(IsEmpty(n), Text($feature.OBJECTID), Replace(n, ' ', TextFormatting.NewLine))
        //     `
        //   },
        //   labelPlacement: "above-center",
        //   deconflictionStrategy: "none",
        //   priority: 9999,
        //   symbol: {
        //     type: "text",
        //     color: "#B00000",
        //     haloColor: "white",
        //     haloSize: 1.5,
        //     font: { family: "Arial", size: 10, weight: "bold" }
        //   }
        // }
      ]
    });

    // Líneas TuBus
    const tuBusLineas = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/Mobilidad_Urbana/DMU_Transmetro/FeatureServer/6",
      outFields: ["*"],
      title: "TuBus - Líneas",
      renderer: {
        type: "simple",
        symbol: { type: "simple-line", color: [0, 11, 121, 0.79], width: 3 } // ajusta color/width si quieres
      },
      popupEnabled: true
    });

    // Estaciones Transmetro
    const tuBusEstaciones = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/Mobilidad_Urbana/DMU_Transmetro/FeatureServer/5",
      outFields: ["*"],
      title: "Transmetro - Estaciones",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          color: [0, 11, 121, 0.79],
          size: 12,
          outline: { color: [255, 255, 255, 1], width: 1 }
        }
      },
      popupTemplate: {
        title: "Estación Transmetro {OBJECTID}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              { fieldName: "nombre", label: "Nombre" },
              { fieldName: "linea", label: "Línea" }
            ]
          }
        ]
      },
      labelsVisible: true,
      labelingInfo: [
        // OBJECTID dentro del punto
        {
          labelExpressionInfo: { expression: "$feature.OBJECTID" },
          labelPlacement: "center-center",
          symbol: {
            type: "text",
            color: "white",
            haloColor: [0, 11, 121, 0.79],
            haloSize: 1,
            font: { family: "Arial", size: 10, weight: "bold" }
          }
        },
        // nombre arriba (si existe)
        // {
        //   where: "1=1",
        //   labelExpressionInfo: {
        //     expression: `
        //       var n = Trim($feature.nombre);
        //       IIf(IsEmpty(n), Text($feature.OBJECTID), Replace(n, ' ', TextFormatting.NewLine))
        //     `
        //   },
        //   labelPlacement: "above-center",
        //   deconflictionStrategy: "none",
        //   priority: 9999,
        //   symbol: {
        //     type: "text",
        //     color: "#B00000",
        //     haloColor: "white",
        //     haloSize: 1.5,
        //     font: { family: "Arial", size: 10, weight: "bold" }
        //   }
        // }
      ]
    });

    const pointsLayerGreen = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/gp_aereometro/FeatureServer/0",
      definitionExpression: "OBJECTID IN (5,6,7,8,9,10,11,12)",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          color: [69, 117, 110, 0.8],
          size: 15,
          outline: { color: [255, 255, 255, 1], width: 1 }
        }
      },

    popupTemplate: {
        title: "Estación {OBJECTID}",
        content: [
        {
            type: "fields",
            fieldInfos: [
            
            { fieldName: "nombre", label: "Nombre" },
            { fieldName: "linea", label: "Línea" }
            ]
        }
        ]
    },
      labelsVisible: true,
      labelingInfo: [
            // (opcional) Filtra solo los que tienen geometría válida

        // número dentro del punto
        {
          labelExpressionInfo: { expression: "$feature.OBJECTID" },
          labelPlacement: "center-center",
          symbol: {
            type: "text",
            color: "white",
            haloColor: [69, 117, 110, 0.8],
            haloSize: 1,
            font: { family: "Arial", size: 11, weight: "bold" }
          }
        },

        // nombre arriba
        {
          where: "1=1",
          
          labelExpressionInfo: {

            expression: `
              var n = Trim($feature.nombre);
              IIf(IsEmpty(n), Text($feature.OBJECTID), Replace(n, ' ', TextFormatting.NewLine))
            `
          },
          
          labelPlacement: "above-center",
          deconflictionStrategy: "none", //
          priority: 9999,           

          symbol: {
            type: "text",
            color: "#45756ecc",
            haloColor: "white",
            haloSize: 1.5,
            font: { family: "Arial", size: 10, weight: "bold" } // base
          },
          visualVariables: [
            {
              type: "size",
              valueExpression: "$view.scale",
              stops: [
                { value: 60000, size: 6 },
                { value: 25000, size: 10 },
                { value: 12000, size: 13 },
                { value: 6000,  size: 16 }
              ]
            }
          ]

        }
      ]

    });

    const pointsLayerCentral = new FeatureLayer({
      url: "https://gis.muniguate.com/server/rest/services/gerencia_planificacion/gp_aereometro/FeatureServer/1",
      definitionExpression: "OBJECTID IN (1)",
      renderer: {
        type: "simple",
        symbol: {
          type: "picture-marker",
          url: `${basePath}/img/acciones/estacionCentral.svg`,
          width: "38px",
          height: "38px"
        }
      },

    popupTemplate: {
        title: "Estación Central Intermedia",
        content: [
        {
            type: "fields",
            fieldInfos: [
            
            { fieldName: "nombre", label: "Nombre" },
            { fieldName: "linea", label: "Línea" }
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
      layers: [
        lineLayerBlue,
        pointsLayerBlue,
        lineLayerGreen,
        pointsLayerGreen,
        pointsLayerCentral,

        transmetroLineas,
        tuBusLineas,
        transmetroEstaciones,
        tuBusEstaciones,

        drawLayer
      ]

    });

    const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

    const view = new MapView({
    container: mapDiv.current,
    map,
    center: [-90.556844, 14.623310],
    zoom: isDesktop ? 13 : 11 //  ajusta estos números a tu gusto
    });
    // Ver Coordenadas

    // view.on("click", (event) => {
    // const point = view.toMap({ x: event.x, y: event.y });

    // console.log("LONG:", point.longitude);
    // console.log("LAT:", point.latitude);

    // alert(`center: [${point.longitude.toFixed(6)}, ${point.latitude.toFixed(6)}]`);
    // });

    let homeWidget = new Home({
    view: view
    });

    view.ui.add(homeWidget, "top-left");    

    Promise.all([
      lineLayerBlue.when(),
      pointsLayerBlue.when(),
      lineLayerGreen.when(),
      pointsLayerGreen.when(),
      pointsLayerCentral.when(),
      transmetroLineas.when(),
      tuBusLineas.when(),
      transmetroEstaciones.when(),
      tuBusEstaciones.when()
    ])
      .then(() =>
        view.goTo(
          [
            lineLayerBlue.fullExtent,
            pointsLayerBlue.fullExtent,
            lineLayerGreen.fullExtent,
            pointsLayerGreen.fullExtent,
            pointsLayerCentral.fullExtent,
            transmetroLineas.fullExtent,
            tuBusLineas.fullExtent,
            transmetroEstaciones.fullExtent,
            tuBusEstaciones.fullExtent
          ].filter(Boolean)
        )
      )
      .catch(() => {});

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-[52vh] sm:h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden">
    {/* MAPA */}
    <div ref={mapDiv} className="w-full h-full" />

    {/* BOTÓN LEYENDA */}
    <button
        onClick={() => setShowLegend((v) => !v)}
        className="
        absolute bottom-3 left-3 md:bottom-4 md:left-4 z-30
        bg-muni-azul text-white
        px-3 py-2 md:px-4 md:py-2
        text-xs md:text-sm
        rounded-full shadow-lg
        hover:bg-muni-verde transition
        "
    >
        Simbología
    </button>

    {/* PANEL LEYENDA */}
    {showLegend && (
        <div
        className="
            absolute z-20
            left-3 right-3 bottom-14
            md:left-4 md:right-auto md:bottom-16
            w-auto md:w-[360px] lg:w-[420px]
        "
        >
        <div
            className="
            rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur
            px-4 py-4 md:px-6 md:py-5
            shadow-lg
            max-h-[30vh] md:max-h-[50vh]
            overflow-y-scroll
            "
        >
            <div className="flex items-center gap-3">
            <img
                src={`${basePath}/img/acciones/aerometrotitulo.svg`}
                alt="AeroMetro"
                className="h-8 md:h-10 w-auto"
            />
            </div>

            <div className="my-3 h-[2px] w-full bg-muni-verde/40" />

            {/* ITEM */}
            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/21.svg`}
                alt="Línea 1"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#005ce6] font-bold text-base md:text-lg">Línea 1</p>
                <p className="text-[#005ce6] font-semibold text-sm md:text-base">
                Plaza España - Trébol
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/20.svg`}
                alt="Línea 2"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#45756E] font-bold text-base md:text-lg">Línea 2</p>
                <p className="text-[#45756E] font-semibold text-sm md:text-base">
                Trébol – Molino de las Flores (Mixco)
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/estacionCentral.svg`}
                alt="Central Intermedia"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-black font-bold text-base md:text-lg">
                Central Intermedia
                </p>
                <p className="text-black font-semibold text-sm md:text-base">
                de Transferencia Roosevelt
                </p>
            </div>
            </div>

            {/* Transmetro */}
            <div className="flex items-center gap-3">
            <img
                src={`${basePath}/img/acciones/TransmetroTitle.svg`}
                alt="AeroMetro"
                className="h-8 md:h-13 w-auto"
            />
            </div>

            <div className="my-3 h-[2px] w-full bg-muni-verde/40" />

            {/* ITEM */}
            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/21.svg`}
                alt="Línea 1"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#005ce6] font-bold text-base md:text-lg">Línea 1</p>
                <p className="text-[#005ce6] font-semibold text-sm md:text-base">
                Plaza España - Trébol
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/20.svg`}
                alt="Línea 2"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#45756E] font-bold text-base md:text-lg">Línea 2</p>
                <p className="text-[#45756E] font-semibold text-sm md:text-base">
                Trébol – Molino de las Flores (Mixco)
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/estacionCentral.svg`}
                alt="Central Intermedia"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-black font-bold text-base md:text-lg">
                Central Intermedia
                </p>
                <p className="text-black font-semibold text-sm md:text-base">
                de Transferencia Roosevelt
                </p>
            </div>
            </div>

            {/* TuBus */}
            <div className="flex items-center gap-3">
            <img
                src={`${basePath}/img/acciones/TubusTitle.svg`}
                alt="AeroMetro"
                className="h-8 md:h-8 w-auto"
            />
            </div>

            <div className="my-3 h-[2px] w-full bg-muni-verde/40" />

            {/* ITEM */}
            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/21.svg`}
                alt="Línea 1"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#005ce6] font-bold text-base md:text-lg">Línea 1</p>
                <p className="text-[#005ce6] font-semibold text-sm md:text-base">
                Plaza España - Trébol
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/20.svg`}
                alt="Línea 2"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-[#45756E] font-bold text-base md:text-lg">Línea 2</p>
                <p className="text-[#45756E] font-semibold text-sm md:text-base">
                Trébol – Molino de las Flores (Mixco)
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 py-2">
            <img
                src={`${basePath}/img/acciones/estacionCentral.svg`}
                alt="Central Intermedia"
                className="h-9 w-12 md:h-10 md:w-16 shrink-0"
            />
            <div className="leading-tight">
                <p className="text-black font-bold text-base md:text-lg">
                Central Intermedia
                </p>
                <p className="text-black font-semibold text-sm md:text-base">
                de Transferencia Roosevelt
                </p>
            </div>
            </div>
        </div>
        </div>
    )}
    </div>

  );
}
