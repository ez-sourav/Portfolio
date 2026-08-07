import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";
import ProjectModal from "./ProjectModal"; 

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Trendify",
            description:
                "A production-ready MERN e-commerce platform featuring secure JWT authentication, product variants, shopping cart, wishlist, current location-based address selection, Stripe payment integration, Cloudinary image uploads, and a fully responsive user interface.",
            image: "/trendify.png",
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "JWT",
                "Cloudinary",
                "Stripe",
            ],
            live: "https://trendify-online.vercel.app/",
            github: "https://github.com/ez-sourav/Trendify",
        },
        {
            title: "InterviewIQ",
            description:
                "An AI-powered interview preparation platform that generates personalized interview roadmaps, learning plans, and technical interview questions using Google's Gemini API.",
            image: "/interviewIQ.png",
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Gemini API",
                "JWT",
            ],
            live: "https://interviewplanner.vercel.app/",
            github: "https://github.com/ez-sourav/Ai-Interview-Plan",
        },
        {
            title: "File Manager",
            description:
                "A secure cloud-based file storage platform featuring authentication, Cloudinary integration, file uploads, previews, downloads, and responsive file management.",
            image: "/fileManger.png",
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Cloudinary",
                "JWT",
            ],
            live: "https://uploadfile-in.vercel.app/",
            github: "https://github.com/ez-sourav/Upload-File",
        },
    ];

    const getGridLayout = (length) => {
        if (length === 1) return "grid-cols-1 max-w-md mx-auto";
        if (length === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
        return "grid-cols-1 md:grid-cols-2 xl:grid-cols-3";
    };

    return (
        <section
            id="projects"
            className="py-12 px-4 xs:px-5 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="text-center md:text-left mb-10 sm:mb-14 md:mb-16"
                >
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0" />
                    <h2 className="text-[26px] xs:text-3xl sm:text-4xl font-medium tracking-tight">
                        Featured Projects
                    </h2>
                </motion.div>

                {projects.length === 0 ? (
                    <div className="text-center text-gray-400 py-10">
                        <p>More projects coming soon.</p>
                    </div>
                ) : (
                    <motion.div
                        variants={staggerContainer(0.15)}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewport}
                        className={`grid gap-5 sm:gap-6 lg:gap-8 ${getGridLayout(projects.length)}`}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-orange-500/10 hover:border-orange-500/40 transition-all duration-300 group flex flex-col h-full cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden aspect-video bg-linear-to-br from-orange-500/5 to-transparent shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://via.placeholder.com/600x400/1A1A1A/FF8C00?text=${encodeURIComponent(project.title)}`;
                                        }}
                                    />
                                </div>

                                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1 pointer-events-none">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-orange-500/10 text-orange-400 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="bg-[#2A2A2A] text-gray-400 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-white/5">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto w-full pointer-events-auto">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProject(project);
                                            }}
                                            className="w-full flex items-center justify-center gap-2 border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white active:scale-95 px-3 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:cursor-pointer transition-all duration-300 min-h-11"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* AnimatePresence handles the smooth entering/exiting of the Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Project;