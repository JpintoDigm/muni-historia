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

import BottomMenu from "../components/BottomMenu";
import ImageMapCarousel from "../components/evolucion/ImageMapCarousel";
import Link from "next/link";


export default function EvolucionPage() {


  
  return (
    <main className="min-h-screen">
        <section className="w-full header-250">
          {/* <Header /> */}
          <div className="mx-auto max-w-6xl px-4 py-10">

            <Titulo />

            {/* Linea Tiempo */}


            <div className="w-full flex flex-col items-center mt-6 md:mt-20">

              <div className="w-full flex flex-wrap justify-center gap-2 relative">

                <Link href="#1524-1773" className="flex flex-col items-center animate-pulse-slow w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVI – SIGLO XVIII
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XVI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1524 – 1773</p>
                  </div>
                </Link>


                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-23" />

                <Link href="#1776-1821" className="flex flex-col items-center animate-pulse-slow w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#EE6FAF] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XVIII – SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XVII–XVIII</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1776 – 1821</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-23" />

                {/* SIGLO XIX */} 
                <Link href="#1821-1871" className="flex flex-col items-center justify-between animate-pulse-slow mt-1 md:mt-auto w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#37B268] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XIX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XIX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1821-1871</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-23" />

                {/* SIGLO XIX – SIGLO XX */}
                <Link href="#1871–1918" className="flex flex-col items-center animate-pulse-slow mt-1 md:mt-auto w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#8BCFD9] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XIX – SIGLO XX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XX</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1871 – 1918</p>
                  </div>
                </Link>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-23" />

                {/* SIGLO XX */}
                <Link href="#1917-1931" className="flex flex-col items-center justify-between animate-pulse-slow mt-1 md:mt-auto w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XX
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XXI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1917 – 1931</p>
                  </div>
                </Link> 


                <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                </div>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="md:invisible hidden md:inline-block h-10 opacity-80 mt-25 rotate-180" />

                <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                </div>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="md:invisible hidden md:inline-block h-10 opacity-80 mt-25 rotate-180" />

                <div className="hidden md:block flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">

                </div>

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="md:invisible hidden md:inline-block h-10 opacity-80 mt-25 rotate-180" />


                {/* SIGLO XXI */}
                <Link href="#2000-2017" className="flex flex-col items-end justify-end animate-pulse-slow mt-1 md:mt-2 w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#37B268] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XXI
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XXI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>2000 - 2017</p>
                  </div>
                </Link>                

                <img src={`${basePath}/img/flechas.png`} alt="Flecha" width={65} height={40} className="hidden md:inline-block h-10 opacity-80 mt-25 rotate-180" />

                {/* SIGLO XX – SIGLO XXI*/}
                <Link href="#1976–2000" className="flex flex-col items-end animate-pulse-slow mt-1 md:mt-2 w-35">
                  <div className={`${MontserratMediumItalic.className} flex items-center justify-center h-15 w-full text-center px-6 py-2 rounded-full bg-[#EE6FAF] text-muni-azul font-bold text-sm shadow`}>
                    SIGLO XX – SIGLO XXI
                  </div>
                  <div className="mt-[10px] bg-white px-2 py-8 rounded-xl shadow text-center w-full">
                    {/* <p className="text-2xl font-extrabold text-black">XXI</p> */}
                    <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>1976 – 2000</p>
                  </div>
                </Link>


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
              <p className={`${MontserratMediumItalic.className} font-extrabold text-sm md:text-3xl tracking-[0.12em] uppercase text-muni-verde`}>
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
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1524 – 1773
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      ANTECEDENTES HISTÓRICOS: ORIGEN Y FUNDACIÓN DE LA CIUDAD Y POSTERIORES TRASLADOS
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      El terremoto impulsa la expansión informal, impulsa políticas de planificación, crea dinámicas metropolitanas y sienta bases para procesos de revitalización del Centro Histórico.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

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
                      top-[630px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%]  md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45 md:rotate-none
                      pointer-events-none
                    "
                  />


                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de Kaminaljuyu en el siglo III D.C.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      nombre="Vista aérea de Kaminaljuyu en el siglo III D.C."
                      caption="Vista aérea de Kaminaljuyu en el siglo III D.C."
                    />
                  </div>


                </div>     
              
              </div>

              {/* 1776 – 1821 */}
              <div id="1776-1821">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1776 – 1821
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      TRASLADO EN 1776 AL VALLE DE LA ERMITA
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      El valle fue seleccionado por sus condiciones topográficas y disponibilidad de agua. La ciudad se diseñó desde cero con una cuadrícula regular, siguiendo lineamientos hispanoamericanos. Se consolidan cuarteles y primeras divisiones administrativas.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

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
                      top-[685px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de Kaminaljuyu en el siglo III D.C.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      nombre="Vista aérea de Kaminaljuyu en el siglo III D.C"
                      caption="Vista aérea de Kaminaljuyu en el siglo III D.C."
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6            /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista del Valle de la Ermita hacia 1770.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      caption="Vista del Valle de la Ermita hacia 1770"
                      nombre="Vista del Valle de la Ermita hacia 1770"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[3675px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Pueblo de Jocotenango, Nueva Guatemala, 1800.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      nombre="Pueblo de Jocotenango, Nueva Guatemala, 1800"
                      caption="Pueblo de Jocotenango, Nueva Guatemala, 1800"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Proyecto para la traza de la ciudad de Guatemala en el Valle de la Ermita. Luis Díez de Navarro, 1775.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Proyecto para la traza de la ciudad de Guatemala en el Valle de la Ermita. Luis Díez de Navarro, 1775"
                    />
                  </div>
                </div>         

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Traza de la ciudad de Guatemala y sus pueblos aledaños. Arq. Marcos Ibáñez, 1782.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Traza de la ciudad de Guatemala y sus pueblos aledaños. Arq. Marcos Ibáñez, 1782"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="                  
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/La ciudad de Guatemala en construcción en la década de 1800.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="La ciudad d e Guatemala en construcción en la década de 1800"
                    />
                  </div>
                </div>                 

              </div>

              {/* 1821-1871 */}
              <div id="1821-1871">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1821 - 1871
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      INDEPENDENCIA DE GUATEMALA EN 1821
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      La independencia provoca cambios políticos moderados. Surge la división en cantones, crece el territorio urbano y se asientan estructuras de control territorial. La ciudad mantiene rasgos coloniales mientras avanza hacia el nordeste y sur.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

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
                      top-[685px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/La Plaza Mayor de la ciudad de Guatemala en 1821 Dibujo de la colección particular del Arq. Guillermo Aguirre.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="La Plaza Mayor de la ciudad de Guatemala en 1821 Dibujo de la colección particular del Arq. Guillermo Aguirre."
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la ciudad de Guatemala en la década de 1860.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea de la ciudad de Guatemala en la década de 1860"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en la década de 1860.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala en la década de 1860"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
          
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plaza Mayor en 1870. Al oriente de la Catedral.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plaza Mayor en 1870. Al oriente de la Catedral, se encuentra el Mercado Central, comenzado a construir en la década anterior."
                    />
                  </div>
                </div>                         

              </div>

              {/* 1871 – 1918 */}
              <div id="1871–1918">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1871 – 1918
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      PERIODO LIBERAL A PARTIR DE 1871 
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      Transformaciones urbanas clave: llegada del ferrocarril, nuevos suburbios, modelos de vivienda norteamericanos y bulevares que configuran la expansión al sur.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Modernización de infraestructura.</li>
                        <li>Formación de cantones y barrios residenciales.</li>
                        <li>Desplazamiento de élites a Tívoli, Santa Clara y Guadalupe.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[610px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Crecimiento de la ciudad de Guatemala, época independiente hasta 1871.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Crecimiento de la ciudad de Guatemala, época independiente hasta 1871"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-25 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6            /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de Ingenieros Claudio Urrutia y Emilio Gómez Flores. 1894.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de Ingenieros Claudio Urrutia y Emilio Gómez Flores. 1894"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[3675px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea del proyecto de los Ingenieros Urrutia y Gómez Flores, 1894.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea del proyecto de los Ingenieros Urrutia y Gómez Flores, 1894"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Mapa Ciudad de Guatemala Inicio Siglo XX.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Mapa Ciudad de Guatemala Inicio Siglo XX"
                    />
                  </div>
                </div>         

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Elaboración Dirección de Planificación Urbana basado en el mapa del libro_ Monografía del Departamento de Guatemala, J. Antonio Villacorta, Tipografía Nacional, 1926.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Elaboración Dirección de Planificación Urbana basado en el mapa del libro: Monografía del Departamento de Guatemala, J. Antonio Villacorta, 1926"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="                  
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la Estación Central de Ferrocarriles.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea de la Estación Central de Ferrocarriles"
                    />
                  </div>
                </div>    

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea del Teatro Colón, 1900.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea del Teatro Colón, 1900"
                    />
                  </div>

                </div>                              

              </div>

              {/* XX 1917 - 1931 */}
              <div id="1917-1931">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1917 - 1931
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      TERREMOTOS DE 1917 Y 1918 Y LA RECONSTRUCCIÓN POSTERIOR DEL TERRITORIO
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      El terremoto destruye infraestructura clave, provoca campamentos temporales y acelera nuevas trazas viales, barrios y reglamentos de construcción.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Destrucción generalizada y reorganización urbana.</li>
                        <li>Primer Reglamento Municipal de Construcción.</li>
                        <li>Expansión hacia áreas planas fuera del damero original.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[685px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en 1920.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala en 1920"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Reconstrucción de la ciudad de Guatemala en 1922.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Reconstrucción de la ciudad de Guatemala en 1922"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la Nueva Guatemala de Asunción de la década de los años veinte del siglo XX.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la Nueva Guatemala de Asunción de la década de los años veinte del siglo XX"
                    />
                  </div>

                </div>     
                   
              </div>
              
              {/* XX 1931 – 1944 */}
              <div id="">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1931 – 1944
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      PERIODO DE UBICO IMPULSO A LA CONSTRUCCIÓN DE OBRA PÚBLICA
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      Período caracterizado por arquitectura monumental, obras públicas, expansión vial y nuevos proyectos institucionales.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Obras estatales emblemáticas</li>
                        <li>Avance del aeropuerto y nuevas vías.</li>
                        <li>Primeros proyectos de vivienda popular.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[590px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Expansión del territorio hacia el sur_ hoy zona 9 y aeropuerto en 1932.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Expansión del territorio hacia el sur: hoy zona 9 y aeropuerto en 1932"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-30 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[755px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Colonia Ubico.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Colonia Ubico"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Mapa Ciudad de Guatemala Siglo XX.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Mapa Ciudad de Guatemala Siglo XX"
                    />
                  </div>

                </div>     


                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
          
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Palacio Nacional, 1942.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Palacio Nacional, 1942"
                    />
                  </div>
                </div>  
                   
              </div>

              {/* XX 1944 – 1954 */}
              <div id="">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1944 – 1954
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      REVOLUCIÓN DE 1944 Y LA PLANIFICACIÓN DE GRANDES PROYECTOS URBANOS
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      Cambios normativos clave: creación de zonas, institucionalización de la planificación y crecimiento hacia periferias.
                    </p>

                    <div className="my-5  border-slate-300"></div>
                
                    <p className="font-bold">Acontecimientos Relevantes</p>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Nacimiento del concepto de zonificación.</li>
                        <li>Migraciones internas y nuevos asentamientos.</li>
                        <li>Proyectos urbanos de gran escala.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[615px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la ciudad de Guatemala en la década de 1950.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea de la ciudad de Guatemala en la década de 1950"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-30 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6            /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en la década de 1930.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala en la década de 1930"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[3675px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Esquema de definición de zonas urbanas de la ciudad de Guatemala.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Esquema de definición de zonas urbanas de la ciudad de Guatemala"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Colonia Centroamérica, 1953.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Colonia Centroamérica, 1953"
                    />
                  </div>
                </div>         

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/El Trébol, 1954.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="El Trébol, 1954"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="                  
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Universidad de San Carlos de Guatemala.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Universidad de San Carlos de Guatemala"
                    />
                  </div>
                </div>                 

              </div>

              {/* XX 1954 – 1976 */}
              <div id="">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1954 – 1976
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      NUEVAS CONEXIONES Y LA EXPANSIÓN URBANA
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      Auge de carreteras hacia Atlántico y El Salvador, surgimiento de barrios periféricos, crecimiento del EDOM y urbanización metropolitana.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>
                   

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Expansión vial como factor decisivo.</li>
                        <li>Transformación metropolitana.</li>
                        <li>Asentamientos precarios en crecimiento.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[590px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en la década de 1970.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala en la década de 1970"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-30 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la ciudad de Guatemala en la década de 1970, previo terremoto.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea de la ciudad de Guatemala en la década de 1970, previo terremoto"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      absolute
                      top-[180px]        // ⬅ mueve arriba/abajo
                      left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-64 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista del Palacio Municipal y del IGSS en la década de 1950.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista del Palacio Municipal y del IGSS en la década de 1950"
                    />
                  </div>

                </div>     
                   
              </div>

              {/* 1976 – 2000 */}
              <div id="1976–2000">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      1976 – 2000
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      TERREMOTO DE 1976 Y EL POSTERIOR DESARROLLO DEL TERRITORIO
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      El terremoto impulsa la expansión informal, impulsa políticas de planificación, crea dinámicas metropolitanas y sienta bases para procesos de revitalización del Centro Histórico
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

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
                      top-[615px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Mapa Ciudad de Guatemala Inicio Siglo XXI.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Mapa Ciudad de Guatemala Inicio Siglo XXI"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-20 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6            /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Nimajuyú, 1984.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Nimajuyú, 1984"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[3675px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala en la década de 1990.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala en la década de 1990"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Vista aérea de la ciudad de Guatemala en la década de 1990.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Vista aérea de la ciudad de Guatemala en la década de 1990"
                    />
                  </div>
                </div>         

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plaza El Obelisco, 1990.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plaza El Obelisco, 1990"
                    />
                  </div>

                </div>              

              </div>

              {/* 2000 - 2017 */}
              <div id="2000-2017">
                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                  <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1">
                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                      2000 - 2017
                    </h2>

                    <p className={`${MontserratMediumItalic.className} text-xl italic font-semibold mt-1 text-black`}>
                      UNA NUEVA ÉPOCA DEL INICIO DEL SIGLO XXI A LA ACTUALIDAD
                    </p>

                    <p className="mt-3 text-slate-800 leading-relaxed text-justify">
                      Inicio del desarrollo vertical, implementación del POT, creación del Transmetro, recuperación del espacio público y proyectos estratégicos para consolidación urbana.
                    </p>

                    <div className="my-5  border-slate-300"></div>

                    <p className="font-bold">Acontecimientos Relevantes</p>

                    <ul className="mt-2 space-y-1 list-disc ml-6 text-slate-700 leading-relaxed">
                        <li>Ordenamiento Territorial como eje rector</li>
                        <li>Movilidad masiva</li>
                        <li>Proyectos metropolitanos estratégicos.</li>
                    </ul>                  
                  </div>

                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      top-[610px] md:top-[63px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-120
                      rotate-45
                      pointer-events-none
                    "
                  />

                  <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Conjunto actual – ciudad de Guatemala, década 2000 a la actualidad.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Conjunto actual – ciudad de Guatemala, década 2000 a la actualidad"
                    />
                  </div>

                </div>

                {/* Izquierda */}
                <div className="relative flex flex-row mt-25 md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[210px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[43%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6            /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Plano de la ciudad de Guatemala con municipios aledaños entre el año 2000 y 2017.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Plano de la ciudad de Guatemala con municipios aledaños entre el año 2000 y 2017"
                    />
                  </div>
                </div>       

                {/* Derecha */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[3675px] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 my-35 md:my-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Mapa del municipio de Guatemala con la anterior delimitación de zonas.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Mapa del municipio de Guatemala con la anterior delimitación de zonas"
                    />
                  </div>

                </div>     

                {/* Izquierda */}
                <div className="relative flex flex-row my-[-18] md:my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Mapa del municipio de Guatemala con la actual delimitación de zonas.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Mapa del municipio de Guatemala con la actual delimitación de zonas"
                    />
                  </div>
                </div>         

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Paseo de la Sexta, contemporáneo.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Paseo de la Sexta, contemporáneo"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="                  
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
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
                        top-[730px] md:top-1/1
                        right-[130px] md:right-[80px]         /* Ajusta según el diseño */
                        -translate-y-1/2
                        rotate-70 md:rotate-6             /* La giramos verticalmente */
                        w-40 md:w-120
                        pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Estaciones de Transmetro en la 18 calle y su vinculación con el Centro Cívico.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Estaciones de Transmetro en la 18 calle y su vinculación con el Centro Cívico"
                    />
                  </div>
                </div>    

                {/* Derecha esta de mas */}
                <div className="flex flex-row my-5">
                  <div className="basis-0 md:basis-125">
                  </div>
                    
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="
                      hidden
                      top-[495%] md:top-[180px]        // ⬅ mueve arriba/abajo
                      left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                      -translate-x-1/4   
                      w-40 md:w-80
                      rotate-70 md:rotate-none
                      pointer-events-none
                    "
                  />

                  <div className="w-full h-64 md:h-80 basis-138 mb-35 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/Avenida Reforma y zona 10, 2017.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="Avenida Reforma y zona 10, 2017"
                    />
                  </div>

                </div> 

                {/* Izquierda */}
                <div className="relative flex flex-row my-5">
                  <div className="basis-0 md:basis-50">
                  </div>

                  {/* Linea Punteada Arriba */}
                  <img
                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                    alt=""
                    className="                  
                      absolute
                      z-0                /* ⬅ Importante: al frente */
                      top-[250px] md:-top-[230px]           /* ⬅ Ajusta según necesites */
                      left-[55%] md:left-[42%]
                      -translate-x-1/2
                      w-40 md:w-120
                      -rotate-115 md:-rotate-82
                      pointer-events-none
                      "
                    />

                  <div className="w-full h-64 md:h-80 basis-138 relative z-10 mb-30 md:mb-0">
                    <ImageMapCarousel
                      imageSrc={`${basePath}/img/evolucion/7ª avenida, zona 4, 2015.png`}
                      imageAlt="Vista de Kaminaljuyu"
                      webmapId="c5a385fcdc5e460f8e42c1f089d8e530"
                      caption="7ª avenida, zona 4, 2015"
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
