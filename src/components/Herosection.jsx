import React from "react";
import Btn from "./Btn";
import image from "../assets/Debby1.jpg";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const Herosection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-24 md:py-0 gap-10">
      {/* TEXT */}
      <motion.div
        className="flex-1 text-center md:text-left"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-base sm:text-lg mb-2 text-white font-bold"
          variants={item}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-500"
          variants={item}
        >
          Ehiguese Deborah Osekhimen
        </motion.h1>

        <motion.h2
          className="text-base sm:text-xl md:text-2xl font-medium mb-6 text-blue-400"
          variants={item}
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed text-gray-400 text-sm sm:text-base"
          variants={item}
        >
          I'm a detail-oriented and creative Frontend Developer passionate about
          building responsive, user-friendly, and visually engaging web
          applications. I enjoy turning ideas into interactive digital
          experiences using modern frontend technologies while continuously
          learning and improving my skills.
        </motion.p>

        <motion.div variants={item}>
          <a href="mailto:osekhimen2020@gmail.com">
            <Btn
              text="Hire Me"
              className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-3 px-6 rounded-lg"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      {/* IMAGE */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end items-center w-full px-6 md:px-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={image}
          alt="Ehiguese Deborah Osekhimen"
          className="w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Herosection;
