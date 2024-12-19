import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

interface ThemeSwitcherProps {
  selectedColor:
    | "violet"
    | "red"
    | "purple"
    | "blue"
    | "amber"
    | "pink"
    | "lime"
    | "orange"
    | "green"
    | "yellow"
    | null;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ selectedColor }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed lg:right-8 lg:top-8 right-4 md:top-20 z-20 flex items-center justify-center w-12 h-12 rounded-full transition duration-300 dark:bg-zinc-800 bg-zinc-200 dark:text-white text-gray-500 hover:bg-${selectedColor}-500 dark:hover:bg-${selectedColor}-500 hover:text-white ${
        location.pathname === "/" ? "top-20" : "top-16"
      }`}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
