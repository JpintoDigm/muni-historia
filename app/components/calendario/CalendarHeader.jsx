
import { MontserratBlack3, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";


function fmtMonthES(d) {
  const month = d.toLocaleDateString("es-GT", { month: "long" });
  const year = d.getFullYear();
  return `${month} ${year}`;
}

export default function CalendarHeader({
  month,
  onPrev,
  onNext,
  onToday,
  selectedEjes,
  onToggleEje,  
  tab,
  setTab,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
        <div className="flex items-center mt-0 mb-4 gap-3">
          <div className="">
            <img src={`${basePath}/img/calendario/calendario.svg`} alt="Icono Calendario" className="w-20 sm:w-30" />
          </div>

          <div>
            <h1 className={` ${MontserratLightItalic.className} text-2xl md:text-3xl text-muni-azul`}>
            Calendario
            </h1>
            <p className={` ${MontserratLightItalic.className} text-2xl md:text-3xl tracking-[0.12em] text-muni-azul`}>
            de<span className={` ${MontserratMediumItalic.className}text-muni-azul font-black`}> Eventos</span>
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <img src={`${basePath}/img/logo250.svg`} alt="Icono Calendario" className="w-50 sm:w-100" />
        </div>

      </div>

      <div className="w-full sm:w-2/3">
        <p className={` ${muni.className} text-muni-azul text-justify text-sm sm:text-xl mb-4`}>
          Las actividades que se realizan a lo largo del año conectan a los vecinos con su ciudad, sus espacios públicos y su vida cultural, fortaleciendo la convivencia y el sentido de pertenencia.
        </p>
      </div>

      <div className="w-full rounded-2xl px-4 py-4 md:px-8 md:py-5 bg-white/10">
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-1 md:grid-cols-[1fr_160px_1fr] items-center gap-4 lg:gap-43 w-full">

          {/* MES */}
          
          <div className="flex items-center justify-center gap-2 md:min-w-0 md:truncate md:max-w-105 lg:max-w-105">
            <button
              onClick={onPrev}
              disabled
              className="flex justify-center items-center h-12 w-12 rounded-lg text-muni-azul opacity-40 cursor-not-allowed"
            >
              <img src={`${basePath}/img/backtotop.svg`} alt="Icono mes anterior" className="w-10 -rotate-90" />
            </button>

            <h1 className="text-2xl md:text-3xl font-extrabold capitalize text-muni-azul">
              {fmtMonthES(month)}
            </h1>

            <button
              onClick={onNext}
              disabled
              className="flex justify-center items-center h-12 w-12 rounded-lg text-muni-azul opacity-40 cursor-not-allowed"
            >
              <img src={`${basePath}/img/backtotop.svg`} alt="Icono mes siguiente" className="w-10 rotate-90" />
            </button>
          </div>

          {/* NAVEGACIÓN */}
          <div className="flex items-center justify-center gap-2">

            <button
              onClick={onToday}
              className="py-3 px-8 rounded-xl bg-white/10 hover:bg-white/20  text-xl sm:text-2xl font-semibold text-muni-azul"
            >
              Hoy
            </button>

          </div>

          <div className="min-w-0 overflow-hidden md:overflow-visible  md:ml-0">
            <div className="flex w-full p-0 md:p-1 items-center justify-center md:justify-end gap-1">
              {/** botones de ejes */}
              {/* Eje 1 */}
              <button
                onClick={() => onToggleEje(1)}              
                className={`flex flex-col items-center transition text-muni-azul
                  px-3 py-1 md:py-2 text-xs sm:px-4 sm:text-base hover:bg-white/20 rounded-3xl
                    ${
                      selectedEjes.includes(1)
                        ? "bg-white/50 shadow-md"
                        : "bg-transparent"
                    }

                `}
              >
                <img src={`${basePath}/img/calendario/10.png`} className="w-8 sm:w-10" />
                <span>Impulsando</span>
                <span className="font-bold">Oportunidades</span>
              </button>

              {/* Eje 2 */}
              <button
                onClick={() => onToggleEje(2)}
                className={`flex flex-col items-center  transition text-muni-azul
                  px-3 py-1 md:py-2 text-xs sm:px-4 sm:text-base hover:bg-white/20 rounded-3xl
                  
                    ${
                      selectedEjes.includes(2)
                        ? "bg-white/50 shadow-md"
                        : "bg-transparent"
                    }                  
                  `}
              >
                <img src={`${basePath}/img/calendario/11.png`} className="w-8 sm:w-10" />
                <span>Inspirando</span>
                <span className="font-bold">Sueños</span>
              </button>

              {/* Eje 3 */}
              <button
                onClick={() => onToggleEje(3)}
                className={`flex flex-col items-center transition text-muni-azul
                  px-3 py-1 md:py-2 text-xs sm:px-4 sm:text-base rounded-3xl
                  hover:bg-white/20
                  ${
                    selectedEjes.includes(3)
                      ? "bg-white/50 shadow-md"
                      : "bg-transparent"
                  }
                `}
              >              
                <img src={`${basePath}/img/calendario/12.png`} className="w-8 sm:w-10" />
                <span>Conectando</span>
                <span className="font-bold">Metas</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
