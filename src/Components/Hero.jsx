import React from 'react';
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center px-4 xs:px-5 sm:px-6 lg:px-8 pt-24 sm:pt-20 overflow-hidden"
        >
            <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-center py-8 sm:py-10 md:py-0"
            >
                {/* Left side */}
                <motion.div
                    variants={fadeUp}
                    className="order-2 md:order-1 text-center md:text-left"
                >
                    <motion.div
                        variants={fadeUp}
                        className="w-16 sm:w-25 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"
                    />

                    <h1 className="text-3xl xs:text-[2.1rem] sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
                        Hi, I'm <span className="text-orange-500">Sourav Biswas</span>
                    </h1>

                    <p className="text-lg xs:text-xl sm:text-2xl text-gray-300 mb-8">
                        Full Stack Developer
                    </p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="#projects"
                            className="bg-orange-500 hover:bg-orange-600 cursor-pointer w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg font-medium transition-colors text-white"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="/Sourav_Biswas_FullStack_Developer_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white cursor-pointer w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                            <Download size={18} /> Resume
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    variants={fadeUp}
                    className="order-1 md:order-2 flex justify-center lg:justify-end"
                >
                    <motion.div
                        className="relative"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/image.jpeg"
                            alt="Sourav Biswas"
                            className="w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[410px] lg:w-[340px] lg:h-[420px] object-cover rounded-2xl border border-orange-500/20 shadow-xl shadow-black/40"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute -bottom-4 -left-4 xs:-bottom-5 xs:-left-5 sm:-bottom-6 sm:-left-6 bg-[#1A1A1A] border border-orange-500/20 px-3.5 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 rounded-xl shadow-lg max-w-[85%]"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse" />
                                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                                    Current Role
                                </p>
                            </div>

                            <h3 className="text-sm sm:text-lg font-semibold leading-tight text-white">
                                BCA Student & Developer
                            </h3>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;