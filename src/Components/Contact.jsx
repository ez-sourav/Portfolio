import React from "react";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const Contact = () => {
  const links = [
    {
      href: "https://github.com/ez-sourav",
      icon: "ri-github-fill",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sourav-biswas-829521255/",
      icon: "ri-linkedin-box-fill",
      label: "LinkedIn",
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=souravb2003@gmail.com",
      icon: "ri-mail-line",
      label: "Email Me",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 px-4 xs:px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="w-16 sm:w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto"
          />

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-medium">
            Get In Touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm xs:text-base"
          >
            I'm always open to discussing new projects,
            internship opportunities, collaborations,
            and innovative ideas.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1)}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8"
          >
            {links.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <i className={`${icon} text-lg`}></i>
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
