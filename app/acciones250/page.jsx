'use client';

import dynamic from "next/dynamic";
import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import {
  MarcellusRegular,
  MontserratBlack3,
  MontserratSemiBoldItalic,
  MontserratLightItalic,
  MontserratMediumItalic,
  muni,
} from "../fonts/fonts";

import { useEffect, useRef, useState } from "react";

// Import dinámico del mapa de eventos
const AerometroMap = dynamic(() => import("@/app/components/arcgis/basemap/AerometroMap"), {
  ssr: false,
});

function useReveal({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, show];
}

export default function Acciones() {
  const [r12, s12] = useReveal();
  const [r11, s11] = useReveal();
  const [r12a, s12a] = useReveal();
  const [r13, s13] = useReveal();

  const [r21, s21] = useReveal();
  const [r22, s22] = useReveal();
  const [r23, s23] = useReveal();

  const [rBig, sBig] = useReveal({ threshold: 0.15 });

  // Helper para clases (sin tocar tu estructura)
  const revealClass = (show, delayMs = 0) =>
    `${show ? "animate-fade-up" : "opacity-0 translate-y-4"} will-change-transform`
    + (delayMs ? "" : "");

  const revealStyle = (delayMs = 0) =>
    delayMs ? { animationDelay: `${delayMs}ms` } : undefined;

  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-muni-verde via-[#DFF7B0] via-90% md:via-65% to-white">
      {/* Header */}
      <section className="w-full p-6 lg:px-4 lg:py-8  ">
        <div className="w-full container mx-auto flex flex-col gap-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
            <div className="flex items-center justify-center">
              <img
                src={`${basePath}/img/acciones/aerometrotitulo.svg`}
                alt="Icono parque"
                className="w-60 sm:w-100"
              />
            </div>

            <div className="flex items-center">
              <img
                src={`${basePath}/img/logo250.svg`}
                alt="Icono 250"
                className="w-50 sm:w-100"
              />
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <p
              className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl lg:text-xl mt-5 mb-10 lg:my-10`}
            >
              La Ciudad de Guatemala mostrará a todo el continente un transporte
              público moderno, limpio, seguro y eficiente. Un proyecto que,
              sumando al TransMetro, a TuBus, a los buses eléctricos y las nuevas
              iniciativas de ciclovías y corredores peatonales, simboliza la
              ciudad que queremos para las siguientes generaciones
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative bg-white/60 rounded-2xl px-3 lg:px-6 py-0">

                {/* Imagen base */}
                <img
                    src={`${basePath}/img/acciones/aerometro.svg`}
                    alt="Icono 250"
                    className="w-100 sm:w-225"
                />

                {/* Imagen encima */}
                <img
                    src={`${basePath}/img/acciones/aerometroRecorte.svg`}
                    alt="Icono 250"
                    className="absolute hidden lg:block top-[-13] left-150 w-100 sm:w-125 z-10 pointer-events-none animate-rotate-alternate  "
                />

            </div>


            {/* texto alineado al borde izquierdo de la imagen */}
            <div className="flex flex-col items-end w-100 sm:w-225">
              <p className={`${muni.className} text-center text-muni-azul text-sm sm:text-xl lg:text-xl px-10 md:px-0`}>
                Imagen de referencia AeroMetro 2025, Fuente Municipalidad de
                Guatemala
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 mt-10">
         <div className="w-full container mx-auto px-6 ">
            <AerometroMap />
         </div>
      </section>

      <section className="w-full px-4 py-8">
        <div className="w-full container mx-auto p-6 sm:p-10">
          {/* De 1 columna en mobile, 3 columnas en lg */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* BLOQUE IZQUIERDO (Lineas) */}
            <div className="lg:col-span-2">
              {/* Línea 1 */}
              <h3
                className={`${MontserratMediumItalic.className} text-muni-azul font-bold italic text-2xl sm:text-3xl lg:text-4xl`}
              >
                Línea 1
              </h3>
              <p
                className={`${MontserratLightItalic.className} text-muni-azul italic mb-4 text-lg sm:text-xl lg:text-2xl`}
              >
                Plaza España - Trébol
              </p>

              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    ref={r11}
                    style={revealStyle(0)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s11
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/10.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      18
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Meses de
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Ejecución
                    </p>
                  </div>

                  <div
                    ref={r12}
                    style={revealStyle(120)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s12
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/ubi.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      2.1 <span className="text-xl sm:text-2xl">Km</span>
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Recorrido
                    </p>
                  </div>

                  <div
                    ref={r12a}
                    style={revealStyle(240)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s12a
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/12.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      187 <span className="text-xl sm:text-2xl">Mil</span>
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Usuarios al
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      día en <span className="font-bold">linea 1</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Línea 2 */}
              <div>
                <h3
                  className={`${MontserratMediumItalic.className} text-muni-azul font-bold italic text-2xl sm:text-3xl lg:text-4xl`}
                >
                  Línea 2
                </h3>
                <p
                  className={`${MontserratLightItalic.className} text-muni-azul italic mb-4 text-lg sm:text-xl lg:text-2xl`}
                >
                  Trébol - Molino de las Flores (Mixco)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    ref={r21}
                    style={revealStyle(60)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s21
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/10.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      24
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Meses de
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Ejecución
                    </p>
                  </div>

                  <div
                    ref={r22}
                    style={revealStyle(180)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s22
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/ubi.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      6.8 <span className="text-xl sm:text-2xl">Km</span>
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Recorrido
                    </p>
                  </div>

                  <div
                    ref={r23}
                    style={revealStyle(300)}
                    className={`bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-start transition-all duration-700 ${revealClass(
                      s23
                    )}`}
                  >
                    <img
                      src={`${basePath}/img/acciones/12.svg`}
                      alt=""
                      className="max-w-10 md:max-w-25"
                    />
                    <p
                      className={`${MontserratMediumItalic.className} text-5xl sm:text-6xl font-bold`}
                    >
                      187 <span className="text-xl sm:text-2xl">Mil</span>
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      Usuarios al
                    </p>
                    <p
                      className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}
                    >
                      día en <span className="font-bold">linea 2</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOQUE DERECHO */}
            <div
              ref={rBig}
              style={revealStyle(120)}
              className={`
                bg-white/60 rounded-2xl flex items-center justify-center text-muni-azul
                px-6 py-15 lg:p-8
                
                lg:row-span-2 lg:max-h-152 lg:mt-22
                w-full
                transition-all duration-700
                ${revealClass(sBig)}
              `}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <p
                  className={`${MontserratMediumItalic.className} font-extrabold leading-none text-[72px] sm:text-[120px] lg:text-[200px]`}
                >
                  12
                </p>

                <div className="flex flex-col items-start">
                  <img
                    src={`${basePath}/img/acciones/iconoAerometro.svg`}
                    alt=""
                    className="max-w-10 sm:max-w-10 lg:max-w-25"
                  />
                  <p className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}>
                    Pasajeros
                  </p>
                  <p className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}>
                    Por
                  </p>
                  <p className={`${MontserratLightItalic.className} text-lg sm:text-xl lg:text-xl`}>
                    Cabina
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mb-15 md:mt-10 md:mb-20">
          <p className={`text-center font-bold  text-xl md:text-4xl text-muni-azul px-0  italic ${MarcellusRegular.className}`}>“El punto de encuentro de los caminos”</p>
        </div>
      </section>

      {/* <BottomMenu /> */}
    </main>
  );
}
