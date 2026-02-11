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
import AerometroCards from "../components/acciones250/AerometroCards";

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

      <section className="w-full px-4 py-0 md:py-0">

          <div className="w-full container mx-auto flex flex-col gap-4 p-6 lg:p-0">
              <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-3">

                  <div className="flex items-center">
                      <img src={`${basePath}/img/logo250.svg`} alt="Icono 250" className="w-50 sm:w-100" />
                  </div>

              </div>

              <h1 className={` ${MontserratMediumItalic.className} text-muni-azul text-justify text-4xl sm:text-7xl mb-4 font-bold`}>
                  Estrategias
                  <p>de <span className="text-white">Movilidad</span></p>
              </h1>              



              <div className="flex flex-col-reverse lg:flex-col">
                <div className="w-full sm:w-2/3">
                    <p className="text-muni-azul text-sm lg:text-xl text-justify mt-10">
                      Estrategia de Movilidad e Infraestructura Vial que se orienta a alcanzar el modelo de ciudad compacta mediante el impulso a la movilidad sostenible para lograr una red multimodal de transporte. La movilidad conecta oportunidades, empleo y servicios
                    </p>
                </div>

                <div className="flex items-center mx-auto lg:mt-10">
                    <img src={`${basePath}/img/acciones/ImagenPrincipal.svg`} alt="Icono 250" className="w-100 lg:w-200 rounded-3xl mx-auto" />
                </div>
              </div>
          </div>

          
          <div className="w-full container mx-auto px-6">

          </div>

          {/* Fondo azul de la sección */}
          <div className="w-full container mx-auto py-6 px-0 md:py-0 lg:mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 px-6">
                  <div className="flex items-center justify-center mb-7 md:mb-0 bg-white/60 rounded-3xl relative">
                      <img src={`${basePath}/img/acciones/TransmetroHero.svg`} alt="Alcalde y personas" className="w-300 object-contain abolsute left-0" />
                  </div>
                  <div className={` ${MontserratMediumItalic.className} flex flex-col items-center justify-center text-muni-azul gap-5 text-center text-sm lg:text-2xl `}>
                      <p>“Ciudad pensada para las personas.  </p>
                      <p>
                        Con movilidad eficiente, transporte público multimodal y moderno”
                      </p>
                  </div>
              </div>
          </div>          

      </section>    

      <section className="w-full px-4 mt-10">
        <div className="w-full container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* BLOQUE IZQUIERDO GRANDE */}
            <div className="lg:col-span-3 flex flex-col justify-end bg-white/60 rounded-3xl px-6 pt-6 pb-0  overflow-hidden">

              {/* LOGO */}
              <img
                src={`${basePath}/img/acciones/TubusTitle.svg`}
                className="w-60 mb-6"
              />

      
              <div className="flex flex-col-reverse md:flex-row">
                {/* IMAGEN PERSONA */}
                <img
                  src={`${basePath}/img/acciones/TubusPerson.svg`}
                  className="w-100 object-contain"
                />

                <div className="flex flex-col justify-end flex-1">
                  {/* BUS */}
                  <img
                    src={`${basePath}/img/acciones/Tubus.svg`}
                    className="mx-auto w-96 opacity-70"
                  />

                  {/* TARJETAS INFERIORES */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                    <div className="bg-white/60 rounded-t-2xl px-6 py-15 text-center text-muni-azul">
                      <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-4xl font-bold`}>7</h2>
                      <p className="lg:mt-3">Rutas en operación</p>
                    </div>

                    <div className="bg-white/60 rounded-t-2xl px-6 py-15 text-center text-muni-azul">
                      <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-4xl font-bold`}>105</h2>
                      <p className="lg:mt-3">Rutas proyectadas</p>
                    </div>

                    <div className="bg-white/60 rounded-t-2xl px-6 py-15 text-center text-muni-azul">
                      <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-4xl font-bold`}>16,849</h2>
                      <p className="lg:mt-3">Usuarios al día</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* PANEL DERECHO */}
            <div className="bg-white/60 rounded-3xl p-6 flex flex-col justify-between">

              <div className="text-muni-azul">
                <h3 className={`${MontserratMediumItalic.className} text-lg lg:text-xl font-bold mb-4`} >MiniBuses Eléctricos</h3>

                <div className="bg-white/60 rounded-2xl p-6 text-center mb-4">
                  <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-4xl font-bold`}>3</h2>
                  <p className="lg:mt-3">Rutas</p>
                </div>

                <div className="bg-white/60 rounded-2xl p-6 text-center">
                  <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-4xl font-bold`}>13.33km</h2>
                  <p className="lg:mt-3">Recorridos</p>
                </div>
              </div>

              <img
                src={`${basePath}/img/acciones/TubusUncle.svg`}
                className="rounded-2xl mt-6"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
            {/* BLOQUE IZQUIERDO GRANDE */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-white/60 rounded-3xl px-6 pt-6 pb-0 overflow-hidden">

              {/* LOGO */}
              <img
                src={`${basePath}/img/acciones/TransmetroTitle.svg`}
                className="w-100 mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end text-muni-azul">

                {/* CARD GRANDE IZQUIERDA */}
                <div className="bg-white/60 rounded-t-3xl p-10 text-center flex flex-col justify-center items-center order-2 lg:order-1">
                  <img
                    src={`${basePath}/img/acciones/TransmetroLocate.svg`}
                    className="w-40 object-contain mb-6"
                  />                
                  <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-6xl font-bold text-muni-azul`}>130<span className={`${muni.className} text-lg lg:text-2xl text-muni-azul}`}>km</span></h2>
                  <p className="text-xl lg:mb-5 lg:mt-3">Recorrido</p>
                </div>

                {/* BLOQUE DERECHO (BUS + CARDS) */}
                <div className="md:col-span-2 flex flex-col justify-end order-1 lg:order-2">

                  <img
                    src={`${basePath}/img/acciones/Transmetro.svg`}
                    className="mx-auto w-full max-w-xl opacity-70"
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/60 rounded-t-2xl px-6 py-15 text-center">
                      <h2 className={`${MontserratMediumItalic.className} text-5xl lg:text-6xl font-bold text-muni-azul`}>7<span className={`${muni.className} text-lg lg:text-2xl text-muni-azul}`}>líneas</span></h2>
                      <p className="lg:mt-3">en operación</p>
                    </div>

                    <div className="bg-white/60 rounded-t-2xl px-6 py-15 text-center">
                      <h2 className={`${MontserratMediumItalic.className} text-4xl lg:text-5xl font-bold text-muni-azul`}>+400<span className={`${muni.className} text-lg lg:text-2xl text-muni-azul}`}>mil</span></h2>
                      <p className="lg:mt-3">Usuarios al día</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* PANEL DERECHO */}
            <div className="bg-white/60 rounded-3xl p-6 flex flex-col justify-between text-muni-azul">

              <div className="relative flex flex-col justify-center ">
                <h3 className={`${MontserratMediumItalic.className} text-lg lg:text-xl font-bold mb-4`}>Calles pensadas para peatones y ciclistas</h3>

                <div>
                  <p className={`${MontserratMediumItalic.className} text-4xl lg:text-5xl font-bold text-muni-azul`}>31.25 km</p>
                  <p className="lg:mt-3">de ciclovias existentes</p>
                </div>

                <div className="bg-white/60 rounded-2xl p-6 text-center mb-4 w-2/3">
                  <img
                    src={`${basePath}/img/acciones/TransmetroCicla.svg`}
                    className="rounded-2xl w-15 object-contain"
                  />
                  <h2 className={`${MontserratMediumItalic.className} text-4xl lg:text-5xl font-bold text-muni-azul`}>40Km</h2>
                  <p className="lg:mt-3">Adicionales de ciclovías</p>
                </div>

                <div className="bg-white/60 rounded-2xl p-6 text-center w-2/3">
                  <img
                    src={`${basePath}/img/acciones/TransmetroDog.svg`}
                    className="rounded-2xl w-15 object-contain"
                  />
                  <h2 className={`${MontserratMediumItalic.className} text-4xl lg:text-5xl font-bold text-muni-azul`}>127km</h2>
                  <p className="lg:mt-3">Corredores peatonales</p>
                </div>

                <img
                  src={`${basePath}/img/acciones/TransmetroBike.svg`}
                  className="rounded-2xl w-40 mt-6 absolute bottom-0 right-[-60px] object-contain z-10"
                />                
              </div>

              {/* <img
                src={`${basePath}/img/acciones/TransmetroBike.svg`}
                className="rounded-2xl mt-6"
              /> */}
            </div>            
          </div>

        </div>
      </section>  

      {/* Header */}
      <section className="w-full p-6 lg:px-6 lg:py-8  ">
        <div className="w-full container mx-auto flex flex-col gap-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
            <div className="flex items-center justify-center">
              <img
                src={`${basePath}/img/acciones/aerometrotitulo.svg`}
                alt="Icono parque"
                className="w-60 sm:w-100"
              />
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <p
              className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl lg:text-xl mt-5 mb-10 lg:my-10 px-6`}
            >
              La Ciudad de Guatemala mostrará a todo el continente un transporte
              público moderno, limpio, seguro y eficiente. Un proyecto que,
              sumando al TransMetro, a TuBus, a los buses eléctricos y las nuevas
              iniciativas de ciclovías y corredores peatonales, simboliza la
              ciudad que queremos para las siguientes generaciones
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-6">
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
                    className="absolute hidden lg:block top-[-13] left-150 w-100 sm:w-125 z-10 pointer-events-none animate-rotate-alternate"
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
        <div className="w-full container mx-auto p-6 sm:p-6">
          <AerometroCards />
        </div>

        <div className="mb-15 md:mt-10 md:mb-20">
          <p className={`text-center font-bold  text-xl md:text-4xl text-muni-azul px-0  italic ${MarcellusRegular.className}`}>“El punto de encuentro de los caminos”</p>
        </div>
      </section>

      {/* <BottomMenu /> */}
    </main>
  );
}
