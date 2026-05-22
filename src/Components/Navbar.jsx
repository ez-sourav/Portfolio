import React, { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b border-orange-500/10 transition-all duration-300 ${isOpen
          ? "bg-[#0B0B0C]/80 backdrop-blur-xl"
          : "bg-[#0B0B0C]/95 backdrop-blur-md"
          }`}
      >
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <h1 className="text-2xl sm:text-3xl font-bold">
              <a href="#hero" className="text-orange-500">
                Sourav Biswas
              </a>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-gray-100">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <a
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`transition duration-300 font-medium hover:text-orange-400 ${active === link.name
                      ? "text-orange-400"
                      : "text-gray-200"
                      }`}
                  >
                    {link.name}
                  </a>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-orange-500 to-transparent transition-all duration-300 ${active === link.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                      }`}
                  />
                </li>
              ))}
            </ul>

            <a
              href="/ResumeSouravBiswas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-6 py-2.5 rounded-md font-semibold transition duration-300"
            >
              <Download size={18} />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden cursor-pointer text-white z-60"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full z-50 overflow-hidden transition-all duration-500 ease-out transform ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 bg-[#111111]/95 backdrop-blur-xl border-b border-orange-500/10">

          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className={`transition duration-300 font-medium hover:text-orange-400 ${active === link.name
                  ? "text-orange-400"
                  : "text-gray-200"
                  }`}
              >
                {link.name}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-orange-500 to-transparent transition-all duration-300 ${active === link.name
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              />
            </li>
          ))}

          <a
            href="/ResumeSouravBiswas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 px-10 py-2.5 rounded-lg font-semibold transition duration-300">
            <Download size={16} />
            Resume
          </a>

        </ul>
      </div>
    </>
  );
};

export default Navbar;