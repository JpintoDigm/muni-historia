'use client';

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import ExampleMap from "../arcgis/basemap/BaseMap";

const ExampleMap = dynamic(() => import("../arcgis/basemap/BaseMap"), {ssr: false});

           
export default function TimeLineItem ({ year, title, description, webmapId, imageSrc, imageAlt }) {

    const [activeSlide, setActiveSlide] = useState(0); // 0 = imagen, 1 = mapa

    const toggleSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    };

    return(
        
        <div className="mt-4 p-6">
            <h2 className="text-3xl font-extrabold text-muni-azul">{year}</h2>
            <p className="text-xl italic font-semibold">{title}</p>
            <p className="text-slate-700 mt-2">{description}</p>

            <div className="mt-4 relative w-full max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-xl border border-slate-200">
                {activeSlide === 0 ? (
                    <div className="relative w-full h-64 md:h-80">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ) : (
                    <div className="w-full h-64 md:h-80">
                        <ExampleMap webmapId={webmapId} />
                    </div>
                )}
                </div>

                <button
                    onClick={toggleSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 
                                bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500 text-muni-azul font-extrabold  px-3 py-2 rounded-full shadow 
                                hover:bg-white text-slate-700 text-lg"
                    aria-label="imagen anterior"
                >
                ←
                </button>

                <button
                    onClick={toggleSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500 text-muni-azul font-extrabold
                     px-3 py-2 rounded-full shadow hover:bg-white text-slate-700 text-lg"
                    aria-label="Cambiar vista"
                >
                →
                </button>

                <div className="mt-2 flex justify-center gap-2">
                <button
                    onClick={() => setActiveSlide(0)}
                    className={`h-2 w-2 rounded-full ${
                    activeSlide === 0 ? "bg-muni-azul" : "bg-slate-300"
                    }`}
                    aria-label="Ver ilustración"
                />
                <button
                    onClick={() => setActiveSlide(1)}
                    className={`h-2 w-2 rounded-full ${
                    activeSlide === 1 ? "bg-muni-azul" : "bg-slate-300"
                    }`}
                    aria-label="Ver mapa"
                />
                </div>
            </div>
        </div> 

    );
}       
           