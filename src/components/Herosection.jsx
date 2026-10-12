import Btn from "./Btn";
import image from "../assets/Debby1.jpg";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { HiArrowDown, HiSparkles, HiOutlineEnvelope } from "react-icons/hi2";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
    },
  },
};

const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* TEXT CONTENT (7 cols on lg) */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* AVAILABILITY PILL */}
          <motion.div variants={item} className="mb-5 inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Frontend Roles &amp; Freelance
            </div>
          </motion.div>

          {/* NAME & GREETING */}
          <motion.div variants={item} className="space-y-2 mb-4">
            <p className="text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wider">
              HELLO WORLD, I'M
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ehiguese Deborah{" "}
              <span className="block text-gradient-cyan mt-1">
                Osekhimen
              </span>
            </h1>
          </motion.div>

          {/* SUBTITLE */}
          <motion.h2
            variants={item}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-6 flex items-center justify-center lg:justify-start gap-2"
          >
            <span>Frontend Developer &amp; React Specialist</span>
            <HiSparkles className="text-cyan-400 text-lg hidden sm:inline" />
          </motion.h2>

          {/* PITCH / BIO */}
          <motion.p
            variants={item}
            className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
          >
            I architect responsive, pixel-perfect, and user-centric web applications
            using <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-white font-medium">modern JavaScript</span>.
            Bridging an analytical mindset from Human Anatomy with creative engineering
            craft to build clean, intuitive digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
          >
            <ScrollLink to="projects" smooth={true} duration={600} offset={-70}>
              <Btn
                text="Explore My Work"
                icon={HiArrowDown}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-cyan-500/25"
              />
            </ScrollLink>

            <ScrollLink to="contact" smooth={true} duration={600} offset={-70}>
              <Btn
                text="Get In Touch"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              />
            </ScrollLink>
          </motion.div>

          {/* SOCIAL & QUICK STATS BAR */}
          <motion.div
            variants={item}
            className="pt-6 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 mr-1 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition"
                title="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-[#0a66c2] hover:bg-slate-800 transition"
                title="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a
                href="mailto:osekhimen2020@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition"
                title="Email Deborah"
              >
                <HiOutlineEnvelope className="text-lg" />
              </a>
            </div>

            {/* METRICS */}
            <div className="flex items-center gap-6 text-center sm:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  4+
                </p>
                <p className="text-xs text-slate-400">Shipped Projects</p>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">
                  100%
                </p>
                <p className="text-xs text-slate-400">Responsive UI</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE / VISUAL CARD (5 cols on lg) */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 15 }}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl transform scale-95" />

          {/* Main Card Container */}
          <div className="relative glass-card p-3 sm:p-4 rounded-3xl border border-white/10 shadow-2xl max-w-sm sm:max-w-md w-full">
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                deborah.profile.tsx
              </span>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-900 group">
              <img
                src={image}
                alt="Ehiguese Deborah Osekhimen"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-60" />
              
              {/* Bottom tag inside photo */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card backdrop-blur-md border border-white/10">
                <p className="text-xs font-semibold text-white">Ehiguese Deborah</p>
                <p className="text-[11px] text-cyan-300 font-mono">Frontend Engineer • Lagos, NG</p>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold shadow-lg flex items-center gap-1.5 animate-float backdrop-blur-md">
              <FaReact className="text-cyan-400 text-base" />
              React.js
            </div>

            <div
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold shadow-lg flex items-center gap-1.5 animate-float backdrop-blur-md"
              style={{ animationDelay: "2.5s" }}
            >
              <SiTailwindcss className="text-cyan-400 text-base" />
              Tailwind CSS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
