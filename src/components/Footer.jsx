import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineArrowUp, HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative bg-[#05080E] border-t border-white/[0.08] text-white pt-16 pb-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* BRAND (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Deborah<span className="text-cyan-400 font-mono text-xs ml-0.5">.dev</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Frontend Engineer specializing in React, Tailwind CSS, and clean UI architecture.
              Bridging anatomical precision with digital innovation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-white transition"
                title="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-[#0a66c2] transition"
                title="LinkedIn"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a
                href="mailto:osekhimen2020@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition"
                title="Email"
              >
                <HiOutlineEnvelope className="text-sm" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-cyan-300 transition cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Contact &amp; Location
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📍 Lagos, Nigeria (WAT)</p>
              <p>
                📧{" "}
                <a
                  href="mailto:osekhimen2020@gmail.com"
                  className="hover:text-cyan-300 transition"
                >
                  osekhimen2020@gmail.com
                </a>
              </p>
              <p>📱 +234 703 153 9179</p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 transition cursor-pointer"
              >
                <span>Back to Top</span>
                <HiOutlineArrowUp />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} Ehiguese Deborah Osekhimen. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
