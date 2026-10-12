import Btn from "./Btn";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa6";
import debbyAlt from "../assets/Debby2.JPG";

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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const corePillars = [
  {
    icon: HiOutlineCpuChip,
    title: "Systemic Architecture",
    description:
      "Deep structural thinking from understanding biological systems, applied to clean, modular React component hierarchies and maintainable state flows.",
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    icon: HiOutlineEye,
    title: "Microscopic Precision",
    description:
      "Meticulous attention to spacing, typography, micro-interactions, responsive behavior, and accessibility across every device viewport.",
    color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30",
  },
  {
    icon: FaLaptopCode,
    title: "Modern Frontend Craft",
    description:
      "Crafting production-grade user experiences with React, Tailwind CSS, reusable UI patterns, and snappy performance optimization.",
    color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Scientific Rigor",
    description:
      "Disciplined problem-solving approach rooted in LAUTECH Anatomy training — analyzing root causes, debugging systematically, and learning continuously.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HiOutlineSparkles className="text-sm" />
            Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Anatomy to{" "}
            <span className="text-gradient-cyan">Algorithms</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            How a scientific foundation in human structure evolved into a passion
            for crafting intuitive, resilient digital systems.
          </p>
        </div>

        {/* TWO-COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* LEFT: IMAGE & CREDENTIALS CARD (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-4 sm:p-5 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 mb-4">
                <img
                  src={debbyAlt}
                  alt="Deborah Osekhimen Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/90 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg font-bold text-white">Ehiguese Deborah</p>
                  <p className="text-xs font-mono text-cyan-300">
                    B.Sc. Anatomy • LAUTECH Graduate
                  </p>
                </div>
              </div>

              {/* QUICK FACTS LIST */}
              <div className="space-y-2.5 pt-2 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-medium">Lagos, Nigeria (WAT)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400">Core Focus:</span>
                  <span className="text-cyan-400 font-medium">React, Tailwind, Modern UI</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: NARRATIVE (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-slate-300"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={item} className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Crafting interfaces with intent, structure, and empathy.
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                I am{" "}
                <span className="text-white font-semibold">
                  Ehiguese Deborah Osekhimen
                </span>
                , a dedicated Frontend Developer based in Lagos, Nigeria. What began as
                genuine fascination with how clean web experiences function quickly became
                my daily craft: architecting user interfaces that are fast, intuitive, and
                delightful to use.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
              <p>
                My educational background as a graduate of the{" "}
                <span className="text-cyan-300 font-medium">
                  Department of Anatomy at Ladoke Akintola University of Technology (LAUTECH)
                </span>{" "}
                gives me a uniquely rigorous foundation. Anatomy is all about studying how
                intricate systems connect, function, and respond under stress.
              </p>
              <p>
                In frontend engineering, I apply that same mental model: treating applications
                not just as code, but as living systems where data flow, layout hierarchies,
                state management, and user interaction must seamlessly harmonize.
              </p>
            </motion.div>

            {/* KEY STRENGTHS BULLETS */}
            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Component-Driven Architecture (React)",
                "Fluid Responsive Design & Mobile Optimization",
                "Clean, Reusable Code & State Management",
                "Accessibility & User-Centered Usability",
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <HiOutlineCheckCircle className="text-cyan-400 text-base shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div variants={item} className="pt-4 flex items-center gap-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                <Btn
                  text="Let's Work Together"
                  icon={HiOutlineArrowRight}
                  variant="primary"
                  size="md"
                />
              </ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
                <Btn text="Check My Skills" variant="secondary" size="md" />
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>

        {/* 4 CORE PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center text-xl mb-4`}
                  >
                    <Icon />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
