import Marquee from "react-fast-marquee";
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
  return (
    <div className="w-full bg-black py-8 border-y border-[#1c1c1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
          Core Technologies &amp; Production Stack
        </p>
      </div>

      <Marquee
        gradient={true}
        gradientColor="#000000"
        gradientWidth={60}
        speed={35}
        pauseOnHover={true}
      >
        <div className="flex items-center gap-4 sm:gap-6 py-2 px-3">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0c0c0c] border border-[#222222] hover:border-cyan-500/40 transition-all select-none group shrink-0"
              >
                <Icon
                  className="w-4 h-4 text-base transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-xs sm:text-sm font-medium font-mono text-zinc-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default TechMarquee;
