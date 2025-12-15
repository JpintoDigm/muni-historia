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
        <div className="flex items-center gap-4 h-7">

        </div>
    </header>
  );
}
