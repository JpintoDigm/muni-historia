import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import TextHeader from "../components/conmemoracion/TextHeader";


export default function Conmemoracion() {
  return (
    <main className="mx-auto w-full min-h-screen">
        
        {/* Header */}
        <section className="w-full p-10 bg-muni-verde">
          <TextHeader />    
        </section>

        {/* Seccion Ejes */}
        <section className=" mx-auto w-full bg-white">
          <div className="mx-auto max-w-6xl flex gap-10 px-10 md:px-0 py-16 bg-white">

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
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-muni-azul text-justify">
                    Genera oportunidades, con proyectos urbanos que impulsan el desarrollo, el empleo y el bienestar.                 
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
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-muni-azul text-justify">
                    Inspira, mediante acciones verdes que cuidan el entorno y promueven una ciudad más habitable.      
                  </p>
                </div>
              </div>

              {/* 3. Conectando Metas */}
              <div className="flex flex-row gap-5 items-start">
                <div className="bg-muni-pantone p-5 shrink-0">
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
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-muni-azul text-justify">
                    Conecta, a través de actividades y espacios que unen a las personas y fortalecen la vida en comunidad. 
                  </p>
                </div>
              </div>

              {/* Conectando Metas */}
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-muni-verde py-5 px-4 shrink-0">
                  <img
                    src={`${basePath}/img/conmemoracion/iconoCelular.svg`}
                    alt="Eje Conectando Metas"
                    className="w-12 h-12 ml-2"
                  />
                </div>

                <div className="border-y-2 border-r-2 rounded-r-4xl md:rounded-r-full border-muni-verde">
                  <p className="text-sm md:text-base leading-relaxed text-muni-azul text-justify px-5 py-3">
                    Cada sección de esta plataforma refleja ese camino hacia <b>la ciudad 
                    que seguimos construyendo</b> para las próximas generaciones.                 
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA – IMAGEN (con corte abajo) */}
          <div className="hidden md:block relative">
            <img
              src={`${basePath}/img/conmemoracion/250cremalg.svg`}
              alt="250 años"
              className="
                absolute
                right-[-90px]
                bottom-[150]
                -rotate-90
                w-[520px]
                opacity-60
                pointer-events-none
                select-none
              "
            />
          </div>          

          <div className="my-10">
            <p className="text-center text-base md:text-2xl text-muni-azul px-0 md:px-80">250 años de historia. Una ciudad que <b>conecta, inspira y genera oportunidades.</b></p>
          </div>


        </section>

        
        <div className="flex items-center justify-between bottom-0">
            <div className="bg-muni-verde flex-1 h-5"></div>
            <div className="bg-muni-pantone flex-1 h-5"></div>
            <div className="bg-muni-amarillo flex-1 h-5"></div>
            <div className="bg-muni-rosado flex-1 h-5"></div>
            <div className="bg-muni-azul flex-1 h-5"></div>
            <div className="bg-muni-verde flex-1 h-5"></div>
            <div className="bg-muni-pantone flex-1 h-5"></div>
        </div>  

        <BottomMenu 
        />
    </main>
  );
}