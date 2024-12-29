import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

interface ExperienceEducationProps {
  selectedColor: string; // e.g., "blue", "red", etc.
}

const ExperienceEducation: React.FC<ExperienceEducationProps> = ({
  selectedColor,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-16">
      <h3 className="sm:text-2xl text-xl font-extrabold uppercase mb-12 text-center">
        Experience & Education
      </h3>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Experience */}
        <ul>
          {[
            {
              year: "2024",
              title: "Front-End Engineer II",
              company: "TikTok / DataPower",
              description:
                "Enhanced user engagement with data visualization improvements, introduced advanced permission management, and streamlined CDN migration for cost-efficiency and reliability.",
              icon: <FaBriefcase />,
            },
            {
              year: "2023 - 2024",
              title: "Front-End Developer",
              company: "IBM Canada / Turbonomic",
              description:
                "Led the migration of features from AngularJS to React, implemented dynamic data grid tables, and presented innovative features to stakeholders.",
              icon: <FaBriefcase />,
            },
            {
              year: "2020 - 2023",
              title: "Front-End Developer",
              company: "IBM Canada / Watson Orchestrate",
              description:
                "Implemented a mobile-first strategy, revamped codebase for better accessibility and structure, and adopted cutting-edge React technologies for project efficiency.",
              icon: <FaBriefcase />,
            },
            {
              year: "2018 - 2020",
              title: "Front-End Developer",
              company: "IBM Canada / Carbon Components Angular",
              description:
                "Developed 15+ reusable UI components for the Carbon library, reduced bugs with rigorous testing, and created a boilerplate app for rapid prototyping.",
              icon: <FaBriefcase />,
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="relative pl-16 mb-12 before:absolute before:top-0 before:left-5 before:w-[1px] before:h-full dark:before:bg-gray-600 before:bg-gray-300"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% is visible
            >
              <div
                className={`absolute left-0 top-0 w-10 h-10 rounded-full bg-${selectedColor}-500 flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>
              <span className="text-xs uppercase dark:bg-gray-800 bg-gray-200 px-2 py-0.5 rounded-full inline-block mb-5 font-bold opacity-80">
                {item.year}
              </span>
              <h5 className="text-base font-semibold mb-3 uppercase">
                {item.title}{" "}
                <span className="opacity-80 font-normal">- {item.company}</span>
              </h5>
              <p className="text-sm">{item.description}</p>
            </motion.li>
          ))}
        </ul>

        {/* Education */}
        <ul>
          {[
            {
              year: "2020",
              title: "Bachelor of Engineering Science ",
              institution: "Western University",
              description:
                "Graduated with a 3.7 GPA, Dean’s Honor List, and the Western Scholarship of Excellence. Excelled in advanced courses and held leadership roles in campus organizations.",
              icon: <FaGraduationCap />,
            },
            {
              year: "2015",
              title: "High School Diploma",
              institution: "Oakridge Secondary School",
              description:
                "Graduated with a 92.5% average, excelling in mathematics and language arts. Balanced academics with competitive Taekwondo and leadership activities.",
              icon: <FaGraduationCap />,
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="relative pl-16 mb-12 before:absolute before:top-0 before:left-5 before:w-[1px] before:h-full dark:before:bg-gray-600 before:bg-gray-300"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`absolute left-0 top-0 w-10 h-10 rounded-full bg-${selectedColor}-500 flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>
              <span className="uppercase text-xs dark:bg-gray-800 bg-gray-200 px-2 py-0.5 rounded-full inline-block mb-5 font-bold opacity-80">
                {item.year}
              </span>
              <h5 className="text-base font-semibold mb-3 uppercase">
                {item.title}{" "}
                <span className="opacity-80 font-normal">
                  - {item.institution}
                </span>
              </h5>
              <p className="text-sm">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceEducation;
