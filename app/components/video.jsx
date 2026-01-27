"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function StickyVideo({
  src,
  threshold = 0.25,
  stickyWidth = 320,
  hideAfterPx = 999999,
  side = "left",        // "left" | "right"
}) {
  const wrapRef = useRef(null);
  const boxRef = useRef(null);
  const stickyRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [placeholderH, setPlaceholderH] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  // 1) Reserva el espacio del video para que no colapse el layout
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

  // 2) Detecta cuando sale de la vista
  useEffect(() => {
    if (!wrapRef.current || dismissed) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (dismissed) return;
        setIsSticky(!entry.isIntersecting);
      },
      { threshold }
    );

    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, [threshold, dismissed]);

  // 3) Oculta después de X pixeles
  useEffect(() => {
    const onScroll = () => setHiddenByScroll(window.scrollY > hideAfterPx);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfterPx]);

  // 4) Fix scroll cuando el mouse está sobre el video sticky
  useEffect(() => {
    const el = stickyRef.current;
    if (!el || !isSticky) return;

    const onWheel = (e) => {
      window.scrollBy({ top: e.deltaY, left: 0 });
      e.preventDefault();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isSticky]);

  // ✅ Si se oculta por scroll o por X, no renderiza nada
  if (hiddenByScroll || dismissed) return null;

  const fixedPos =
    side === "left"
      ? { left: 16, right: "auto" }
      : { right: 16, left: "auto" };

  return (
    <>
      <div ref={wrapRef} style={{ height: isSticky ? placeholderH : "auto" }} />

      <div
        ref={boxRef}
        style={{
          position: isSticky ? "fixed" : "relative",
          ...(isSticky ? fixedPos : {}),
          bottom: isSticky ? 16 : "auto",
          width: isSticky ? stickyWidth : "100%",
          maxWidth: isSticky ? "calc(100vw - 32px)" : "100%",
          borderRadius: 16,
          overflow: "hidden",
          zIndex: isSticky ? 9999 : "auto",
          backgroundColor: "#fff",
          opacity: 1,
          transform: "translateZ(0)",
          boxShadow: isSticky ? "0 12px 30px rgba(0,0,0,.25)" : "none",
        }}
      >
        {/* {isSticky && (
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
        )} */}

        <div ref={stickyRef} style={{ pointerEvents: "auto" }}>
          <video
            controls
            playsInline
            src={src}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>
    </>
  );
}
