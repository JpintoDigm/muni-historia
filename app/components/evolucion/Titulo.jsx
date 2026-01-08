import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { MontserratLightItalic } from "@/app/fonts/fonts";

// components/Header.jsx
export default function Titulo() {
  return (
    <div className="mt-0 md:mt-4 p-6">
        <h1 className={`${MontserratMediumItalic.className} text-2xl md:text-3xl font-extrabold text-muni-azul`}>
        Evolución Histórica
        </h1>
        <p className={`${MontserratMediumItalic.className} font-extrabold text-sm md:text-2xl tracking-[0.12em] text-muni-azul`}>
        de la <span className={`${MontserratMediumItalic.className} text-muni-azul font-extrabold`}>ciudad de Guatemala</span>
        </p>
    </div>
  );
}
