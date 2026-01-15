
import BottomMenu from "../components/BottomMenu";
import { basePath } from "@/next.config.mjs";

export default function Acciones() {
    return (
    <main className="min-h-screen bg-250">
        <section className="w-full container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                <div className="flex items-center mt-0 mb-4 gap-3">
                    <div>
                        <img src={`${basePath}/img/acciones/iconoheader.svg`} alt="Icono acciones 250" className="w-20 sm:w-30" />
                    </div>
        
                    <div>
                        <h1 className="text-2xl md:text-3xl text-muni-azul">
                        Acciones
                        </h1>
                        <p className=" text-2xl md:text-3xl tracking-[0.12em] text-muni-azul">
                            <span className="text-muni-azul font-black"> 250</span>
                        </p>
                    </div>
                </div>
        
                <div className="flex items-center">
                    <img src={`${basePath}/img/logo250.svg`} alt="Icono Calendario" className="w-30 sm:w-100" />
                </div>
        
                </div>
            </div>
        </section>


      <BottomMenu />
    </main>
    );
}