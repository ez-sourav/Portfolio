import React from "react";
import {
  GraduationCap,
  Award,
  Trophy,
  CheckCircle2,
} from "lucide-react";

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
      className="py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="reveal text-center md:text-left mb-10">
          <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

          <h2 className="text-3xl sm:text-4xl font-medium">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="reveal bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-2xl sm:text-2xl font-semibold mb-4">
              <GraduationCap
                size={24}
                className="text-orange-500"
              />
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

            <p className="text-gray-400 mt-4 leading-relaxed">
              Currently pursuing a Bachelor of Computer Applications with a focus on
              Web Development, Database Management Systems,
              Data Structures & Algorithms, Networking,
              Software Engineering, and Modern Web Technologies.
            </p>

            <div className="mt-5">
              <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">
                CGPA (Till 5th Semester): 8.16 / 10
              </span>
            </div>
          </div>

          <div className="reveal delay-100 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-2xl sm:text-2xl font-semibold mb-6">
              <Award
                size={24}
                className="text-orange-500"
              />
            Certifications
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-orange-500 mt-1 shrink-0"
                  />

                  <p className="text-gray-400">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal delay-200 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-orange-500/10 hover:border-orange-500 transition duration-300">
            <h3 className="flex items-center gap-3 text-2xl sm:text-2xl font-semibold mb-4">
              <Trophy
                size={24}
                className="text-orange-500"
              />
              Activities
            </h3>

            <p className="text-orange-400 mb-4">
              Software Development Competitions
            </p>

            <p className="text-gray-400 leading-relaxed">
              Participated in software development competitions and
              technical events, collaborating with teams to solve
              real-world problems, develop innovative solutions,
              and strengthen teamwork, communication, and
              problem-solving skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;