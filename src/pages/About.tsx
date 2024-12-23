import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";
import Button from "../components/Button";
import Skills from "../components/Skills";
import ExperienceEducation from "../components/ExperienceEducation";
import Achievements from "../components/Achievements";
import HeaderBanner from "../components/HeaderBanner";

interface AboutProps {
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

const colorMap = {
  violet: "#8b5cf6",
  red: "#ef4444",
  purple: "#a855f7",
  blue: "#3b82f6",
  amber: "#f59e0b",
  pink: "#ec4899",
  lime: "#84cc16",
  orange: "#f97316",
  green: "#22c55e",
  yellow: "#eab308",
  darkGray: "#27272a",
  lightGray: "#e4e4e7",
};

const About: React.FC<AboutProps> = ({ selectedColor }) => {
  const { isDarkMode } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/yousef_ouda_cv.pdf"; // Replace with the actual path to your PDF file
    link.download = "Yousef Ouda's CV.pdf"; // Specify the filename for download
    link.click();
  };

  const bgColor = isDarkMode ? colorMap["darkGray"] : colorMap["lightGray"];
  const selectedPrimaryColor = colorMap[selectedColor || "yellow"];

  return (
    <section className="w-full pb-16 sm:pl-20 sm:pr-28 px-0">
      {/* Section Title */}
      <HeaderBanner
        titlePart1="About"
        titlePart2="Me"
        backgroundText="Resume"
        selectedColor={selectedColor || "yellow"}
      />

      <div className="container mx-auto max-w-7xl xl:max-w-6xl sm:px-4 px-6 pt-20 sm:pt-0">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Personal Info */}
          <div>
            <h3 className="sm:text-2xl text-xl font-extrabold uppercase mb-6">
              Personal Infos
            </h3>

            {/* Top Image */}
            <div className="sm:hidden block mx-auto mb-10 flex justify-center">
              <img
                className="rounded-full border-4 border-solid dark:border-gray-700 border-gray-300 w-56 h-56"
                src="/images/profile_picture.png"
                alt="Profile"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Name :
                </p>
                <p className="font-semibold sm:text-base text-sm">
                  Yousef Ouda
                </p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Address :
                </p>

                <p className="font-semibold sm:text-base text-sm">
                  Ontario, Canada
                </p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Age :
                </p>

                <p className="font-semibold sm:text-base text-sm">27 Years</p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Email :
                </p>

                <p className="font-semibold sm:text-base text-sm break-words">
                  ouda.yousef@gmail.com
                </p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Nationality :
                </p>

                <p className="font-semibold sm:text-base text-sm">Canadian</p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Languages :
                </p>

                <p className="font-semibold sm:text-base text-sm">
                  English, Arabic
                </p>
              </div>

              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Freelance :
                </p>

                <p className="font-semibold sm:text-base text-sm">Avaiable</p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Availability :
                </p>

                <p className="font-semibold sm:text-base text-sm">
                  Remote & On-Site{" "}
                </p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Favorite Stack :
                </p>

                <p className="font-semibold sm:text-base text-sm">
                  React, TypeScript, Node.js.
                </p>
              </div>
              <div className="sm:flex block flex-wrap">
                <p className="opacity-80 mr-1 whitespace-nowrap sm:text-base text-sm">
                  Hobbies :
                </p>

                <p className="font-semibold sm:text-base text-sm">
                  Gym, Soccer, Taekwondo, Anime, Traveling, Coding
                </p>
              </div>
            </div>
            <Button
              label="Download CV"
              icon={<FaDownload />}
              selectedColor={selectedColor}
              onClick={handleDownload}
            />
          </div>
          {/* Achievements Section */}
          <Achievements selectedColor={selectedColor || "yellow"} />
        </div>

        <hr className="border-t-black-3 mx-auto max-w-[40%] mt-[70px] mb-14 dark:border-t-gray-800 border-t-gray-200" />

        {/* Skills */}
        <Skills selectedPrimaryColor={selectedPrimaryColor} bgColor={bgColor} />

        <hr className="border-t-black-3 mx-auto max-w-[40%] mt-[70px] mb-14 dark:border-t-gray-800 border-t-gray-200" />

        {/* Experience & Education */}
        <ExperienceEducation selectedColor={selectedColor || "yellow"} />
      </div>
    </section>
  );
};

export default About;
