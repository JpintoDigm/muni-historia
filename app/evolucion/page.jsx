// app/evolucion/page.jsx
import Header from "@/app/components/Header";
import Titulo from "@/app/components/evolucion/Titulo";
import TimeLineItem from "@/app/components/evolucion/TimeLineItem";
import ExampleMap from "../components/arcgis/basemap/BaseMap"

import { ListTimeLine} from "../data/ListTimeLine"
import { MontserratMediumItalic } from "../layout";
import { MontserratLightItalic } from "../layout";
import { basePath } from "@/next.config.mjs";
import { ListCenturyCard } from "../data/ListCenturyCard";
import Link from "next/link";
import BottomMenu from "../components/BottomMenu";


export default function EvolucionPage() {
  return (
    <main className="min-h-screen bg-250">
        <section className="w-full">
          {/* <Header /> */}
          <div className="mx-auto max-w-6xl px-4 py-10">

            <Titulo />

            {/* Linea Tiempo */}


            <div className="w-full flex flex-col items-center mt-20">

              <div className="flex flex-wrap items-center justify-center  gap-2 relative">

                <Link href="#1524" className="flex flex-col items-center animate-pulse-slow">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVI – SIGLO XVIII
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1524 – 1773</p>
                  </div>
                </Link>


                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                <Link href="#1728" className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#EE6FAF] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVIII – SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVII–XVIII</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1776 – 1821</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XIX */}
                <Link href="#" className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#37B268] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XIX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1821–1898</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XX */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BCFD9] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1917–2000</p>
                  </div>
                </div>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XXI */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#D4DE52] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XXI
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XXI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>2004–2024</p>
                  </div>
                </div>

              </div>
              
            </div>

            <div className="mt-20 flex items-center justify-center gap-6 text-xl">
              <img src={`${basePath}/img/10.png`} alt="Icono 1" width={50} height={50} />
              <span className="text-muni-azul text-3xl">•</span>
              <img src={`${basePath}/img/11.png`} alt="Icono 2" width={50} height={50} />
              <span className="text-muni-azul text-3xl">•</span>
              <img src={`${basePath}/img/12.png`} alt="Icono 3" width={50} height={50} />
            </div>
          </div>
          
        </section>

        <section className="w-full bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">

            <div className="mt-4 p-6">
              <h1 className={`${MontserratMediumItalic.className} text-2xl md:text-3xl font-extrabold text-muni-verde`}>
              EVOLUCIÓN HISTÓRICA
              </h1>
              <p className={`${MontserratLightItalic.className} text-sm md:text-3xl tracking-[0.12em] uppercase text-muni-verde`}>
              de la <span className={`${MontserratMediumItalic.className} text-muni-azul font-extrabold`}>CIUDAD DE GUATEMALA</span>
              </p>
            </div>

            <div>
              {ListTimeLine.map((item, index) => (
                <TimeLineItem
                  key={index}
                  id={item.id}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  webmapId={item.webmapId}
                  images={item.images}
                  lineVariant={item.lineVariant}
                  insights={item.insights} 
                />
              ))}
            </div>



          </div>
        </section>

        <BottomMenu />
    </main>
  );
}
