import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderProps {
  setAnimating: (navigateCallback: () => void) => void;
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

const Header: React.FC<HeaderProps> = ({ setAnimating, selectedColor }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (route: string) => {
    if (location.pathname === route) return;

    setAnimating(() => navigate(route));
  };

  return (
    <header className="fixed top-0 lg:right-4 lg:bottom-0 z-20 flex items-center lg:opacity-100 lg:transition-all">
      <ThemeSwitcher selectedColor={selectedColor} />

      {/* Desktop Navigation */}
      <ul
        className={`icon-menu hidden lg:flex flex-col items-center space-y-6 uppercase dark:bg-black bg-white px-4 py-6 rounded-lg`}
      >
        {[
          { icon: <FaHome />, label: "Home", route: "/" },
          { icon: <FaUser />, label: "About", route: "/about" },
          { icon: <FaBriefcase />, label: "Portfolio", route: "/portfolio" },
          { icon: <FaEnvelopeOpen />, label: "Contact", route: "/contact" },
        ].map(({ icon, label, route }, index) => (
          <li
            key={index}
            className={`relative cursor-pointer flex items-center justify-center w-12 h-12 transition-all duration-100 rounded-full group overflow-visible ${
              location.pathname === route
                ? `bg-${selectedColor}-500 text-white` // Highlight active item
                : `hover:bg-${selectedColor}-500 dark:hover:bg-${selectedColor}-500 dark:bg-zinc-800 bg-zinc-200`
            }`}
            onClick={() => {
              handleNavigation(route);
            }}
          >
            {/* Icon inside the button */}
            <div
              className={`absolute inset-0 flex items-center justify-center text-lg z-20 transition-colors duration-300 ${
                location.pathname === route
                  ? `text-white` // Highlight active item
                  : `text-gray-500 group-hover:text-white dark:text-white` // Dark mode forces icon white
              }`}
            >
              {icon}
            </div>

            {/* Sliding hover effect for label */}
            <div
              className={`absolute text-white right-[54%] top-1/2 transform -translate-y-1/2 translate-x-[20%] bg-${selectedColor}-500 text-black font-medium px-6 py-3 rounded-l-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 transition-all duration-300 ease-out z-10`}
            >
              {label}
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className={`lg:hidden fixed md:top-4 right-4 z-40 ${
          location.pathname === "/" ? "top-4" : "top-1"
        }`}
      >
        <button
          className={`flex items-center justify-center w-12 h-12 dark:bg-zinc-800 bg-zinc-200 rounded-full dark:text-white text-gray-500`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Fullscreen Navigation */}
      <div
        className={`fixed inset-0 dark:bg-zinc-800 bg-zinc-200 z-30 transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start pt-16 px-8 space-y-8 dark:text-white text-zinc-500 uppercase">
          {[
            { icon: <FaHome />, label: "Home", route: "/" },
            { icon: <FaUser />, label: "About", route: "/about" },
            {
              icon: <FaBriefcase />,
              label: "Portfolio",
              route: "/portfolio",
            },
            { icon: <FaEnvelopeOpen />, label: "Contact", route: "/contact" },
          ].map(({ icon, label, route }, index) => (
            <li
              key={index}
              className={`flex flex-col items-start text-xl w-full transition duration-300 cursor-pointer ${
                location.pathname === route
                  ? `text-${selectedColor}-500`
                  : `hover:text-${selectedColor}-500`
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavigation(route);
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Center both spans */}
                <span className="text-2xl flex items-center justify-center">
                  {icon}
                </span>
                <span className="text-2xl flex items-center justify-center">
                  {label}
                </span>
              </div>
              <span className="block mt-2 w-full h-[1px] dark:bg-zinc-700 bg-zinc-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
