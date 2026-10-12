import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  GraduationCap,
  Sparkles,
  Cpu,
  Eye,
  ArrowRight,
  CheckCircle2,
  Code2,
} from "lucide-react";
import Btn from "./Btn";
import debbyAlt from "../assets/Debby2.JPG";

const corePillars = [
  {
    icon: Cpu,
    title: "Systemic Architecture",
    description:
      "Deep structural understanding from biological systems, applied to modular React component hierarchies and predictable state flows.",
    tag: "React & Architecture",
  },
  {
    icon: Eye,
    title: "Microscopic Precision",
    description:
      "Meticulous eye for layout spacing, typography scales, accessibility compliance, and pixel accuracy across all viewport widths.",
    tag: "UI Engineering",
  },
  {
    icon: Code2,
    title: "Modern Frontend Craft",
    description:
      "Crafting production-ready applications with React, Tailwind CSS, reusable UI patterns, and high-performance loading speeds.",
    tag: "Clean Code",
  },
  {
    icon: GraduationCap,
    title: "Scientific Rigor",
    description:
      "Disciplined problem-solving approach rooted in LAUTECH Anatomy training — systematically identifying root causes and debugging.",
    tag: "Analytical Mindset",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black relative w-full">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272a] text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background &amp; Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Anatomy to{" "}
            <span className="text-gradient-cyan">Algorithms</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            How a scientific foundation in human structure evolved into an obsession
            for building resilient, human-centered digital experiences.
          </p>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* LEFT: IMAGE & STATS CARD (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="solid-surface p-3.5 sm:p-5 rounded-3xl border border-[#222222] shadow-2xl max-w-[280px] xs:max-w-[320px] sm:max-w-sm w-full"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#111111] mb-3.5">
                <img
                  src={debbyAlt}
                  alt="Deborah Osekhimen Portrait"
                  className="w-full h-full object-cover object-center filter brightness-[0.96]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 border border-[#27272a] backdrop-blur-md">
                  <p className="text-sm font-bold text-white">Ehiguese Deborah</p>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Sc. Anatomy • LAUTECH Graduate
                  </p>
                </div>
              </div>

              {/* QUICK FACTS LIST */}
              <div className="space-y-2 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-white font-medium">Lagos, Nigeria (WAT)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <span className="text-zinc-500">Focus:</span>
                  <span className="text-cyan-400 font-medium">React, Tailwind, Modern UI</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#111111] border border-[#222222]">
                  <span className="text-zinc-500">Status:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: NARRATIVE (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Crafting interfaces with structure, precision, and empathy.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                I am{" "}
                <span className="text-white font-semibold">
                  Ehiguese Deborah Osekhimen
                </span>
                , a dedicated Frontend Developer based in Lagos, Nigeria. What began as
                curiosity about how web applications operate quickly evolved into my daily craft:
                engineering user interfaces that are fast, intuitive, and accessible.
              </p>
            </div>

            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-zinc-400">
              <p>
                Graduating from the{" "}
                <span className="text-cyan-300 font-medium">
                  Department of Anatomy at Ladoke Akintola University of Technology (LAUTECH)
                </span>{" "}
                shaped my mental model. Anatomy is the science of interconnected systems,
                structural balance, and function under pressure.
              </p>
              <p>
                In software development, I apply that same mental model: treating applications
                as living systems where component hierarchies, data flows, state management,
                and user feedback must work together harmoniously.
              </p>
            </div>

            {/* KEY STRENGTHS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                "Component-Driven Architecture (React)",
                "Fluid Responsive Design on All Devices",
                "Clean, Reusable Code & State Management",
                "Accessibility & User-Centered Usability",
              ].map((strength, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="pt-4 flex flex-col xs:flex-row items-center gap-3">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full xs:w-auto"
              >
                <Btn
                  text="Let's Work Together"
                  icon={ArrowRight}
                  variant="primary"
                  size="md"
                  className="w-full xs:w-auto"
                />
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full xs:w-auto"
              >
                <Btn
                  text="Explore Tech Stack"
                  variant="secondary"
                  size="md"
                  className="w-full xs:w-auto"
                />
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* 4 CORE PILLARS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="solid-surface solid-surface-hover p-5 sm:p-6 rounded-2xl border border-[#222222] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#27272a] flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">
                    {pillar.tag}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
