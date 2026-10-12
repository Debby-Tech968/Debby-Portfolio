import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileScreen,
  FaCode,
  FaCss3Alt,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiFigma,
  SiVite,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";
import {
  HiOutlineCheckBadge,
  HiOutlineCommandLine,
} from "react-icons/hi2";

const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend Core" },
  { id: "styling", label: "Styling & Motion" },
  { id: "tools", label: "Tools & Workflow" },
];

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    level: "Advanced",
    color: "#61DAFB",
    desc: "Hooks, Custom Components, State Architecture & Lifecycle",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: SiJavascript,
    level: "Advanced",
    color: "#F7DF1E",
    desc: "Async/Await, DOM manipulation, Array methods & closures",
  },
  {
    name: "HTML5 Semantic",
    category: "frontend",
    icon: SiHtml5,
    level: "Expert",
    color: "#E34F26",
    desc: "Semantic elements, SEO-friendly markup, Web Accessibility",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    level: "Expert",
    color: "#1572B6",
    desc: "Flexbox, CSS Grid, animations, variables & responsive rules",
  },
  {
    name: "React Router",
    category: "frontend",
    icon: SiReactrouter,
    level: "Proficient",
    color: "#CA4245",
    desc: "Multi-page SPA navigation, nested routes & route params",
  },
  // Styling
  {
    name: "Tailwind CSS",
    category: "styling",
    icon: SiTailwindcss,
    level: "Advanced",
    color: "#06B6D4",
    desc: "Utility-first design systems, custom themes & v4 features",
  },
  {
    name: "Responsive Web Design",
    category: "styling",
    icon: FaMobileScreen,
    level: "Expert",
    color: "#38BDF8",
    desc: "Mobile-first layouts adapting flawlessly from phone to 4K",
  },
  {
    name: "Framer Motion",
    category: "styling",
    icon: SiFramer,
    level: "Proficient",
    color: "#FF0055",
    desc: "Smooth page transitions, scroll animations & micro-interactions",
  },
  // Tools
  {
    name: "Git & Version Control",
    category: "tools",
    icon: FaGitAlt,
    level: "Advanced",
    color: "#F05032",
    desc: "Branching strategies, conflict resolution & commits hygiene",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: FaGithub,
    level: "Advanced",
    color: "#FFFFFF",
    desc: "Repo management, issues, pull requests & open source",
  },
  {
    name: "Figma to Code",
    category: "tools",
    icon: SiFigma,
    level: "Proficient",
    color: "#F24E1E",
    desc: "Translating wireframes & UI specs into 1:1 pixel-perfect code",
  },
  {
    name: "Vite & Tooling",
    category: "tools",
    icon: SiVite,
    level: "Proficient",
    color: "#646CFF",
    desc: "Fast HMR, modern bundling & optimized production builds",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HiOutlineCommandLine className="text-sm" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            The core tools and modern engineering practices I use to translate
            complex ideas into high-performing, elegant web applications.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-300"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}30`,
                      }}
                    >
                      <Icon />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* TECHNICAL PRINCIPLES CALLOUT */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <FaCode className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Clean &amp; Reusable</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Writing DRY, modular components that are easy to maintain and scale over time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <FaMobileScreen className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Fluid Responsiveness</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Rigorous testing across screen resolutions to ensure pixel-perfect fidelity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <HiOutlineCheckBadge className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Accessible &amp; Fast</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimizing for user experience, low latency, and semantic accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
