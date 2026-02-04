"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomMenu({ textColor = "text-muni-azul", activeColor = "text-muni-verde" }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio", icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg> },
    // { href: "/evolucion", label: "Evolucion", icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#10069f"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg> },
    // { href: "/calendario", label: "Calendario", icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#10069f"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg> },
  ];

  return (
    <nav
      className="bg-gradient-to-br bg-muni-azul/10 fixed bottom-0 left-1/2 -translate-x-1/2 mx-auto w-full max-w-3xs rounded-t-[50px] backdrop-blur-xl flex justify-around items-center py-0 shadow-xl z-50"
    >
      {links.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            href={item.href}
            key={item.href}
            className={`
              flex flex-col items-center px-4 py-1 transition
              ${isActive ? `${activeColor} font-extrabold` : textColor}
            `}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
