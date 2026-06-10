import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Figma",
  "Responsive Design",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16"
    >
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My Skills
        </h1>

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Here are some of the technologies and tools I have experience with:
        </p>
      </div>

      {/* SKILLS GRID */}
      <motion.div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          md:gap-6
          max-w-6xl
          mx-auto
        "
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.05,
            }}
            className="
              bg-[#121822]
              text-blue-400
              text-center
              py-4
              px-3
              rounded-xl
              font-semibold
              shadow-lg
              text-sm
              sm:text-base
              cursor-pointer
              hover:bg-[#1a202c]
              transition-all
              duration-300
            "
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
