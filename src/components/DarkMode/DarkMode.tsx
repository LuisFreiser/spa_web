"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkMode({ classBtnDark = "" }) {
  // Inicializamos el estado del tema con la preferencia del sistema o el valor guardado en localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificamos si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Si no hay tema guardado, usamos la preferencia del sistema
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Agregar/remover clase dark al elemento html
    if (isDarkMode === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
    // Guardamos la preferencia del usuario en localStorage
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button onClick={handleDarkMode} className={classBtnDark}>
        {isDarkMode === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
