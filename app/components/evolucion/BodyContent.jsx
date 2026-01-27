import { MontserratLightItalic, MontserratMediumItalic, MontserratBlack3, muni } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";
import ImageMapCarousel from "./ImageMapCarousel";

export default function BodyContent(){

    return (
        <>
            {/* Contenido Linea del tiempo */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10">

                    <div className="mt-4 px-0 py-6">
                        <h1 className={`${MontserratMediumItalic.className} text-2xl md:text-3xl font-extrabold text-muni-verde`}>
                        Evolución histórica
                        </h1>
                        <p className={`${MontserratMediumItalic.className} font-extrabold text-lg md:text-3xl tracking-[0.12em]  text-muni-verde`}>
                        de la <span className={`${MontserratMediumItalic.className} text-muni-azul font-extrabold`}>ciudad de Guatemala</span>
                        </p>
                    </div>

                    <div>
                    
                    {/* 1524-1773 */}
                    <div id="1524-1773" className={`${muni.className} relative mb-20 md:mb-0 `}>

                        {/* Linea Horizontal */}

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-10">
                            <div className="w-full  bg-muni-verde h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Fundación y traslado de la ciudad</p>
                            </div>
                        </div>

                        <div className="relative grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2 border-l-4 border-muni-verde">


                            <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">

                                {/* Linea Horizontal */}
                                {/* <div className="w-full bg-muni-verde h-20 flex items-center justify-center sticky top-0 z-10">
                                    <p className="text-center text-muni-azul font-extrabold">Siglo XVI al XVIII</p>
                                </div> */}

                                <div className="pl-2 pt-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                        1524 – 1773
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                        Antecedentes Históricos: Origen y fundación de la ciudad y posteriores traslados
                                    </p>

                                    <p className="mt-3 text-slate-800 leading-relaxed text-justify text-muni-azul">
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
                            </div>

                            <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                hidden md:block
                                absolute
                                top-[640px] md:top-[385px]        // ⬅ mueve arriba/abajo
                                left-[38%]  md:left-[39%]           // ⬅ mueve izquierda/derecha
                                -translate-x-1/4   
                                w-40 md:w-110
                                rotate-45 md:rotate-20
                                pointer-events-none
                                "
                            />

                        </div>     
                    
                    </div>

                    {/* 1776 – 1821 */}
                    <div id="1776-1821" className={`${muni.className} `}>

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            <div className="w-full bg-muni-rosado h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Traslado al Valle de la Ermita</p>
                            </div>  
                        </div>

                        <div className="border-l-4 border-muni-rosado">
                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">

                                {/* Linea Horizontal */}
                                {/* <div className="w-full bg-muni-rosado h-20 flex items-center justify-center">
                                    <p className="text-center text-muni-azul font-extrabold">Siglo XVIII al XIX</p>
                                </div>   */}

                                <div className="pl-2 pt-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1776 – 1821
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Traslado en 1776 al valle de la Ermita
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

                                </div>

                                <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                    absolute
                                    top-[835px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    imageSrc={`${basePath}/img/evolucion/Vista del Valle de la Ermita hacia 1770 (1).png`}
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
                                    nombre="Proyecto para la traza de la ciudad de Guatemala en el Valle de la Ermita. Luis Díez de Navarro, 1775"
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
                                    nombre="Traza de la ciudad de Guatemala y sus pueblos aledaños. Arq. Marcos Ibáñez, 1782"
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
                                    nombre="La ciudad de Guatemala en construcción en la década de 1800"
                                    caption="La ciudad de Guatemala en construcción en la década de 1800"
                                />
                                </div>
                            </div>                 
                        </div>

                    </div>

                    {/* 1821-1871 */}
                    <div id="1821-1871" className={`${muni.className} `}>

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            <div className="w-full bg-muni-pantone h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Independencia y nuevas divisiones territoriales</p>
                            </div>       
                        </div>                 

                        <div className="border-l-4 border-muni-pantone">
                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2 ">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">

                                {/* Linea Horizontal */}
                                {/* <div className="w-full bg-muni-pantone h-20 flex items-center justify-center">
                                    <p className="text-center text-muni-azul font-extrabold">Siglo XIX</p>
                                </div> */}

                                <div className="pl-2 pt-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1821 - 1871
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Independencia de Guatemala en 1821
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
                                </div>

                                <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                    absolute
                                    top-[790px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre="La Plaza Mayor de la ciudad de Guatemala en 1821 Dibujo de la colección particular del Arq. Guillermo Aguirre"
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
                                    nombre="Vista aérea de la ciudad de Guatemala en la década de 1860"
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
                                    nombre="Plano de la ciudad de Guatemala en la década de 1860"
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
                                    nombre="Plaza Mayor en 1870. Al oriente de la Catedral, se encuentra el Mercado Central, comenzado a construir en la década anterior. Dibujo de la colección particular del Arq. Guillermo Aguirre."
                                    caption="Plaza Mayor en 1870. Al oriente de la Catedral, se encuentra el Mercado Central, comenzado a construir en la década anterior."
                                />
                                </div>
                            </div>                         
                        </div>

                    </div>

                    {/* 1871 – 1918 */}
                    <div id="1871-1917" className={`${muni.className} `}>
                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            <div className="w-full bg-[#8BCFD9] h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Período Liberal: ensanches urbanos y modernización</p>
                            </div>       
                        </div>         

                        <div className="border-l-4 border-[#8BCFD9]">
                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">

                                {/* Linea Horizontal */}
                                {/* <div className="w-full bg-[#8BCFD9] h-20 flex items-center justify-center">
                                    <p className="text-center text-muni-azul font-extrabold">Siglo XIX al XX</p>
                                </div>                       */}

                                <div className="pl-2 pt-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1871 – 1917
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Periodo liberal a partir de 1871
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
                                </div>

                                <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                    absolute
                                    top-[780px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre="Crecimiento de la ciudad de Guatemala, época independiente hasta 1871"
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
                                    nombre="Plano de Ingenieros Claudio Urrutia y Emilio Gómez Flores. 1894"
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
                                    nombre="Mapa Ciudad de Guatemala Inicio Siglo XX"
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
                                    imageSrc={`${basePath}/img/evolucion/Elaboración Dirección de Planificación Urbana 1926.png`}
                                    imageAlt="Vista de Kaminaljuyu"
                                    nombre=""
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
                                    nombre="Vista aérea de la Estación Central de Ferrocarriles"
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
                                    nombre="Vista aérea del Teatro Colón, 1900 "
                                    caption="Vista aérea del Teatro Colón, 1900"
                                />
                                </div>

                            </div>                              
                        </div>

                    </div>

                    {/* XX 1917 - 1931 */}
                    <div id="1917-1931" className={`${muni.className} `}>
                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            {/* Linea Horizontal */}
                            <div className="w-full bg-muni-verde h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Terremotos de 1917-1918 y la reconstrucción</p>
                            </div>                               
                        </div>

                        <div className="border-l-4 border-muni-verde">
                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">                  

                                    <div className="pl-2 pt-2 text-muni-azul">
                                        <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                        1917 - 1931
                                        </h2>

                                        <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                        Terremotos de 1917 y 1918 y la reconstrucción posterior del territorio
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
                                </div>

                                <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                    absolute
                                    top-[780px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre="Plano de la ciudad de Guatemala en 1920"
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
                                    nombre="Reconstrucción de la ciudad de Guatemala en 1922"
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
                                    nombre=""
                                    caption="Plano de la Nueva Guatemala de Asunción de la década de los años veinte del siglo XX"
                                />
                                </div>

                            </div>    

                        </div>

                        {/* XX 1931 – 1944 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            {/* Linea Horizontal */}
                            <div className="w-full bg-muni-rosado h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Consolidación de la imagen urbana</p>
                            </div>                               
                        </div>

                        <div className="border-l-4 border-muni-rosado">

                            <div id="1931-1944">
                                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 pl-2 text-muni-azul">

                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1931 – 1944
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Periodo de Ubico impulso a la construcción de obra pública
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
                                    top-[710px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre=""
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
                                    nombre="Colonia Ubico"
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
                                    nombre="Mapa Ciudad de Guatemala Siglo XX"
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
                                    nombre=""
                                    caption="Palacio Nacional, 1942"
                                    />
                                </div>
                                </div>  
                                
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            {/* Linea Horizontal */}
                            <div className="w-full bg-muni-pantone h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>La llegada de la modernidad</p>
                            </div>                               
                        </div>             
                        
                        <div className="border-l-4 border-muni-pantone">                                  
                            {/* XX 1944 – 1954 */}
                            <div id="1944-1954">
                                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 pl-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1944 – 1954
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Revolución de 1944 y la planificación de grandes proyectos urbanos
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
                                    top-[780px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre=""
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
                                    nombre="Plano de la ciudad de Guatemala en la década de 1930"
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
                                    nombre=""
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
                                    nombre="Colonia Centroamérica, 1953"
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
                                    nombre="El Trébol, 1954"
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
                                    nombre="Universidad de San Carlos de Guatemala"
                                    caption="Universidad de San Carlos de Guatemala"
                                    />
                                </div>
                                </div>                 

                            </div>
                        </div> 

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            {/* Linea Horizontal */}
                            <div className="w-full bg-[#8BCFD9] h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Conexiones y expansión hacia el norte y occidente</p>
                            </div>                               
                        </div>                           

                        <div className="border-l-4 border-[#8BCFD9]">    
                            {/* XX 1954 – 1976 */}
                            <div id="1954-1976">
                                <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 pl-2 text-muni-azul">
                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                    1954 – 1976
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                    Nuevas conexiones y la expansión urbana
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
                                    top-[730px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre="Plano de la ciudad de Guatemala en la década de 1970"
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
                                    nombre=""
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
                                    nombre="Vista del Palacio Municipal y del IGSS en la década de 1950"
                                    caption="Vista del Palacio Municipal y del IGSS en la década de 1950"
                                    />
                                </div>

                                </div>     
                                
                            </div>  
                        </div>

                        
                    </div>
                    
                    {/* 1976 – 2000 */}
                    <div id="1976-2000" className={`${muni.className} `}>

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            <div className="w-full bg-muni-verde h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Terremotos de 1976 y nuevo desarrollo</p>
                            </div>     
                        </div>

                        <div className="border-l-4 border-muni-verde">
                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative text-muni-azul">                     
                                    <div className="pl-2 pt-2">
                                        <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                        1976 – 2000
                                        </h2>

                                        <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                        Terremoto de 1976 y el posterior desarrollo del territorio
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
                                </div>

                                <img
                                src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                alt=""
                                className="
                                    absolute
                                    top-[790px] md:top-[63px]        // ⬅ mueve arriba/abajo
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
                                    nombre="Mapa Ciudad de Guatemala Inicio Siglo XXI"
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
                                    nombre="Nimajuyú, 1984"
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
                                    nombre="Plano de la ciudad de Guatemala en la década de 1990"
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
                                    nombre=""
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
                                    nombre=""
                                    caption="Plaza El Obelisco, 1990"
                                />
                                </div>

                            </div>              
                        </div>

                    </div>

                    {/* 2000 - 2017 */}
                    <div id="2000-2017" className={`${muni.className} `}>

                        <div className="grid grid-cols-1 md:grid-cols-2 sticky top-0 z-40">
                            {/* Linea Horizontal */}
                            <div className="w-full bg-muni-rosado h-20 flex items-center justify-center">
                                <p className={`${MontserratMediumItalic.className} text-center text-muni-azul font-bold text-2xl italic`}>Siglo XXI: Expansión Metropolitana</p>
                            </div>                                    
                        </div>                        

                        <div className="border-l-4 border-muni-rosado">

                            <div className="relative grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-2">

                                <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative">                        

                                    <div className="pl-2 pt-2 text-muni-azul">                    

                                    <h2 className={`${MontserratMediumItalic.className} text-3xl font-extrabold text-muni-azul`}>
                                        2000 - 2017
                                    </h2>

                                    <p className={`${MontserratMediumItalic.className} text-2xl italic font-semibold mt-1 text-muni-azul`}>
                                        Una nueva época del inicio del siglo XXI a la actualidad
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
                                </div>

                                <img
                                    src={`${basePath}/img/evolucion/lineaPunteada.png`}
                                    alt=""
                                    className="
                                    absolute
                                    top-[770px] md:top-[63px]        // ⬅ mueve arriba/abajo
                                    left-[38%] md:left-[55%]           // ⬅ mueve izquierda/derecha
                                    -translate-x-1/4   
                                    w-40 md:w-120
                                    rotate-45
                                    pointer-events-none
                                    "
                                />

                                <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2">
                                    <ImageMapCarousel
                                    imageSrc={`${basePath}/img/evolucion/Conjuntodecada2000.png`}
                                    imageAlt="Vista de Kaminaljuyu"
                                    nombre=""
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
                                nombre="Plano de la ciudad de Guatemala con municipios aledaños entre el año 2000 y 2017"
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
                                nombre="Mapa del municipio de Guatemala con la actual delimitación de zonas"
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
                                nombre=""
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
                                nombre="Paseo de la Sexta, contemporáneo"
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
                                nombre="Estaciones de Transmetro en la 18 calle y su vinculación con el Centro Cívico"
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
                                nombre="Avenida Reforma y zona 10, 2017"
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
                                hidden md:block             
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
                                nombre=""
                                caption="7ª avenida, zona 4, 2015"
                                />
                            </div>
                            </div>                             
                        </div>  

                    </div>

                    </div>
                </div>
            </section>
        </>
    )
};