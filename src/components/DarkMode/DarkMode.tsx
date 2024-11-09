"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkMode({ classBtnDark = "" }) {
  // Inicializamos el estado del tema con la preferencia del sistema o el valor guardado en localStorage
  const [isDarkMode, setIsDarkMode] = useState("light");
  // Verificamos si hay un tema guardado en localStorage
  useEffect(() => {
    // Este efecto solo se ejecutará en el cliente
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark ? "dark" : "light");
    }
  }, []);

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
