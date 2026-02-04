import ListImage from "@/app/components/ListImage";
import { basePath } from "@/next.config.mjs";
import { MarcellusRegular, MontserratBlack3, MontserratSemiBoldItalic, MontserratMediumItalic, muni } from "../../fonts/fonts";

export default function Cards() {

    return (
    
        <>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {/* CARD 1 */}
                <div className="animate-pulse-smooth flex flex-col items-center justify-between rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde gap-2">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Oportunidades <br /> de Empleo
                    </p>

                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/11.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <p className={` ${MontserratMediumItalic.className} text-center font-extrabold text-5xl italic`}>80%</p>
                    <p className="text-center italic mt-2 text-sm">
                        Tasas de empleo <br />(empleo formal)
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="animate-pulse-smooth flex flex-col items-center justify-between rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde gap-2">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Mejores <br /> Salarios
                    </p>

                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/12.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <p className={` ${MontserratMediumItalic.className} text-center font-extrabold text-4xl italic`}>39% +Altos</p>
                    <p className="text-center italic mt-2 text-sm">
                    Salarios del área <br />
                    metropolitana frente a otras <br />
                    ciudades del país
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="animate-pulse-smooth flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde gap-2">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Ofertas de <br />Servicios
                    </p>

                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/13.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <div className="mt-1 grid grid-cols-2 gap-4 items-end">
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>14%</p>
                            <p className={` ${muni.className} italic text-sm mt-2`}>Servicios</p>
                        </div>
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>52%</p>
                            <p className="italic text-sm mt-2">Comercios</p>
                        </div>
                    </div>
                </div>

                {/* CARD 4 */}
                <div className="animate-pulse-smooth flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Desarrollo <br />Económico
                    </p>

                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/14.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <div className="mt-1 grid grid-cols-2 gap-4 items-start">
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>50%</p>
                            <p className="italic text-sm">PIB del país</p>
                        </div>
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>77%</p>
                            <p className="italic text-sm">Recaudación de impuestos (SAT)</p>
                        </div>
                    </div>
                </div>

                {/* CARD 5 */}
                <div className="animate-pulse-smooth flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Desarrollo <br />Inmobiliario
                    </p>


                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/15.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <div className="mt-1 grid grid-cols-2 gap-4 items-start">
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>304</p>
                            <p className={` ${muni.className} italic text-sm`}>
                            Proyectos en ejecución y <br /> trámite a la fecha
                            </p>
                        </div>
                        <div className="text-center flex flex-col gap-2">
                            <p className={` ${MontserratMediumItalic.className} font-extrabold text-4xl`}>
                            6.37<span className={` ${muni.className} text-base align-super font-bold`}>Millones</span>
                            </p>
                            <p className={` ${muni.className} italic text-sm`}>Metros Cuadrados</p>
                        </div>
                    </div>
                </div>

                {/* CARD 6 */}
                <div className="animate-pulse-smooth flex flex-col rounded-3xl p-7 text-white shadow-lg bg-gradient-to-br from-[#0A0E9A] to-muni-verde">
                    <p className={` ${MontserratMediumItalic.className} text-center font-bold italic text-lg md:text-2xl leading-tight`}>
                    Desarrollo <br />Inmobiliario
                    </p>


                    <div className="flex justify-center py-5">
                        <img src={`${basePath}/img/visionCiudad/16.svg`} alt="" className="h-20 w-20 lg:h-30 lg:w-30" />
                    </div>

                    <p className={` ${MontserratMediumItalic.className} text-center font-extrabold text-5xl`}>80.82</p>
                    <p className={` ${muni.className} text-center italic mt-2 text-sm`}>
                    Ciudad más competitiva del país: <br />
                    adopción de tecnologías, líder en <br />
                    dinamismo de negocios, líder en <br />
                    innovación, primer lugar en salud
                    </p>
                </div>
            </div>

        </>
    
        

    );


}