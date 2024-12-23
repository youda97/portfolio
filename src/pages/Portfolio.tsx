import React, { useState } from "react";
import {
  FaCode,
  FaExternalLinkAlt,
  FaRegClipboard,
  FaRegFile,
  FaRegUser,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
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
    description:
      "An intuitive soccer drop-in app that lets players join and track local games easily and securely. Admins can efficiently manage and organize events and payments are securely processed using Stripe, and players can be added to waitlists to automatically join events when spots open up. Players can also request a refund (minus a processing fee) if they wish to cancel.",
    previewLink: "https://soccer-drop-in.web.app/",
    type: "video",
    videoSrc: "/videos/soccer_dropin.mp4",
  },
  {
    id: 2,
    title: "New Portfolio Site",
    image: "/images/portfolio.png",
    projectType: "Personal Portfolio Website",
    client: "Myself",
    languages: "React, Tailwind CSS",
    description:
      "Showcasing my professional journey, projects, and skills. Learn more about me, explore my work, and get in touch to collaborate.",
    previewLink: "https://portfolio-yousefouda.vercel.app/",
    type: "photo",
  },
  {
    id: 3,
    title: "Adnan Rajeh Videos",
    image: "/images/adnan_videos.png",
    projectType: "Video Platform for Content Creator",
    client: "Adnan Rajeh",
    languages: "React, YouTube API",
    description:
      "This website is a hub for a YouTube content creator, integrating the YouTube API for a seamless experience. The homepage auto-plays the latest video, displays playlists in a Netflix-style layout, and offers detailed video info on hover or in a modal. Users can explore playlists, watch live streams, and search for videos, all in a sleek and interactive design.",
    previewLink: "https://github.com/youda97/adnan-rajeh-videos",
    type: "video",
    videoSrc: "/videos/adnan_tv.mp4",
  },
  {
    id: 4,
    title: "Old Personal Website",
    image: "/images/personal_website.png",
    projectType: "Personal Portfolio Website",
    client: "Myself",
    languages: "Angular",
    description:
      "My previous personal website features an innovative design where visitors were greeted with a video that seamlessly transitiones into a phone display. As users scroll, the site showcases my projects, skills, and background in a visually engaging and professional layout, offering an interactive experience that highlights my personal and professional identity.",
    previewLink: "https://yousefouda.netlify.app/",
    type: "video",
    videoSrc: "/videos/old_personal_site.mp4",
  },
  {
    id: 5,
    title: "BrainView",
    image: "/images/brainview_mobile.png",
    projectType: "Augmented Reality Application for Surgeons",
    client: "Medical Professionals",
    languages: "Angular, IBM Carbon, Node.js, MongoDB, Unity, C#",
    description:
      "An augmented reality application assisting surgeons in treating hydrocephalus and provides neuronavigational assistance in the placement of the external ventricular drain. The web app manages ventricle uploads and surgeon assignments, while the mobile app handles AR projection onto the patient’s skull.",
    previewLink: "https://github.com/youda97/BrainView_Frontend",
    type: "youtube",
    videoId: "I1txot6aJBM",
  },
  {
    id: 6,
    title: "Carbon Components Angular",
    image: "/images/carbon_component_angular.png",
    projectType: "Angular Component Library",
    client: "IBM",
    languages: "Angular, TypeScript",
    description:
      "A library that provides front-end developers & engineers a collection of reusable Angular components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.",
    previewLink:
      "https://angular.carbondesignsystem.com/?path=/story/getting-started--welcome",
    type: "photo",
  },
  {
    id: 7,
    title: "Carbon Tutorial Angular",
    image: "/images/carbon_tutorial_angular.png",
    projectType: "Angular Tutorial for Carbon Components",
    client: "IBM",
    languages: "Javascript",
    description:
      "A tutorial that guides the user in creating an Angular app using Carbon Components. It tutorial step illustrates a differe t aspect of developing web applications and introduces best practices.",
    previewLink:
      "https://carbondesignsystem.com/developing/angular-tutorial/overview/",
    type: "photo",
  },
  {
    id: 8,
    title: "Carbon Angular Starter",
    image: "/images/carbon_angular_starter.png",
    projectType: "Starter App for Carbon Components Angular",
    client: "IBM",
    languages: "Angular, TypeScript",
    description:
      "A simple starter app for boostraping with Carbon Components Angular. The boilerplate already as all the dependecies installed and is ready for you to start developing your app.",
    previewLink:
      "https://github.com/carbon-design-system/carbon-angular-starter",
    type: "photo",
  },
  {
    id: 9,
    title: "Self-Start Body Smart",
    image: "/images/self_start.png",
    projectType: "Online Physiotherapy Service",
    client: "Marcotte Physiotherapy",
    languages: "Ember.js, Node.js, MongoDB",
    description:
      "An online application that brings the treatment of a physiotherapist into the client's home and improve the traditional approach of the patient’s progression assessment.",
    previewLink: "https://github.com/UWO-ECE-Software-Engineering/Brigade",
    type: "photo",
  },
  {
    id: 10,
    title: "Stork DB",
    image: "/images/storkdb.png",
    projectType: "Birdwatcher Directory & Tracker",
    client: "Bird Enthusiasts",
    languages: "Ember.js, SQL, Node.js, MongoDB",
    description:
      "A dynamic directory for bird watchers, enabling the user to track and monitor their progress and activity. Made use of information systems and data management tools like SQL.",
    previewLink: "https://github.com/youda97/StorkDB/tree/master/Assignment4",
    type: "video",
    videoSrc: "",
  },
  {
    id: 11,
    title: "NASA Collections",
    image: "/images/nasa_collections.png",
    projectType: "NASA Image Search & Sharing App",
    client: "Open Source",
    languages: "Angular 4, Node.js, MongoDB",
    description:
      "A web application using server-side and client-side scripting to display images from NASA with the ability to search based on a given phrase, create image collections, and share those images with others. Developed a client application using a ReSTfull web API and incorporate 3rd party services and implemented an authentication protocol and provided different levels of functionality to authenticated vs. unauthenticated users.",
    previewLink:
      "https://github.com/youda97/NasaWebpage/tree/master/NasaCollections",
    type: "photo",
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
  const [isLoading, setIsLoading] = useState(true);

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
            className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto"
            style={{ backgroundColor: "rgba(0,0,0,.85)" }}
          >
            <div
              className="relative dark:bg-zinc-800 bg-white dark:text-white text-gray-800 rounded-lg sm:p-8 p-6 w-full md:max-w-2xl shadow-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
              style={{ maxHeight: "90vh", overflow: "auto" }} // Ensure scrolling for content
            >
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
                  <FaRegFile />
                  <span className="ml-2 text-sm">Project : </span>
                  <span className="ml-1 font-semibold text-sm">
                    {selectedProject.projectType}
                  </span>
                </div>
                <div className="sm:w-1/2 mb-2 flex flex-wrap items-center">
                  <FaRegUser />
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
                    rel="noopener noreferrer"
                  >
                    {selectedProject.previewLink}
                  </a>
                </div>
                <div className="mb-2 flex flex-wrap items-center">
                  <FaRegClipboard />
                  <span className="ml-2 text-sm">Description : </span>
                  <span className={`ml-1 font-base text-sm`}>
                    {selectedProject.description}
                  </span>
                </div>
              </div>
              {selectedProject.type === "photo" ? (
                <img
                  src={selectedProject.image}
                  alt="Portfolio Image"
                  className="mx-auto rounded-md mt-4 object-contain"
                  style={{
                    maxHeight: "60vh", // Ensure the image doesn't exceed modal height
                    maxWidth: "100%",
                  }}
                />
              ) : selectedProject.type === "video" ? (
                <video
                  className="w-full h-full mt-4 object-contain rounded-md"
                  controls
                  preload="metadata"
                  style={{
                    maxHeight: "60vh", // Ensure the video doesn't exceed modal height
                    maxWidth: "100%",
                  }}
                >
                  <source src={selectedProject.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  className="relative rounded-md w-full"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                      <div className="loader border-t-4 w-8 h-8 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <iframe
                    className={`mx-auto rounded-md mt-4 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      aspectRatio: "16 / 9",
                    }}
                    src={`https://www.youtube.com/embed/${selectedProject.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
