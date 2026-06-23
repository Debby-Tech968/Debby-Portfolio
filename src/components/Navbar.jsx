import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="bg-white flex justify-between items-center px-4 lg:px-15 py-4 fixed top-0 left-0 w-full shadow-lg z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">EHIGUESE</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-semibold text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col text-lg font-bold gap-6 py-6 p-7 shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer text-lg hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
