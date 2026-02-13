"use client";

import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function LogosColaboracion({titulo}) {

const logos = [
  "BI-BANCO.png",
  "BI-SEGUROS.png",
  "BI-FUNDACION.png",
  "CASTILLO-HERMANOS.png",
  "CENTRARSE.png",
  "CLUB-ROTARIO.png",
  "COINCIDE.png",
  "FUNDESA.png",
  "LAKY-MEN.png",
  "PEPSI.png",
  "PEPSI-GATORADE.png",
  "MCDONALDS.png",
  "PRADERA.png",
  "PROGRESO.png",
  "SPECTRUM.png",
  "CULTURA-DEPORTE.png",
  "CORREOS.png",
  "EEGSA.png",
  "IGSS.png",
  "INGUAT.png",
  "INTECAP.png",
  "TIPOGRAFIA.png",
  "BCIE.png",
  "NUESTRO-DIARIO.png",
  "SOY-502.png",
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
