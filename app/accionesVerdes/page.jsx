
"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Cards from "../components/accionesVerdes/Cards";
import Filters from "../components/accionesVerdes/Filters";
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";


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
        <section className="w-full container mx-auto px-4 py-8">

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
                    <p className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl mb-4`}>
                        Las acciones verdes reflejan una ciudad que inspira bienestar, cuida su entorno y apuesta por una mejor calidad de vida para las generaciones de hoy y del futuro.
                    </p>
                </div>
            </div>

        </section>

        <section className="container mx-auto p-5">
            {/* <Filters
                zonas={zonas}
                tipos={tipos}
                selectedZona={selectedZona}
                selectedTipo={selectedTipo}
                onSelectZona={setSelectedZona}
                onSelectTipo={setSelectedTipo}
            /> */}

            {/* <Cards items={filteredParques} /> */}

            <div className="flex justify-center relative mt-10 md:mt-20">
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
            </div>
        </section>


      {/* <BottomMenu /> */}
    </main>
    );
}
