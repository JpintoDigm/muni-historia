
"use client";
import { useMemo, useState } from "react";
import Cards from "../components/visionCiudad/Cards";
import Filters from "../components/accionesVerdes/Filters";
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni, MarcellusRegular } from "@/app/fonts/fonts";
import DesafiosCiudad from "../components/visionCiudad/DesafiosCiudad";


export default function VisionCiudad() {

    return (
    <main className="min-h-screen">
        <section className="w-full px-4 py-0 md:py-8 bg-muni-azul">

            <div className="w-full container mx-auto flex flex-col gap-4 p-6 md:p-0">
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
                    <p className="text-white text-sm lg:text-xl mt-5 md:mt-10 text-justify">
                        Este plan se desarrolla a través de ejes estratégicos que orientan cada acción: <span className={` ${MontserratMediumItalic.className} text-muni-rosado font-bold`}>un lugar de oportunidades</span>, que impulsa el talento, el aprendizaje y el emprendimiento; <span className={` ${MontserratMediumItalic.className} text-muni-amarillo font-bold`}>un lugar que inspira</span>, generando orgullo y sentido de pertenencia; y <span className={` ${MontserratMediumItalic.className} text-muni-pantone font-bold`}>un lugar que conecta</span>, fortaleciendo la movilidad y los servicios para facilitar la vida diaria de las personas
                    </p>
                </div>
            </div>

        </section>


        <section className="w-full px-4 bg-muni-azul">
            {/* Fondo azul de la sección */}
            <div className="w-full container mx-auto p-6 lg:py-10 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex items-center justify-center mb-7 md:mb-0">
                        <img src={`${basePath}/img/visionCiudad/people.svg`} alt="Alcalde y personas" className="w-300 rounded-2xl" />
                    </div>
                    <div className={` ${muni.className} flex flex-col items-center justify-center text-white gap-5 text-justify text-sm lg:text-xl `}>
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

        <DesafiosCiudad />

        <section className="w-full px-4 py-6 lg:py-16 bg-muni-azul">
            {/* Fondo azul de la sección */}
            <div className="w-full container mx-auto p-6 lg:px-0 lg:py-6">
                <Cards />
            </div>

        </section>

        <section className="w-full px-4 py-6 lg:py-16 bg-[#dfecc9]">

            <div className="relative z-10 w-full container mx-auto p-6 lg:px-0 lg:py-6">
                <div className="w-full sm:w-2/3">
                    <h3 className={`${MontserratMediumItalic.className} text-4xl md:text-5xl font-bold text-muni-azul mb-10 lg:my-10`}>
                        Puntos de encuentro 
                        <p>de los caminos del país</p>
                    </h3>
                </div>  
                <div className="w-auto flex justify-center items-center gap-5">
                    <div>
                        <img src={`${basePath}/img/visionCiudad/mapa1.svg`} alt="" />
                    </div>
                    <div>
                        <p className={`${MontserratMediumItalic.className} text-xl lg:text-3xl font-bold text-muni-azul mb-5 lg:mb-10`}>“El punto en el que</p>
                        <p className={`${MontserratMediumItalic.className} text-xl lg:text-3xl font-bold text-muni-azul mb-5 lg:mb-10`}>se originan todas las</p>
                        <p className={`${MontserratMediumItalic.className} text-xl lg:text-3xl font-bold text-muni-azul mb-5 lg:mb-10`}>carreteras del país.”</p>
                    </div>
                </div>
                <div className="w-full sm:w-2/3">
                    <h3 className={`${MontserratMediumItalic.className} text-4xl md:text-5xl font-bold text-muni-azul my-10`}>
                        Estrategia de
                        <p>Desarrollo Urbano</p>
                        <p>Integral</p>
                    </h3>
                    <p className="text-sm lg:text-xl text-muni-azul text-justify mb-10">
                        La estrategia atiende los desafíos de la ciudad y potencia las oportunidades actuales y futuras para mejorar la calidad de vida y consolidar el modelo de la ciudad compacta y de proximidad.
                    </p>
                </div> 
                <div className="w-auto flex flex-col lg:flex-row justify-center items-center gap-5">
                    <div>
                        <img src={`${basePath}/img/visionCiudad/mapa2.png`} alt="" className="object-contain w-auto"/>
                        <div className="bg-gradient-to-b from-[#d7e8b2] to-[#b7d084] rounded-md p-6">

                            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold mb-4">

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-green-700"></span>
                                    <span>Proyectos Municipalidad de Guatemala</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-blue-900"></span>
                                    <span>Proyectos Gobierno Central</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                                    <span>Otros Proyectos</span>
                                </div>

                            </div>

                            <p className="text-center text-muni-azul text-sm leading-relaxed">
                                Estrategia de Movilidad e Infraestructura Vial articulada a “Plan Maestro de Movilidad para Área
                            </p>
                            <p className="text-center text-muni-azul text-sm leading-relaxed">
                               Metropolitana de Guatemala” planteado por KOICA y 
                            </p>
                            <p className="text-center text-muni-azul text-sm leading-relaxed">
                              ANADIE (Anillos y Radiales) y apoyada por la Ley de Infraestructura Vial Prioritaria (Decreto 29-2024)
                            </p>

                        </div>

                    </div>
                    <div className="bg-[#dfecc8] p-8">
                    <div className="space-y-10">

                        
                        <div className="grid grid-cols-12 items-center gap-4">
                        
                            <div className="col-span-12 md:col-span-4">
                                <div className="text-[56px] leading-none font-extrabold text-[#e63b3b]">20%</div>
                                <div className="text-xs font-semibold text-muni-azul -mt-1">Territorios de transformación</div>
                            </div>

                            
                            <div className="col-span-12 md:col-span-4 flex items-center">
                                <span className="px-6 py-2 rounded-md bg-[#e63b3b] text-white font-bold shadow-sm">
                                Desconcentrar
                                </span>
                            </div>

                        
                            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end gap-3">
                                <img src="/img/oportunidad.svg" alt="" className="h-10 w-auto" />
                                <div className="text-muni-azul font-bold leading-tight">
                                Distritos de<br />Oportunidad
                                </div>
                            </div>

                            
                            <div className="col-span-12 h-[2px] bg-[#e63b3b]"></div>
                        </div>

                        
                        <div className="grid grid-cols-12 items-center gap-4">
                            <div className="col-span-12 md:col-span-4">
                                <div className="text-[56px] leading-none font-extrabold text-[#f2b000]">40%</div>
                                <div className="text-xs font-semibold text-muni-azul -mt-1">Territorios de consolidación</div>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center">
                                <span className="px-6 py-2 rounded-md bg-[#f2b000] text-white font-bold shadow-sm">
                                Fortalecer
                                </span>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end gap-3">
                                <img src={`${basePath}/img/visionCiudad/vp.svg`} alt="" className="object-contain w-30 lg:w-100" />
                            </div>

                            <div className="col-span-12 h-[2px] bg-[#f2b000]"></div>
                        </div>

                        
                        <div className="grid grid-cols-12 items-center gap-4">
                            <div className="col-span-12 md:col-span-4">
                                <div className="text-[56px] leading-none font-extrabold text-[#10b26c]">40%</div>
                                <div className="text-xs font-semibold text-muni-azul -mt-1">
                                Territorio con valor paisajístico y ambiental
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center">
                                <span className="px-6 py-2 rounded-md bg-[#10b26c] text-white font-bold shadow-sm">
                                Integrar
                                </span>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end gap-3">
                                <img src={`${basePath}/img/visionCiudad/gdv.svg`} className="object-contain w-30 lg:w-100" />
                            </div>

                            <div className="col-span-12 h-[2px] bg-[#10b26c]"></div>
                        </div>

                       
                        <div className="grid grid-cols-12 items-center gap-4">
                            <div className="col-span-12 md:col-span-4"></div>

                            <div className="col-span-12 md:col-span-4 flex items-center">
                                <span className="px-6 py-2 rounded-md bg-[#0a1b87] text-white font-bold shadow-sm">
                                Conectar
                                </span>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end">
                                <div className="text-muni-azul font-bold leading-tight">
                                Estrategia de Movilidad e<br />Infraestructura vial
                                </div>
                            </div>

                            <div className="col-start-5 col-span-8 h-[2px] bg-[#0a1b87]"></div>
                        </div>

                        
                        <div className="grid grid-cols-12 items-center gap-4">
                            <div className="col-span-12 md:col-span-4"></div>

                            <div className="col-span-12 md:col-span-4 flex items-center">
                                <span className="px-6 py-2 rounded-md bg-[#6e4aa8] text-white font-bold shadow-sm">
                                Impulsar
                                </span>
                            </div>

                            <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end">
                                <div className="text-muni-azul font-bold leading-tight">
                                Gobernanza de Datos
                                </div>
                            </div>

                            <div className="col-start-5 col-span-8 h-[2px] bg-[#6e4aa8]"></div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative w-full px-4 py-6 bg-muni-azul overflow-hidden">


            {/* Card rosada (encima del 250) */}
            <div className="relative z-10 w-full container mx-auto p-6 lg:px-0 lg:py-6">

                <img src={`${basePath}/img/conmemoracion/ejeO.svg`} alt="Icono 250" className="w-full object-contain rounded-t-3xl" />

                <div
                className="
                    w-full
                    rounded-b-3xl
                    px-10 md:px-14
                    py-10 md:py-14
                    bg-gradient-to-t
                    from-muni-rosado
                    via-[#f3c5da]
                     via-90% md:via-65%
                    to-white
                "
                >
                    <div className="flex justify-start items-center">
                        {/* tu contenido */}
                        <img src={`${basePath}/img/10.png`} alt="Icono 250" className="w-20 md:w-50" />
                        <h3 className="text-muni-azul italic text-2xl md:text-4xl">
                            Un lugar de <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>oportunidades</span>
                        </h3>

                    </div>

                    <p className="text-muni-azul italic text-sm md:text-xl leading-10 text-justify md:w-3/4">
                        <b>Donde los <span className={` ${MontserratMediumItalic.className} italic font-bold`}>sueños se pueden cumplir.</span></b> El corazón de esta ciudad, y <span className={` ${MontserratMediumItalic.className} italic font-bold`}>su activo más importante,
                        son los vecinos y sus familias.</span> Para todos disponemos de una importante oferta educativa,
                        artística, cultural, deportiva, técnica y tecnológica.
                    </p>
                </div>
            </div>

            {/* Card rosada (encima del 250) */}
            <div className="relative z-10 w-full container mx-auto p-6 lg:px-0 lg:py-6">

                <img src={`${basePath}/img/conmemoracion/ejeI.svg`} alt="Icono 250" className="w-full object-contain rounded-t-3xl" />
                <div
                className="
                    w-full
                    rounded-b-3xl
                    px-10 md:px-14
                    py-10 md:py-14
                    bg-gradient-to-t
                from-muni-amarillo
                via-[#F3F6A6]
                via-90% md:via-65%
                to-white
                "
                >
                    <div className="flex justify-start items-center">
                        {/* tu contenido */}
                        <img src={`${basePath}/img/11.png`} alt="Icono 250" className="w-20 md:w-50" />
                        <h3 className="text-muni-azul italic text-2xl md:text-4xl">
                            Un lugar que <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>Inspira</span>
                        </h3>

                    </div>

                    <div className="text-justify">
                        <p className="text-muni-azul italic text-sm md:text-xl leading-10 text-justify md:w-3/4 ">
                            Ciudad de Guatemala es una <span className={` ${MontserratMediumItalic.className} italic font-bold`}>ciudad viva, dinámica y diversa. </span>
                            Es una ciudad que se <span className={` ${MontserratMediumItalic.className} italic font-bold`}>mejora y transforma</span> con espacios para vivir, estudiar y trabajar. 
                            Con espacios de <span className={` ${MontserratMediumItalic.className} italic font-bold`}>sana convivencia, cultura y recreación.</span>               
                            <span className={` ${MontserratMediumItalic.className} italic font-bold`}> El mejor lugar para vivir</span> nuestras tradiciones, celebrar nuestra historia y disfrutar la gastronomía
                        </p>
                    </div>
                </div>
            </div>

            {/* Card rosada (encima del 250) */}
            <div className="relative z-10 w-full container mx-auto p-6 lg:px-0 lg:py-6">
                <img src={`${basePath}/img/conmemoracion/ejeC.svg`} alt="Icono 250" className="w-full object-contain rounded-t-3xl" />
                <div
                className="
                    w-full
                    rounded-b-3xl
                    px-10 md:px-14
                    py-10 md:py-14
                    bg-gradient-to-t
                    from-muni-pantone
                    via-[#7EDBB0]
                    via-90% md:via-65%
                    to-white
                "
                >
                    <div className="flex justify-start items-center">
                        {/* tu contenido */}
                        <img src={`${basePath}/img/12.png`} alt="Icono 250" className="w-20 md:w-50" />
                        <h3 className="text-muni-azul italic text-2xl md:text-4xl">
                            Un lugar que <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>Conecta</span>
                        </h3>

                    </div>

                    <p className="text-muni-azul italic text-sm md:text-xl leading-10 text-justify md:w-3/4">
                    <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>Llegas más rápido. </span><br /> 
                    Te mueves mejor. <br />
                    Los servicios <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>cumplen y responden. </span><br />

                    <span className={` ${MontserratMediumItalic.className} font-extrabold not-italic`}>La ciudad conecta</span> tu día a día con lo que quieres lograr.
                    </p>
                </div>
            </div>

            <div className="my-10">
                <p className={`text-center font-bold mt-15 md:mb-100 text-xl md:text-4xl text-muni-verde px-0 md:px-80 italic ${MarcellusRegular.className}`}>“El punto de encuentro de los caminos”</p>
            </div>

            <div className="block relative">
                <img
                    src={`${basePath}/img/conmemoracion/250years.svg`}
                    alt="250 años"
                    className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    bottom-[-250px]
                    xl:w-[800px] 2xl:w-[1000px]
                    opacity-60
                    pointer-events-none
                    select-none
                    "
                />
            </div>

        </section>




        <BottomMenu textColor="text-muni-verde" activeColor="text-muni-azul" />

    </main>
    );
}
