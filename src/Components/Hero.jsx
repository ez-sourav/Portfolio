import React from 'react';
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center  px-4 sm:px-6 lg:px-8 pt-20"
        >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-12 items-center py-10 md:py-0">

                {/* Left side */}
                <div className="order-2 md:order-1 text-center md:text-left reveal">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
                        <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>
                        Hi, I'm <span className="text-orange-500">Sourav Biswas</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 mb-8">Full Stack Developer</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a
                            href="#projects"
                            className="bg-orange-500 hover:bg-orange-600 active:scale-95 cursor-pointer w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg font-medium transition"
                        >
                            View Projects
                        </a>
                        <a
                            href="/ResumeSouravBiswas.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95 cursor-pointer w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg font-medium transition duration-300">
                            <Download size={18} /> Resume
                        </a>
                    </div>
                </div>

                {/* Right side */}
                <div className="order-1 md:order-2 flex justify-center  lg:justify-end reveal  delay-200">
                    <div className="relative">
                        <img
                            src="/image.jpeg"
                            alt="Sourav Biswas"
                            className="w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[410px] lg:w-[340px] lg:h-[420px] object-cover rounded-2xl border border-orange-500/20"
                        />
                        <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-[#1A1A1A] border border-orange-500/20 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse"></span>
                                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                                    CURRENT ROLE
                                </p>
                            </div>

                            <h3 className="text-base sm:text-lg font-semibold">
                                BCA Student & Developer
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;