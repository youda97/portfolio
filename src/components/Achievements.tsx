import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Achievement {
  value: number;
  label: string;
}

interface AchievementsProps {
  selectedColor: string; // dynamic selected color
}

const Achievements: React.FC<AchievementsProps> = ({ selectedColor }) => {
  const achievements: Achievement[] = [
    { value: 5, label: "Years of Experience" },
    { value: 50, label: "Completed Projects" },
    { value: 100, label: "Interfaces Designed & Developed" },
    { value: 10, label: "Frameworks & Libraries Mastered" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 lg:mt-0 mt-12">
      {achievements.map((achievement, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true, // Trigger only once when in view
          threshold: 0.3, // Trigger when 30% of the element is visible
        });

        return (
          <div
            key={index}
            ref={ref} // Reference for Intersection Observer
            className="border border-gray-700 rounded-lg p-6 items-center text-left sm:pt-5 pt-4 sm:pr-7 pr-5 sm:pb-6 pb-5 sm:pl-6 xl:pl-10 pl-4 sm:mb-7 mb-6"
          >
            {/* Number Section */}
            <div
              className={`sm:text-5xl text-4xl font-bold text-${selectedColor}-500 mr-4 tracking-tighter relative`}
            >
              {inView ? (
                <>
                  <CountUp
                    start={0}
                    end={achievement.value}
                    duration={2.5}
                    className="pr-1.5"
                  />
                  {/* Plus Sign as Superscript */}
                  <span className="absolute text-4xl font-normal text-${selectedColor}-500">
                    +
                  </span>
                </>
              ) : (
                <>
                  0
                  <span
                    className="absolute -top-2 text-lg font-semibold"
                    style={{ color: `var(--tw-text-${selectedColor}-500)` }}
                  >
                    +
                  </span>
                </>
              )}
            </div>

            {/* Label Section */}
            <div>
              <p className="uppercase text-sm font-semibold flex mt-2 ml-1">
                <span className="hidden sm:inline-block mr-2 min-w-[30px] h-[2px] bg-gray-500 mt-2"></span>
                <span className="sm:pl-2 pl-0 sm:text-base text-sm">
                  {achievement.label}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
