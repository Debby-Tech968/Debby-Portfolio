import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  ArrowDown,
  Mail,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import Btn from "./Btn";
import image from "../assets/Debby1.jpg";

const Herosection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden w-full">
      {/* Subtle solid radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* TEXT CONTENT (7 cols) */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          {/* AVAILABILITY STATUS PILL */}
          <div className="mb-4 inline-block">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272a] text-zinc-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend Roles &amp; Freelance</span>
            </div>
          </div>

          {/* NAME & TITLE */}
          <div className="space-y-2 mb-4 w-full">
            <p className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Hello World, I'm
            </p>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] break-words">
              Ehiguese Deborah{" "}
              <span className="block text-gradient-cyan mt-1">
                Osekhimen
              </span>
            </h1>
          </div>

          {/* DYNAMIC TYPEWRITER TITLE */}
          <div className="text-base sm:text-xl md:text-2xl font-semibold text-zinc-300 mb-5 min-h-[36px] flex items-center justify-center lg:justify-start gap-2">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0 hidden sm:inline" />
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React.js Specialist",
                2000,
                "UI/UX Design Craftsman",
                2000,
                "Anatomy Graduate & Developer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-cyan-400 font-mono"
            />
          </div>

          {/* VALUE PROPOSITION BIO */}
          <p className="max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            Building responsive, pixel-perfect web applications using{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-white font-medium">modern JavaScript</span>.
            Combining scientific rigor from Human Anatomy with engineering craft to deliver fast,
            intuitive digital products.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 mb-10 w-full sm:w-auto">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={600}
              offset={-70}
              className="w-full xs:w-auto"
            >
              <Btn
                text="Explore My Work"
                icon={ArrowDown}
                variant="primary"
                size="lg"
                className="w-full xs:w-auto"
              />
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="w-full xs:w-auto"
            >
              <Btn
                text="Get In Touch"
                variant="secondary"
                size="lg"
                className="w-full xs:w-auto"
              />
            </ScrollLink>
          </div>

          {/* SOCIAL & STATS STRIP */}
          <div className="pt-6 border-t border-[#1f1f1f] w-full flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* SOCIAL CHANNELS */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] hover:border-cyan-500/50 flex items-center justify-center text-zinc-300 hover:text-white transition"
                title="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] hover:border-cyan-500/50 flex items-center justify-center text-zinc-300 hover:text-cyan-400 transition"
                title="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] hover:border-emerald-500/50 flex items-center justify-center text-zinc-300 hover:text-emerald-400 transition"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-base" />
              </a>
              <a
                href="mailto:osekhimen2020@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] hover:border-cyan-500/50 flex items-center justify-center text-zinc-300 hover:text-cyan-400 transition"
                title="Email Deborah"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* ANIMATED STATS WITH REACT-COUNTUP */}
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  <CountUp end={4} duration={2.5} />+
                </p>
                <p className="text-[11px] text-zinc-500 font-mono">Shipped Projects</p>
              </div>
              <div className="w-px h-7 bg-[#27272a]" />
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-bold font-mono text-zinc-200">
                  <CountUp end={100} duration={2.5} />%
                </p>
                <p className="text-[11px] text-zinc-500 font-mono">Mobile Responsive</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE / VISUAL CARD (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative solid-surface p-3 sm:p-4 rounded-3xl border border-[#222222] shadow-2xl max-w-[280px] xs:max-w-[320px] sm:max-w-sm w-full"
          >
            {/* Card Window Bar */}
            <div className="flex items-center justify-between pb-2.5 px-2 border-b border-[#1f1f1f] mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] text-zinc-500">
                deborah.profile.tsx
              </span>
            </div>

            {/* Profile Photo */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#111111]">
              <img
                src={image}
                alt="Ehiguese Deborah Osekhimen"
                className="w-full h-full object-cover object-top filter brightness-[0.96]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

              {/* In-Photo Badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/85 border border-[#27272a] backdrop-blur-md">
                <p className="text-xs font-semibold text-white">Ehiguese Deborah</p>
                <p className="text-[11px] text-cyan-400 font-mono">Frontend Engineer • Lagos, NG</p>
              </div>
            </div>

            {/* Safe Corner Tech Badges */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141414] border border-[#27272a] text-cyan-300 text-xs font-mono">
                <FaReact className="text-cyan-400" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141414] border border-[#27272a] text-sky-300 text-xs font-mono">
                <SiTailwindcss className="text-cyan-400" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
