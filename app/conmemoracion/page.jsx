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