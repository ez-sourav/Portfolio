"use client";

import React, { useEffect, useState } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../lib/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme, mounted } = useTheme();

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
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-nav-scrolled)] backdrop-blur-xl border-[var(--border-nav)] shadow-lg shadow-black/10 dark:shadow-black/30"
            : "bg-[var(--bg-nav)] backdrop-blur-md border-transparent"
        }`}
      >
        {/* Top Reading Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a
              href="#hero"
              className="text-orange-500 font-bold text-2xl lg:text-3xl leading-tight hover:opacity-90 transition-opacity"
            >
              Sourav Biswas
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={() => setActive(link.name)}
                    className={`font-medium transition duration-300 ${
                      active === link.name
                        ? "text-orange-500 font-semibold"
                        : "text-[var(--text-secondary)] hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </a>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-500 to-transparent transition-all duration-300 ${
                      active === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              ))}
            </ul>

            {/* Desktop Right Side: Dark/Light Mode Toggle + Resume */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="relative p-2.5 rounded-xl border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/15 hover:border-orange-500/60 text-orange-500 transition-all duration-300 cursor-pointer active:scale-90"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? "dark-icon" : "light-icon"}
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      {isDark ? (
                        <Sun size={19} className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                      ) : (
                        <Moon size={19} className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}

              {/* Desktop Resume Button */}
              <a
                href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-6 py-2.5 rounded-lg font-semibold text-white transition duration-300 shadow-sm shadow-orange-500/20"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Mobile Header Right: Theme Toggle + Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="p-2 rounded-lg border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/15 text-orange-500 transition-all duration-300 cursor-pointer active:scale-90"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? "dark-m" : "light-m"}
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      {isDark ? (
                        <Sun size={19} className="text-amber-400" />
                      ) : (
                        <Moon size={19} className="text-orange-500" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}

              <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg text-[var(--text-primary)] hover:text-orange-500 transition-colors"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

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
            className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm z-40 lg:hidden"
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
            <div className="bg-[var(--bg-card)]/98 backdrop-blur-xl border-b border-[var(--border-card)] shadow-2xl">
              <ul className="flex flex-col items-center gap-5 py-7 px-4">

                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    className="relative group w-full text-center"
                  >
                    <a
                      href={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setIsOpen(false);
                      }}
                      className={`block py-2 text-lg font-medium transition duration-300 ${
                        active === link.name
                          ? "text-orange-500 font-semibold"
                          : "text-[var(--text-primary)] hover:text-orange-500"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                {/* Theme indicator/toggle button inside mobile drawer as well */}
                {mounted && (
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: navLinks.length * 0.05,
                      duration: 0.25,
                    }}
                    className="w-full flex justify-center pt-2"
                  >
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/5 hover:bg-orange-500/15 text-sm font-medium text-[var(--text-primary)] transition-all"
                    >
                      {isDark ? (
                        <>
                          <Sun size={16} className="text-amber-400" />
                          <span>Switch to Light Theme</span>
                        </>
                      ) : (
                        <>
                          <Moon size={16} className="text-orange-500" />
                          <span>Switch to Dark Theme</span>
                        </>
                      )}
                    </button>
                  </motion.li>
                )}

                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (navLinks.length + 1) * 0.05,
                    duration: 0.25,
                  }}
                  href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-8 py-3 rounded-lg font-semibold text-white transition duration-300 shadow-md shadow-orange-500/20"
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
