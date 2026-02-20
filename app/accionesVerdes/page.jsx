"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { basePath } from "@/next.config.mjs";
import { PARQUES } from "../components/accionesVerdes/data";
import { MarcellusRegular, MontserratLightItalic, MontserratMediumItalic, muni } from "@/app/fonts/fonts";


// Import dinámico del mapa de eventos
const DistritoVerdeMap = dynamic(() => import("@/app/components/arcgis/basemap/DistritoVerdeMap"), {
  ssr: false,
});

/* Helpers parallax*/
function useInViewOnce(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (!mq) return;
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduce;
}

/*  Inline Typewriter */
function TypewriterTitle({ parts, speed = 24, cursorClassName = "text-muni-azul" }) {
  const full = parts.map((p) => p.text).join("");
  const [count, setCount] = useState(0);
  const done = count >= full.length;

  useEffect(() => {
    let t;
    if (!done) t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, done, speed]);

  const render = () => {
    let remaining = count;
    return parts.map((p, idx) => {
      if (remaining <= 0) return <React.Fragment key={idx} />;
      const take = Math.min(remaining, p.text.length);
      remaining -= take;
      const slice = p.text.slice(0, take);

      const nodes = slice.split("\n").flatMap((seg, i, arr) => {
        const out = [];
        out.push(<span key={`${idx}-${i}`}>{seg}</span>);
        if (i < arr.length - 1) out.push(<br key={`${idx}-br-${i}`} />);
        return out;
      });

      return (
        <span key={idx} className={p.className}>
          {nodes}
        </span>
      );
    });
  };

  return (
    <span>
      {render()}
      {!done && <span className={`inline-block ml-1 animate-pulse ${cursorClassName}`}>|</span>}
    </span>
  );
}

/* Animatable card wrappers
 */
