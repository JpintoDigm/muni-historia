// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import { MontserratLightItalic, MontserratMediumItalic } from "./layout";
import { MontserratBlack3 } from "./layout";

import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen main-snake">
      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6">
        {/* HERO SUPERIOR */}
        <section className="flex flex-col gap-6 bg-white/20 backdrop-blur-xl shadow-sm mb-20">
          {/* Logo 250 + escudo + menú */}

          <Header />

          {/* Imagen central debajo del header */}
          <div className="w-full flex justify-center py-4 opacity-100 max-h-[300px]">
            <Image
              src="/img/250añosHero.png"
              alt="Descripción"
              width={700}
              height={700}
              className="rounded-3xl object-cover"
            />
          </div>

          <div className="flex items-center justify-center gap-6 text-xl opacity-100">
            <Image src="/img/10.png" alt="Logo1" width={50} height={50} className="rounded-3xl object-cover"/>
            <span className="text-muni-azul text-3xl">•</span>
            <Image src="/img/11.png" alt="Descripción" width={50} height={50} className="rounded-3xl object-cover"/>
            <span className="text-muni-azul text-3xl">•</span>
            <Image src="/img/12.png" alt="Descripción" width={50} height={50} className="rounded-3xl object-cover"/>
          </div>
        </section>

        <section className="flex-1">
          <div className="grid gap-3 md:grid-cols-[0.7fr_2.3fr]">

            <article className={`${MontserratMediumItalic.className} relative flex flex-col justify-between rounded-3xl p-4 shadow-sm bg-[#F57EB6]/60`}>

              {/* Botón + */}
              <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                +
              </button>

              {/* Imagen con máscara */}
              <div className="mt-6 flex w-full justify-center">
                <div className="blob-mask  w-[170px] h-[220px] overflow-hidden">
                  <Image
                    src="/img/ciudad.png"    // la foto que estás usando
                    alt="Vista de la ciudad"
                    width={250}
                    height={350}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <p className="text-center text-[13px] leading-tight text-muni-azul py-8">
                <span className="block font-bold text-xl">Conoce</span>
                <span className="block text-xl">más de esta</span>
                <span className="block text-xl">Conmemoración</span>
              </p>
            </article>

            {/* Grid de 6 tarjetas */}
            <div className={`${MontserratMediumItalic.className} grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3`}>

              <Link href="/evolucion" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <Image src="/img/evolucion.png" alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className= "text-xl font-bold text-muni-azul leading-tight">
                    <span className="block">Historia y</span>
                    <span className="block">Evolución</span>
                  </h3>
              </Link>

              <Link href="/areas" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow ">
                  <Image src="/img/5.png" alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>
                <h3 className="text-xl font-semibold text-muni-azul">Áreas Verdes</h3>
              </Link>

              <Link href="/proyectos" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <Image src="/img/2.png" alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className="text-xl font-semibold text-muni-azul leading-tight">
                    <span className="block">Proyectos</span>
                    <span className="block">Urbanos</span>
                  </h3>  
              </Link>

              <Link href="/calendario" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow ">
                  <Image src="/img/3.png" alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                </div>

                <h3 className="text-xl font-semibold text-muni-azul leading-tight">
                  <span className="block">Calendario</span>
                  <span className="block">de eventos</span>
                </h3>  

              </Link>

              <Link href="/descarga" className="relative flex flex-col justify-center rounded-3xl px-4 py-8 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow ">
                  <Image src="/img/4.png" alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                </div>
                <h3 className="text-xl font-semibold text-muni-azul leading-tight">
                  <span className="block">Descarga</span>
                  <span className="block">Documentos</span>
                </h3> 
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}