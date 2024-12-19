import React, { useState } from "react";
import { FaCode, FaExternalLinkAlt, FaUser } from "react-icons/fa";
import { FaFile, FaXmark } from "react-icons/fa6";
import ProjectGrid from "../components/ProjectGrid";
import HeaderBanner from "../components/HeaderBanner";
import { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Soccer Drop-In",
    image: "/images/soccer_dropin.png",
    projectType: "Soccer Management App",
    client: "London Soccer Community",
    languages: "React, Tailwind CSS, Node.js, Firebase, Stripe",
    previewLink: "https://soccer-drop-in.web.app/",
  },
  {
    id: 2,
    title: "New Portfolio Site",
    image: "/images/portfolio.png",
    projectType: "Personal Portfolio Website",
    client: "Myself",
    languages: "React, Tailwind CSS",
    previewLink: "Coming soon...",
  },
  {
    id: 3,
    title: "Adnan Rajeh Videos",
    image: "/images/adnan_videos.png",
    projectType: "Video Platform for Content Creator",
    client: "Adnan Rajeh",
    languages: "React, YouTube API",
    previewLink: "https://github.com/youda97/adnan-rajeh-videos",
  },
  {
    id: 4,
    title: "Old Personal Website",
    image: "/images/personal_website.png",
    projectType: "Personal Portfolio Website",
    client: "Myself",
    languages: "Angular",
    previewLink: "https://yousefouda.netlify.app/",
  },
  {
    id: 5,
    title: "BrainView",
    image: "/images/brainview_mobile.png",
    projectType: "Augmented Reality Application for Surgeons",
    client: "Medical Professionals",
    languages: "Angular, IBM Carbon, Node.js, MongoDB, Unity, C#",
    previewLink: "https://github.com/youda97/BrainView_Frontend",
  },
  {
    id: 6,
    title: "Carbon Components Angular",
    image: "/images/carbon_component_angular.png",
    projectType: "Angular Component Library",
    client: "IBM",
    languages: "Angular, TypeScript",
    previewLink:
      "https://angular.carbondesignsystem.com/?path=/story/getting-started--welcome",
  },
  {
    id: 7,
    title: "Carbon Tutorial Angular",
    image: "/images/carbon_tutorial_angular.png",
    projectType: "Angular Tutorial for Carbon Components",
    client: "IBM",
    languages: "Javascript",
    previewLink:
      "https://carbondesignsystem.com/developing/angular-tutorial/overview/",
  },
  {
    id: 8,
    title: "Carbon Angular Starter",
    image: "/images/carbon_angular_starter.png",
    projectType: "Starter App for Carbon Components Angular",
    client: "IBM",
    languages: "Angular, TypeScript",
    previewLink:
      "https://github.com/carbon-design-system/carbon-angular-starter",
  },
  {
    id: 9,
    title: "Self-Start Body Smart",
    image: "/images/self_start.png",
    projectType: "Online Physiotherapy Service",
    client: "Marcotte Physiotherapy",
    languages: "Ember.js, Node.js, MongoDB",
    previewLink: "https://github.com/UWO-ECE-Software-Engineering/Brigade",
  },
  {
    id: 10,
    title: "Stork DB",
    image: "/images/storkdb.png",
    projectType: "Birdwatcher Directory & Tracker",
    client: "Bird Enthusiasts",
    languages: "Ember.js, SQL, Node.js",
    previewLink: "https://github.com/youda97/StorkDB/tree/master/Assignment4",
  },
  {
    id: 11,
    title: "NASA Collections",
    image: "/images/nasa_collections.png",
    projectType: "NASA Image Search & Sharing App",
    client: "Open Source",
    languages: "Angular 4, Node.js, MongoDB",
    previewLink:
      "https://github.com/youda97/NasaWebpage/tree/master/NasaCollections",
  },
];

interface PortfolioProps {
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

const Portfolio: React.FC<PortfolioProps> = ({ selectedColor }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    console.log(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pb-16 px-5 sm:px-20 lg:px-32 pt-20 sm:pt-0">
      {/* Section Title */}
      <HeaderBanner
        titlePart1="My"
        titlePart2="Portfolio"
        backgroundText="Works"
        selectedColor={selectedColor || "yellow"}
      />

      <div className="text-white">
        <ProjectGrid
          projects={projects}
          selectedColor={selectedColor || "yellow"}
          openModal={openModal}
        />

        {selectedProject && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0,0,0,.85)" }}
          >
            <div className="relative dark:bg-zinc-800 bg-white dark:text-white text-gray-800 rounded-lg sm:p-8 p-6 w-full md:max-w-2xl shadow-lg md:h-auto h-full sm:block flex justify-center flex-col">
              <button
                className="fixed top-7 right-7 dark:text-white text-gray-800 w-8 h-8 flex items-center justify-center"
                onClick={() => closeModal()}
              >
                <FaXmark size={60} color="#ababab" />
              </button>
              <h3
                className={`uppercase pt-2.5 pb-7 text-${selectedColor}-500 sm:text-3xl text-2xl font-extrabold text-center`}
              >
                {selectedProject.title}
              </h3>
              <div className="sm:flex block flex-wrap text-sm dark:text-white text-gray-600">
                <div className="sm:w-1/2 mb-2 flex flex-wrap items-center">
                  <FaFile />
                  <span className="ml-2 text-sm">Project : </span>
                  <span className="ml-1 font-semibold text-sm">
                    {selectedProject.projectType}
                  </span>
                </div>
                <div className="sm:w-1/2 mb-2 flex flex-wrap items-center">
                  <FaUser />
                  <span className="ml-2 text-sm">Client : </span>
                  <span className="ml-1 font-semibold text-sm">
                    {selectedProject.client}
                  </span>
                </div>
                <div className="sm:w-1/2 mb-2 flex flex-wrap items-center">
                  <FaCode />
                  <span className="ml-2 text-sm">Languages : </span>
                  <span className="ml-1 font-semibold text-sm">
                    {selectedProject.languages}
                  </span>
                </div>
                <div className="sm:w-1/2 mb-2 flex flex-wrap items-center">
                  <FaExternalLinkAlt />
                  <span className="ml-2 text-sm">Preview : </span>
                  <a
                    href={selectedProject.previewLink}
                    className={`underline text-${selectedColor}-500 ml-1 font-semibold text-sm truncate`}
                    target="_blank"
                  >
                    {selectedProject.previewLink}
                  </a>
                </div>
              </div>
              <img
                src={selectedProject.image}
                alt="Portfolio Image"
                className="m-auto max-h-[350px] rounded-md mt-4"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
