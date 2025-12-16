
import { basePath } from "@/next.config.mjs";

function fmtMonthES(d) {
  return d.toLocaleDateString("es-GT", { month: "long", year: "numeric" });
}

export default function CalendarHeader({
  month,
  onPrev,
  onNext,
  onToday,
  tab,
  setTab,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mt-0 mb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-muni-azul">
          CALENDARIO
          </h1>
          <p className="font-extrabold text-sm md:text-2xl tracking-[0.12em] uppercase text-muni-azul">
          de<span className=" text-muni-azul font-extrabold"> EVENTOS</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-1 md:grid-cols-[auto_auto_1fr] items-center gap-4 lg:gap-43 w-full">

        {/* MES */}
        <h1 className="text-3xl font-extrabold capitalize text-white">
          {fmtMonthES(month)}
        </h1>

        {/* NAVEGACIÓN */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition"
          >
            ‹
          </button>

          <button
            onClick={onToday}
            className="h-9 px-3 rounded-lg bg-white/15 hover:bg-white/20 transition text-sm font-semibold"
          >
            Hoy
          </button>

          <button
            onClick={onNext}
            className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition"
          >
            ›
          </button>
        </div>

        {/* TABS (OCUPA TODO EL RESTO DEL ANCHO) */}
        <div className="min-w-0 overflow-x-auto">
          <div className="flex w-max  bg-white/10 p-1 whitespace-nowrap">
            {/** botones de ejes */}
            {/* Eje 1 */}
            <button
              onClick={() => setTab("Eje1")}
              className="flex flex-col items-center  transition text-muni-azul
                px-3 py-2 text-xs sm:px-4 sm:text-sm
               bg-white/10"
            >
              <img src={`${basePath}/img/calendario/10.png`} className="w-8 sm:w-10" />
              <span>Impulsando</span>
              <span>oportunidades</span>
            </button>

            {/* Eje 2 */}
            <button
              onClick={() => setTab("Eje2")}
              className="flex flex-col items-center  transition text-muni-azul
                px-3 py-2 text-xs sm:px-4 sm:text-sm
                bg-white/10"
            >
              <img src={`${basePath}/img/calendario/11.png`} className="w-8 sm:w-10" />
              <span>Inspirando</span>
              <span>sueños</span>
            </button>

            {/* Eje 3 */}
            <button
              onClick={() => setTab("Eje3")}
              className="flex flex-col items-center  transition text-muni-azul
                px-3 py-2 text-xs sm:px-4 sm:text-sm
                bg-white/10"
            >
              <img src={`${basePath}/img/calendario/12.png`} className="w-8 sm:w-10" />
              <span>Conectando</span>
              <span>metas</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
