
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
  tab,
  setTab,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mt-0 mb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-muni-azul">
          Calendario
          </h1>
          <p className="font-extrabold text-sm md:text-2xl tracking-[0.12em] text-muni-azul">
          de<span className=" text-muni-azul font-extrabold"> eventos</span>
          </p>
        </div>
      </div>

      <div className="w-full rounded-2xl px-4 py-4 md:px-8 md:py-5 bg-white/10">
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-rows-1 md:grid-cols-[1fr_160px_1fr] items-center gap-4 lg:gap-43 w-full">

          {/* MES */}
          <h1 className="text-3xl font-extrabold capitalize text-muni-azul md:min-w-0 md:truncate md:max-w-[420px] lg:max-w-[420px] text-shadow-lg/20">
            {fmtMonthES(month)}
          </h1>

          {/* NAVEGACIÓN */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition text-muni-azul"
            >
              ‹
            </button>

            <button
              onClick={onToday}
              className="h-9 px-3 rounded-lg bg-white/15 hover:bg-white/20 transition text-sm font-semibold text-muni-azul"
            >
              Hoy
            </button>

            <button
              onClick={onNext}
              className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 transition text-muni-azul"
            >
              ›
            </button>

          </div>

          <div className="min-w-0 overflow-hidden md:overflow-visible  md:ml-0">
            <div className="flex w-full p-0 md:p-1 items-center justify-center md:justify-end gap-2">
              {/** botones de ejes */}
              {/* Eje 1 */}
              <button
                onClick={() => setTab("Eje1")}
                className="flex flex-col items-center transition text-muni-azul
                  px-0 py-0 md:py-2 text-xs sm:px-4 sm:text-sm
                "
              >
                <img src={`${basePath}/img/calendario/10.png`} className="w-8 sm:w-10" />
                <span>Impulsando</span>
                <span>oportunidades</span>
              </button>

              {/* Eje 2 */}
              <button
                onClick={() => setTab("Eje2")}
                className="flex flex-col items-center  transition text-muni-azul
                  px-3 py-0 md:py-2 text-xs sm:px-4 sm:text-sm
                  "
              >
                <img src={`${basePath}/img/calendario/11.png`} className="w-8 sm:w-10" />
                <span>Inspirando</span>
                <span>sueños</span>
              </button>

              {/* Eje 3 */}
              <button
                onClick={() => setTab("Eje3")}
                className="flex flex-col items-center  transition text-muni-azul
                  px-3 py-0 md:py-2 text-xs sm:px-4 sm:text-sm
                  "
              >
                <img src={`${basePath}/img/calendario/12.png`} className="w-8 sm:w-10" />
                <span>Conectando</span>
                <span>metas</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
