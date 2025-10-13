"use client";

import React, { useRef } from "react";
import { motion, useInView, easeOut } from "framer-motion";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});


const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease:  easeOut} },
};


const HomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const words = ["Create,", "Develop,", "Inspire"];

  return (
    <section className="min-h-screen w-full relative bg-white text-black flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Purple Striped Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <div className="absolute inset-0 flex gap-4 -rotate-12 scale-150 origin-bottom">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-full ${
                i % 2 === 0 ? "bg-purple-300" : "bg-purple-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Pixel Art Clouds */}
      <div className="absolute top-20 left-20 opacity-60">
        <div className="relative w-32 h-20">
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-4"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-8"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-12"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-16"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-4 left-8"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-4 left-12"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-0 left-12"></div>
        </div>
      </div>

      <div className="absolute top-24 right-32 opacity-60">
        <div className="relative w-32 h-20">
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-4"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-8"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-8 left-12"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-4 left-8"></div>
          <div className="absolute w-4 h-4 bg-gray-800 top-0 left-8"></div>
        </div>
      </div>

      {/* Pixel Art Coffee Cups */}
      <div className="absolute bottom-32 right-24 opacity-70">
        <div className="relative w-16 h-20">
          <div className="absolute w-3 h-3 bg-gray-800 top-4 left-2"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-4 left-5"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-7 left-2"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-7 left-5"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-10 left-2"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-10 left-5"></div>
          <div className="absolute w-3 h-3 bg-gray-800 top-10 left-8"></div>
          <div className="absolute w-2 h-2 bg-gray-600 top-2 left-3"></div>
          <div className="absolute w-2 h-2 bg-gray-600 top-2 left-5"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Meet Rioo
            <span className="text-lg">👋</span>
          </div>

          {/* Main Heading */}
          <motion.h1
            ref={ref}
            className={`text-6xl lg:text-7xl font-black leading-tight uppercase tracking-tight ${pixelify.className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`block ${
                  w === "Inspire"
                    ? "bg-yellow-400 px-4 py-2 inline-block transform -rotate-1"
                    : "text-black"
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#project" className="group relative bg-yellow-400 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg border-2 border-black hover:shadow-2xl">
              <span className="relative z-10">View My Work</span>
            </a>

            <a href="#contact" className="group border-3 border-black bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white shadow-lg">
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Right Content - photo*/}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center lg:justify-end relative mb-18">
          <div className="text-center">
          <img
            src="/newpictporto.png"
            alt="Rioo"
            className="w-80 h-auto rounded-2xl object-cover"
          />
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 opacity-80 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-black opacity-40 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default HomeSection;

