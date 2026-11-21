"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, X } from "lucide-react";
import { TechBadge } from "../icons/TechIcons";

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden border border-orange-500/25 hover:!border-orange-500/25 shadow-2xl flex flex-col max-h-[90vh] z-10"
            >
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-orange-500 text-white rounded-full transition-colors duration-200 backdrop-blur-md cursor-pointer"
                >
                    <X size={20} />
                </button>

                <div className="overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <div className="relative aspect-video bg-gradient-to-br from-orange-500/5 to-transparent">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://via.placeholder.com/800x450/1A1A1A/FF8C00?text=${encodeURIComponent(project.title)}`;
                            }}
                        />
                    </div>

                    <div className="p-6 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--text-primary)]">
                            {project.title}
                        </h3>
                        
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-sm sm:text-base">
                            {project.description}
                        </p>

                        <h4 className="text-[var(--text-primary)] font-semibold mb-3 text-sm sm:text-base uppercase tracking-wider">
                            Technologies Used
                        </h4>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
                            {project.tech.map((tech) => (
                                <TechBadge
                                    key={tech}
                                    name={tech}
                                    size="sm"
                                />
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto pt-2">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 px-4 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base text-white transition-all duration-200 shadow-md shadow-orange-500/20"
                            >
                                <ExternalLink size={20} className="shrink-0" />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 px-4 py-3 sm:py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200"
                            >
                                <Code size={20} className="shrink-0" />
                                <span>View GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
