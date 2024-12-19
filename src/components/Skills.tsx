import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface SkillsProps {
  selectedPrimaryColor: string; // Primary color for progress
  bgColor: string; // Background color
}

const Skills: React.FC<SkillsProps> = ({ selectedPrimaryColor, bgColor }) => {
  const [progress, setProgress] = useState<number[]>([]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "CSS", percentage: 80 },

    { name: "React", percentage: 95 },
    { name: "Angular", percentage: 75 },
    { name: "Ember.js", percentage: 50 },
    { name: "Storybook", percentage: 70 },

    { name: "Node.js", percentage: 70 },
    { name: "Express.js", percentage: 60 },
    { name: "SQL", percentage: 65 },
    { name: "MongoDB", percentage: 55 },

    { name: "Tailwind CSS", percentage: 75 },
    { name: "SCSS/SASS", percentage: 75 },
    { name: "Responsive Design", percentage: 80 },
    { name: "RESTful APIs", percentage: 85 },

    { name: "Git/GitHub/GitLab", percentage: 75 },
    { name: "Agile Methodologies", percentage: 90 },
    { name: "Figma", percentage: 60 },
    { name: "Accessibility Standards (WCAG, ARIA)", percentage: 80 },
  ];

  useEffect(() => {
    if (inView) {
      // Start progress animation when in view
      setProgress(skills.map((skill) => skill.percentage));
    }
  }, [inView]);

  return (
    <div ref={ref} className="mt-16">
      <h3 className="sm:text-2xl text-xl font-extrabold uppercase mb-12 text-center">
        My Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center"
          >
            {/* Circular Progress Bar */}
            <div className="relative size-32">
              <svg
                className="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke={bgColor}
                  strokeWidth="2.5"
                ></circle>
                {/* Progress Circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke={selectedPrimaryColor}
                  strokeWidth="2.5"
                  strokeDasharray="100"
                  strokeDashoffset={100 - (progress[index] || 0)} // Calculates progress dynamically
                  style={{
                    transition: "stroke-dashoffset 2s ease-out",
                  }}
                ></circle>
              </svg>
              {/* Percentage Text */}
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span
                  className="text-center text-2xl font-bold"
                  style={{ color: selectedPrimaryColor }}
                >
                  <CountUp
                    start={0}
                    end={progress[index] || 0}
                    duration={2}
                    delay={0.2}
                  />
                  %
                </span>
              </div>
            </div>
            {/* Skill Name */}
            <h6 className="mt-4 uppercase">{skill.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
