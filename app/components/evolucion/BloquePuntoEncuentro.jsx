"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function BloquePuntoEncuentro({
  basePath = "",
  MontserratLightItalic,
  MontserratMediumItalic,
  muni,
}) {
  // ====== 1) TYPEWRITER ======
  // Lo escribimos con \n para respetar saltos.
  const titleText = useMemo(
    () =>
      "El\npunto de\nencuentro\nde los\ncaminos",
    []
  );

  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  // Velocidad (ms por caracter)
  const SPEED = 80;

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      i++;
      setTyped(titleText.slice(0, i));
      if (i >= titleText.length) {
        setDone(true);
        return;
      }
      setTimeout(tick, SPEED);
    };

    tick();
    return () => {
      cancelled = true;
    };
  }, [titleText]);

  // ====== 2) ENTRADA AL APARECER ======
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ====== 3) PARALLAX SUAVE EN IMAGEN (solo desktop) ======
  const imgWrapRef = useRef(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const onMove = (e) => {
      // Solo pantallas grandes
      if (window.innerWidth < 1024) return;

      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
      const y = (e.clientY - r.top) / r.height - 0.5;

      const rx = (-y * 5).toFixed(2);
      const ry = (x * 7).toFixed(2);

      wrap.style.setProperty("--rx", `${rx}deg`);
      wrap.style.setProperty("--ry", `${ry}deg`);
    };

    const onLeave = () => {
      wrap.style.setProperty("--rx", `0deg`);
      wrap.style.setProperty("--ry", `0deg`);
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Render del título con saltos de línea
  const renderTitle = () => {
    // typed incluye \n; lo convertimos a <br/>
    const parts = typed.split("\n");
    return (
      <>
        {parts.map((line, idx) => {
          const isEncuentroLine = line.toLowerCase().includes("encuentro");
          return (
            <React.Fragment key={idx}>
              <span
                className={
                  isEncuentroLine
                    ? `${MontserratMediumItalic.className} font-bold`
                    : ""
                }
              >
                {line}
              </span>
              {idx < parts.length - 1 && <br />}
            </React.Fragment>
          );
        })}
        {/* cursor parpadeante */}
        {!done && (
          <span className="inline-block w-[10px] translate-y-[2px] ml-1 text-muni-azul animate-pulse">
            |
          </span>
        )}
      </>
    );
  };

  return (
    <div ref={sectionRef} className="bg-muni-verde">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 py-12 gap-10">
        {/* IZQUIERDA */}
        <div
          className={[
            "transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* TÍTULO TYPEWRITER */}
          <p
            className={`${MontserratLightItalic.className} text-muni-azul text-end text-4xl lg:text-5xl leading-tight`}
            aria-label="El punto de encuentro de los caminos"
          >
            {renderTitle()}
          </p>

          {/* separador de capítulo */}
          <div className="mt-6 flex justify-end">
            <div className="h-[2px] w-40 bg-muni-azul/40 rounded-full" />
          </div>

          {/* Textos (con leve entrada escalonada) */}
          <p
            className={[
              muni.className,
              "text-justify mt-10 text-muni-azul leading-relaxed",
              "transition-all duration-700 ease-out delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            Hace 250 años, la capital se trasladó después de su destrucción por un cataclismo al Valle de la Ermita, identificado como el mejor lugar para vivir. Punto de encuentro para quienes recorrían los 4 caminos, hacia el océano Atlántico o al Pacífico, hacia el resto de Centroamérica o México. Valle privilegiado, rodeado de volcanes y montañas, próspero y de clima mayoritariamente primaveral, cielo azul despejado y estación lluviosa refrescante y pródiga. Hoy celebramos doscientos cincuenta años de su asentamiento y desarrollo desde que se trazaron las calles, los solares para viviendas y templos, puentes y pilas, el acueducto por donde bajaría el agua y cómo fue creciendo y rehaciéndose con los años, superando inundaciones, pestes y terremotos, hasta convertirse en la metrópoli actual, con grandes edificios y extraordinaria extensión, que la ubica a la cabeza de la región, como la urbe más grande desde la ciudad de México a Bogotá. Miramos hacia atrás para comprender quiénes somos, y hacia adelante para prosperar en la mejor ciudad para vivir
            <br />
            <br />
            Texto: Adolfo Méndez Vides, Escritor (2026).
          </p>

          <p
            className={[
              muni.className,
              "text-justify mt-10 text-muni-azul leading-relaxed",
              "transition-all duration-700 ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            Kaminaljuyu es una antigua ciudad cuyos restos permanecen bajo la configuración urbana actual. Antes de que la ciudad moderna se expandiera, este lugar era un paisaje de montículos que incluían templos, plataformas y edificios de tierra, reflejando la complejidad social, política y técnica de una civilización muy organizada. Su crecimiento se fundamentó en un profundo conocimiento del entorno, especialmente en el manejo del agua mediante sistemas de canales y reservorios, lo que influyó en su vida ritual y en la planificación espacial. En Kaminaljuyu había mercados, templos, plazas y una red de caminos que conectaba el valle central con regiones distantes, promoviendo el intercambio de bienes, ideas y prácticas culturales. A pesar de la presión constante de la urbanización, Kaminaljuyu no ha desaparecido. Su presencia persiste como fundamento histórico de la Ciudad de Guatemala y como testimonio tangible de un pasado que continúa dando forma al territorio. En estos restos arqueológicos se concentra una memoria profunda, indispensable para comprender el origen y la continuidad de la ciudad actual.
          </p>

          <p
            className={[
              muni.className,
              "text-justify mt-10 text-muni-azul leading-relaxed",
              "transition-all duration-700 ease-out delay-250",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            A pesar de la presión constante de la urbanización, Kaminaljuyu no ha desaparecido. Su presencia persiste como fundamento histórico de la Ciudad de Guatemala y como testimonio tangible de un pasado que continúa dando forma al territorio. En estos restos arqueológicos se concentra una memoria profunda, indispensable para comprender el origen y la continuidad de la ciudad actual.
            <br />
            <br />
            Texto: Bárbara Arroyo, Arqueóloga (2026).
          </p>
        </div>

        {/* DERECHA */}
        <div
          className={[
            "flex flex-col items-end justify-end mt-2 lg:mt-0",
            "transition-all duration-700 ease-out delay-150",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* Cita resaltada */}
          <div className="w-full flex justify-end">
            <div className="max-w-[240px] rounded-2xl bg-white/25 backdrop-blur-md px-4 py-3 shadow-sm">
              <p className={`${muni.className} text-muni-azul italic text-start`}>
                “Kaminaljuyu, punto estratégico central del comercio y encuentro regional”
              </p>
            </div>
          </div>

          {/* Imagen con “vida” (hover + parallax leve) */}
          <div
            ref={imgWrapRef}
            className="
              mt-6 w-full max-w-[560px]
              rounded-3xl overflow-hidden
              shadow-[0_22px_60px_rgba(0,0,0,0.16)]
              transition-transform duration-500
              hover:scale-[1.01]
              [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]
            "
          >
            <img
              src={`${basePath}/img/evolucion/draws/Kaminaljuyu.png`}
              alt="Kaminaljuyu"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* pie */}
          <div className="mt-4 w-full max-w-[560px]">
            <p className={`${MontserratMediumItalic.className} font-bold text-muni-azul`}>
              Vista aérea de Kaminaljuyu en el siglo III D.C
            </p>
            <p className={`${muni.className} text-justify text-muni-azul`}>
              Fuente: Municipalidad de Guatemala, <br />
              Ilustración Arq. Guillermo Aguirre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
