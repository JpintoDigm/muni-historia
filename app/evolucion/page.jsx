import Titulo from "../components/evolucion/Titulo"
import Link from "next/link";
import { MontserratLightItalic, MontserratMediumItalic, MontserratBlack3, muni, MarcellusRegular } from "../fonts/fonts";
import { basePath } from "@/next.config.mjs";
import ImageMapCarousel from "../components/evolucion/ImageMapCarousel";
import BodyContent from "../components/evolucion/BodyContent";
import BottomMenu from "../components/BottomMenu";
import SliderEvolucion from "../components/evolucion/SliderEvolucion";
import BloqueHistoria from "../components/evolucion/BloqueHistoria";
import { Historia } from "../data/Historia";
import FundacionTraslado from "../components/evolucion/FundacionTraslado";


export default function Evolucion() {
    return (
    <>
        <section className="w-full bg-250">
            {/* <Header /> */}
            <div className="mx-auto max-w-[95%] py-10">

                <Titulo />

                {/* Linea Tiempo */}


                <div className="w-full flex items-center mt-6 md:mt-20">

                    {/* <SliderEvolucion
                        MontserratMediumItalic={MontserratMediumItalic}
                        MontserratLightItalic={MontserratLightItalic}
                    /> */}

                    
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

        {/* <BodyContent />            */}

        <section>
            <div className="bg-muni-verde">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 py-10">

                    <div>
                        {/* titulo */}
                        <p className={`${MontserratLightItalic.className} text-muni-azul text-end text-4xl lg:text-5xl`}>
                            El <br />
                            punto de <br />
                            <span className={`${MontserratMediumItalic.className} font-bold`}>encuentro</span> <br />
                            de los <br />
                            caminos <br />
                        </p>

                        {/* Textos */}
                        <p className={`${muni.className} text-justify mt-10 text-muni-azul`}>
                            Hace 250 años, la capital se trasladó después de su destrucción por un cataclismo al Valle de la Ermita, identificado como el mejor lugar para vivir. Punto de encuentro para quienes recorrían los 4 caminos, hacia el océano Atlántico o al Pacífico, hacia el resto de Centroamérica o México. Valle privilegiado, rodeado de volcanes y montañas, próspero y de clima mayoritariamente primaveral, cielo azul despejado y estación lluviosa refrescante y pródiga. Hoy celebramos doscientos cincuenta años de su asentamiento y desarrollo desde que se trazaron las calles, los solares para viviendas y templos, puentes y pilas, el acueducto por donde bajaría el agua y cómo fue creciendo y rehaciéndose con los años, superando inundaciones, pestes y terremotos, hasta convertirse en la metrópoli actual, con grandes edificios y extraordinaria extensión, que la ubica a la cabeza de la región, como la urbe más grande desde la ciudad de México a Bogotá. Miramos hacia atrás para comprender quiénes somos, y hacia adelante para prosperar en la mejor ciudad para vivir <br /><br />
                            Texto: Adolfo Méndez Vides, Escritor (2026).
                        </p>
                        <p className={`${muni.className} text-justify mt-10 text-muni-azul`}>
                            Kaminaljuyu es una antigua ciudad cuyos restos permanecen bajo la configuración urbana actual. Antes de que la ciudad moderna se expandiera, este lugar era un paisaje de montículos que incluían templos, plataformas y edificios de tierra, reflejando la complejidad social, política y técnica de una civilización muy organizada. Su crecimiento se fundamentó en un profundo conocimiento del entorno, especialmente en el manejo del agua mediante sistemas de canales y reservorios, lo que influyó en su vida ritual y en la planificación espacial. En Kaminaljuyu había mercados, templos, plazas y una red de caminos que conectaba el valle central con regiones distantes, promoviendo el intercambio de bienes, ideas y prácticas culturales. A pesar de la presión constante de la urbanización, Kaminaljuyu no ha desaparecido. Su presencia persiste como fundamento histórico de la Ciudad de Guatemala y como testimonio tangible de un pasado que continúa dando forma al territorio. En estos restos arqueológicos se concentra una memoria profunda, indispensable para comprender el origen y la continuidad de la ciudad actual.
                        </p>
                        <p className={`${muni.className} text-justify mt-10 text-muni-azul`}>
                            A pesar de la presión constante de la urbanización, Kaminaljuyu no ha desaparecido. Su presencia persiste como fundamento histórico de la Ciudad de Guatemala y como testimonio tangible de un pasado que continúa dando forma al territorio. En estos restos arqueológicos se concentra una memoria profunda, indispensable para comprender el origen y la continuidad de la ciudad actual. <br /><br />
                            Texto: Bárbara Arroyo, Arqueóloga (2026). 
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-10 lg:mt-0">
                        <div>
                            <p className={`${muni.className} text-muni-azul italic text-start w-1/3`}>“Kaminaljuyu, punto estratégico central del comercio y encuentro regional”</p>
                        </div>
                        <img src={`${basePath}/img/evolucion/draws/Kaminaljuyu.png`} alt="" className="w-150" />
                        <div>
                            <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul`}>Vista aérea de Kaminaljuyu en el siglo III D.C</p>
                            <p className={`${muni.className} text-justify text-muni-azul`}>
                                Fuente: Municipalidad de Guatemala, <br />
                                Ilustración Arq. Guillermo Aguirre. 
                            </p>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-muni-pantone via-[#7EDBB0] via-90% md:via-65% to-white">
                <FundacionTraslado
                    basePath={basePath}
                    MontserratMediumItalic={MontserratMediumItalic}
                    MontserratLightItalic={MontserratLightItalic}
                    muni={muni}
                />
            </div>

            
            {Historia.map((item) => (
            <BloqueHistoria
                key={item.id}
                bgColor={item.bgColor}
                titulo={item.titulo}
                descripcion={item.descripcion}
                texto={item.texto}
                revision={item.revision}
                cita={item.cita}
                ageStart={item.ageStart}
                ageEnd={item.ageEnd}
                imagen={item.imagen}
                imagenes={item.imagenes}
                lugar={item.lugar}
                fuente={item.fuente}
                ilustracion={item.ilustracion}
                basePathHistoria={basePath}
                MontserratLightItalic={MontserratLightItalic}
                MontserratMediumItalic={MontserratMediumItalic}
                muni={muni}
            />
            ))}

            <div className="relative overflow-hidden lg:min-h-[520px] bg-gradient-to-r from-muni-verde via-[#DFF7B0] via-90% md:via-65% to-white pb-15 lg:pb-0">
                <div className="my-10 relative z-10">
                    <p
                    className={`text-center font-bold mt-15 md:mb-100 text-xl md:text-4xl text-muni-azul px-0 md:px-80 italic ${MarcellusRegular.className}`}
                    >
                    “El punto de encuentro de los caminos”
                    </p>
                </div>

                <img
                    src={`${basePath}/img/conmemoracion/250years.svg`}
                    alt="250 años"
                    className="
                    absolute
                    left-1/2 -translate-x-1/2
                    bottom-[-250px]
                    xl:w-[800px] 2xl:w-[1000px]
                    opacity-60
                    pointer-events-none select-none
                    "
                />
            </div>
                      
        </section>


    </>

        
    )
}