import React, { useState } from "react";
import { FaArrowDownLong, FaDroplet, FaGear, FaXmark } from "react-icons/fa6";

interface SettingsSwitcherProps {
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
  setSelectedColor: (
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
      | null
  ) => void;
  setDirection: (
    direction:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "topleft"
      | "topright"
      | "bottomleft"
      | "bottomright"
      | null
  ) => void;
}

const SettingsSwitcher: React.FC<SettingsSwitcherProps> = ({
  direction,
  setDirection,
  setSelectedColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const toggleSwitcher = () => {
    if (isOpen) {
      setTimeout(() => setIsRendered(false), 300); // Matches animation duration
    } else {
      setIsRendered(true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed sm:block hidden left-0 top-[16%] z-[19] w-[223px]">
      {/* Switcher Content */}
      <div
        className={`bg-white text-black p-4 rounded-r-lg shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isRendered && (
          <>
            <div className="flex justify-between items-center border-b border-gray-300 border-solid py-1.5 mb-2.5">
              <h4 className="text-base font-bold">COLOR SWITCHER</h4>
              <button
                onClick={toggleSwitcher}
                className="text-black text-lg hover:text-red-500"
              >
                <FaXmark size={20} />
              </button>
            </div>
            <ul className="mt-5 grid grid-cols-5 gap-2">
              {[
                "violet",
                "red",
                "purple",
                "blue",
                "amber",
                "pink",
                "lime",
                "orange",
                "green",
                "yellow",
              ].map((color, index) => (
                <li key={index} className="cursor-pointer">
                  <button
                    onClick={() =>
                      setSelectedColor(
                        color as
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
                      )
                    }
                  >
                    <FaDroplet
                      size={30}
                      title={color}
                      className={`text-${color}-500`}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-bold mt-5 border-b border-gray-300 border-solid py-1.5 mb-2.5">
              TRANSITION DIRECTION
            </h4>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                {
                  id: "topleft",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(135deg)" }}
                    />
                  ),
                },
                {
                  id: "top",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ),
                },
                {
                  id: "topright",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(-135deg)" }}
                    />
                  ),
                },
                {
                  id: "left",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(90deg)" }}
                    />
                  ),
                },
                { id: "empty", arrow: "" },
                {
                  id: "right",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  ),
                },
                {
                  id: "bottomleft",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(45deg)" }}
                    />
                  ),
                },
                {
                  id: "bottom",
                  arrow: <FaArrowDownLong size={20} />,
                },
                {
                  id: "bottomright",
                  arrow: (
                    <FaArrowDownLong
                      size={20}
                      style={{ transform: "rotate(-45deg)" }}
                    />
                  ),
                },
              ].map(({ id, arrow }) => (
                <>
                  {arrow ? (
                    <button
                      key={id}
                      id={id}
                      className={`cursor-pointer w-12 h-12 flex items-center justify-center border rounded-full transition duration-300 ${
                        direction === id
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 hover:bg-green-500 hover:text-white text-black"
                      }`}
                      onClick={() =>
                        setDirection(
                          id as
                            | "top"
                            | "bottom"
                            | "left"
                            | "right"
                            | "topleft"
                            | "topright"
                            | "bottomleft"
                            | "bottomright"
                            | null
                        )
                      }
                    >
                      {arrow}
                    </button>
                  ) : (
                    <div key={id} id={id} className="w-10 h-10 flex">
                      {arrow}
                    </div>
                  )}
                </>
              ))}
            </div>
            <p className="text-xs mt-3 text-gray-600">
              Navigate between sections to see the effect.
            </p>
          </>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSwitcher}
        className={`absolute top-[315%] left-0 bg-white text-black w-14 h-12 flex items-center justify-center rounded shadow-lg transition-transform duration-300 ease-in-out ${
          isRendered ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <FaGear
          size={20}
          className="animate-spin"
          style={{ animationDuration: "2s" }}
        />
      </button>
    </div>
  );
};

export default SettingsSwitcher;
