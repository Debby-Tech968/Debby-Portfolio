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

const techStack = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript ES6+", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Framer Motion", icon: SiFramer, color: "#FF0055" },
  { name: "Vite Bundler", icon: SiVite, color: "#646CFF" },
  { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  { name: "Git & Version Control", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Figma to Code", icon: SiFigma, color: "#F24E1E" },
  { name: "HTML5 Semantic", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3 Layouts", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Responsive UI", icon: FaMobileScreen, color: "#38BDF8" },
];

const TechMarquee = () => {
  // Repeat techStack twice for a seamless infinite loop
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="w-full bg-black py-7 border-y border-[#1a1a1a] overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 mb-3.5 text-center">
        <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          Core Technologies &amp; Production Stack
        </p>
      </div>

      {/* Left and Right Fading Gradient Edge Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee py-1">
        {duplicatedTech.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 mx-1.5 sm:mx-2 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-cyan-500/40 transition-all shrink-0 group"
            >
              <Icon
                className="w-4 h-4 text-sm sm:text-base transition-transform group-hover:scale-110 shrink-0"
                style={{ color: tech.color }}
              />
              <span className="text-xs sm:text-sm font-medium font-mono text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
