import { basePath } from "@/next.config.mjs";
import Link from "next/link";

export default function Cards () {

    return (

    <>
        {/* Cards */}
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-5 mt-10">
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">

                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-t-2xl m-0"/>
                </div>
                
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <Link href="https://grandistritoverde.com.gt/park/parque-ecologico-la-asuncion/" target="_blank" className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5">
                            <p href="" className="text-muni-azul font-extrabold ">Ver mas</p>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">
                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-2xl m-0"/>
                </div>
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5">
                            <a href="" className="text-muni-azul font-extrabold ">Ver mas</a>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">
                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-2xl m-0"/>
                </div>
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5">
                            <a href="" className="text-muni-azul font-extrabold ">Ver mas</a>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">
                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-2xl m-0"/>
                </div>
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2  w-2/5">
                            <a href="" className="text-muni-azul font-extrabold ">Ver mas</a>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">
                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-2xl m-0"/>
                </div>
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5">
                            <a href="" className="text-muni-azul font-extrabold ">Ver mas</a>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white/20 rounded-2xl p-3 max-w-80">
                <div className="w-full h-full">
                    <img src={`${basePath}/img/accionesVerdes/parques/DJI_0624.jpg`} alt=""  className="w-full h-full object-cover rounded-2xl m-0"/>
                </div>
                <div className="mt-2">
                    <div className="flex gap-2 items-center justify-start">
                        <img src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`} alt="" className="max-w-8" />
                        <p className="text-muni-azul font-extrabold">Sistema de parque y áreas verdes</p>
                    </div>
                    <div className="mt-2">
                        <p>Parque Las Victorias</p>
                        <p>21 avenida y 2da calle, zona 1</p>
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="py-1 px-2 rounded-xl bg-muni-verde/40 flex items-center justify-center gap-2 w-2/5">
                            <a href="" className="text-muni-azul font-extrabold ">Ver mas</a>
                            <img src={`${basePath}/img/accionesVerdes/backtotop.svg`} alt="" className="rotate-90 max-w-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
    );

}