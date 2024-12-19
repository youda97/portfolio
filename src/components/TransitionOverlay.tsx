import { motion } from "framer-motion";

interface TransitionOverlayProps {
  onComplete: () => void;
  direction:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright"
    | null;
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

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({
  onComplete,
  direction,
  selectedColor,
}) => {
  const animationVariants = {
    top: {
      initial: { y: "-100%", x: "0%", scale: 1, rotate: 0 },
      animate: { y: ["-100%", "0%", "100%"], x: "0%", scale: 1, rotate: 0 },
      exit: { y: "100%", scale: 1, rotate: 0 },
    },
    bottom: {
      initial: { y: "100%", x: "0%", scale: 1, rotate: 0 },
      animate: { y: ["100%", "0%", "-100%"], x: "0%", scale: 1, rotate: 0 },
      exit: { y: "-100%", scale: 1, rotate: 0 },
    },
    left: {
      initial: { x: "-100%", y: "0%", scale: 1, rotate: 0 },
      animate: { x: ["-100%", "0%", "100%"], y: "0%", scale: 1, rotate: 0 },
      exit: { x: "100%", scale: 1, rotate: 0 },
    },
    right: {
      initial: { x: "100%", y: "0%", scale: 1, rotate: 0 },
      animate: { x: ["100%", "0%", "-100%"], y: "0%", scale: 1, rotate: 0 },
      exit: { x: "-100%", scale: 1, rotate: 0 },
    },
    topleft: {
      initial: { x: "-150%", y: "-150%", scale: 2, rotate: -45 },
      animate: {
        x: ["-150%", "0%", "150%"],
        y: ["-150%", "0%", "150%"],
        scale: 2,
        rotate: -45,
      },
      exit: { x: "150%", y: "150%", scale: 2, rotate: -45 },
    },
    topright: {
      initial: { x: "150%", y: "-150%", scale: 2, rotate: 45 },
      animate: {
        x: ["150%", "0%", "-150%"],
        y: ["-150%", "0%", "150%"],
        scale: 2,
        rotate: 45,
      },
      exit: { x: "-150%", y: "150%", scale: 2, rotate: 45 },
    },
    bottomleft: {
      initial: { x: "-150%", y: "150%", scale: 2, rotate: 45 },
      animate: {
        x: ["-150%", "0%", "150%"],
        y: ["150%", "0%", "-150%"],
        scale: 2,
        rotate: 45,
      },
      exit: { x: "150%", y: "-150%", scale: 2, rotate: 45 },
    },
    bottomright: {
      initial: { x: "150%", y: "150%", scale: 2, rotate: -45 },
      animate: {
        x: ["150%", "0%", "-150%"],
        y: ["150%", "0%", "-150%"],
        scale: 2,
        rotate: -45,
      },
      exit: { x: "-150%", y: "-150%", scale: 2, rotate: -45 },
    },
  };

  return (
    <motion.div
      className={`bg-${selectedColor}-500`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200%", // Increased size
        height: "200%", // Increased size
        zIndex: 1000,
      }}
      initial={direction ? animationVariants[direction].initial : ""}
      animate={direction ? animationVariants[direction].animate : ""}
      exit={direction ? animationVariants[direction].exit : ""}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
    />
  );
};

export default TransitionOverlay;
