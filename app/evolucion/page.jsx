// app/evolucion/page.jsx
import Image from "next/image";
import Header from "@/app/components/Header";
import Titulo from "@/app/components/evolucion/Titulo";
import { MontserratMediumItalic } from "../layout";
import { MontserratLightItalic } from "../layout";

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

                {/* SIGLO XVI */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVI
                  </div>
                  <div className="mt-[10px] bg-white px-6 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1524–1527</p>
                  </div>
                </div>

                <Image src="/img/flechas.png" alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80" />

                {/* SIGLO XVII–XVIII */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#EE6FAF] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVII–XVIII
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVII–XVIII</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1541–1776</p>
                  </div>
                </div>

                <Image src="/img/flechas.png" alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80" />

                {/* SIGLO XIX */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#37B268] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XIX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1821–1898</p>
                  </div>
                </div>

                <Image src="/img/flechas.png" alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80" />

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

                <Image src="/img/flechas.png" alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80" />

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
              <Image src="/img/10.png" alt="Icono 1" width={50} height={50} />
              <span className="text-muni-azul text-3xl">•</span>
              <Image src="/img/11.png" alt="Icono 2" width={50} height={50} />
              <span className="text-muni-azul text-3xl">•</span>
              <Image src="/img/12.png" alt="Icono 3" width={50} height={50} />
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

            <div className="mt-4 p-6">
              {/* Aquí ya va lo blanco de tu diseño */}
              <h2 className="text-3xl font-extrabold text-muni-azul">1524</h2>
              <p className="text-xl italic font-semibold">Fundación en Iximché</p>
              <p className="text-slate-700 mt-2">
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
                Pedro de Alvarado establece la primera sede colonial española...
              </p>
            </div>  
          </div>
        </section>
    </main>
  );
}
