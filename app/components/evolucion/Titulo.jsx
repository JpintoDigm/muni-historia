import { MontserratMediumItalic } from "../../layout";
import { MontserratLightItalic } from "../../layout";

// components/Header.jsx
export default function Titulo() {
  return (
    <div className="mt-0 md:mt-4 p-6">
        <h1 className={`${MontserratMediumItalic.className} text-2xl md:text-3xl font-extrabold text-muni-azul`}>
        EVOLUCIÓN HISTÓRICA
        </h1>
        <p className={`${MontserratMediumItalic.className} font-extrabold text-sm md:text-2xl tracking-[0.12em] uppercase text-muni-azul`}>
        de la <span className={`${MontserratMediumItalic.className} text-muni-azul font-extrabold`}>CIUDAD DE GUATEMALA</span>
        </p>
    </div>
  );
}
