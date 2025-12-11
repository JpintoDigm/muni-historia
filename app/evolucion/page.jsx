// app/evolucion/page.jsx
import Header from "@/app/components/Header";
import Titulo from "@/app/components/evolucion/Titulo";
import TimeLineItem from "@/app/components/evolucion/TimeLineItem";
import ExampleMap from "../components/arcgis/basemap/BaseMap"

import { ListTimeLine} from "../data/ListTimeLine"
import { MontserratMediumItalic } from "../layout";
import { MontserratLightItalic } from "../layout";
import { basePath } from "@/next.config.mjs";
import { ListCenturyCard } from "../data/ListCenturyCard";
import Link from "next/link";
import BottomMenu from "../components/BottomMenu";
import ImageMapCarousel from "../components/evolucion/ImageMapCarousel";


export default function EvolucionPage() {


  
  return (
    <main className="min-h-screen bg-250">
        <section className="w-full">
          {/* <Header /> */}
          <div className="mx-auto max-w-6xl px-4 py-10">

            <Titulo />

            {/* Linea Tiempo */}


            <div className="w-full flex flex-col items-center mt-20">

              <div className="flex flex-wrap items-center justify-center  gap-2 relative">

                <Link href="#1524-1773" className="flex flex-col items-center animate-pulse-slow">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVI – SIGLO XVIII
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1524 – 1773</p>
                  </div>
                </Link>


                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                <Link href="#1776-1821" className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#EE6FAF] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVIII – SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XVII–XVIII</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1776 – 1821</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XIX */}
                <Link href="#1821-1871" className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#37B268] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XIX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1821-1871</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XX */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BCFD9] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1917–2000</p>
                  </div>
                </div>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-11" />

                {/* SIGLO XXI */}
                <div className="flex flex-col items-center">
                  <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#D4DE52] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XXI
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-[150px]">
                    {/* <p className="text-2xl font-extrabold text-black">XXI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>2004–2024</p>
                  </div>
                </div>

              </div>
              
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

        <section className="w-full bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">

            <div className="mt-4 px-0 py-6">
              <h1 className={`${MontserratMediumItalic.className} text-2xl md:text-3xl font-extrabold text-muni-verde`}>
              EVOLUCIÓN HISTÓRICA
              </h1>
              <p className={`${MontserratLightItalic.className} text-sm md:text-3xl tracking-[0.12em] uppercase text-muni-verde`}>
              de la <span className={`${MontserratMediumItalic.className} text-muni-azul font-extrabold`}>CIUDAD DE GUATEMALA</span>
              </p>
            </div>

            <div>
              {/* {ListTimeLine.map((item, index) => (
                <TimeLineItem
                  key={index}
                  id={item.id}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  webmapId={item.webmapId}
                  images={item.images}
                  lineVariant={item.lineVariant}
                  insights={item.insights} 
                />
              ))} */}
              
              {/* 1524-1773 */}
              <div id="1524-1773">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className="text-3xl font-extrabold text-muni-azul">
                      1524 – 1773
                    </h2>

                    <p className="text-xl italic font-semibold mt-1 text-black">
                      ANTECEDENTES HISTÓRICOS: ORIGEN Y FUNDACIÓN DE LA CIUDAD Y POSTERIORES TRASLADOS
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed">
                      El terremoto impulsa la expansión informal, impulsa políticas de planificación, crea dinámicas metropolitanas y sienta bases para procesos de revitalización del Centro Histórico.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Reconfiguración del territorio por campamentos.</li>
                        <li>Crecimiento informal acelerado.</li>
                        <li>Nuevos planes metropolitanos.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-120
                      pointer-events-none
                    "
                  />


                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de Kaminaljuyu en el siglo III D.C.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>


                </div>     
              
              </div>

              {/* 1776 – 1821 */}
              <div id="1776-1821">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className="text-3xl font-extrabold text-muni-azul">
                      1776 – 1821
                    </h2>

                    <p className="text-xl italic font-semibold mt-1 text-black">
                      TRASLADO EN 1776 AL VALLE DE LA ERMITA
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed">
                      El valle fue seleccionado por sus condiciones topográficas y disponibilidad de agua. La ciudad se diseñó desde cero con una cuadrícula regular, siguiendo lineamientos hispanoamericanos. Se consolidan cuarteles y primeras divisiones administrativas.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Elección estratégica del sitio.</li>
                        <li>Diseño desde un enfoque técnico y planificado.</li>
                        <li>Ordenamiento inicial basado en cuadras regulares.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[63px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de Kaminaljuyu en el siglo III D.C.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      -top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[43%]
                      -translate-x-1/2
                      w-64 md:w-120
                      -rotate-82
                      pointer-events-none
                      "
                    />

                    {/* Línea punteada derecha */}
                    <img
                      src={`${basePath}/img/evolucion/lineaPunteada.png`}
                      alt="Línea punteada derecha"
                      className="
                        absolute
                        z-0
                        top-1/1
                        right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-[-98]             /* La giramos verticalmente */
                        w-64 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista del Valle de la Ermita hacia 1770-min.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Pueblo de Jocotenango, Nueva Guatemala, 1800.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      -top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[42%]
                      -translate-x-1/2
                      w-64 md:w-120
                      -rotate-82
                      pointer-events-none
                      "
                    />

                    {/* Línea punteada derecha */}
                    <img
                      src={`${basePath}/img/evolucion/lineaPunteada.png`}
                      alt="Línea punteada derecha"
                      className="
                        absolute
                        z-0
                        top-1/1
                        right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-[-98]             /* La giramos verticalmente */
                        w-64 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Proyecto para la traza de la ciudad de Guatemala en el Valle de la Ermita. Luis Díez de Navarro, 1775.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>
                </div>         

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Traza de la ciudad de Guatemala y sus pueblos aledaños. Arq. Marcos Ibáñez, 1782.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      -top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[42%]
                      -translate-x-1/2
                      w-64 md:w-120
                      -rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/La ciudad de Guatemala en construcción en la década de 1800.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>
                </div>                 

              </div>

              {/* 1821-1871 */}
              <div id="1821-1871">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className="text-3xl font-extrabold text-muni-azul">
                      1821-1871
                    </h2>

                    <p className="text-xl italic font-semibold mt-1 text-black">
                      INDEPENDENCIA DE GUATEMALA EN 1821
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed">
                      La independencia provoca cambios políticos moderados. Surge la división en cantones, crece el territorio urbano y se asientan estructuras de control territorial. La ciudad mantiene rasgos coloniales mientras avanza hacia el nordeste y sur.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Reconfiguración administrativa (creación del departamento).</li>
                        <li>Primeros cantones formales.</li>
                        <li>Expansión territorial sin ruptura del carácter colonial.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[63px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/La Plaza Mayor de la ciudad de Guatemala en 1821 Dibujo de la colección particular del Arq. Guillermo Aguirre.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      -top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[43%]
                      -translate-x-1/2
                      w-64 md:w-120
                      -rotate-82
                      pointer-events-none
                      "
                    />

                    {/* Línea punteada derecha */}
                    <img
                      src={`${basePath}/img/evolucion/lineaPunteada.png`}
                      alt="Línea punteada derecha"
                      className="
                        absolute
                        z-0
                        top-1/1
                        right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-[-98]             /* La giramos verticalmente */
                        w-64 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la ciudad de Guatemala en la década de 1860.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en la década de 1860.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      -top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[42%]
                      -translate-x-1/2
                      w-64 md:w-120
                      -rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plaza Mayor en 1870. Al oriente de la Catedral, se encuentra el Mercado Central, comenzado a construir en la década anterior. Dibujo de la colección particular del Arq. Guillermo Aguirre.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                    />
                  </div>
                </div>                         

              </div>

            </div>



          </div>
        </section>

        <BottomMenu />
    </main>
  );
}
