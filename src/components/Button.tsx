import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon: ReactNode;
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
  onClick: () => void; // Callback for button click
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  selectedColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-max group relative cursor-pointer inline-block overflow-hidden leading-[1.4] rounded-full text-center align-middle select-none uppercase no-underline py-4 pl-9 pr-16 text-sm font-semibold text-${selectedColor}-500 border-2 border-${selectedColor}-500 bg-transparent outline-none`}
    >
      {/* Background Animation */}
      <span
        className={`absolute inset-0 bg-${selectedColor}-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}
      ></span>

      {/* Button Text */}
      <span className="relative transition-colors group-hover:text-white dark:text-white text-gray-500 duration-200 delay-100 ease-out mr-4">
        {label}
      </span>

      {/* Icon */}
      <span
        className={`absolute -top-[2px] right-[-1px] w-14 h-14 flex items-center justify-center rounded-full bg-${selectedColor}-500 text-white transition-transform duration-300 ease-out`}
      >
        {icon}
      </span>
    </button>
  );
};

export default Button;
