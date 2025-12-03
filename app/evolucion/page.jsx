// app/evolucion/page.jsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";

export default function EvolucionPage() {
  return (
    <main className="min-h-screen bg-250">
        <section className="w-full">
          {/* <Header /> */}
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="mt-4 p-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                EVOLUCIÓN HISTÓRICA
              </h1>
              <p className="text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-slate-900/80">
                de la <span className="text-muni-azul">CIUDAD DE GUATEMALA</span>
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 p-6">
              <div className="relative flex flex-col items-center gap-10 md:flex-row md:justify-between">

                {/* Línea punteada */}
                <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden md:block">
                  <div className="h-[2px] w-full border-t-2 border-dashed border-muni-azul/60" />
                </div>

                {/* SIGLO XVI */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-muni-azul">
                        SIGLO
                      </p>
                      <p className="text-2xl font-extrabold text-[#9AD600]">XVI</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-slate-900">
                        1524–1527
                      </p>
                    </div>
                  </div>
                </div>

                {/* SIGLO XVII–XVIII */}
                <div className="relative z-10 flex flex-col items-center text-center md:translate-y-10">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-muni-azul">
                        SIGLO
                      </p>
                      <p className="text-lg md:text-xl font-extrabold text-[#9AD600]">
                        XVII–XVIII
                      </p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-slate-900">
                        1541–1776
                      </p>
                    </div>
                  </div>
                </div>

                {/* SIGLO XIX */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-muni-azul">
                        SIGLO
                      </p>
                      <p className="text-2xl font-extrabold text-[#9AD600]">XIX</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-slate-900">
                        1821–1898
                      </p>
                    </div>
                  </div>
                </div>

                {/* SIGLO XX */}
                <div className="relative z-10 flex flex-col items-center text-center md:translate-y-10">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-muni-azul">
                        SIGLO
                      </p>
                      <p className="text-2xl font-extrabold text-[#9AD600]">XX</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-slate-900">
                        1917–2000
                      </p>
                    </div>
                  </div>
                </div>

                {/* SIGLO XXI */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <div className="leading-tight">
                      <p className="text-xs font-extrabold tracking-[0.15em] text-muni-azul">
                        SIGLO
                      </p>
                      <p className="text-2xl font-extrabold text-[#9AD600]">XXI</p>
                      <p className="mt-1 text-xs md:text-sm font-semibold text-slate-900">
                        2004–2024
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Iconos pequeños abajo (como en la pantalla principal) */}
            <div className="mt-10 flex items-center justify-center gap-6 text-xl">
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
            {/* Aquí ya va lo blanco de tu diseño */}
            <h2 className="text-3xl font-extrabold text-muni-azul">1524</h2>
            <p className="italic font-semibold">Fundación en Iximché</p>
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
        </section>
    </main>
  );
}
