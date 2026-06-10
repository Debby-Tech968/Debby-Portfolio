import React from "react";
import projectsData from "../data/projects.json";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="text-white">
      {/* HEADER */}
      <div className="text-center px-4 sm:px-6 md:px-16 py-10 md:py-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 md:mt-10">
          My Projects
        </h1>

        <p className="text-gray-300 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg">
          Here are some of my projects:
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-6 md:px-16 pb-16">
        {projectsData.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            className="bg-[#121822] p-4 sm:p-5 rounded-xl text-white shadow-lg"
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-lg mb-4"
            />

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">
              {project.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-xs sm:text-sm mb-4">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs bg-blue-500 px-2 py-1 rounded-lg text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex justify-between text-sm sm:text-base">
              <a
                href={project.live}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-gray-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
