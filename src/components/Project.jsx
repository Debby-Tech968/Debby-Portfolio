import { useState } from "react";
import projectsData from "../data/projects.json";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineExternalLink,
  HiOutlineSparkles,
  HiOutlineFolder,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HiOutlineFolder className="text-sm" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A curated showcase of responsive web applications, analytical dashboards,
            and e-commerce systems built with modern frontend architecture.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? "bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || `${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* PROJECT IMAGE PREVIEW */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-80" />

                    {/* TOP BADGES */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1">
                          <HiOutlineSparkles className="text-xs" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* KEY HIGHLIGHTS */}
                    {project.highlights && (
                      <div className="space-y-1.5 mb-6">
                        {project.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-400"
                          >
                            <HiOutlineCheckCircle className="text-cyan-400 text-sm shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* TECH TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 shadow-md shadow-cyan-500/20 transition"
                    >
                      <span>Live Demo</span>
                      <HiOutlineExternalLink className="text-base" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700/90 border border-white/10 transition"
                      title="View GitHub Repository"
                    >
                      <FaGithub className="text-base" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 cursor-pointer underline underline-offset-4"
                  >
                    Quick Details
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-2xl w-full rounded-3xl border border-white/15 overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* MODAL HEADER */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <HiX className="text-xl" />
                </button>
              </div>

              {/* MODAL BODY */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.highlights && (
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono text-cyan-300 uppercase">
                      Architecture Highlights
                    </p>
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <HiOutlineCheckCircle className="text-cyan-400 text-base shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <p className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-5 border-t border-white/10 flex items-center justify-end gap-3 bg-slate-900/40">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:text-white border border-white/10 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-md shadow-cyan-500/20 transition"
                >
                  <span>Open Live Site</span>
                  <HiOutlineExternalLink />
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
