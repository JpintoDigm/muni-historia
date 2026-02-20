"use client";

import React, { useEffect, useRef, useState } from "react";
import { basePath } from "@/next.config.mjs";

export default function SecondSection({ muni }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (mq) setReduce(mq.matches);
  }, []);

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
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full px-4 bg-muni-azul overflow-hidden">
      <div className="w-full container mx-auto p-6 lg:py-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* IMAGEN */}
          <div
            className={[
              "flex items-center justify-center mb-7 md:mb-0",
              "transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
            ].join(" ")}
          >
            <div className="relative group">
              {/* glow */}
              <div
                className={[
                  "pointer-events-none absolute -inset-6 rounded-[28px] blur-2xl opacity-0",
                  "bg-gradient-to-tr from-muni-verde/30 via-white/10 to-muni-rosado/20",
                  inView ? "opacity-100" : "opacity-0",
                  "transition-opacity duration-700",
                ].join(" ")}
              />
              {/* card */}
              <div
                className={[
                  "relative rounded-3xl overflow-hidden",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
                  "transition-transform duration-500",
                  "group-hover:scale-[1.01]",
                  !reduce ? "motion-safe:hover:-translate-y-1" : "",
                ].join(" ")}
              >
                <img
                  src={`${basePath}/img/visionCiudad/people.svg`}
                  alt="Alcalde y personas"
                  className="w-300 rounded-2xl"
                />

                {/* shine */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-r from-white/0 via-white/10 to-white/0
                    translate-x-[-120%] group-hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className={`${muni.className} flex flex-col items-center justify-center text-white gap-5 text-justify text-sm lg:text-xl`}>
            {/* Línea decorativa */}
            <div
              className={[
                "w-full max-w-[520px] flex items-center gap-3 mb-2",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <span className="h-[2px] flex-1 bg-white/20 rounded-full" />
              <span className="h-3 w-3 rounded-full bg-muni-verde" />
              <span className="h-[2px] flex-1 bg-white/20 rounded-full" />
            </div>

            <p
              className={[
                "max-w-[520px] rounded-2xl px-4 py-3",
                "bg-white/5 border border-white/10",
                "shadow-[0_18px_60px_rgba(0,0,0,0.16)]",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "120ms" }}
            >
              La Ciudad de Guatemala cumple 250 años desde que se tomó una decisión estratégica que marcó el rumbo del
              país. Nació como el punto de encuentro de los caminos, donde todo pasa y donde convergen personas, ideas
              y oportunidades.
            </p>

            <p
              className={[
                "max-w-[520px] rounded-2xl px-4 py-3",
                "bg-white/5 border border-white/10",
                "shadow-[0_18px_60px_rgba(0,0,0,0.16)]",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "220ms" }}
            >
              Hoy esa vocación sigue viva. Somos la ciudad que conecta al país, la que recibe a miles de guatemaltecos
              cada día y la que asume con responsabilidad los retos que ese crecimiento implica.
            </p>

            <p
              className={[
                "max-w-[520px] rounded-2xl px-4 py-3",
                "bg-white/5 border border-white/10",
                "shadow-[0_18px_60px_rgba(0,0,0,0.16)]",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: "320ms" }}
            >
              Con planificación, inversión en infraestructura, movilidad moderna y trabajo conjunto, seguimos
              construyendo una ciudad pensada para las personas, con visión de largo plazo y compromiso real con su
              gente. Porque cuando la ciudad avanza, avanza Guatemala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
