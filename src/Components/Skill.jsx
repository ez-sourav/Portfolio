import { SquareTerminal, Database, Code } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

const Skill = () => {
  const groups = [
    {
      icon: SquareTerminal,
      title: "Frontend",
      desc: "Building responsive and modern user interfaces with clean and interactive user experiences.",
      items: ["HTML5", "CSS", "JavaScript ES6+", "React", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Backend",
      desc: "Creating scalable backend systems, APIs, authentication, and database management solutions.",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase", "Supabase"],
    },
    {
      icon: Code,
      title: "Tools & Cloud",
      desc: "Working with modern development tools, version control, deployment, and cloud technologies.",
      items: ["Git", "GitHub", "Cloudinary", "Docker (Learning)", "AWS (Learning)"],
    },
  ];

  return (
    <section
      id="skills"
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

          <h2 className="text-3xl sm:text-4xl font-medium">
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {groups.map(({ icon: Icon, title, desc, items }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition-colors duration-300"
            >
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold mb-4">
                <Icon size={24} className="text-orange-500 shrink-0" />
                {title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {desc}
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs xs:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
