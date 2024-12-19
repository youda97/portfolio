import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "./index.css";
import TransitionOverlay from "./components/TransitionOverlay";
import SettingsSwitcher from "./components/SettingsSwitcher";
import LoadingOverlay from "./components/LoadingOverlay";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState<
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
    | null
  >("yellow");
  const [direction, setDirection] = useState<
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright"
    | null
  >("top");

  const handleComplete = () => {
    setAnimating(false); // Reset animation state
  };

  const triggerAnimation = (navigateCallback: () => void) => {
    setAnimating(true);
    setTimeout(() => {
      navigateCallback(); // Perform navigation after animation
    }, 800); // Match this duration to the animation time
  };

  useEffect(() => {
    // Simulate loading completion after 2.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingOverlay
            onComplete={() => setIsLoading(false)}
            selectedColor={selectedColor || "yellow"}
          />
        )}
      </AnimatePresence>

      <Header setAnimating={triggerAnimation} selectedColor={selectedColor} />
      <SettingsSwitcher
        direction={direction}
        setDirection={setDirection}
        setSelectedColor={setSelectedColor}
      />

      <AnimatePresence>
        {isAnimating && (
          <TransitionOverlay
            direction={direction}
            onComplete={handleComplete}
            selectedColor={selectedColor}
          />
        )}
      </AnimatePresence>

      <div className="dark:bg-black bg-white dark:text-white text-gray-500">
        <ScrollToTop />

        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home
                selectedColor={selectedColor}
                triggerAnimation={triggerAnimation}
              />
            }
          />
          <Route
            path="/about"
            element={<About selectedColor={selectedColor} />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio selectedColor={selectedColor} />}
          />
          <Route
            path="/contact"
            element={<Contact selectedColor={selectedColor} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
