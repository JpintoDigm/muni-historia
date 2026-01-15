import { basePath } from "@/next.config.mjs";


export default function ListImageMain() {

    return (
        <div className="flex items-center justify-center gap-6 text-xl opacity-100">
        <img src={`${basePath}/img/10.png`} alt="Logo1" width={50} height={50} className="rounded-3xl object-cover"/>
        <span className="text-muni-azul text-3xl">•</span>
        <img src={`${basePath}/img/11.png`} alt="Descripción" width={50} height={50} className="rounded-3xl object-cover"/>
        <span className="text-muni-azul text-3xl">•</span>
        <img src={`${basePath}/img/12.png`} alt="Descripción" width={50} height={50} className="rounded-3xl object-cover"/>
        </div>
    );

}