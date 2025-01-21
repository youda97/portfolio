import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface HomeProps {
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
  triggerAnimation: (navigateCallback: () => void) => void;
}

const Home: React.FC<HomeProps> = ({ selectedColor, triggerAnimation }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    triggerAnimation(() => navigate("/about"));
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Side Triangle */}
      <div
        className={`bg-${selectedColor}-500 fixed w-full hidden lg:block h-[200%]`}
        style={{
          transform: "translate(-80%, -10%) rotate(-15deg)",
        }}
      ></div>

      {/* Main Content */}
      <div className="flex items-center justify-center w-full h-screen sm:px-6 px-5 lg:pr-20">
        <div className="flex flex-col lg:flex-row max-w-[565px] lg:max-w-none  items-center lg:items-center justify-between w-full space-y-5 lg:space-y-0">
          {/* Image */}
          <div className="relative lg:flex-none lg:w-1/3 lg:h-[calc(100vh-80px)] hidden sm:flex">
            <img
              src="/images/profile_picture.JPG"
              alt="Steve Milner"
              className="hidden lg:block w-full h-full object-cover object-top rounded-3xl shadow-lg"
            />
            <div className="lg:hidden mx-auto mb-6 w-64 h-64 rounded-full border-4 border-solid dark:border-gray-700 border-gray-300 overflow-hidden">
              <img
                src="/images/profile_picture.JPG"
                alt="My Picture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex flex-col sm:items-center lg:items-start lg:text-left mx-auto space-y-6 lg:max-w-[605px] custom-md-1:max-w-[450px] flex-1">
            <h1
              className={`relative sm:text-4xl text-2xl sm:text-center lg:text-left text-left font-extrabold uppercase leading-tight text-${selectedColor}-500 xl:before:absolute xl:before:left-0 xl:before:top-4 xl:before:h-1 xl:before:w-10 xl:before:rounded-10 xl:before:bg-${selectedColor}-500 xl:pl-16`}
            >
              I’m Yousef Ouda.{" "}
              <span className="block dark:text-white text-gray-500">
                Front-End Developer
              </span>
            </h1>
            <p className="text-base leading-relaxed lg:leading-loose text-left sm:text-center lg:text-left">
              I’m a Canadian-based front-end developer with 6+ years of
              experience crafting clean, intuitive, and high-performance user
              interfaces. Specializing in React, Angular, and TypeScript, I
              build scalable solutions that enhance usability and performance.
              Let’s create software that makes a difference!
            </p>
            <Button
              label="More About Me"
              icon={<FaArrowRight />}
              selectedColor={selectedColor}
              onClick={handleNavigation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
