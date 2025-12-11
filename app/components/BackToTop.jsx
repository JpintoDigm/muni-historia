"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // Mostrar después de bajar 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-45 right-5 md:right-8  z-50 transition-all duration-300 
        p-3 rounded-full shadow-lg bg-gradient-to-br from-pink-400 via-yellow-300 to-teal-500 text-muni-azul text-2xl font-extrabold
        hover:bg-[#0a0585] hover:scale-110
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}
