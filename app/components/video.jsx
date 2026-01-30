"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { basePath } from "@/next.config.mjs";

export default function StickyVideo({
  src,
  threshold = 0.25,
  stickyWidth = 320,
  hideAfterPx = 999999,
  side = "left", // "left" | "right"
}) {
  const wrapRef = useRef(null);
  const boxRef = useRef(null);
  const stickyRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [placeholderH, setPlaceholderH] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  // 1) Mide alto del video cuando está en la sección (modo normal)
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const update = () => setPlaceholderH(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // 2) Detecta si el video salió/entró de la vista
  useEffect(() => {
    if (!wrapRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Volvió a su sección: muestra normal y re-habilita sticky
          setIsSticky(false);
          setDismissed(false);
        } else {
          // Se fue de la vista: entra sticky (si no está "cerrado")
          setIsSticky(true);
        }
      },
      { threshold }
    );

    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, [threshold]);

  // 3) Oculta después de X pixeles (esto sí puede desmontar todo)
  useEffect(() => {
    const onScroll = () => setHiddenByScroll(window.scrollY > hideAfterPx);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfterPx]);

  // 4) Fix scroll cuando el mouse está sobre el video sticky
  useEffect(() => {
    const el = stickyRef.current;
    if (!el || !isSticky || dismissed) return;

    const onWheel = (e) => {
      window.scrollBy({ top: e.deltaY, left: 0 });
      e.preventDefault();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isSticky, dismissed]);

  if (hiddenByScroll) return null;

  const fixedPos =
    side === "left" ? { left: 16, right: "auto" } : { right: 16, left: "auto" };

  const showFloating = isSticky && !dismissed;

  return (
    <>
      {/* Placeholder SOLO cuando está sticky (aunque el floating esté cerrado) */}
      <div ref={wrapRef} style={{ height: isSticky ? placeholderH : "auto" }} />

      {/* Video NORMAL en la sección */}
      {!isSticky && (
        <div
          ref={boxRef}
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <video
            controls
            playsInline
            src={src}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      )}

      {/* Video STICKY flotante */}
      {showFloating && (
        <div
          style={{
            position: "fixed",
            ...(fixedPos || {}),
            bottom: 16,
            width: stickyWidth,
            maxWidth: "calc(100vw - 32px)",
            borderRadius: 16,
            overflow: "hidden",
            zIndex: 9999,
            backgroundColor: "#000",
            opacity: 1,
            transform: "translateZ(0)",
            boxShadow: "0 12px 30px rgba(0,0,0,.25)",
          }}
        >
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar mini reproductor"
            title="Cerrar"
            style={{
              position: "absolute",
              top: 8,
              left: side === "left" ? 8 : "auto",
              right: side === "right" ? 8 : "auto",
              width: 28,
              height: 28,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: "#EB5F44",
              color: "#fff",
              zIndex: 10000,
              display: "grid",
              placeItems: "center",
              lineHeight: 1,
              fontSize: 16,
            }}
          >
            ✕
          </button>

          <div ref={stickyRef} style={{ pointerEvents: "auto" }}>
            <video
              src={src}
              controls
              playsInline
              autoPlay
              muted
              preload="none"
              style={{
                width: "100%",
                display: "block",
                backgroundColor: "transparent",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
