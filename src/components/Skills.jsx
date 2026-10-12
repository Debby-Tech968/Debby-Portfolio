import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileScreen,
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
    desc: "Custom hooks, component modularity & state architecture",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: SiJavascript,
    level: "Advanced",
    color: "#F7DF1E",
    desc: "Async/await, DOM APIs, modern ES features & closures",
  },
  {
    name: "HTML5 Semantic",
    category: "frontend",
    icon: SiHtml5,
    level: "Expert",
    color: "#E34F26",
    desc: "Semantic elements, accessible hierarchy & SEO structure",
  },
  {
    name: "CSS3 & Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    level: "Expert",
    color: "#1572B6",
    desc: "Flexbox, CSS Grid, media queries & responsive behavior",
  },
  {
    name: "React Router",
    category: "frontend",
    icon: SiReactrouter,
    level: "Proficient",
    color: "#CA4245",
    desc: "Client-side routing, route parameters & navigation flows",
  },
  // Styling
  {
    name: "Tailwind CSS",
    category: "styling",
    icon: SiTailwindcss,
    level: "Advanced",
    color: "#06B6D4",
    desc: "Utility-first design systems, custom themes & responsive rules",
  },
  {
    name: "Responsive Design",
    category: "styling",
    icon: FaMobileScreen,
    level: "Expert",
    color: "#38BDF8",
    desc: "Mobile-first layouts adapting cleanly across phones, tablets & desktops",
  },
  {
    name: "Framer Motion",
    category: "styling",
    icon: SiFramer,
    level: "Proficient",
    color: "#FF0055",
    desc: "Micro-interactions, spring physics & scroll animations",
  },
  // Tools
  {
    name: "Git & Version Control",
    category: "tools",
    icon: FaGitAlt,
    level: "Advanced",
    color: "#F05032",
    desc: "Branch workflows, atomic commits & version history",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: FaGithub,
    level: "Advanced",
    color: "#FFFFFF",
    desc: "Repository management, pull requests & open source",
  },
  {
    name: "Figma to Code",
    category: "tools",
    icon: SiFigma,
    level: "Proficient",
    color: "#F24E1E",
    desc: "Translating wireframes & UI specs into 1:1 pixel-accurate code",
  },
  {
    name: "Vite Bundler",
    category: "tools",
    icon: SiVite,
    level: "Proficient",
    color: "#646CFF",
    desc: "Hot module reloading, bundle optimization & fast builds",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black relative w-full">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272a] text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            The core tools and modern engineering practices I use to translate
            ideas into clean, performant, and resilient applications.
          </p>
        </div>

        {/* CATEGORY TABS (RESPONSIVE NO-SCROLLBAR ON MOBILE) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 px-1">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#181818] border border-[#222222]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-14">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="solid-surface solid-surface-hover p-4 sm:p-5 rounded-2xl border border-[#222222] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: "#161616",
                        color: skill.color,
                        border: "1px solid #27272a",
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#161616] text-zinc-400 border border-[#262626]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ENGINEERING PRINCIPLES CALLOUT */}
        <div className="solid-surface p-5 sm:p-8 rounded-3xl border border-[#222222]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#141414] text-cyan-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Clean &amp; Reusable</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Writing DRY, modular components that are effortless to maintain and scale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#141414] text-cyan-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Fluid Responsiveness</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Rigorously tested across handheld screens, tablets, and wide monitors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#141414] text-emerald-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Accessible &amp; Fast</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Optimized for speed, accessible semantic tags, and smooth rendering.
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
