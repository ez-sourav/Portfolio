"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
  mounted: false,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved preference in localStorage, fallback to true (dark by default)
    try {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored !== null) {
        const darkChoice = stored === "dark";
        setIsDark(darkChoice);
        if (darkChoice) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      } else {
        // Default to dark mode
        setIsDark(true);
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    } catch {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      const root = document.documentElement;
      if (nextTheme) {
        root.classList.add("dark");
        root.classList.remove("light");
        try {
          localStorage.setItem("portfolio-theme", "dark");
        } catch {}
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        try {
          localStorage.setItem("portfolio-theme", "light");
        } catch {}
      }
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
