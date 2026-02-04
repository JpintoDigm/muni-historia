// app/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MarcellusRegular, MontserratLightItalic, MontserratMediumItalic } from "./fonts/fonts";
import { MontserratBlack3 } from "./fonts/fonts";

import Header from "@/app/components/Header";
import { basePath } from "@/next.config.mjs";
import ListImageMain from "./components/ListImageMain";
import BottomMenu from "./components/BottomMenu";
import TrustedCompanies from "./components/TrustedCompanies";
import { CompaniesLogo } from "./data/CompaniesLogo";
import Modal from "@/app/components/aleados/Modal";
import ModalDescarga from "@/app/components/descarga/ModalDescarga";
import { Suspense } from "react";
import Footer from "./components/Footer";
import VideoPiP from "./components/video";
import StickyVideo from "./components/video";

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}

function HomePageContent() {

  // modal Aleados Estrategicos
  const searchParams = useSearchParams();
  const showModal = searchParams.get("modal") == "aleados";

  // modal Aleados Estrategicos
  const searchParamsDescarga = useSearchParams();
  const showModalDescarga = searchParamsDescarga.get("modalD") == "descarga";

  return (
    <main className="w-full min-h-screen main-snake">
      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6">
        {/* HERO SUPERIOR */}
        <section className="flex flex-col gap-6 bg-white/20 backdrop-blur-xl shadow-sm mb-0 md:mb-8">
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

          <ListImageMain
          />

        </section>

        <div className="md:mb-8">
          <p className={`${MarcellusRegular.className} italic text-muni-azul text-xl md:text-4xl font-bold rounded-3xl px-4 py-8 md:mb- shadow-sm bg-white/20 backdrop-blur-xl text-center items-center`}>
            “El punto de encuentro de los caminos”
          </p>
        </div>

        <section className="flex-1 ">
          <div className="grid gap-3 md:grid-cols-[0.7fr_2.3fr]">

            <Link href="/visionCiudad" className={`${MarcellusRegular.className} order-2 md:order-1 relative flex flex-col justify-between rounded-3xl p-4 shadow-sm conmemoracion-250 cursor-pointer`}>

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
              <p className="text-center text-muni-azul py-8 leading-tight">
                <span className="block font-extrabold text-xl md:text-[22px] leading-tight">Conoce</span>
                <span className="block text-xl md:text-[22px] leading-tight">la visión</span>
                <span className="block text-xl md:text-[22px] leading-tight">de la ciudad</span>
              </p>
            </Link>

            {/* Grid de 6 tarjetas */}
            <div className={`${MarcellusRegular.className} order-1 md:order-2 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3`}>

              <Link href="/historia" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                  cursor-pointer">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <img src={`${basePath}/img/historiaCiudad.svg`} alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className= "text-lg md:text-[22px] font-bold text-muni-azul leading-tight">
                    <span className="block">Historia de la</span>
                    <span className="block">Ciudad de Guatemala</span>
                  </h3>
              </Link>

              <Link href="/calendario" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                cursor-pointer">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow flex items-center justify-center">
                  <img src={`${basePath}/img/3.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-lg md:text-[22px] font-semibold text-muni-azul leading-tight">
                  <span className="block">Agenda</span>
                  <span className="block">Eventos</span>
                </h3>  

              </Link>         

              <Link href="/accionesVerdes" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                cursor-pointer">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow">
                  <img src={`${basePath}/img/5.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-lg md:text-[22px] font-semibold text-muni-azul leading-tight">
                  <span className="block">Acciones</span>
                  <span className="block">Verdes</span>
                </h3>  

              </Link>      

              <Link href="/acciones250" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                cursor-pointer">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow">
                  <img src={`${basePath}/img/2.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-lg md:text-[22px] font-semibold text-muni-azul leading-tight">
                  <span className="block">Acciones</span>
                  <span className="block">250 años</span>
                </h3>  

              </Link>                                                

              <Link href="/?modalD=descarga" scroll={false} className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                cursor-pointer">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow">
                  <img src={`${basePath}/img/4.png`} alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-lg md:text-[22px] font-semibold text-muni-azul leading-tight">
                  <span className="block">Descarga</span>
                  <span className="block">Documentos</span>
                </h3>  

              </Link>      

              <ModalDescarga openFromQuery={showModalDescarga} />                                          

              <Link href="/?modal=aleados" scroll={false} className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm aleados-250 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md
                  cursor-pointer">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <img src={`${basePath}/img/aliados.svg`} alt="Logo1" width={400} height={400} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className= "text-lg md:text-[22px] font-bold text-muni-azul leading-tight">
                    <span className="block">Aliados</span>
                    <span className="block">Estratégicos </span>
                  </h3>
              </Link>
              <Modal openFromQuery={showModal} />


              
            </div>

            
          </div>
        </section>

        <div className="container md:px-8 md:py-8 bg-white/50 backdrop-blur-none rounded-3xl">
          <StickyVideo src={`${basePath}/video/VideoConmemorativo.mp4`}/> 
        </div>
      </div>

      {/* <BottomMenu /> */}
    </main>

  
  );
}