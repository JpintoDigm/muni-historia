import Titulo from "../components/evolucion/Titulo"
import Link from "next/link";
import { MontserratLightItalic, MontserratMediumItalic, MontserratBlack3 } from "../fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function Areas() {
    return (
        <section className="w-full bg-250">
            {/* <Header /> */}
            <div className="mx-auto max-w-[95%] py-10">

                <Titulo />

                {/* Linea Tiempo */}


                <div className="w-full flex flex-col items-center mt-6 md:mt-20">

                    <div className="w-full grid grid-cols-2 md:flex md:flex-wrap justify-center gap-1 relative">

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            {/* Encima */}
                            <Link href="#1524-1773" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-muni-verde">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                SIGLO XVI al XVIII
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                1524 – 1773
                                </p>
                            </Link>
                        </div>

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#1776-1821" className="col-start-1 row-start-1 flex flex-col items-center mr-0 mr-6  md:mb-0 md:mr-6 min-w-[140] animate-pulse-slow  bg-muni-rosado">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XVIII al XIX
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    1776 – 1821
                                </p>
                            </Link>
                        </div>

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#1821-1871" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-muni-pantone">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XIX
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    1821 – 1871
                                </p>
                            </Link>
                        </div>

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#1871-1918" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-[#8BCFD9]">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XIX al XX
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    1871 – 1918
                                </p>
                            </Link>
                        </div>

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#1917-1931" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-muni-verde">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XX
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    1917 – 1931
                                </p>
                            </Link>
                        </div>

                        {/* <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                        </div>


                        <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                        </div>


                        <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                        </div> */}

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#2000-2017" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-muni-pantone">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XX
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    2000 - 2017
                                </p>
                            </Link>
                        </div>

                        <div className="grid place-items-center w-fit relative">
                            {/* Fondo */}
                            <img
                                src={`${basePath}/img/evolucion/icons/linesButton.svg`}
                                alt=""
                                className="max-w-[200px] col-start-1 row-start-1"
                            />

                            <Link href="#1976-2000" className="col-start-1 row-start-1 flex flex-col items-center mr-6 min-w-[140] animate-pulse-slow bg-muni-rosado">
                                <p className={`${MontserratMediumItalic.className} text-muni-azul text-center px-2 pt-10 font-bold text-sm`}>
                                    SIGLO XX al XXI
                                </p>
                                <p className={`${MontserratLightItalic.className} text-muni-azul px-2 pb-10 text-center`}>
                                    1976 – 2000
                                </p>
                            </Link>
                        </div>         
                    </div>
                </div>

                <div className="mt-20 flex items-center justify-center gap-6 text-xl">
                    <img src={`${basePath}/img/10.png`} alt="Icono 1" width={50} height={50} />
                    <span className="text-muni-azul text-3xl">•</span>
                    <img src={`${basePath}/img/11.png`} alt="Icono 2" width={50} height={50} />
                    <span className="text-muni-azul text-3xl">•</span>
                    <img src={`${basePath}/img/12.png`} alt="Icono 3" width={50} height={50} />
                </div>
            </div>
          
        </section>
    )
}