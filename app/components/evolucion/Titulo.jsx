import { MontserratMediumItalic, muni } from "@/app/fonts/fonts";
import { MontserratLightItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";



// components/Header.jsx
export default function Titulo() {
  return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
                    <div className="flex items-center mt-0 mb-4 gap-3">
                      <div className="">
                          <img src={`${basePath}/img/evolucion/icons/iconMap.svg`} alt="Icono parque" className="w-20 sm:w-30" />
                      </div>

                      <div>
                          <p className={` ${MontserratLightItalic.className} text-2xl md:text-3xl text-muni-azul`}>
                            Mapa interactivo y <span className={` ${MontserratMediumItalic.className}`}>visualización 3D</span>
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
  );
}
