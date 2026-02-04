"use client";
import { useEffect, useRef, useState } from "react";

export function useCountUp({
  end = 0,
  start = 0,
  duration = 1200,
  decimals = 0,
  startWhen = false,
}) {
  const [value, setValue] = useState(start);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startWhen) return;

    const startTs = performance.now();
    const diff = end - start;

    const tick = (now) => {
      const t = Math.min(1, (now - startTs) / duration); // 0..1
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const next = start + diff * eased;

      // redondeo
      const factor = Math.pow(10, decimals);
      const rounded = Math.round(next * factor) / factor;

      setValue(rounded);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startWhen, end, start, duration, decimals]);

  return value;
}
