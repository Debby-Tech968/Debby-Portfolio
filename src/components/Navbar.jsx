import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Btn from "./Btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

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
          ? "solid-nav py-3 shadow-2xl shadow-black/80"
          : "bg-black/60 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* BRAND LOGO */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2.5 group select-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm sm:text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
            D
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Deborah
              </span>
              <span className="text-cyan-400 font-mono text-xs font-semibold ml-0.5">
                .dev
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wider -mt-1 hidden xs:block">
              Frontend Engineer
            </span>
          </div>
        </ScrollLink>

        {/* DESKTOP NAV LINKS (CENTER) */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0d0d0d] border border-[#222222]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "text-white bg-[#1e1e1e] font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                )}
              </ScrollLink>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Debby-Tech968"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-[#141414] rounded-xl transition border border-transparent hover:border-[#27272a]"
            title="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-cyan-400 hover:bg-[#141414] rounded-xl transition border border-transparent hover:border-[#27272a]"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-base" />
          </a>

          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <Btn
              text="Hire Me"
              size="sm"
              variant="primary"
              className="font-medium text-xs"
            />
          </ScrollLink>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex items-center gap-2 md:hidden">
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <button className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold font-mono">
              Hire
            </button>
          </ScrollLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none rounded-xl bg-[#111111] border border-[#27272a] min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 w-full bg-black/95 border-b border-[#222222] backdrop-blur-2xl px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-65}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-sm cursor-pointer transition flex items-center justify-between ${
                    isActive
                      ? "bg-[#18181b] text-white font-semibold border border-[#2e2e33]"
                      : "text-zinc-400 hover:bg-[#121212] hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
                  )}
                </ScrollLink>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-zinc-300 hover:text-white bg-[#141414] rounded-xl border border-[#262626]"
                title="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-zinc-300 hover:text-cyan-400 bg-[#141414] rounded-xl border border-[#262626]"
                title="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-zinc-300 hover:text-emerald-400 bg-[#141414] rounded-xl border border-[#262626]"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-65}
              onClick={() => setMenuOpen(false)}
            >
              <Btn text="Get In Touch" size="sm" variant="primary" />
            </ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
