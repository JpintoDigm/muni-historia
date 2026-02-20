"use client";
import useAnimate from "@/app/hooks/useAnimate";

export default function Stagger({
  children,
  className = "",
  step = 90,       // ms entre items
  from = "up",
  duration = 650,
  threshold = 0.15,
  once = true,
}) {
  const [ref, show] = useAnimate({ threshold, once });

  const hiddenByDir = {
    up: "opacity-0 translate-y-5",
    down: "opacity-0 -translate-y-5",
    left: "opacity-0 translate-x-6",
    right: "opacity-0 -translate-x-6",
    none: "opacity-0",
  };

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={`will-change-transform transition-[transform,opacity] ease-out motion-reduce:transition-none
            ${show ? "opacity-100 translate-x-0 translate-y-0" : hiddenByDir[from]}`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${i * step}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
