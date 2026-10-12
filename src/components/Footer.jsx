import { Link as ScrollLink } from "react-scroll";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

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
    <footer className="relative bg-black border-t border-[#1a1a1a] text-white pt-14 pb-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#1c1c1c]">
          {/* BRAND (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                D
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Deborah<span className="text-cyan-400 font-mono text-xs ml-0.5">.dev</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Frontend Engineer specializing in React, modern JavaScript, and Tailwind CSS.
              Transforming complex systems into accessible, responsive digital solutions.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/Debby-Tech968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#222222] hover:border-cyan-400/50 flex items-center justify-center text-zinc-400 hover:text-white transition"
                title="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#222222] hover:border-cyan-400/50 flex items-center justify-center text-zinc-400 hover:text-cyan-400 transition"
                title="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#222222] hover:border-emerald-500/50 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a
                href="mailto:osekhimen2020@gmail.com"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#222222] hover:border-cyan-400/50 flex items-center justify-center text-zinc-400 hover:text-cyan-400 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 font-medium">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-cyan-400 transition cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Contact &amp; Location
            </p>
            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
              <p>📍 Lagos, Nigeria (WAT)</p>
              <p>
                📧{" "}
                <a
                  href="mailto:osekhimen2020@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  osekhimen2020@gmail.com
                </a>
              </p>
              <p>📱 +234 703 153 9179</p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#111111] border border-[#262626] text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-500/50 transition cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Ehiguese Deborah Osekhimen. All rights reserved.
          </p>
          <p>
            Engineered with React 19, Tailwind CSS v4 &amp; Solid Theme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
