
import ListImage from "@/app/components/ListImage";
import { basePath } from "@/next.config.mjs";

export default function TextHeader() {

    return(
          <div className="container mx-auto ">
            <div className="flex items-center justify-end">
              <img src={`${basePath}/img/logo250.svg`} alt="Icono Calendario" className="w-50 sm:w-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center bg-center bg-no-repeat bg-contain w-full p-10">
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
              <div className="p-0 md:p-10 text-justify">
                <p className="text-muni-azul">
                  Celebrar <b>250 años</b> de la Ciudad de Guatemala es reconocer su historia y, al mismo tiempo, mirar hacia el futuro. A lo largo de estos siglos, la ciudad ha sido un espacio de encuentro, transformación y crecimiento. 
                </p>
                <p className="mt-4 text-muni-azul">
                  Como lo ha expresado el alcalde <b>Ricardo Quiñónez:</b> “Guatemala es una ciudad que avanza, se transforma y genera oportunidades para todos.”
                </p>
                <p className="mt-4 text-muni-azul">
                  Hoy, esa historia continúa con una visión clara que orienta los proyectos, las acciones y las actividades que forman parte de esta conmemoración. 
                </p>
              </div>

            </div>
          </div>
    );
}