import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // Check localStorage for theme, fallback to dark theme if none is set
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" || !savedTheme; // Default to dark

    setIsDarkMode(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);

    if (!savedTheme) {
      // Save the default dark theme to localStorage
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  if (isDarkMode === null) {
    return null; // Prevent rendering until theme is determined
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
