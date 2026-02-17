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
        // <svg width="120" height="70" viewBox="0 0 120 70">
        //   <path {...common} d="M15 55h90" />
        //   <path {...common} d="M30 55l30-35 30 35" />
        //   <path {...common} d="M42 55l18-21 18 21" />
        //   <path {...common} d="M54 55l6-7 6 7" />
        // </svg>
      );
    }
    if (type === "ciudad") {
      return (
        <img src={`${basePath}/img/evolucion/icons/PrimerTraslado.png`}  alt="" />
        // <svg width="120" height="70" viewBox="0 0 120 70">
        //   <path {...common} d="M10 55h100" />
        //   <path {...common} d="M25 55V30l10-8 10 8v25" />
        //   <path {...common} d="M55 55V25h20v30" />
        //   <path {...common} d="M80 55V35l8-6 8 6v20" />
        //   <path {...common} d="M35 40h0" />
        //   <path {...common} d="M60 35h10" />
        // </svg>
      );
    }
    if (type === "iglesia") {
      return (
        <img src={`${basePath}/img/evolucion/icons/Iglesia.png`}  alt="" />
        // <svg width="120" height="70" viewBox="0 0 120 70">
        //   <path {...common} d="M10 55h100" />
        //   <path {...common} d="M25 55V30l10-8 10 8v25" />
        //   <path {...common} d="M55 55V25h20v30" />
        //   <path {...common} d="M80 55V35l8-6 8 6v20" />
        //   <path {...common} d="M35 40h0" />
        //   <path {...common} d="M60 35h10" />
        // </svg>
      );
    }
    // catedral
    return (
        <img src={`${basePath}/img/evolucion/icons/SegundoTraslado.png`}  alt="" />
    //   <svg width="140" height="70" viewBox="0 0 140 70">
    //     <path {...common} d="M10 55h120" />
    //     <path {...common} d="M25 55V30l10-8 10 8v25" />
    //     <path {...common} d="M55 55V25l15-10 15 10v30" />
    //     <path {...common} d="M95 55V30l10-8 10 8v25" />
    //     <path {...common} d="M70 55V35" />
    //     <path {...common} d="M65 35h10" />
    //   </svg>
    );
  };

return (
  <div className="w-full overflow-hidden rounded-2xl relative">
    {/* Fondo */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#2CB877] via-[#53CFA0] to-[#EAF3F2]" />

    {/* MOBILE*/}
    <div className="relative block lg:hidden px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className={`${MontserratMediumItalic?.className ?? ""} text-muni-azul text-4xl lg:text-5xl leading-tight`}>
            Fundación y traslado <br /> de la ciudad
          </p>
        </div>

        <div className="text-muni-azul text-right">
          <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-5xl leading-none`}>1524</p>
          <div className="flex items-center justify-end gap-2">
            <span className="inline-block text-3xl leading-none">↷</span>
            <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-5xl leading-none`}>1773</p>
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

          <div className="text-muni-azul text-right">
            <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-7xl leading-none`}>1524</p>
            <div className="flex items-center justify-end gap-2">
              <span className="inline-block text-5xl leading-none">↷</span>
              <p className={`${MontserratMediumItalic?.className ?? ""} font-bold text-7xl leading-none`}>1773</p>
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
