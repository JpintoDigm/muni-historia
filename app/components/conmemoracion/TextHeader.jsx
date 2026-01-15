
import ListImage from "@/app/components/ListImage";
import { basePath } from "@/next.config.mjs";

export default function TextHeader() {

    return(
          <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-center bg-center bg-no-repeat bg-contain w-full p-10">
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
            <div className="p-10">
              <p className="text-muni-azul">
                Celebrar 250 años de la Ciudad de Guatemala es reconocer su historia y, al mismo tiempo, mirar hacia el futuro. A lo largo de estos siglos, la ciudad ha sido un espacio de encuentro, transformación y crecimiento. 
              </p>
              <p className="mt-4 text-muni-azul">
                Como lo ha expresado el alcalde Ricardo Quiñónez: “Guatemala es una ciudad que avanza, se transforma y genera oportunidades para todos.”
              </p>
              <p className="mt-4 text-muni-azul">
                Hoy, esa historia continúa con una visión clara que orienta los proyectos, las acciones y las actividades que forman parte de esta conmemoración. 
              </p>
              <p className="mt-4 text-muni-azul">

              </p>
              <p className="mt-4 text-muni-azul">
                Conecta, a través de actividades y espacios que unen a las personas y fortalecen la vida en comunidad. 
              </p>
              <p className="mt-4 text-muni-azul">
                Inspira, mediante acciones verdes que cuidan el entorno y promueven una ciudad más habitable. 
              </p>
              <p className="mt-4 text-muni-azul">
                Genera oportunidades, con proyectos urbanos que impulsan el desarrollo, el empleo y el bienestar. 
              </p>
              <p className="mt-4 text-muni-azul">
                Cada sección de esta plataforma refleja ese camino hacia la ciudad que seguimos construyendo para las próximas generaciones.
              </p>


            </div>
          </div>

    );
}