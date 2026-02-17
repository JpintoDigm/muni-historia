
"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Cards from "../components/accionesVerdes/Cards";
import Filters from "../components/accionesVerdes/Filters";
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MarcellusRegular, MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";
// import DistritoVerdeMap from "../components/arcgis/basemap/DistritoVerdeMap";


export default function Acciones() {
    const [selectedZona, setSelectedZona] = useState("all");
    const [selectedTipo, setSelectedTipo] = useState("all");

    const zonas = useMemo(() => {
        return Array.from(new Set(PARQUES.map((item) => item.zona))).sort(
            (a, b) => a - b
        );
    }, []);

    const tipos = useMemo(() => {
        return Array.from(
            new Set(PARQUES.map((item) => item.tipo).filter(Boolean))
        ).sort((a, b) => a.localeCompare(b));
    }, []);

    const filteredParques = useMemo(() => {
        return PARQUES.filter((item) => {
            const matchesZona =
                selectedZona === "all" || item.zona === Number(selectedZona);
            const matchesTipo =
                selectedTipo === "all" || item.tipo === selectedTipo;
            return matchesZona && matchesTipo;
        });
    }, [selectedZona, selectedTipo]);

    return (
    <main className="min-h-screen bg-[#e0e721]">
        <section className="w-full container mx-auto px-8 lg:px-10">

            <div className="flex flex-col gap-4">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
                    <div className="flex items-center mt-0 mb-4 gap-3">
                        <div className="">
                            <img src={`${basePath}/img/accionesVerdes/iconoHead.png`} alt="Icono parque" className="w-20 sm:w-30" />
                        </div>

                        <div>
                            <h1 className={` ${MontserratLightItalic.className}text-2xl md:text-3xl text-muni-azul italic`}>
                            Acciones
                            </h1>
                            <p className={` ${MontserratMediumItalic.className} text-2xl md:text-3xl tracking-[0.12em] text-muni-azul font-extrabold italic`}>
                            Verdes
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src={`${basePath}/img/logo250.svg`} alt="Icono 250" className="w-50 sm:w-100" />
                    </div>

                </div>

                <div className="w-full sm:w-2/3">
                    <p className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl lg:mb-4`}>
                        Las acciones verdes reflejan una ciudad que inspira bienestar, cuida su entorno y apuesta por una mejor calidad de vida para las generaciones de hoy y del futuro.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-2/3">
                        <img src={`${basePath}/img/accionesVerdes/MainImage.png`} alt="Icono 250" className="w-50 w-auto rounded-3xl leading-6" />
                    </div>
                    <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <p className={` ${muni.className} text-muni-azul italic text-justify text-sm sm:text-xl`}>
                            El Gran Distrito Verde abarca el <span className={` ${MontserratMediumItalic.className} font-bold italic`}>40%</span> del territorio de la ciudad y se articula a través del <span className={` ${MontserratMediumItalic.className} font-bold italic`}>Cinturón Ecológico Municipal, la Red Urbana Verde y el arbolado urbano</span> como red de conexión. Su propósito es <span className={` ${MontserratMediumItalic.className} font-bold italic`}>fortalecer el valor ambiental y la resiliencia frente al cambio climático,</span> mediante la participación social y Soluciones Basadas en la Naturaleza, construyendo una infraestructura verde para una ciudad más saludable y sostenible.
                        </p>
                    </div>
                </div>
            </div>

        </section>

        <section className="container mx-auto pb-8  lg:py-8 lg:px-5 lg:pt-5 lg:pb-0">
            {/* <Filters
                zonas={zonas}
                tipos={tipos}
                selectedZona={selectedZona}
                selectedTipo={selectedTipo}
                onSelectZona={setSelectedZona}
                onSelectTipo={setSelectedTipo}
            /> */}

            {/* <Cards items={filteredParques} /> */}

            {/* <div className="flex justify-center relative mt-10 md:mt-20">
                <img src={`${basePath}/img/accionesVerdes/redBird.svg`} alt="Icono 250" className="w-85 md:w-200 relative z-0" />

                <Link
                href="https://grandistritoverde.com.gt/"
                target="_blank"
                className="
                    inline-flex items-center gap-2 w-30 md:w-35
                    rounded-xl bg-muni-verde/90 px-3 py-2
                    text-muni-azul font-extrabold text-sm sm:text-base
                    transition hover:bg-muni-verde/45
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-muni-verde/70 absolute bottom-4 left-10 md:bottom-15 md:left-70 z-10
                "
                >
                    Ver más
                    <img
                        src={`${basePath}/img/accionesVerdes/backtotop.svg`}
                        alt=""
                        className="h-4 w-4 rotate-90 opacity-90"
                    />
                </Link>
            </div> */}

            <div className="relative">
                <div className="flex justify-center relative px-8 lg:px-10 md:mt-20 z-0">
                    {/* <DistritoVerdeMap /> */}
                </div>

                <div className="flex justify-start relative mt-10 md:mt-20 z-10">

                    <div className=" w-full max-w-7xl rounded-3xl p-8 md:p-10 relative overflow-visible">

                        {/* PERSONAS RECORTADAS */}
                        <img
                        src={`${basePath}/img/accionesVerdes/parquesPersonas.svg`}
                        className="absolute right-10 top-[-5.5] md:-top-37.5 w-48 md:w-80 object-contain z-20 pointer-events-none"
                        alt=""
                        />

                        {/* TITULO */}
                        <div className="mb-10">
                            <h2 className={` ${MontserratMediumItalic.className} hidden lg:block text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                                Cinturón
                                <br />
                                Ecológico Municipal
                            </h2>
                            <h2 className={` ${MontserratMediumItalic.className} block lg:hidden text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                                Cinturón
                                <br /> 
                                Ecológico <br />
                                 Municipal
                            </h2>
                        </div>

                        {/* GRID TARJETAS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* CARD 1 */}
                            <div className="bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between">
                                <div className="w-full flex flex-row justify-between items-center gap-5">
                                    <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                                        <span className={` ${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>6</span>
                                        <p className={` ${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                                            Parques
                                            <br /> Ecológicos
                                        </p>
                                    </div>
                                    <img src={`${basePath}/img/accionesVerdes/parquesEcologicos.svg`} className="w-30 lg:w-35" />
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between">
                                <div className="w-full flex flex-row justify-between items-center gap-5">
                                    <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                                        <span className={` ${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>38</span>
                                        <p className={` ${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                                            Áreas de
                                            <br /> reforestación continua
                                        </p>
                                    </div>
                                    <img src={`${basePath}/img/accionesVerdes/parquesReforestacion.svg`} className="w-30 lg:w-35" />
                                </div>
                            </div>

                            {/* SUBTITULO */}
                            <div className="md:col-span-2 mt-4">
                                <h3 className={` ${MontserratMediumItalic.className} text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                                Arbolado Urbano
                                </h3>
                            </div>

                            {/* CARD 3 */}
                            <div className="bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between">
                                <div>
                                <span className={` ${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                                    +27,000
                                </span>
                                <p className={` ${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                                    árboles censados en diferentes
                                    zonas de la ciudad*
                                </p>
                                </div>
                                <img src={`${basePath}/img/accionesVerdes/parquesArboles.svg`} className="w-30 lg:w-35" />
                            </div>

                            {/* CARD 4 */}
                            <div className="bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between">
                                <div>
                                <span className={` ${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>+100</span>
                                <p className={` ${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                                    Especies distintas*
                                    <br />
                                    <span className="text-lg">
                                    *Ambos datos registrados a la fecha
                                    </span>
                                </p>
                                </div>
                                {/* <img src="/img/icon-especies.svg" className="w-14" /> */}
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="flex justify-center relative mt-10 md:mt-10">
                <div className="w-full max-w-7xl rounded-2xl px-8 lg:px-10 pt-0 md:pt-0">

                    {/* Título */}
                    <h2 className={` ${MontserratMediumItalic.className} text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight mb-10`}>
                        Biodiversidad
                    </h2>

                    {/* Card grande */}
                    <div className="bg-[#e7eb9c] rounded-2xl px-8 py-6 w-full max-w-md mb-8">
                        <div className="flex items-baseline gap-4 justify-center">
                            <span className={` ${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>750</span>
                            <span className={` ${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>Especies</span>
                        </div>
                    </div>

                    {/* Cards pequeñas */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">

                        {[
                            { n: "224", t: "Plantas", icon: `${basePath}/img/accionesVerdes/plantas.svg` },
                            { n: "55",  t: "Abejas", icon: `${basePath}/img/accionesVerdes/abejas.svg` },
                            { n: "160", t: "Mariposas", icon: `${basePath}/img/accionesVerdes/mariposas.svg` },
                            { n: "54",  t: "Arácnidos", icon: `${basePath}/img/accionesVerdes/aracnidos.svg` },
                            { n: "25",  t: "Herpetofauna", icon: `${basePath}/img/accionesVerdes/herpetofauna.svg` },
                            { n: "52",  t: "Mamíferos", icon: `${basePath}/img/accionesVerdes/mamiferos.svg` },
                            { n: "180", t: "Aves", icon: `${basePath}/img/accionesVerdes/aves.svg` },
                        ].map((it) => (
                            <div
                                key={it.t}
                                className="bg-[#e7eb9c] rounded-2xl p-4 flex flex-col items-center justify-between min-h-[140px]"
                                >
                                <div className="text-center leading-tight">
                                    <div className={` ${MontserratMediumItalic.className} text-lg lg:text-xl font-extrabold text-muni-azul`}>{it.n}</div>
                                    <div className={` ${MontserratLightItalic.className} italic text-sm lg:text-lg text-muni-azul font-semibold leading-tight`}>{it.t}</div>
                                </div>

                                <img src={it.icon} alt={it.t} className="w-12 h-12 object-contain mt-2" />
                            </div>
                        ))}

                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-10 md:mt-10 mb-10">
                <div className="w-full max-w-7xl rounded-2xl p-8 md:px-10 md:px-10 md:pb-0 relative">
                    {/* bgButton Desktop */}
                    <img src={`${basePath}/img/accionesVerdes/bgButton.svg`} alt="" className="hidden md:block relative object-contain"/>
                    {/* bgButton Mobile */}
                    <img src={`${basePath}/img/accionesVerdes/bgButtonMobile.svg`} alt="" className=" block md:hidden relative object-contain"/>
                    
                    <img src={`${basePath}/img/accionesVerdes/redBird.svg`} alt="" className="absolute w-55 top-[-77] right-[2]  lg:w-75 lg:top-[-119] lg:right-[-10]"/>

                    <Link
                    href="https://grandistritoverde.com.gt/"
                    target="_blank"
                    className={`${MontserratMediumItalic.className}
                        inline-flex items-center gap-2 w-30 md:w-50
                        rounded-xl bg-white/80 px-3 py-2
                        text-muni-azul font-extrabold text-sm sm:text-xl
                        transition hover:bg-muni-verde/45
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-muni-verde/70 absolute bottom-18 left-35 md:bottom-13 md:left-68 z-10
                    }`}
                    >
                        Ver más
                        <img
                            src={`${basePath}/img/accionesVerdes/backtotop.svg`}
                            alt=""
                            className="h-4 w-4 rotate-90 opacity-90"
                        />
                    </Link>
                </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl lg:min-h-[520px]">
                <div className="my-10 relative z-10">
                    <p
                        className={`text-center font-bold mt-0 md:mb-100 text-xl md:text-4xl text-muni-azul px-0 md:px-80 italic ${MarcellusRegular.className}`}
                    >
                        “El punto de encuentro de los caminos”
                    </p>
                </div>
    
                <img
                src={`${basePath}/img/conmemoracion/250years.svg`}
                alt="250 años"
                className="
                    absolute
                    left-1/2 -translate-x-1/2
                    bottom-[-250px]
                    xl:w-[800px] 2xl:w-[1000px]
                    opacity-60
                    pointer-events-none select-none
                "
                />
            </div>

        </section>


      {/* <BottomMenu /> */}
    </main>
    );
}
