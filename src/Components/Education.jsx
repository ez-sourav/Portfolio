"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const Education = () => {
  const certifications = [
    "Java Programming",
    "Python Programming",
    "Operating Systems",
    "Introduction to Software Engineering",
    "Database Management Essentials",
  ];

  return (
    <section
      id="education"
      className="py-12 px-4 xs:px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center md:text-left mb-10"
        >
          <div className="w-16 sm:w-25 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

          <h2 className="text-[26px] xs:text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="relative z-10 overflow-hidden glass-card p-6 sm:p-8 rounded-2xl hover:border-orange-500 hover:shadow-[0_12px_36px_rgba(249,115,22,0.14)] transition-all duration-300"
          >
            {/* Subtle top specular glass highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 dark:via-white/15 to-transparent pointer-events-none" />
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
              <GraduationCap size={24} className="text-orange-500 shrink-0" />
              Education
            </h3>

            <h4 className="text-lg font-medium text-[var(--text-primary)]">
              Siliguri Institute of Technology
            </h4>

            <p className="text-orange-500 dark:text-orange-400 mt-2 font-medium">
              Bachelor of Computer Applications (BCA)
            </p>

            <p className="text-[var(--text-muted)] mt-2 text-sm font-medium">
              2023 – 2027 (Expected)
            </p>

            <p className="text-[var(--text-secondary)] mt-4 leading-relaxed text-sm xs:text-base">
              Currently pursuing a Bachelor of Computer Applications (BCA) while building real-world MERN stack projects and strengthening my skills in DBMS, DSA, Computer Networks, and Software Engineering.
            </p>

            <div className="mt-5">
              <span className="bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs xs:text-sm font-medium border border-orange-500/20">
                CGPA (Till 6th Semester): 8 / 10
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="relative z-10 overflow-hidden glass-card p-6 sm:p-8 rounded-2xl hover:border-orange-500 hover:shadow-[0_12px_36px_rgba(249,115,22,0.14)] transition-all duration-300"
          >
            {/* Subtle top specular glass highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 dark:via-white/15 to-transparent pointer-events-none" />
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-6 text-[var(--text-primary)]">
              <Award size={24} className="text-orange-500 shrink-0" />
              Relevant Coursework
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-500 mt-1 shrink-0" />

                  <p className="text-[var(--text-secondary)] text-sm xs:text-base">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="relative z-10 overflow-hidden glass-card p-6 sm:p-8 rounded-2xl hover:border-orange-500 hover:shadow-[0_12px_36px_rgba(249,115,22,0.14)] transition-all duration-300"
          >
            {/* Subtle top specular glass highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 dark:via-white/15 to-transparent pointer-events-none" />
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
              <Trophy size={24} className="text-orange-500 shrink-0" />
              Activities
            </h3>

            <p className="text-orange-500 dark:text-orange-400 mb-4 font-medium">
              Software Development Competitions
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed text-sm xs:text-base">
              Participated in software development competitions and
              technical events, collaborating with teams to solve
              real-world problems, develop innovative solutions,
              and strengthen teamwork, communication, and
              problem-solving skills.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;
