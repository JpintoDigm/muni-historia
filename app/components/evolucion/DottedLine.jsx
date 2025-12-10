import { basePath } from "@/next.config.mjs";

export default function DottedLine({ variant = "curva-arriba" }) {
  const baseClass = "pointer-events-none absolute";

  const variants = {
    "curva-arriba": "top-10 right-0 w-[60%]",
    "curva-derecha": "top-1/2 right-10 w-[40%] rotate-210",
    "curva-izquierda": "top-1/2 left-0 w-[40%]",
  };

  const className = `${baseClass} ${variants[variant] || ""}`;

  return (
    <img
      src={`${basePath}/img/evolucion/lineaPunteada.png`}// o cambia según variant si tienes varios SVG
      alt=""
      className={className}
    />
  );
}
