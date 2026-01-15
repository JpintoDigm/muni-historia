import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import ListImage from "@/app/components/ListImage";

export default function Conmemoracion() {
  return (
    <main className="mx-auto w-full min-h-screen">
        
        <section className="w-full p-10 bg-muni-verde">
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
        </section>

        <section className="container mx-auto w-full bg-white">
          <div className="mx-auto max-w-6xl flex gap-10 px-10 py-16 bg-white">

            {/* COLUMNA IZQUIERDA: TEXTOS */}
            <div className="flex-1 w-4/5 flex flex-col gap-10 ">
              {/* 1. Impulsando Oportunidades */}
              <div className="flex flex-row gap-5 items-start">
                <div className="bg-muni-rosado p-5 shrink-0">
                  <img
                    src={`${basePath}/img/conmemoracion/ejeImpulsando.png`}
                    alt="Eje Impulsando Oportunidades"
                    className="w-12 h-12 "
                  />
                </div>

                <div>
                  <h3 className="text-2xl text-muni-azul">
                    <span className="italic font-light">Impulsando </span>
                    <span className="font-extrabold not-italic">Oportunidades</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muni-azul text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                  
                  </p>
                </div>
              </div>

              {/* 2. Inspirando Sueños */}
              <div className="flex flex-row gap-5 items-start">
                <div className="bg-muni-amarillo p-5 shrink-0">
                  <img
                    src={`${basePath}/img/conmemoracion/ejeInspirando.png`}
                    alt="Eje Inspirando Sueños"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="text-2xl text-muni-azul">
                    <span className="italic font-light">Inspirando </span>
                    <span className="font-extrabold not-italic">Sueños</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muni-azul text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      
                  </p>
                </div>
              </div>

              {/* 3. Conectando Metas */}
              <div className="flex flex-row gap-5 items-start">
                <div className="bg-muni-verde p-5 shrink-0">
                  <img
                    src={`${basePath}/img/conmemoracion/ejeConectando.png`}
                    alt="Eje Conectando Metas"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="text-2xl text-muni-azul">
                    <span className="italic font-light">Conectando </span>
                    <span className="font-extrabold not-italic">Metas</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muni-azul text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: 250 ROTADO AL LADO */}
            <div className="w-1/5 flex items-center justify-center">
              <img
                src={`${basePath}/img/conmemoracion/250cremalg.svg`}
                alt="250 años"
                className="-rotate-90 w-100 opacity-60"
              />
            </div>
          </div>
        </section>

        <BottomMenu 
        />
    </main>
  );
}