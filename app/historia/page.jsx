import Titulo from "../components/evolucion/Titulo"
import Link from "next/link";
import { MontserratLightItalic, MontserratMediumItalic, MontserratBlack3, muni, MarcellusRegular } from "../fonts/fonts";
import { basePath } from "@/next.config.mjs";
import ImageMapCarousel from "../components/evolucion/ImageMapCarousel";
import BodyContent from "../components/evolucion/BodyContent";
import BottomMenu from "../components/BottomMenu";
import SliderEvolucion from "../components/evolucion/SliderEvolucion";


export default function Areas() {
    return (
    <>
        <section className="w-full bg-250">
            {/* <Header /> */}
            <div className="mx-auto max-w-[95%] py-10">

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

        <BodyContent />           

        <div className="bg-250 mt-10 py-10">
          <p className={`${MarcellusRegular.className} italic text-muni-azul text-xl md:text-4xl font-bold rounded-3xl px-4 py-8 md:mb-  text-center items-center`}>
            “El punto de encuentro de los caminos”
          </p>
        </div>

        <BottomMenu />               

    </>

        
    )
}