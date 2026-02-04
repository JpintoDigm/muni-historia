"use client";

import { useReveal } from "@/app/hooks/useReveal";
import { useCountUp } from "@/app/hooks/useCountUp";
import { basePath } from "@/next.config.mjs";
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni, MarcellusRegular } from "@/app/fonts/fonts";

const revealClass = (show) =>
  show
    ? "opacity-100 translate-y-0 blur-0"
    : "opacity-0 translate-y-6 blur-sm";

export default function DesafiosCiudad() {

    const r1 = useReveal();
    const r2 = useReveal();
    const r3 = useReveal();
    const r4 = useReveal();
    const r5 = useReveal();

    const n1 = useCountUp({ end: 40, duration: 1200, decimals: 0, startWhen: r1.show });
    const n2 = useCountUp({ end: 60, duration: 1200, decimals: 0, startWhen: r2.show });
    const n3 = useCountUp({ end: 62, duration: 1200, decimals: 0, startWhen: r3.show });
    const n4 = useCountUp({ end: 48.5, duration: 1400, decimals: 1, startWhen: r4.show });
    const n5 = useCountUp({ end: 800, duration: 1400, decimals: 0, startWhen: r5.show });



    const title = useReveal();

  return (
    <section className="w-full px-4 py-0 bg-muni-azul overflow-hidden">
      <div className="container mx-auto p-6 lg:px-0 lg:py-6 text-white">

        {/* Título */}
        <h2
          ref={title.ref}
          className={`${MontserratMediumItalic.className} text-4xl md:text-5xl font-bold text-muni-verde mb-10 transition-all duration-700 ease-out ${revealClass(title.show)}`}
        >
          Desafíos Ciudad
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-12">

          {/* Item 1 */}
          <div
            ref={r1.ref}
            className={`flex items-center gap-6 transition-all duration-700 ease-out ${revealClass(r1.show)}`}
          >
            <img src={`${basePath}/img/visionCiudad/16.svg`} alt="Icono 250" className="w-20 md:w-40" />
            <div className="flex flex-col justify-center">
              <p className={`${MontserratMediumItalic.className} text-3xl font-bold text-muni-verde`}>+{n1} km</p>
              <p className="text-sm md:text-xl italic">
                Crecimiento de la ciudad y del área metropolitana en su mancha urbana
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            ref={r2.ref}
            className={`flex items-center gap-6 transition-all duration-700 ease-out ${revealClass(r2.show)}`}
          >
            <img src={`${basePath}/img/visionCiudad/11.svg`} alt="Icono 250" className="w-20 md:w-40" />
            <div>
              <p className={`${MontserratMediumItalic.className} text-3xl font-bold text-muni-verde`}>{n2}%</p>
              <p className="text-sm md:text-xl italic">
                Población trabajadora concentrada en el Corredor Central
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div
            ref={r3.ref}
            className={`flex items-center gap-6 transition-all duration-700 ease-out ${revealClass(r3.show)}`}
          >
            <img src={`${basePath}/img/visionCiudad/17.svg`} alt="Icono 250" className="w-20 md:w-40" />
            <div>
              <p className={`${MontserratMediumItalic.className} text-3xl font-bold text-muni-verde`}>{n3}%</p>
              <p className="text-sm md:text-xl italic">
                Empresas en el Corredor Central
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            ref={r4.ref}
            className={`flex items-center gap-6 transition-all duration-700 ease-out ${revealClass(r4.show)}`}
          >
            <img src={`${basePath}/img/visionCiudad/19.svg`} alt="Icono 250" className="w-20 md:w-40" />
            <div>
              <p className={`${MontserratMediumItalic.className} text-3xl font-bold text-muni-verde`}>{n4}%</p>
              <p className="text-sm md:text-xl italic">
                Población flotante que ingresa diariamente a la ciudad (1.7 millones)
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div
            ref={r5.ref}
            className={`flex items-center gap-6 transition-all duration-700 ease-out ${revealClass(r5.show)}`}
          >
            <img src={`${basePath}/img/visionCiudad/18.svg`} alt="Icono 250" className="w-20 md:w-40" />
            <div>
              <p className={`${MontserratMediumItalic.className} text-3xl font-bold text-muni-verde`}>{n5} mil</p>
              <p className="text-sm md:text-xl italic">
                Vehículos ingresan diariamente a la ciudad
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
