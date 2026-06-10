import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 sm:px-6 md:px-16 py-16 text-white max-w-6xl mx-auto"
    >
      {/* HEADER */}
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get In Touch
        </h1>

        <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base">
          Have a project idea or want to collaborate? Let’s work together.
        </p>
      </div>

      {/* CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
            Contact Info
          </h2>

          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            I’m open to internships, freelance roles, and collaboration
            opportunities.
          </p>

          <div className="space-y-3 text-gray-300 text-sm sm:text-base">
            <p>📍 Lagos, Nigeria</p>
            <p>📧 osekhimen2020@gmail.com</p>
            <p>📱 WhatsApp available</p>
          </div>

          <a href="mailto:osekhimen2020@gmail.com">
            <button className="mt-6 w-full md:w-auto bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              Send Email
            </button>
          </a>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          action="https://formspree.io/f/xvznaaek"
          method="POST"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#121822] p-4 sm:p-6 rounded-xl shadow-lg space-y-4 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white outline-none text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white outline-none text-sm sm:text-base"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded bg-[#0f172a] text-white outline-none text-sm sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;