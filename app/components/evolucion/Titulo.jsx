import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { MontserratLightItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";



// components/Header.jsx
export default function Titulo() {
  return (
    <div className={`${MontserratMediumItalic.className}flex flex-col gap-0 `}>
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-3">

          <div className="flex  justify-center items-center">
            <img src={`${basePath}/img/evolucion/icons/iconMap.svg`} alt="Icono acciones 250" className="w-20 sm:w-30" />
            <p className=" text-2xl md:text-3xl tracking-[0.12em] text-muni-azul">
              Mapa interactivo y visualización 3D
            </p>    
          </div>

          <div className="flex items-center">
            <img src={`${basePath}/img/logo250.svg`} alt="Icono Calendario" className="w-50 sm:w-100" />
          </div>

      </div>

      <div className="flex items-center mt-10">
        <h1 className="text-2xl md:text-3xl text-muni-azul">
          Historia
          <p className=" text-2xl md:text-3xl tracking-[0.12em] text-muni-azul">
            de la<span className="text-muni-azul font-black"> Ciudad de Guatemala</span>
          </p>
        </h1>
      </div>        
    </div>
  );
}
