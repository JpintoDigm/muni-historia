import React from "react";

export default function FundacionTraslado({
  basePath = "",
  MontserratMediumItalic,
  MontserratLightItalic,
  muni,
}) {
  const items = [
    {
      year: "1524",
      title: "Iximché: El origen de la ciudad",
      text:
        "La ciudad de Guatemala tiene su origen en la Villa de Santiago de Guatemala, fundada por Pedro de Alvarado, el 25 de julio de 1524 en el antiguo centro ceremonial y defensivo del señorío kaqchikel. La fundación fue un acto legal por medio del cual se estableció el régimen municipal y se nombraron las primeras autoridades tanto ediles como religiosas.",
      icon: "piramide",
    },
    {
      year: "1527",
      title: "Primer traslado: Almolonga, el lugar donde la villa se convirtió en ciudad",
      text:
        "Transcurridos más de tres años de la fundación, Jorge de Alvarado trasladó la villa al valle de Almolonga, por considerarlo más seguro y con mejores condiciones para habitar y administrar el territorio. La villa contó con una traza ortogonal y una plaza central; estando en este lugar, el 18 de diciembre de 1534, la villa de Santiago de Guatemala fue ennoblecida con el título de Ciudad, y su parroquia fue elevada a Catedral.",
      icon: "ciudad",
    },
    {
      year: "1543",
      title: "Segundo traslado: de ciudad a Capital del Reino",
      text:
        "A pocos meses de cumplir 7 años de habérsele concedido el título de Ciudad, Santiago de Guatemala fue destruida por una inundación. Se trasladó al valle de Panchoy donde permaneció 230 años, durante los cuales fue el escenario del establecimiento de la educación superior, llegada de la imprenta, acuñamiento de moneda, surgimiento del periodismo y publicación del primer libro impreso en el Reino de Guatemala.",
      icon: "catedral",
    },
    {
      year: "1773",
      title: "Terremotos de Santa Marta: el fin de una era y el inicio de una historia que juntos construimos día con día",
      text:
        "La destrucción de Santiago de Guatemala en el Valle de Panchoy puso fin a más de dos siglos de crecimiento urbano, económico, social, intelectual y artístico. La sociedad guatemalteca hizo una pausa en el tiempo (casi tres años) para volver a contar con un territorio por él cual pudiera sentir orgullo de pertenencia y despertara en ella, la inspiración para resurgir con más fuerza. El espíritu resiliente de nuestra ciudad tornó la tragedia en una oportunidad para hacerse más grande y competitiva a nivel regional, apostándole a una traza urbana visionaria que soportaría más de 100 años de crecimiento.",
      icon: "iglesia",
    },
  ];

  
  const Icon = ({ type }) => {
    const common = { fill: "none", stroke: "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    if (type === "piramide") {
      return (
        <img src={`${basePath}/img/evolucion/icons/imche.png`}  alt="" />
      );
    }
    if (type === "ciudad") {
      return (
        <img src={`${basePath}/img/evolucion/icons/PrimerTraslado.png`}  alt="" />
      );
    }
    if (type === "iglesia") {
      return (
        <img src={`${basePath}/img/evolucion/icons/Iglesia.png`}  alt="" />
      );
    }
    // catedral
    return (
        <img src={`${basePath}/img/evolucion/icons/SegundoTraslado.png`}  alt="" />
    );
  };

return (
  <div id="1524-1773" className="w-full overflow-hidden relative">
    {/* Fondo */}
    <div className="absolute inset-0 bg-gradient-to-r from-muni-pantone via-[#7EDBB0] via-90% md:via-65% to-white" />

    {/* MOBILE*/}
    <div className="relative block lg:hidden px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className={`${MontserratMediumItalic?.className ?? ""} text-muni-azul text-4xl lg:text-5xl leading-tight`}>
            Fundación y traslado <br /> de la ciudad
          </p>
        </div>

        <div className="text-muni-azul text-right relative lg:ml-30">
          <p className={`${MontserratMediumItalic?.className ?? ""} relative z-10 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-left`}>1524</p>
          <div className="flex items-center justify-end gap-2">
            <img
              src={`${basePath}/img/evolucion/icons/rightArrow.svg`}
              alt="Arrow"
              className="
                pointer-events-none select-none
                left-7 top-20
                w-10 lg:w-15
                rotate-6  
                opacity-90
              "
            />
            <p className={`${MontserratMediumItalic?.className ?? ""} relative z-10 mt-3 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-start w-50`}>1773</p>
          </div>
        </div>
      </div>

      {/* Mobile items */}
      <div className="mt-10 space-y-14">
        {items.map((it) => (
          <div key={it.year} className="space-y-3">
            <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-white text-3xl`}>
              {it.year}
            </p>
            <Icon type={it.icon} />
            <p className={`${muni?.className ?? ""} text-muni-azul font-bold italic  mt-3`}>
              {it.title}
            </p>
            <p className={`${muni?.className ?? ""} text-muni-azul text-sm leading-relaxed text-justify`}>
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* DESKTOP*/}
    <div className="relative hidden lg:block">
      <div className="container mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className={`${MontserratMediumItalic?.className ?? ""} text-muni-azul text-4xl lg:text-5xl leading-tight`}>
              Fundación y traslado <br /> de la ciudad
            </p>
          </div>

          <div className="text-muni-azul text-right relative lg:ml-30">
            <p className={`${MontserratMediumItalic?.className ?? ""}  relative z-10 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-left`}>1524</p>
            <div className="flex items-center justify-end gap-2">
              <img
                src={`${basePath}/img/evolucion/icons/rightArrow.svg`}
                alt="Arrow"
                className="
                  pointer-events-none select-none
                  left-7 top-20
                  w-10 lg:w-15
                  rotate-6  
                  opacity-90
                "
              />
              <p className={`${MontserratMediumItalic?.className ?? ""} relative z-10 mt-3 text-5xl lg:text-7xl font-bold leading-none text-muni-azul text-start w-50`}>1773</p>
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 grid grid-cols-[220px_1fr] gap-10">
          <div className="space-y-16">
            {items.map((it) => (
              <div key={it.year} className="flex flex-col items-start">
                <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-white text-3xl`}>
                  {it.year}
                </p>
                <div className="mt-3">
                  <Icon type={it.icon} />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {items.map((it) => (
              <div key={it.year}>
                <p className={`${muni?.className ?? ""} text-muni-azul font-bold italic`}>
                  {it.title}
                </p>
                <p className={`${muni?.className ?? ""} text-muni-azul text-base mt-2 leading-relaxed text-justify`}>
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);

}
