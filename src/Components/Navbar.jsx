import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0C]/95 backdrop-blur-md border-b border-orange-500/10">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-100">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">

                <a
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`transition duration-300 hover:text-orange-400 ${
                    active === link.name
                      ? "text-orange-400"
                      : "text-gray-200"
                  }`}
                >
                  {link.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                    active === link.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <button className="hidden md:flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-6 py-2.5 rounded-md font-semibold transition duration-300">
            <Download size={18} />
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-[#111111]">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">

              <a
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className={`transition duration-300 hover:text-orange-400 ${
                  active === link.name
                    ? "text-orange-400"
                    : "text-gray-200"
                }`}
              >
                {link.name}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                  active === link.name
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}

          <button className="bg-orange-500 flex items-center justify-center gap-1.5 hover:bg-orange-600 active:scale-95 px-10 py-2.5 rounded-lg font-semibold transition duration-300">
            <Download size={16} />
            Resume
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;