import React from "react";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="reveal text-center">
          <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto"></div>

          <h2 className="text-3xl sm:text-4xl font-medium">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects,
            internship opportunities, collaborations,
            and innovative ideas.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8">

            <a
              href="https://github.com/ez-sourav"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              <i className="ri-github-fill text-lg"></i>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sourav-biswas-829521255/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              <i className="ri-linkedin-box-fill text-lg"></i>
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=souravb2003@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              <i className="ri-mail-line text-lg"></i>
              Email Me
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;