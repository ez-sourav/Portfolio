import React, { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B0C]/90 backdrop-blur-xl border-orange-500/15 shadow-lg shadow-black/20"
            : "bg-[#0B0B0C]/70 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a
              href="#hero"
              className="text-orange-500 font-bold text-2xl lg:text-3xl leading-tight"
            >
              Sourav Biswas
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-100">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`font-medium transition duration-300 hover:text-orange-400 ${
                      active === link.name
                        ? "text-orange-400"
                        : "text-gray-200"
                    }`}
                  >
                    {link.name}
                  </a>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-orange-500 to-transparent transition-all duration-300 ${
                      active === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              ))}
            </ul>

            {/* Desktop Resume Button */}
            <a
              href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-6 py-2.5 rounded-lg font-semibold transition duration-300"
            >
              <Download size={18} />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1 text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 sm:top-20 left-0 w-full z-50 lg:hidden"
          >
            <div className="bg-[#111111]/95 backdrop-blur-xl border-b border-orange-500/10">
              <ul className="flex flex-col items-center gap-6 py-8">

                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.3,
                    }}
                    className="relative group"
                  >
                    <a
                      href={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setIsOpen(false);
                      }}
                      className={`text-lg font-medium transition duration-300 hover:text-orange-400 ${
                        active === link.name
                          ? "text-orange-400"
                          : "text-gray-200"
                      }`}
                    >
                      {link.name}
                    </a>

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-orange-500 to-transparent transition-all duration-300 ${
                        active === link.name
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.li>
                ))}

                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navLinks.length * 0.06,
                    duration: 0.3,
                  }}
                  href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-8 py-3 rounded-lg font-semibold transition duration-300"
                >
                  <Download size={18} />
                  Resume
                </motion.a>

              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;