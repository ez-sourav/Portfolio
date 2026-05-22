import React from "react";
import { ExternalLink, Code } from "lucide-react";

const Project = () => {
    const projects = [
        {
            title: "InterviewIQ",
            description:
                "AI-powered interview planner using MERN and Gemini API to generate personalized interview strategies, questions, and learning roadmaps.",
            image: "/interviewIQ.png",
            tech: [
                "MERN Stack",
                "Gemini API",
                "Authentication",
                "AI Planning",
            ],
            live: "https://interviewplanner.vercel.app/",
            github: "https://github.com/ez-sourav/Ai-Interview-Plan",
        },
        {
            title: "File Manager",
            description:
                "Cloud-based file storage and management platform built with MERN and Cloudinary, featuring secure uploads and file organization.",
            image: "/fileManger.png",
            tech: [
                "MERN Stack",
                "Cloudinary",
                "File Upload",
                "Authentication",
            ],
            live: "https://uploadfile-in.vercel.app/",
            github: "https://github.com/ez-sourav/Upload-File",
        },
    ];

    return (
        <section
            id="projects"
            className="py-10 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">

                <div className="reveal text-center md:text-left mb-10">
                    <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

                    <h2 className="text-3xl sm:text-4xl font-medium">
                        Selected Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`reveal ${index === 1 ? "delay-200" : ""
                                } bg-[#1A1A1A] rounded-2xl overflow-hidden border border-orange-500/10 hover:border-orange-500 transition duration-300 group`}
                        >

                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 sm:h-64 object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">

                                <h3 className="text-2xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-5 py-3 rounded-lg font-medium transition duration-300"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 px-5 py-3 rounded-lg font-medium transition duration-300"
                                    >
                                        <Code size={18} />
                                        GitHub Repo
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Project;