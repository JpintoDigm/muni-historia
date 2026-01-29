
"use client";

import { useMemo, useState } from "react";
import Cards from "../components/accionesVerdes/Cards";
import Filters from "../components/accionesVerdes/Filters";
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";


export default function VisionCiudad() {

    return (
    <main className="min-h-screen">
        <section className="w-full px-4 py-8 bg-muni-azul">

            <div className="w-full container mx-auto flex flex-col gap-4 mb-10">
                <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-3">

                    <div className="flex items-center">
                        <img src={`${basePath}/img/logo250blanco.svg`} alt="Icono 250" className="w-50 sm:w-100" />
                    </div>

                </div>

                <div className="w-full sm:w-2/3">
                    <h1 className={` ${MontserratMediumItalic.className} text-muni-verde text-justify text-sm sm:text-7xl mb-4 font-bold`}>
                        La Visión
                        <p>de la <span className="text-white">Ciudad</span></p>
                    </h1>

                    <p className="text-white text-xl text-justify mt-10">
                        La Visión de Ciudad define cómo la Ciudad de Guatemala avanza día a día. Es el plan de acción del alcalde Ricardo Quiñónez, que organiza el trabajo municipal, da continuidad a los proyectos y asegura avances con resultados. 
                    </p>
                    <p className="text-white text-xl mt-10 text-justify">
                        Este plan se desarrolla a través de ejes estratégicos que orientan cada acción: un lugar de oportunidades, que impulsa el talento, el aprendizaje y el emprendimiento; un lugar que inspira, generando orgullo y sentido de pertenencia; y un lugar que conecta, fortaleciendo la movilidad y los servicios para facilitar la vida diaria de las personas
                    </p>
                </div>
            </div>

        </section>

        <section className="w-full px-4 py-8 bg-muni-azul">
            {/* Fondo azul de la sección */}
            <div className="w-full container mx-auto p-6 md:p-10">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* CARD 1 */}
                    <div className="flex flex-col items-center justify-between rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Oportunidades <br /> de Empleo
                        </p>

                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/11.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <p className="text-center font-extrabold text-5xl">80%</p>
                        <p className="text-center italic mt-2 text-sm">
                            Tasas de empleo <br />(empleo formal)
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="flex flex-col items-center justify-between rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Mejores <br /> Salarios
                        </p>

                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/12.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <p className="text-center font-extrabold text-4xl">39% +Altos</p>
                        <p className="text-center italic mt-2 text-sm">
                        Salarios del área <br />
                        metropolitana frente a otras <br />
                        ciudades del país
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Ofertas de <br />Servicios
                        </p>

                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/13.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <div className="mt-1 grid grid-cols-2 gap-4 items-end">
                            <div className="text-center">
                                <p className="font-extrabold text-4xl">14%</p>
                                <p className="italic text-sm">Servicios</p>
                            </div>
                            <div className="text-center">
                                <p className="font-extrabold text-4xl">52%</p>
                                <p className="italic text-sm">Comercios</p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Desarrollo <br />Económico
                        </p>

                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/14.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <div className="mt-1 grid grid-cols-2 gap-4 items-end">
                        <div className="text-center">
                            <p className="font-extrabold text-4xl">50%</p>
                            <p className="italic text-sm">PIB del país</p>
                        </div>
                        <div className="text-center">
                            <p className="font-extrabold text-4xl">77%</p>
                            <p className="italic text-sm">Recaudación de impuestos (SAT)</p>
                        </div>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Desarrollo <br />Inmobiliario
                        </p>


                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/15.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <div className="mt-1 grid grid-cols-2 gap-4 items-end">
                        <div className="text-center">
                            <p className="font-extrabold text-4xl">304</p>
                            <p className="italic text-sm">
                            Proyectos en ejecución y <br /> trámite a la fecha
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="font-extrabold text-4xl">
                            6.37<span className="text-base align-super font-bold">miles</span>
                            </p>
                            <p className="italic text-sm">Metros Cuadrados</p>
                        </div>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                        <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                        Desarrollo <br />Inmobiliario
                        </p>


                        <div className="flex justify-center py-5">
                            <img src={`${basePath}/img/visionCiudad/16.svg`} alt="" className="h-14 w-14" />
                        </div>

                        <p className="text-center font-extrabold text-5xl">80.82</p>
                        <p className="text-center italic mt-2 text-sm">
                        Ciudad más competitiva del país: <br />
                        adopción de tecnologías, líder en <br />
                        dinamismo de negocios, líder en <br />
                        innovación, primer lugar en salud
                        </p>
                    </div>
                </div>
            </div>
        </section>

      <BottomMenu />
    </main>
    );
}
