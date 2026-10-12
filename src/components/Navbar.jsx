import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Btn from "./Btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active section detection
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3.5 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Deborah
              </span>
              <span className="text-cyan-400 font-mono text-xs font-semibold ml-1">
                .dev
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-1 hidden sm:block">
              Frontend Engineer
            </span>
          </div>
        </ScrollLink>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-80}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/15 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </ScrollLink>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Debby-Tech968"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl transition border border-transparent hover:border-white/10"
            title="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-400 hover:text-[#0a66c2] hover:bg-slate-800/80 rounded-xl transition border border-transparent hover:border-white/10"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>

          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <Btn
              text="Let's Talk"
              size="sm"
              variant="primary"
              className="font-medium"
            />
          </ScrollLink>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-xl bg-slate-900/60 border border-white/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-2 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-medium text-base cursor-pointer transition ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-300 hover:text-white bg-slate-800/80 rounded-xl border border-white/10"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-300 hover:text-[#0a66c2] bg-slate-800/80 rounded-xl border border-white/10"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-300 hover:text-emerald-400 bg-slate-800/80 rounded-xl border border-white/10"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <Btn text="Hire Me" size="sm" variant="primary" />
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
