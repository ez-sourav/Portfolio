"use client";

import React, { useEffect, useState, useRef } from "react";
import { Download, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "../lib/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  const { isDark, toggleTheme, mounted } = useTheme();

  // Smooth, physics-based scroll progress bar with Framer Motion (GPU accelerated)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Smooth scroll handler when clicking any navbar link or logo
  const handleNavClick = (e, href, name) => {
    if (e && e.preventDefault) e.preventDefault();
    setActive(name);
    if (isOpen) setIsOpen(false);

    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", " ");
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  };

  // Glass styles customized for dark and light modes
  const glassStyle = isDark
    ? {
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.14)",
      boxShadow:
        "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
      willChange: "transform",
    }
    : {
      background: "rgba(255, 255, 255, 0.78)",
      border: "1px solid rgba(0, 0, 0, 0.08)",
      boxShadow:
        "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
      willChange: "transform",
    };

  // Dedicated z-[-1] glass blur layer
  const glassBlur = {
    backdropFilter: "blur(24px) saturate(1.8)",
    WebkitBackdropFilter: "blur(24px) saturate(1.8)",
  };

  return (
    <>
      {/* Top Reading Progress Bar - Pinned at the absolute top of the screen */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Glass Pill Navbar Header */}
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="relative flex w-full max-w-6xl flex-col items-center pointer-events-auto">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative isolate flex w-full items-center justify-between gap-1 sm:gap-2 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2"
            style={glassStyle}
          >
            {/* Blur layer with isolate on parent */}
            <div
              className="pointer-events-none absolute inset-0 z-[-1] rounded-full"
              style={glassBlur}
            />

            {/* Logo with rotating gradient badge */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero", "")}
              className="flex cursor-pointer items-center gap-2 sm:gap-2.5 px-2 sm:px-3 text-orange-500 hover:opacity-90 transition-opacity"
            >
              {/* <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg flex items-center justify-center font-bold text-[11px] sm:text-xs text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f97316, #fbbf24)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.4)",
                }}
              >
                SB
              </motion.div> */}
              <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-white/95 whitespace-nowrap">
                <span className="text-orange-500">
                  Sourav Biswas
                </span>
              </span>
            </a>

            {/* Desktop Navigation Links with animated sliding active pill */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  onHoverStart={() => setHovered(link.name)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                  style={{
                    color:
                      active === link.name || hovered === link.name
                        ? isDark
                          ? "rgba(255,255,255,0.98)"
                          : "#ea580c"
                        : isDark
                          ? "rgba(255,255,255,0.65)"
                          : "rgba(55,65,81,0.8)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {active === link.name && (
                    <motion.div
                      layoutId="glass-nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: isDark
                          ? "rgba(255, 255, 255, 0.12)"
                          : "rgba(249, 115, 22, 0.12)",
                        border: isDark
                          ? "1px solid rgba(255, 255, 255, 0.15)"
                          : "1px solid rgba(249, 115, 22, 0.3)",
                        boxShadow: isDark
                          ? "0 2px 10px rgba(0,0,0,0.2)"
                          : "0 2px 8px rgba(249, 115, 22, 0.15)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Right Actions: Theme Toggle + Resume CTA + Mobile Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  title={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  className="relative p-2 rounded-full border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/15 text-orange-500 transition-all duration-300 cursor-pointer active:scale-90"
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
                        <Sun
                          size={17}
                          className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                        />
                      ) : (
                        <Moon
                          size={17}
                          className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                        />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}

              {/* Desktop Resume CTA Button */}
              <motion.a
                href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:flex cursor-pointer whitespace-nowrap rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white items-center gap-1.5 bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 transition-all duration-200"
              >
                <Download size={15} />
                <span>Resume</span>
              </motion.a>

              {/* Mobile Hamburger / X Button */}
              <motion.button
                className="flex cursor-pointer items-center justify-center rounded-full p-2 lg:hidden text-neutral-800 dark:text-white/80"
                onClick={() => setIsOpen((v) => !v)}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.05)",
                }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.nav>

          {/* Mobile Glass Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, y: -8, opacity: 0 }}
                animate={{ height: "auto", y: 0, opacity: 1 }}
                exit={{ height: 0, y: -8, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-2 w-full lg:hidden overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0.97 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative isolate flex flex-col gap-1 rounded-2xl p-2.5 sm:p-3"
                  style={glassStyle}
                >
                  <div
                    className="pointer-events-none absolute inset-0 z-[-1] rounded-2xl"
                    style={glassBlur}
                  />
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={(e) => handleNavClick(e, link.href, link.name)}
                      className="cursor-pointer rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors"
                      style={{
                        color:
                          active === link.name
                            ? isDark
                              ? "#f97316"
                              : "#ea580c"
                            : isDark
                              ? "rgba(255, 255, 255, 0.75)"
                              : "#374151",
                        background:
                          active === link.name
                            ? isDark
                              ? "rgba(249, 115, 22, 0.15)"
                              : "rgba(249, 115, 22, 0.12)"
                            : "transparent",
                      }}
                    >
                      {link.name}
                    </button>
                  ))}

                  <a
                    href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 transition-all duration-200"
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Backdrop click-outside overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
