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
          <div className="w-16 sm:w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

          <h2 className="text-[26px] xs:text-3xl sm:text-4xl font-medium tracking-tight">
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
            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition-colors duration-300"
          >
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-4">
              <GraduationCap size={24} className="text-orange-500 shrink-0" />
              Education
            </h3>

            <h4 className="text-lg font-medium">
              Siliguri Institute of Technology
            </h4>

            <p className="text-orange-400 mt-2">
              Bachelor of Computer Applications (BCA)
            </p>

            <p className="text-gray-500 mt-2">
              2023 – 2027 (Expected)
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed text-sm xs:text-base">
              Currently pursuing a Bachelor of Computer Applications (BCA) while building real-world MERN stack projects and strengthening my skills in DBMS, DSA, Computer Networks, and Software Engineering.
            </p>

            <div className="mt-5">
              <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs xs:text-sm">
                CGPA (Till 6th Semester): 8 / 10
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition-colors duration-300"
          >
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-6">
              <Award size={24} className="text-orange-500 shrink-0" />
              Relevant Coursework
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-500 mt-1 shrink-0" />

                  <p className="text-gray-400 text-sm xs:text-base">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition-colors duration-300"
          >
            <h3 className="flex items-center gap-3 text-xl xs:text-2xl font-semibold mb-4">
              <Trophy size={24} className="text-orange-500 shrink-0" />
              Activities
            </h3>

            <p className="text-orange-400 mb-4">
              Software Development Competitions
            </p>

            <p className="text-gray-400 leading-relaxed text-sm xs:text-base">
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
