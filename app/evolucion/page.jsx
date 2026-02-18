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
import BloquePuntoEncuentro from "../components/evolucion/BloquePuntoEncuentro";


export default function Evolucion() {
    return (
    <>
        <section className="w-full bg-250">
            {/* <Header /> */}
            <div className="mx-auto max-w-[95%] py-10 px-6">

                <Titulo />

                {/* Linea Tiempo */}


                <div className="w-full flex items-center mt-6 md:mt-20">

                    <SliderEvolucion
                        MontserratMediumItalic={MontserratMediumItalic}
                        MontserratLightItalic={MontserratLightItalic}
                    />

                    
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
                <BloquePuntoEncuentro
                basePath={basePath}
                MontserratLightItalic={MontserratLightItalic}
                MontserratMediumItalic={MontserratMediumItalic}
                muni={muni}
                />

            
            <FundacionTraslado
                basePath={basePath}
                MontserratMediumItalic={MontserratMediumItalic}
                MontserratLightItalic={MontserratLightItalic}
                muni={muni}
            />
           

            
            {Historia.map((item) => (
            <BloqueHistoria
                key={item.id}
                sectionId={`${item.ageStart}-${item.ageEnd}`}
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