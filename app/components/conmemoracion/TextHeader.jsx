
import ListImage from "@/app/components/ListImage";
import { basePath } from "@/next.config.mjs";
import { MarcellusRegular, MontserratBlack3, MontserratSemiBoldItalic, muni } from "../../fonts/fonts";

export default function TextHeader() {

    return(
          <div className="container mx-auto ">
            <div className="flex items-center justify-center md:justify-end">
              <img src={`${basePath}/img/logo250.svg`} alt="Icono Calendario" className="w-50 sm:w-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center bg-center bg-no-repeat bg-contain w-full p-0 md:p-10">
              <div className="relative p-10 flex justify-center items-center">

                <img src={`${basePath}/img/conmemoracion/250years.svg`} alt="250 anios" className="w-full max-h-70" />

                <div className="absolute inset-0 flex justify-center items-center">
                  <ListImage
                    widthSize={"sm"}
                    widthSizeMobil={"mobil"}
                    heightSize={"sm"}
                    heightSizeMobil={"mobil"}
                    dotSize = {"9xl"}
                    dotSizeMobil = {"xl"}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="p-0 md:p-10 text-justify text-base md:text-xl">
                <p className={`text-muni-azul text-4xl ${MontserratSemiBoldItalic.className}`}>
                  El punto de encuentro 
                  de los caminos
                </p>
                <p className={`text-muni-azul mt-6 ${muni.className}`}>
                  Celebrar <b className={`${MontserratSemiBoldItalic.className}`}>250 años</b> de la Ciudad de Guatemala es reconocer su historia y, al mismo tiempo, mirar hacia el futuro. A lo largo de estos siglos, la ciudad ha sido un espacio de encuentro, transformación y crecimiento. 
                </p>
                <p className={`text-muni-azul mt-4 ${muni.className}`}>
                  Como lo ha expresado el alcalde <b className={`${MontserratSemiBoldItalic.className}`}>Ricardo Quiñónez:</b> “Guatemala es una ciudad que avanza, se transforma y genera oportunidades para todos.”
                </p>
                <p className={`text-muni-azul mt-4 ${muni.className}`}>
                  Hoy, esa historia continúa con una visión clara que orienta los proyectos, las acciones y las actividades que forman parte de esta conmemoración. 
                </p>
              </div>

            </div>
          </div>
    );
}