import React from "react";

interface HeaderBannerProps {
  titlePart1: string; // First part of the title text
  titlePart2: string; // Highlighted part of the title
  backgroundText: string; // Large background text
  selectedColor: string; // Tailwind color class name
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({
  titlePart1,
  titlePart2,
  backgroundText,
  selectedColor,
}) => {
  return (
    <div className="sm:bg-transparent sm:dark:bg-transparent dark:bg-zinc-800 bg-zinc-200 sm:text-center text-left sm:relative sm:py-20 sm:border-none px-4 pt-2 pb-2 bg-black-3 border-b dark:border-gray-700 border-gray-300 fixed left-0 right-0 top-0 z-10 sm:w-fit sm:m-auto">
      {/* Main Heading */}
      <h2 className="sm:text-[56px] text-[26px] font-black uppercase z-10 relative">
        {titlePart1}{" "}
        <span className={`text-${selectedColor}-500`}>{titlePart2}</span>
      </h2>

      {/* Background Text */}
      <span className="absolute hidden sm:block text-[110px] font-extrabold dark:text-zinc-800 text-zinc-100 uppercase left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
        {backgroundText}
      </span>
    </div>
  );
};

export default HeaderBanner;
