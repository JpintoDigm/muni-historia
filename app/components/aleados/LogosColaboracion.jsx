"use client";

import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function LogosColaboracion({titulo}) {

const logos = [
  "BI-BANCO.png",
  "BCIE.png",
  "BI-FUNDACION.png",
  "BI-SEGUROS.png",
  "CASTILLO-HERMANOS.png",
  "CENTRARSE.png",
  "COINCIDE.png",
  "CLUB-ROTARIO.png",
  "CORREOS.png",
  "CULTURA-DEPORTE.png",
  "FUNDESA.png",
  "EEGSA.png",
  "INGUAT.png",
  "IGSS.png",
  "INTECAP.png",
  "LAKY-MEN.png",
  "MCDONALDS.png",
  "NUESTRO-DIARIO.png",
  "PEPSI.png",
  "PRADERA.png",
  "PROGRESO.png",
  "SOY-502.png",
  "SPECTRUM.png",
  "TIPOGRAFIA.png",
  "PEPSI-GATORADE.png"
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
