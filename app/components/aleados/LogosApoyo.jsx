"use client";

import { MontserratMediumItalic } from "@/app/fonts/fonts";
import { basePath } from "@/next.config.mjs";

export default function LogosApoyo({titulo}) {

const logos = [
  "ALEMANIA-EMBAJADA.png",
  "ARGENTINA-EMBAJADA.png",
  "BELICE-EMBAJADA.png",
  "CHINA_TAIWAN-EMBAJADA.png",
  "COREA-EMBAJADA.png",
  "EGIPTO-EMBAJADA.png",
  // Embajada estados unidos
  "FRANCIA-EMBAJADA.png",
  "INDIA-EMBAJADA.png",
  "ISRAEL-EMBAJADA.png",
  "ITALIA-EMBAJADA.png",
  "ORDEN_MALTA-EMBAJADA.png",
  "MARRUECOS-EMBAJADA.png",
  "PAISES_BAJOS-EMBAJADA.png",
  "PERU-EMBAJADA.png",
  "TURKIA-EMBAJADA.png",
  "COOPERATIVA-ESPANOLA.png",
  "ALIANZA-FRANCESA.png",
  "KOICA.png",
  "PNUD.png",
  "UNESCO.png",
  "UNHCRACNUR.png",
  "CIUDADES-SOLIDARIAS.png",
];


  return (
    <div>
      <p className={` ${MontserratMediumItalic.className} my-5 font-bold text-center text-muni-azul text-lg md:text-2xl`}>{titulo}</p>

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
