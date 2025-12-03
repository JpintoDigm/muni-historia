// components/Header.jsx
export default function Header() {
  return (
    <header className="flex items-start justify-between gap-4 header-250 p-4 ">
        {/* Bloque 250 años */}
        <div className="flex items-center gap-4">
            <div className="text-5xl font-bold leading-none">
            {/* 250 */}
            </div>
            <div className="text-sm leading-tight">
            {/* <p className="font-semibold">Años</p> */}
            {/* <p className="font-semibold">Ciudad de Guatemala</p> */}
            </div>
        </div>

        {/* Escudo + menú */}
        <div className="flex items-center gap-4">
            {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300 text-xs">
            ESCUDO
            </div> */}

            <button
            type="button"
            className="flex h-8 w-10 flex-col justify-between rounded-md p-1.5 hover:bg-slate-200"
            aria-label="Abrir menú"
            >
            <span className="h-1 w-full rounded-full bg-[#10069f]" />
            <span className="h-1 w-full rounded-full bg-[#10069f]" />
            <span className="h-1 w-full rounded-full bg-[#10069f]" />
            </button>
        </div>
    </header>
  );
}
