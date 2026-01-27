import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";
import TextHeader from "../components/conmemoracion/TextHeader";
import { MarcellusRegular, MontserratBlack3, MontserratSemiBoldItalic, muni } from "../fonts/fonts";


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
                  <h3 className="text-2xl md:text-3xl text-muni-azul">
                    <span className={`italic ${muni.className}`}>Impulsando </span>
                    <span className={`italic ${MontserratSemiBoldItalic.className}`}>Oportunidades</span>
                  </h3>
                  <p className={`mt-2 text-base md:text-lg leading-relaxed text-muni-azul text-justify ${muni.className}`}>
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
                  <h3 className="text-2xl md:text-3xl text-muni-azul">
                    <span className={`italic ${muni.className}`}>Inspirando </span>
                    <span className={`italic ${MontserratSemiBoldItalic.className}`}>Sueños</span>
                  </h3>
                  <p className={`mt-2 text-base md:text-lg leading-relaxed text-muni-azul text-justify ${muni.className}`}>
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
                  <h3 className="text-2xl md:text-3xl text-muni-azul">
                    <span className={`italic ${muni.className}`}>Conectando </span>
                    <span className={`italic ${MontserratSemiBoldItalic.className}`}>Metas</span>
                  </h3>
                  <p className={`mt-2 text-base md:text-lg leading-relaxed text-muni-azul text-justify ${muni.className}`}>
                    Conecta, a través de actividades y espacios que unen a las personas y fortalecen la vida en comunidad. 
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA – IMAGEN (con corte abajo) */}
          <div className="block relative">
            <img
              src={`${basePath}/img/conmemoracion/250cremalg.svg`}
              alt="250 años"
              className="
                absolute
                right-[-80px] md:right-[-153]
                bottom-[350] md:bottom-[-100]
                -rotate-90
                md:w-[700px]
                opacity-60
                pointer-events-none
                select-none
              "
            />
          </div>    

          <div className="w-sm md:w-2xl mx-auto p-2 md:px-0">
            {/* Conectando Metas */}
            <div className="flex flex-row gap-2 items-center justify-center mt-15">
              <div className="bg-muni-azul py-5 px-4 shrink-0 w-40 h-40">
                <img
                  src={`${basePath}/img/conmemoracion/iconoCelular.svg`}
                  alt="Eje Conectando Metas"
                  className="w-30 h-30 ml-2"
                />
              </div>

              <div className="border-y-2 border-r-2 rounded-r-4xl md:rounded-r-full border-muni-verde">
                <p className={`text-base md:text-lg leading-relaxed text-muni-azul text-justify px-5 pt-3 italic ${muni.className}`}>
                  Cada sección de esta plataforma refleja ese camino hacia <b>la ciudad 
                  que seguimos construyendo</b>                 
                </p>
                <p className={`text-base md:text-lg leading-relaxed text-muni-azul text-justify px-5 pb-3 italic ${muni.className}`}>
                  para las próximas generaciones. 
                </p>
              </div>
            </div>                

          </div>

          <div className="my-10">
            <p className={`text-center font-bold mt-15 text-xl md:text-4xl text-muni-azul px-0 md:px-80 italic ${MarcellusRegular.className}`}>“El punto de encuentro de los caminos”</p>
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