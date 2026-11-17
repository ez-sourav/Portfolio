"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, viewport } from "../lib/motion";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-subtle)] mt-8 py-8">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center"
      >
        <h3 className="text-xl font-bold text-orange-500">
          Sourav Biswas
        </h3>

        <p className="text-[var(--text-muted)] mt-2 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
