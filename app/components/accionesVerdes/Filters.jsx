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
    <div className="w-full">
      {/* Contenedor general */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Select Zona */}
        <div className="w-full md:w-auto">
          <div className="relative">
            <select
              value={selectedZona}
              onChange={(event) => onSelectZona(event.target.value)}
              className="
                w-full md:w-auto
                appearance-none
                rounded-2xl
                bg-white/20
                px-4 py-3 md:py-2
                pr-10
                text-muni-azul font-extrabold
                outline-none
                focus-visible:ring-2 focus-visible:ring-white/50
              "
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
              className="pointer-events-none rotate-180 w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 opacity-90"
            />
          </div>
        </div>

        {/* Chips / Botones tipo */}
        <div
          className="
            w-full
            flex gap-2
            overflow-x-auto
            pb-1
            md:overflow-visible md:flex-wrap md:justify-end
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <FilterChip
            label="Todos los parques"
            active={selectedTipo === "all"}
            onClick={() => onSelectTipo("all")}
            iconSrc={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
          />

          {tipos.map((tipo) => (
            <FilterChip
              key={tipo}
              label={tipo}
              active={selectedTipo === tipo}
              onClick={() => onSelectTipo(tipo)}
              iconSrc={`${basePath}/img/accionesVerdes/iconoFiltros.svg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, active, onClick, iconSrc }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        shrink-0
        inline-flex items-center gap-2
        rounded-2xl
        px-3 py-2
        md:px-4
        bg-white/20
        ${active ? "bg-white/45" : "hover:bg-white/30"}
        transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
      `}
      aria-pressed={active}
    >
      <img src={iconSrc} alt="" className="w-8 h-8 md:w-9 md:h-9" />
      <span className="text-muni-azul font-extrabold text-sm md:text-base whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
