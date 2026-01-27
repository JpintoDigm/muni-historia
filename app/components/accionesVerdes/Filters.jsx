import { basePath } from "@/next.config.mjs";

export default function Filters({
  zonas,
  tipos,
  selectedZona,
  selectedTipo,
  onSelectZona,
  onSelectTipo,
}) {
  return (
    <>
      {/* Filtros */}
      <div className="w-auto grid md:flex md:flex-row items-center justify-between">
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative">
            <select
              value={selectedZona}
              onChange={(event) => onSelectZona(event.target.value)}
              className="appearance-none flex justify-center py-2 pl-3 pr-10 bg-white/20 rounded-2xl cursor-pointer gap-2 mt-2 md:mt-0 text-muni-azul font-extrabold"
            >
              <option value="all">Todas las zonas</option>
              {zonas.map((zona) => (
                <option key={zona} value={zona}>
                  Zona {zona}
                </option>
              ))}
            </select>
            <img
              src={`${basePath}/img/accionesVerdes/backtotop.svg`}
              alt=""
              className="pointer-events-none rotate-180 max-w-5 absolute right-3 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 order-1 md:order-2">
          <button
            type="button"
            onClick={() => onSelectTipo("all")}
            className={`flex items-center justify-start md:justify-center gap-1 rounded-2xl py-2 px-3 cursor-pointer ${
              selectedTipo === "all" ? "bg-white/40" : "bg-white/20"
            }`}
          >
            <img
              src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
              alt=""
              className="max-w-10"
            />
            <p className="text-muni-azul font-extrabold">Todos los parques</p>
          </button>
          {tipos.map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() => onSelectTipo(tipo)}
              className={`flex items-center justify-start md:justify-center gap-1 rounded-2xl py-2 px-3 cursor-pointer ${
                selectedTipo === tipo ? "bg-white/40" : "bg-white/20"
              }`}
            >
              <img
                src={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
                alt=""
                className="max-w-10"
              />
              <p className="text-muni-azul font-extrabold text-start">
                {tipo}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
