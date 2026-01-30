
"use client";
import { useMemo, useState } from "react";
import Cards from "../components/visionCiudad/Cards";
import Filters from "../components/accionesVerdes/Filters";
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";


export default function VisionCiudad() {

    return (
    <main className="min-h-screen">
        <section className="w-full px-4 py-8 bg-muni-azul">

            <div className="w-full container mx-auto flex flex-col gap-4 mb-10 p-6 md:p-0">
                <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-3">

                    <div className="flex items-center">
                        <img src={`${basePath}/img/logo250blanco.svg`} alt="Icono 250" className="w-50 sm:w-100" />
                    </div>

                </div>

                <div className="w-full sm:w-2/3">
                    <h1 className={` ${MontserratMediumItalic.className} text-muni-verde text-justify text-4xl sm:text-7xl mb-4 font-bold`}>
                        La Visión
                        <p>de la <span className="text-white">Ciudad</span></p>
                    </h1>

                    <p className="text-white text-sm lg:text-xl text-justify mt-10">
                        La Visión de Ciudad define cómo <span className={` ${MontserratMediumItalic.className} text-muni-verde font-bold`}>la Ciudad de Guatemala avanza día a día.</span> Es el plan de acción del alcalde Ricardo Quiñónez, que organiza el trabajo municipal, da continuidad a los proyectos y asegura <span className={` ${MontserratMediumItalic.className} text-muni-verde font-bold`}> avances con resultados.</span>
                    </p>
                    <p className="text-white text-sm lg:text-xl mt-10 text-justify">
                        Este plan se desarrolla a través de ejes estratégicos que orientan cada acción: <span className={` ${MontserratMediumItalic.className} text-muni-rosado font-bold`}>un lugar de oportunidades</span>, que impulsa el talento, el aprendizaje y el emprendimiento; <span className={` ${MontserratMediumItalic.className} text-muni-amarillo font-bold`}>un lugar que inspira</span>, generando orgullo y sentido de pertenencia; y <span className={` ${MontserratMediumItalic.className} text-muni-pantone font-bold`}>un lugar que conecta</span>, fortaleciendo la movilidad y los servicios para facilitar la vida diaria de las personas
                    </p>
                </div>
            </div>

        </section>


        <section className="w-full px-4 py-8 bg-muni-azul">
            {/* Fondo azul de la sección */}
            <div className="w-full container mx-auto p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex items-center justify-center">
                        <img src={`${basePath}/img/visionCiudad/people.svg`} alt="Alcalde y personas" className="w-300 rounded-2xl" />
                    </div>
                    <div className={` ${MontserratMediumItalic.className} flex flex-col items-center justify-center text-white gap-5 text-justify text-sm lg:text-lg italic`}>
                        <p>La Ciudad de Guatemala cumple 250 años desde que se tomó una decisión estratégica que marcó el rumbo del país. Nació como el punto de encuentro de los caminos, donde todo pasa y donde convergen personas, ideas y oportunidades. </p>
                        <p>
                            Hoy esa vocación sigue viva. Somos la ciudad que conecta al país, la que recibe a miles de guatemaltecos cada día y la que asume con responsabilidad los retos que ese crecimiento implica. 
                        </p>
                        <p>
                            Con planificación, inversión en infraestructura, movilidad moderna y trabajo conjunto, seguimos construyendo una ciudad pensada para las personas, con visión de largo plazo y compromiso real con su gente. Porque cuando la ciudad avanza, avanza Guatemala.
                        </p>
                    </div>
                </div>
            </div>
        </section>        

        <section className="w-full px-4 py-8 bg-muni-azul">
            {/* Fondo azul de la sección */}
            <div className="w-full container mx-auto p-6 lg:px-0 lg:py-6">
                <Cards />
            </div>
        </section>



      <BottomMenu />
    </main>
    );
}
