import React, { useState } from "react";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
  onComplete: () => void;
  selectedColor: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  onComplete,
  selectedColor,
}) => {
  const [isLineComplete, setIsLineComplete] = useState(false);

  return (
    <>
      {/* Vertical Line Animation */}
      {!isLineComplete && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-hidden bg-zinc-800">
          <motion.div
            initial={{ height: "10%", width: "8px" }}
            animate={{
              height: ["10%", "50%", "100%"],
              width: ["4px", "4px", "0px"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1], // Keyframes timing
            }}
            onAnimationComplete={() =>
              setTimeout(() => setIsLineComplete(true), 300)
            } // Small pause before opening
            className="absolute bg-white"
            style={{
              backgroundColor: selectedColor,
            }}
          />
        </div>
      )}

      {/* Panels Animation */}
      {isLineComplete && (
        <>
          {/* Left Panel */}
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
            className="absolute top-0 left-0 h-full z-50"
            style={{ backgroundColor: "#27272a" }}
          />
          {/* Right Panel */}
          <motion.div
            initial={{ width: "50%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-full z-50"
            style={{ backgroundColor: "#27272a" }}
          />
        </>
      )}
    </>
  );
};

export default LoadingOverlay;
