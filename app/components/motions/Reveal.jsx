"use client";
import useAnimate from "@/app/hooks/useAnimate";

export default function Reveal({
  children,
  className = "",
  from = "up",            // "up" | "down" | "left" | "right" | "none"
  delay = 0,              // ms
  duration = 700,         // ms
  threshold = 0.18,
  once = true,
}) {
  const [ref, show] = useAnimate({ threshold, once });

  const base =
    "will-change-transform transition-[transform,opacity] ease-out motion-reduce:transition-none";

  const hiddenByDir = {
    up: "opacity-0 translate-y-5",
    down: "opacity-0 -translate-y-5",
    left: "opacity-0 translate-x-6",
    right: "opacity-0 -translate-x-6",
    none: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`${base} ${className} ${show ? "opacity-100 translate-x-0 translate-y-0" : hiddenByDir[from]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
