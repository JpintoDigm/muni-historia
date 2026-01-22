import { basePath } from "@/next.config.mjs";

export default function Filters () {

    return (

    <>
    
        {/* Filtros */}
        <div className="w-auto grid  md:flex md:flex-row items-center justify-between">
            <div className="flex justify-center order-2 md:order-1">
                <button className="flex justify-center py-2 px-3 bg-white/20 rounded-2xl cursor-pointer gap-2 mt-2 md:mt-0">
                    <p className="text-muni-azul font-extrabold">Zona</p>
                    <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-180 max-w-5" />
                </button>
            </div>

            <div className="flex flex-col md:flex-row  gap-2 order-1 md:order-2">
                <button className="flex items-center justify-start md:justify-center gap-1 bg-white/20 rounded-2xl py-2 px-3 cursor-pointer">
                    <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-10" />
                    <p className="text-muni-azul font-extrabold">Todos los parques</p>
                </button>
                <button className="flex items-center justify-start md:justify-center gap-1 bg-white/20 rounded-2xl py-2 px-3 cursor-pointer">
                    <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-10" />
                    <p className="text-muni-azul font-extrabold">Parque Ecológico</p>
                </button>
                <button className="flex items-center justify-start md:justify-center gap-1 bg-white/20 rounded-2xl py-2 px-3 cursor-pointer">
                    <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-10" />
                    <p className="text-muni-azul font-extrabold">Sistemas de parques y áreas verdes</p>
                </button>
            </div>
        </div>
    </>
    );

}
