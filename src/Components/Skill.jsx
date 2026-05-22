import { SquareTerminal, Database, Code } from "lucide-react";
import React from "react";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="reveal text-center md:text-left mb-10">
          <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

          <h2 className="text-3xl sm:text-4xl font-medium">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="reveal bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold mb-4">
              <SquareTerminal size={24} className="text-orange-500" />
              Frontend
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Building responsive and modern user interfaces with clean and interactive user experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {["HTML5", "CSS", "JavaScript ES6+", "React", "Tailwind CSS"].map(
                (item) => (
                  <span
                    key={item}
                    className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="reveal  delay-100 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold mb-4">
              <Database size={24} className="text-orange-500" />
              Backend
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating scalable backend systems, APIs, authentication, and database management solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "Firebase",
                "Supabase",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal  delay-200 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold mb-4">
              <Code size={24} className="text-orange-500" />
              Tools & Cloud
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Working with modern development tools, version control, deployment, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Git","GitHub", "Cloudinary","Docker","AWS (Learning)"].map((item) => (
                <span
                  key={item}
                  className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skill;