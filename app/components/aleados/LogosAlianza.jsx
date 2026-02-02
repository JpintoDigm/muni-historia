"use client";

import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function LogosAlianza({titulo}) {

const logos = [
  "ADESCA.png",
  "ACADEMIA-GEOGRAFIA-HISTORIA.png",
  "AGEG.png",
  "ADIG.png",
  "ARZOBISPADO-CATEDRAL.png",
  "ANTIGUA-VIVA.png",
  "ASLIGUA.png",
  "ARZOBISPADO-GUATEMALA.png",
  "ASODI.png",
  "CBR.png",
  "ASOCIACION-GONZALEZ-GOYRI.png",
  "CGPL.png",
  "CIRMA.png",
  "COLEGIO-ARQUITECTOS.png",
  "EL-TUNEL.png",
  "CREAMOS-GUATE.png",
  "EXTRA-GALERIA.png",
  "FONDO-CULTURA-ECONOMICA.png",
  "FUNDACION-PAIZ.png",
  "FILGUA.png",
  "FUNDACION-TEOXCHE.png",
  "GREMIA.png",
  "GUARDABARRANCOS.png",
  "HOUSE-GUEST.png",
  "IGA.png",
  "INSTITUTO-NEUROLOGICO.png",
  "JUDIOS.png",
  "M-HISTORIA.png",
  "M-MIRAFLORES.png",
  "M-IXCHEL.png",
  "M-NINOS.png",
  "M-POPOL-VUH.png",
  "M-POSTAL.png",
  "M-TIPOGRAFIA.png",
  "M-USAC.png",
  "MENA.png",

  "MILAGRO-DE-AMOR.png",
  "MORMONES.png",
  "MORMONES-FAMILY-SEARCH.png",
  "ORTODOXOS.png",
  "PUNTO-D.png",
  "SOL-DEL-RIO.png",
  "U-DAVINCI.png",
  "U-DE-O.png",
  "U-DEL-VALLE.png",
  "U-ISTMO.png",
  "U-LANDIVAR.png",
  "U-MARIANO.png",
  "U-MESOAMERICANA.png",
  "U-POPULAR.png",
  "U-SAN-CARLOS.png",
  "U-RURAL.png",
  "U-SAN-PABLO.png",
  "VIGUA-VIDRIO.png",
  "VIGUA.png"
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