function AnimatedCard({ inView, delay = 0, className = "", children }) {
  return (
    <div
      className={[
        className,
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Acciones() {
  const reduce = useReducedMotion();

  const [selectedZona, setSelectedZona] = useState("all");
  const [selectedTipo, setSelectedTipo] = useState("all");

  const zonas = useMemo(() => Array.from(new Set(PARQUES.map((i) => i.zona))).sort((a, b) => a - b), []);
  const tipos = useMemo(() => Array.from(new Set(PARQUES.map((i) => i.tipo).filter(Boolean))).sort((a, b) => a.localeCompare(b)), []);

  const filteredParques = useMemo(() => {
    return PARQUES.filter((item) => {
      const matchesZona = selectedZona === "all" || item.zona === Number(selectedZona);
      const matchesTipo = selectedTipo === "all" || item.tipo === selectedTipo;
      return matchesZona && matchesTipo;
    });
  }, [selectedZona, selectedTipo]);

  // Secciones animadas 
  const hero = useInViewOnce(0.12);
  const stats = useInViewOnce(0.15);
  const bio = useInViewOnce(0.15);
  const cta = useInViewOnce(0.12);
  const footer250 = useInViewOnce(0.10);

  // Parallax imagen principal (desktop)
  const mainImgRef = useRef(null);
  useEffect(() => {
    const el = mainImgRef.current;
    if (!el || reduce) return;

    const onMove = (e) => {
      if (window.innerWidth < 1024) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
    };

    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  // conteo
  const [countOn, setCountOn] = useState(false);
  useEffect(() => {
    if (stats.inView) setCountOn(true);
  }, [stats.inView]);

  const useCountUp = (to, duration = 900) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
      if (!countOn || reduce) {
        setVal(to);
        return;
      }
      let raf;
      const start = performance.now();
      const from = 0;

      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setVal(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [to, duration]);

    return val;
  };

  const parquesEcologicos = useCountUp(6);
  const reforestacion = useCountUp(38);
  const arboles = useCountUp(27000, 1100);
  const especies = useCountUp(100, 900);
  const especiesTotal = useCountUp(750, 1000);

  return (
    <main className="min-h-screen bg-[#e0e721]">
      {/*  HERO  */}
      <section ref={hero.ref} className="w-full container mx-auto px-8 lg:px-10 pt-8">
        <div
          className={[
            "flex flex-col gap-4",
            "transition-all duration-700 ease-out",
            hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3">
            <div className="flex items-center mt-0 mb-4 gap-3">
              <div>
                <img src={`${basePath}/img/accionesVerdes/iconoHead.png`} alt="Icono parque" className="w-20 sm:w-30" />
              </div>

              <div>
                {/* Título con latido*/}
                <h1 className={`${MontserratLightItalic.className} text-2xl md:text-3xl text-muni-azul italic`}>
                  <TypewriterTitle
                    speed={22}
                    cursorClassName="text-muni-azul"
                    parts={[
                      { text: "Acciones", className: "" },
                      { text: "\n", className: "" },
                      { text: "Verdes", className: `${MontserratMediumItalic.className} tracking-[0.12em] font-extrabold italic` },
                    ]}
                  />
                </h1>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={`${basePath}/img/logo250.svg`}
                alt="Icono 250"
                className={[
                  "w-50 sm:w-100",
                  !reduce ? "motion-safe:animate-[pulse_2.8s_ease-in-out_infinite]" : "",
                ].join(" ")}
              />
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <p className={`${muni.className} text-muni-azul text-justify text-sm sm:text-xl lg:mb-4`}>
              Las acciones verdes reflejan una ciudad que inspira bienestar, cuida su entorno y apuesta por una mejor
              calidad de vida para las generaciones de hoy y del futuro.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Imagen principal*/}
            <div className="w-full lg:w-2/3">
              <div
                ref={mainImgRef}
                className={[
                  "relative group rounded-3xl overflow-hidden",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
                  "transition-transform duration-500",
                  !reduce ? "motion-safe:hover:scale-[1.01]" : "",
                  "will-change-transform",
                  "[transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
                ].join(" ")}
              >
                <img
                  src={`${basePath}/img/accionesVerdes/MainImage.png`}
                  alt="Acciones Verdes"
                  className="w-full h-auto object-cover"
                />
                {/* shine */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-r from-white/0 via-white/12 to-white/0
                    translate-x-[-120%] group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />
                {/* overlay sutil */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>

            {/* Texto derecho tarjeta flotante */}
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div
                className={[
                  "rounded-3xl p-6 sm:p-7",
                  "bg-white/35 backdrop-blur-md",
                  "border border-white/30",
                  "shadow-[0_18px_60px_rgba(0,0,0,0.18)]",
                  "transition-transform duration-500",
                  !reduce ? "motion-safe:hover:-translate-y-1" : "",
                ].join(" ")}
              >
                <p className={`${muni.className} text-muni-azul italic text-justify text-sm sm:text-xl`}>
                  El Gran Distrito Verde abarca el{" "}
                  <span className={`${MontserratMediumItalic.className} font-bold italic`}>40%</span> del territorio de la
                  ciudad y se articula a través del{" "}
                  <span className={`${MontserratMediumItalic.className} font-bold italic`}>
                    Cinturón Ecológico Municipal, la Red Urbana Verde y el arbolado urbano
                  </span>{" "}
                  como red de conexión. Su propósito es{" "}
                  <span className={`${MontserratMediumItalic.className} font-bold italic`}>
                    fortalecer el valor ambiental y la resiliencia frente al cambio climático,
                  </span>{" "}
                  mediante la participación social y Soluciones Basadas en la Naturaleza, construyendo una infraestructura
                  verde para una ciudad más saludable y sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO  */}
      <section className="container mx-auto pb-8 lg:py-8 lg:px-5 lg:pt-5 lg:pb-0">
        <div className="relative">
          <div className="flex justify-center relative px-8 lg:px-10 mt-5 md:mt-20 z-0">
            <DistritoVerdeMap />
          </div>

          {/*  STATS */}
          <div ref={stats.ref} className="flex justify-start relative mt-10 md:mt-20 z-10">
            <div className="w-full max-w-7xl rounded-3xl p-8 md:p-10 relative overflow-visible">
              {/* PERSONAS */}
              <img
                src={`${basePath}/img/accionesVerdes/parquesPersonas.svg`}
                className={[
                  "absolute right-10 top-[-5.5] md:-top-37.5 w-48 md:w-80 object-contain z-20 pointer-events-none",
                  "transition-all duration-700 ease-out",
                  stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                alt=""
              />

              {/* TÍTULO */}
              <AnimatedCard inView={stats.inView} delay={0} className="mb-10">
                <h2 className={`${MontserratMediumItalic.className} hidden lg:block text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                  Cinturón
                  <br />
                  Ecológico Municipal
                </h2>
                <h2 className={`${MontserratMediumItalic.className} block lg:hidden text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                  Cinturón
                  <br />
                  Ecológico <br />
                  Municipal
                </h2>
              </AnimatedCard>

              {/* GRID TARJETAS  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CARD 1 */}
                <AnimatedCard inView={stats.inView} delay={120}>
                  <div
                    className={[
                      "bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between",
                      "shadow-[0_18px_60px_rgba(0,0,0,0.14)]",
                      "transition-transform duration-300",
                      !reduce ? "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.01]" : "",
                    ].join(" ")}
                  >
                    <div className="w-full flex flex-row justify-between items-center gap-5">
                      <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                        <span className={`${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                          {parquesEcologicos}
                        </span>
                        <p className={`${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                          Parques
                          <br /> Ecológicos
                        </p>
                      </div>
                      <img src={`${basePath}/img/accionesVerdes/parquesEcologicos.svg`} className="w-30 lg:w-35" alt="" />
                    </div>
                  </div>
                </AnimatedCard>

                {/* CARD 2 */}
                <AnimatedCard inView={stats.inView} delay={180}>
                  <div
                    className={[
                      "bg-[#e7eb9c] rounded-2xl p-6 flex items-center justify-between",
                      "shadow-[0_18px_60px_rgba(0,0,0,0.14)]",
                      "transition-transform duration-300",
                      !reduce ? "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.01]" : "",
                    ].join(" ")}
                  >
                    <div className="w-full flex flex-row justify-between items-center gap-5">
                      <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                        <span className={`${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                          {reforestacion}
                        </span>
                        <p className={`${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                          Áreas de
                          <br /> reforestación continua
                        </p>
                      </div>
                      <img src={`${basePath}/img/accionesVerdes/parquesReforestacion.svg`} className="w-30 lg:w-35" alt="" />
                    </div>
                  </div>
                </AnimatedCard>

                {/* SUBTITULO */}
                <AnimatedCard inView={stats.inView} delay={220} className="md:col-span-2 mt-4">
                  <h3 className={`${MontserratMediumItalic.className} text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight`}>
                    Arbolado Urbano
                  </h3>
                </AnimatedCard>

                {/* CARD 3 */}
                <AnimatedCard inView={stats.inView} delay={260}>
                  <div
                    className={[
                      "bg-[#e7eb9c] rounded-2xl p-6",
                      "shadow-[0_18px_60px_rgba(0,0,0,0.14)]",
                      "transition-transform duration-300",
                      !reduce ? "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.01]" : "",         
                      "h-[190px] sm:h-[200px] lg:h-[220px]",
                      "flex items-center justify-between gap-4",
                    ].join(" ")}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <span className={`${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                          +{arboles.toLocaleString("en-US")}
                        </span>

                        <p
                          className={`${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          árboles censados en diferentes zonas de la ciudad*
                        </p>
                      </div>
                      <span className="text-lg opacity-0 select-none">*Ambos datos registrados a la fecha</span>
                    </div>

                    <img src={`${basePath}/img/accionesVerdes/parquesArboles.svg`} className="w-30 lg:w-35 shrink-0" alt="" />
                  </div>
                </AnimatedCard>

                {/* CARD 4 */}
                <AnimatedCard inView={stats.inView} delay={320}>
                  <div
                    className={[
                      "bg-[#e7eb9c] rounded-2xl p-6",
                      "shadow-[0_18px_60px_rgba(0,0,0,0.14)]",
                      "transition-transform duration-300",
                      !reduce ? "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.01]" : "",
                      "h-[190px] sm:h-[200px] lg:h-[220px]",
                      "flex items-center justify-between gap-4",
                    ].join(" ")}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <span className={`${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                          +{especies}
                        </span>

                        <p
                          className={`${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          Especies distintas*
                        </p>
                      </div>

                      <span className="text-lg text-muni-azul ">*Ambos datos registrados a la fecha</span>
                    </div>

                    {/* si querés, aquí puedes meter un ícono luego; por ahora queda igual de ancho */}
                    <div className="w-auto lg:w-35 shrink-0" />
                  </div>
                </AnimatedCard>

              </div>
            </div>
          </div>
        </div>

        {/* BIODIVERSIDAD  */}
        <div ref={bio.ref} className="flex justify-center relative mt-10 md:mt-10">
          <div className="w-full max-w-7xl rounded-2xl px-8 lg:px-10 pt-0 md:pt-0">
            <AnimatedCard inView={bio.inView} delay={0}>
              <h2 className={`${MontserratMediumItalic.className} text-3xl md:text-4xl font-extrabold text-muni-azul leading-tight mb-10`}>
                Biodiversidad
              </h2>
            </AnimatedCard>

            <AnimatedCard inView={bio.inView} delay={120}>
              <div className="bg-[#e7eb9c] rounded-2xl px-8 py-6 w-full max-w-md mb-8 shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
                <div className="flex items-baseline gap-4 justify-center">
                  <span className={`${MontserratMediumItalic.className} text-4xl lg:text-7xl font-extrabold text-muni-azul`}>
                    {especiesTotal}
                  </span>
                  <span className={`${MontserratLightItalic.className} italic text-lg lg:text-3xl text-muni-azul font-semibold leading-tight`}>
                    Especies
                  </span>
                </div>
              </div>
            </AnimatedCard>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">
              {[
                { n: "224", t: "Plantas", icon: `${basePath}/img/accionesVerdes/plantas.svg` },
                { n: "55", t: "Abejas", icon: `${basePath}/img/accionesVerdes/abejas.svg` },
                { n: "160", t: "Mariposas", icon: `${basePath}/img/accionesVerdes/mariposas.svg` },
                { n: "54", t: "Arácnidos", icon: `${basePath}/img/accionesVerdes/aracnidos.svg` },
                { n: "25", t: "Herpetofauna", icon: `${basePath}/img/accionesVerdes/herpetofauna.svg` },
                { n: "52", t: "Mamíferos", icon: `${basePath}/img/accionesVerdes/mamiferos.svg` },
                { n: "180", t: "Aves", icon: `${basePath}/img/accionesVerdes/aves.svg` },
              ].map((it, idx) => (
                <AnimatedCard key={it.t} inView={bio.inView} delay={160 + idx * 60}>
                  <div
                    className={[
                      "bg-[#e7eb9c] rounded-2xl p-4 flex flex-col items-center justify-between min-h-[140px]",
                      "shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
                      "transition-transform duration-300",
                      !reduce ? "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02]" : "",
                    ].join(" ")}
                  >
                    <div className="text-center leading-tight">
                      <div className={`${MontserratMediumItalic.className} text-lg lg:text-xl font-extrabold text-muni-azul`}>
                        {it.n}
                      </div>
                      <div className={`${MontserratLightItalic.className} italic text-sm lg:text-lg text-muni-azul font-semibold leading-tight`}>
                        {it.t}
                      </div>
                    </div>

                    <img src={it.icon} alt={it.t} className="w-12 h-12 object-contain mt-2" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/*  CTA  */}
        <div ref={cta.ref} className="flex justify-center mt-10 md:mt-10 mb-10">
          <div className="w-full max-w-7xl rounded-2xl p-8 md:px-10 md:px-10 md:pb-0 relative">
            <AnimatedCard inView={cta.inView} delay={0}>
              <img src={`${basePath}/img/accionesVerdes/bgButton.svg`} alt="" className="hidden md:block relative object-contain" />
              <img src={`${basePath}/img/accionesVerdes/bgButtonMobile.svg`} alt="" className="block md:hidden relative object-contain" />
            </AnimatedCard>

            <AnimatedCard inView={cta.inView} delay={120} className="pointer-events-none">
              <img
                src={`${basePath}/img/accionesVerdes/redBird.svg`}
                alt=""
                className={[
                  "absolute w-55 top-[-215] right-[-30] lg:w-75 lg:top-[-300] lg:right-[-10]",
                  !reduce ? "motion-safe:animate-[float_4s_ease-in-out_infinite]" : "",
                ].join(" ")}
              />
            </AnimatedCard>

            <AnimatedCard inView={cta.inView} delay={180}>
              <Link
                href="https://grandistritoverde.com.gt/"
                target="_blank"
                className={`${MontserratMediumItalic.className}
                  inline-flex items-center gap-2 w-30 md:w-50
                  rounded-xl bg-white/80 px-3 py-2
                  text-muni-azul font-extrabold text-sm sm:text-xl
                  transition hover:bg-muni-verde/45
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-muni-verde/70 absolute bottom-12 left-25 md:bottom-13 md:left-68 z-10
                `}
              >
                Ver más
                <img
                  src={`${basePath}/img/accionesVerdes/backtotop.svg`}
                  alt=""
                  className="h-4 w-4 rotate-90 opacity-90"
                />
              </Link>
            </AnimatedCard>

            {/* keyframes float */}
            <style jsx global>{`
              @keyframes float {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-8px);
                }
              }
            `}</style>
          </div>
        </div>

        {/*  250  */}
        <div ref={footer250.ref} className="relative overflow-hidden rounded-3xl lg:min-h-[520px]">
          <div
            className={[
              "my-10 relative z-10",
              "transition-all duration-700 ease-out",
              footer250.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <p className={`text-center font-bold mt-0 md:mb-100 text-xl md:text-4xl text-muni-azul px-0 md:px-80 italic ${MarcellusRegular.className}`}>
              “El punto de encuentro de los caminos”
            </p>
          </div>

          <img
            src={`${basePath}/img/conmemoracion/250years.svg`}
            alt="250 años"
            className="
              absolute
              left-1/2 -translate-x-1/2
              bottom-[-250px]
              xl:w-[800px] 2xl:w-[1000px]
              opacity-60
              pointer-events-none select-none
            "
          />
        </div>
      </section>
    </main>
  );
}
