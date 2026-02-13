"use client";

import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function LogosAlianza({titulo}) {
  
  const logos = [
    "ARZOBISPADO-GUATEMALA.png",
    "ARZOBISPADO-CATEDRAL.png",
    "MORMONES.png",
    "MORMONES-FAMILY-SEARCH.png",
    "JUDIOS.png",
    "ORTODOXOS.png",
    "COLEGIO-ARQUITECTOS.png",
    "U-DAVINCI.png",
    "U-DE-O.png",
    "U-SAN-CARLOS.png",
    "U-ISTMO.png",
    "U-DEL-VALLE.png",
    "U-MARIANO.png",
    "U-MESOAMERICANA.png",
    "U-LANDIVAR.png",
    "U-RURAL.png",
    "U-SAN-PABLO.png",
    "ACADEMIA-GEOGRAFIA-HISTORIA.png",
    "ADESCA.png",
    "ASLIGUA.png",
    "ASOCIACION-GONZALEZ-GOYRI.png",
    "AGEG.png",
    "CIRMA.png",
    "EXTRA-GALERIA.png",
    "EL-TUNEL.png",
    "FILGUA.png",
    "FONDO-CULTURA-ECONOMICA.png",
    "FUNDACION-PAIZ.png",
    "FUNDACION-TEOXCHE.png",
    "GUARDABARRANCOS.png",
    "HOUSE-GUEST.png",
    "IGA.png",
    "MENA.png",
    "MILAGRO-DE-AMOR.png",
    "PUNTO-D.png",
    "SOL-DEL-RIO.png",
    "U-POPULAR.png",
    "M-HISTORIA.png",
    "M-USAC.png",
    "M-IXCHEL.png",
    "M-NINOS.png",
    "M-MIRAFLORES.png",
    "M-POPOL-VUH.png",
    "M-POSTAL.png",
    "M-TIPOGRAFIA.png",
    "ADIG.png",
    "CBR.png",
    "ASODI.png",
    "CREAMOS-GUATE.png",
    "ANTIGUA-VIVA.png",
    "INSTITUTO-NEUROLOGICO.png",
    "CGPL.png",
    "GREMIA.png",
    "VIGUA.png",
    "VIGUA-VIDRIO.png",
];




  return (
    <div>
      <p className={`${MontserratMediumItalic.className} my-5 font-bold text-center text-muni-azul text-lg md:text-2xl`}>{titulo}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 md:gap-0 place-items-center">
        {logos.map((logo, index) => (
          <div key={index}>
            <img
              src={`${basePath}/img/aleados/${logo}`}
              alt={`Logo ${index + 1}`}
              className="w-30 md:w-35 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
