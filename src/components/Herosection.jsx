import React from "react";
import Btn from "./Btn";
import image from "../assets/Debby1.JPG";
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
    <section className="min-h-screen flex flex-col md:flex-row items-center mt-15 md:mt-0 justify-between px-6 md:px-16 gap-10">
      {/* TEXT */}
      <motion.div
        className="flex-1 text-center md:text-left mt-10 md:mt-40"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p className="text-lg mb-2 text-white font-bold" variants={item}>
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-500"
          variants={item}
        >
          Ehiguese Deborah Osekhimen
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-blue-400"
          variants={item}
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed text-gray-400"
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
      <motion.div
        className="flex-1 flex justify-center w-full mt-20 md:mt-30"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={image}
          alt="Ehiguese Deborah Osekhimen"
          className="
            w-full
            max-w-70
            sm:max-w-88
            md:max-w-md
            lg:max-w-125
            h-auto
            ml-23
            rounded-2xl
            shadow-2xl
            object-cover
          "
        />
      </motion.div>
    </section>
  );
};

export default Herosection;
