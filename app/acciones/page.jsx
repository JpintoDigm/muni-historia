import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import TextHeader from "../components/conmemoracion/TextHeader";
import { MarcellusRegular, MontserratBlack3, MontserratSemiBoldItalic,MontserratLightItalic,MontserratMediumItalic, muni } from "../fonts/fonts";


export default function Acciones() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-muni-verde via-[#DFF7B0] via-65% to-white">
        
        {/* Header */}
        <section className="w-full px-4 py-8  ">

            <div className="w-full container mx-auto flex flex-col gap-4">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
                    <div className="flex items-center justify-center">
                        <img src={`${basePath}/img/acciones/aerometrotitulo.svg`} alt="Icono parque" className="w-20 sm:w-100" />
                    </div>

                    <div className="flex items-center">
                        <img src={`${basePath}/img/logo250.svg`} alt="Icono 250" className="w-50 sm:w-100" />
                    </div>

                </div>

                <div className="w-full sm:w-2/3">
                    <p className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl mb-4`}>
                        La Ciudad de Guatemala mostrará a todo el continente un transporte público moderno, limpio, seguro y eficiente. Un proyecto que, sumando al TransMetro, a TuBus, a los buses eléctricos y las nuevas iniciativas de ciclovías y corredores peatonales, simboliza la ciudad que queremos para las siguientes generaciones
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">

                    <div className="bg-white/60 rounded-2xl px-6 py-0">
                        <img
                        src={`${basePath}/img/acciones/aerometro.svg`}
                        alt="Icono 250"
                        className="w-100 sm:w-225"
                        />
                    </div>

                    {/* texto alineado al borde izquierdo de la imagen */}
                    <div className="flex flex-col items-end w-100 sm:w-225">
                        <p className={`${muni.className} text-left text-muni-azul`}>
                        Imagen de referencia AeroMetro 2025, Fuente Municipalidad de Guatemala
                        </p>
                    </div>

                </div>

            </div>

        </section>

        <section className="w-full px-4 py-8  bg-gradient-to-r from-muni-verde via-[#DFF7B0] via-65% to-white">
            <div className="w-full container mx-auto p-10">

                <div className="flex  gap-6">

                    {/* BLOQUE IZQUIERDO (Lineas) */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Línea 1 */}
                        <div>
                            <h3 className="text-muni-azul font-bold italic text-lg">Línea 1</h3>
                            <p className="text-muni-azul italic mb-4">Plaza España - Trébol</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/10.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">18</p>
                                    <p>Meses de Ejecución</p>
                                </div>

                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/11.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">2.1 km</p>
                                    <p>Recorrido</p>
                                </div>

                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/12.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">187 mil</p>
                                    <p>Usuarios al día</p>
                                </div>
                            </div>
                        </div>

                        {/* Línea 2 */}
                        <div>
                            <h3 className="text-muni-azul font-bold italic text-lg">Línea 2</h3>
                            <p className="text-muni-azul italic mb-4">Trébol - Molino de las Flores (Mixco)</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/10.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">18</p>
                                    <p>Meses de Ejecución</p>
                                </div>

                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/11.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">2.1 km</p>
                                    <p>Recorrido</p>
                                </div>

                                <div className="bg-white/60 rounded-xl p-4 text-muni-azul flex flex-col items-center justify-center">
                                    <img src={`${basePath}/img/acciones/12.svg`} alt="" className="max-w-10 md:max-w-25"/>
                                    <p className="text-3xl font-bold">187 mil</p>
                                    <p>Usuarios al día</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* BLOQUE DERECHO */}
                    <div className="bg-white/60 rounded-2xl flex flex-col items-center justify-center text-muni-azul p-6">
                        <p className="text-7xl font-extrabold">12</p>
                        <p className="text-lg text-center">Pasajeros<br />por cabina</p>
                    </div>

                </div>

            </div>
        </section>



        <BottomMenu 
        />
    </main>
  );
}