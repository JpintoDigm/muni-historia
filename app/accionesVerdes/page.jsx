
"use client";

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
    <main className="min-h-screen bg-250">
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
            <Filters
                zonas={zonas}
                tipos={tipos}
                selectedZona={selectedZona}
                selectedTipo={selectedTipo}
                onSelectZona={setSelectedZona}
                onSelectTipo={setSelectedTipo}
            />

            <Cards items={filteredParques} />
        </section>


      {/* <BottomMenu /> */}
    </main>
    );
}
