import { useState } from "react";
import projectsData from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  FolderGit2,
  CheckCircle2,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const categories = [
  "All",
  "Featured",
  "E-Commerce",
  "Dashboard & Analytics",
  "Web Applications",
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black relative w-full">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272a] text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            A curated showcase of responsive web applications, analytical dashboards,
            and e-commerce systems engineered with modern frontend architecture.
          </p>
        </div>

        {/* CATEGORY FILTER TABS (SWIPABLE ON MOBILE) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2 px-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === category
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#181818] border border-[#222222]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || `${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="solid-surface rounded-3xl border border-[#222222] overflow-hidden flex flex-col justify-between group hover:border-[#38bdf8]/40 transition-all duration-300"
              >
                <div>
                  {/* PROJECT IMAGE PREVIEW */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* TOP BADGES */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-medium bg-black/85 text-zinc-300 border border-[#27272a] backdrop-blur-md">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-medium bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-7">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* HIGHLIGHTS */}
                    {project.highlights && (
                      <div className="space-y-1.5 mb-5">
                        {project.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-zinc-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* TECH TAGS */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#141414] text-zinc-300 border border-[#242424]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="px-5 sm:px-7 pb-5 pt-3 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition select-none"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#141414] text-zinc-300 hover:text-white hover:bg-[#1f1f1f] border border-[#262626] transition select-none"
                      title="View GitHub Repository"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer underline underline-offset-4 py-1"
                  >
                    Details &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* QUICK DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="solid-surface max-w-2xl w-full rounded-3xl border border-[#27272a] overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col bg-[#0c0c0c]"
            >
              {/* MODAL HEADER */}
              <div className="p-4 sm:p-5 border-b border-[#1f1f1f] flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-[#161616] text-zinc-400 hover:text-white border border-[#262626] cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* MODAL BODY */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 no-scrollbar">
                <div className="rounded-xl overflow-hidden border border-[#222222]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.highlights && (
                  <div className="space-y-2 pt-1">
                    <p className="text-xs font-mono text-cyan-400 uppercase">
                      Architecture Highlights
                    </p>
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <p className="text-xs font-mono text-zinc-400 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#141414] text-cyan-300 border border-[#27272a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-4 sm:p-5 border-t border-[#1f1f1f] flex items-center justify-end gap-3 bg-[#0a0a0a]">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#161616] text-zinc-200 hover:text-white border border-[#27272a] transition"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
