// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import { MarcellusRegular, MontserratLightItalic, MontserratMediumItalic } from "./layout";
import { MontserratBlack3 } from "./layout";

import Header from "@/app/components/Header";
import { basePath } from "@/next.config.mjs";
import ListImage from "./components/ListImage";
import BottomMenu from "./components/BottomMenu";
import TrustedCompanies from "./components/TrustedCompanies";
import { CompaniesLogo } from "./data/CompaniesLogo";

export default function HomePage() {
  return (
    <main className="min-h-screen main-snake">
      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6">
        {/* HERO SUPERIOR */}
        <section className="flex flex-col gap-6 bg-white/20 backdrop-blur-xl shadow-sm mb-0 md:mb-10">
          {/* Logo 250 + escudo + menú */}

          <Header />

          {/* Imagen central debajo del header */}
          <div className="w-full flex justify-center pt-4 pb-0 opacity-100 max-h-50">
            <img
              src={`${basePath}/img/250añosHero.png`}
              alt="Descripción"
              width={700}
              height={700}
              className="rounded-3xl object-cover"
            />
          </div>

          <ListImage />

        </section>

        <section className="flex-1">
          <div className="grid gap-3 md:grid-cols-[0.7fr_2.3fr]">

            <article className={`${MarcellusRegular.className} order-2 md:order-1 relative flex flex-col justify-between rounded-3xl p-4 shadow-sm bg-[#F57EB6]/60 cursor-pointer`}>

              {/* Botón + */}
              <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
              cursor-pointer">
                +
              </button>

              {/* Imagen con máscara */}
              <div className="mt-6 flex w-full justify-center">
                <div className="blob-mask  w-[190px] h-[250px] overflow-hidden animate-pulse-slow">
                  <img
                    src={`${basePath}/img/ciudad.png`}    // la foto que estás usando
                    alt="Vista de la ciudad"
                    width={400}
                    height={400}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <p className="text-center text-xl text-muni-azul py-8 leading-tight">
                <span className="block font-bold text-xl leading-tight">Conoce</span>
                <span className="block text-xl leading-tight">más de esta</span>
                <span className="block text-xl leading-tight">Conmemoración</span>
              </p>
            </article>

            {/* Grid de 6 tarjetas */}
            <div className={`${MarcellusRegular.className} order-1 md:order-2 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3`}>

              <Link href="/evolucion" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                  cursor-pointer">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <img src={`${basePath}/img/evolucion.png`} alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className= "text-lg md:text-xl font-bold text-muni-azul leading-tight">
                    <span className="block">Historia</span>
                    <span className="block">de la Ciudad</span>
                  </h3>
              </Link>

              <Link href="/calendario" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                cursor-pointer">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow">
                  <img src={`${basePath}/img/3.png`} alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-muni-azul leading-tight">
                  <span className="block">Agenda</span>
                  <span className="block">Eventos</span>
                </h3>  

              </Link>              

              <Link href="/aleados" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm aleados-250 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                  cursor-pointer">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <img src={`${basePath}/img/aleados.png`} alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className= "text-lg md:text-xl font-bold text-muni-azul leading-tight">
                    <span className="block">Aleados</span>
                    <span className="block">Estratégicos </span>
                  </h3>
              </Link>


              <div className="relative pointer-events-none opacity-60 overflow-hidden">

                <div className="absolute inset-x-0 top-[94%] -translate-y-1/2 bg-muni-azul text-white text-center font-bold py-1 text-sm z-10 p-2 rounded-b-3xl">
                  Próximamente
                </div>

                <Link href="/areas" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                  cursor-pointer">
                    +
                  </button>

                  <div className="mb-3 text-3xl">
                    <img src={`${basePath}/img/5.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                  </div>
                  <h3 className="text-xl font-semibold text-muni-azul"></h3>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-muni-azul leading-tight">
                    <span className="block">Acciones</span>
                    <span className="block">Verdes</span>
                  </h3> 
                </Link>
              </div>  

              <div className="relative pointer-events-none opacity-60 overflow-hidden">

                <div className="rounded-b-3xl absolute inset-x-0 top-[94%] -translate-y-1/2 bg-muni-azul text-white text-center font-bold py-1 text-sm z-10 p-2">
                  Próximamente
                </div>
                <Link href="/proyectos" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                    <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                    cursor-pointer">
                      +
                    </button>

                    <div className="mb-3 text-3xl">
                      <img src={`${basePath}/img/2.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-muni-azul leading-tight">
                      <span className="block">Acciones</span>
                      <span className="block">250 años</span>
                    </h3>  
                </Link>
              </div>  
 
              <div className="relative pointer-events-none opacity-60 overflow-hidden">

                <div className="rounded-b-3xl absolute inset-x-0 top-[94%] -translate-y-1/2 bg-muni-azul text-white text-center font-bold py-1 text-sm z-10 p-2">
                  Próximamente
                </div>
                <Link href="/proyectos" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                    <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                    cursor-pointer">
                      +
                    </button>

                    <div className="mb-3 text-3xl">
                      <img src={`${basePath}/img/4.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-muni-azul leading-tight">
                      <span className="block">Descarga</span>
                      <span className="block">Documentos</span>
                    </h3>  
                </Link>
              </div>  
              
            </div>
          </div>
        </section>

        <section className="">
          <hr class="border-t border-muni-azul/20 mt-10 w-full"/>
          <TrustedCompanies companies={CompaniesLogo} />
        </section>

      </div>

      <BottomMenu />
    </main>
  );
}