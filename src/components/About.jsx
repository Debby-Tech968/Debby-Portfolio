import React from "react";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.7, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-20 text-white"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-8 md:mb-12 text-center md:text-left"
        variants={item}
      >
        About Me
      </motion.h1>

      <div className="max-w-3xl mx-auto md:mx-0 space-y-5 text-gray-300 leading-relaxed">
        {/* Intro */}
        <motion.p className="text-base sm:text-lg" variants={item}>
          I'm{" "}
          <span className="text-blue-400 font-semibold">
            Ehiguese Deborah Osekhimen
          </span>
          , a Frontend Developer focused on building clean, responsive, and
          user-friendly web applications.
        </motion.p>

        <motion.p className="text-sm sm:text-base md:text-lg" variants={item}>
          I started my journey in web development out of curiosity about how
          websites work and how user interfaces are built.
        </motion.p>

        <motion.p className="text-sm sm:text-base md:text-lg" variants={item}>
          Over time, that curiosity turned into a strong passion for creating
          smooth and interactive digital experiences.
        </motion.p>

        <motion.p className="text-sm sm:text-base md:text-lg" variants={item}>
          I enjoy transforming ideas into real, functional websites using modern
          frontend technologies.
        </motion.p>

        <motion.p className="text-sm sm:text-base md:text-lg" variants={item}>
          In addition to coding, I'm a graduate of the{" "}
          <span className="text-blue-400 font-semibold">
            Department of Anatomy, Ladoke Akintola University of Technology,
          </span>{" "}
          which has helped shape my discipline, attention to detail, and
          problem-solving mindset — all of which I apply in my development work.
        </motion.p>

        {/* CTA */}
        <motion.div className="pt-8 text-center md:text-left" variants={item}>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Let's work together and build something amazing.
          </p>

          <Link to="contact" smooth={true} duration={500}>
            <Btn
              text="Contact Me"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
