import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Project } from "../types/project";

interface ProjectGridProps {
  projects: Project[];
  selectedColor: string;
  openModal: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  selectedColor,
  openModal,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0,
        });

        return (
          <motion.div
            ref={ref}
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: index / 15 },
                  }
                : {}
            }
            className="relative cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => openModal(project)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-lg m-auto w-[88%]"
              style={{
                backgroundImage: `url(${project.image})`,
                filter: "blur(20px)",
              }}
            ></div>
            {/* Container with fixed aspect ratio */}
            <div className="w-full h-full aspect-w-4 aspect-h-3">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Overlay */}
            <div
              className={`absolute -inset-1 bg-${selectedColor}-500 flex items-center justify-center -translate-y-full group-hover:translate-y-0 transition-transform duration-500`}
            >
              <span className="text-white font-bold text-lg text-center">
                {project.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
