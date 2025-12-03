// app/page.jsx
import Image from "next/image";
import Link from "next/link";

import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-250">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6">
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
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">

            <article className="relative flex flex-col justify-between rounded-3xl p-4 shadow-sm bg-[#F57EB6]/50 backdrop-blur-none">

              {/* Botón + */}
              <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                +
              </button>



              <div className="mb- aspect-[3/4] w-full rounded-2x" />
              <p className="text-center text-sm font-semibold uppercase tracking-wide">
                Conoce más
              </p>
            </article>

            <article className="relative flex flex-col justify-between rounded-3xl p-4 shadow-sm bg-[#F57EB6]/60">

              {/* Botón + */}
              <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                +
              </button>

              {/* Imagen con máscara */}
              <div className="mt-6 mb-4 flex w-full justify-center">
                <div className="blob-mask w-32 h-40 overflow-hidden">
                  <Image
                    src="/img/ciudad.png"    // la foto que estás usando
                    alt="Vista de la ciudad"
                    width={200}
                    height={250}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <p className="text-center text-[13px] leading-tight text-muni-azul">
                <span className="block font-extrabold">Conoce</span>
                <span className="block font-semibold">más de esta</span>
                <span className="block font-semibold">Conmemoración</span>
              </p>
            </article>

            {/* Grid de 6 tarjetas */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <Link href="/evolucion" className="relative flex flex-col justify-center rounded-3xl p-4 shadow-sm bg-white/50 backdrop-blur-none text-center items-center ">
                  {/* Botón + */}
                  <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                    +
                  </button>

                  <div className="mb-3 text-3xl animate-pulse-slow ">
                    <Image src="/img/evolucion.png" alt="Logo1" width={300} height={300} className="rounded-3xl object-cover max-w-[100px]"/>
                  </div>

                  <h3 className="text-xl font-semibold text-muni-azul leading-tight">
                    <span className="block">Historia y</span>
                    <span className="block">Evolución</span>
                  </h3>
              </Link>

              <Link href="/areas" className="relative flex flex-col justify-center rounded-3xl p-4 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

                <button className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-muni-azul text-white text-2xl leading-none shadow-md">
                  +
                </button>

                <div className="mb-3 text-3xl animate-pulse-slow ">
                  <Image src="/img/5.png" alt="Logo1" width={300} height={300} className="object-cover max-w-[100px]"/>
                </div>
                <h3 className="text-xl font-semibold text-muni-azul">Áreas Verdes</h3>
              </Link>

              <Link href="/proyectos" className="relative flex flex-col justify-center rounded-3xl p-4 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

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

              <Link href="/calendario" className="relative flex flex-col justify-center rounded-3xl p-4 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

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

              <Link href="/descarga" className="relative flex flex-col justify-center rounded-3xl p-4 shadow-sm bg-white/50 backdrop-blur-none text-center items-center">

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