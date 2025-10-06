"use client";

import React from "react";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full relative bg-white text-black flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Yellow Striped Background - Top */}
      <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden">
        <div className="absolute inset-0 flex gap-4 rotate-12 scale-150 origin-top">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-full ${
                i % 2 === 0 ? 'bg-yellow-300' : 'bg-yellow-400'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Pixel Art Decorations */}
      <div className="absolute top-32 left-16 opacity-60">
        <div className="relative w-16 h-16">
          <div className="absolute w-4 h-4 bg-black top-0 left-4"></div>
          <div className="absolute w-4 h-4 bg-black top-0 left-8"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-0"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 top-4 left-4"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 top-4 left-8"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-12"></div>
          <div className="absolute w-4 h-4 bg-black top-8 left-4"></div>
          <div className="absolute w-4 h-4 bg-black top-8 left-8"></div>
        </div>
      </div>

      <div className="absolute bottom-24 left-24 opacity-50">
        <div className="relative w-12 h-12 bg-purple-400 border-4 border-black transform rotate-45"></div>
      </div>

      <div className="absolute top-40 right-20 opacity-60">
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              <span className="relative inline-block">
                <span className={`${pixelify.className} bg-purple-400 px-6 py-3 inline-block transform rotate-1 border-4 border-black`}>About Me</span>
              </span>
            </h2>
            <p className="text-xl text-gray-700 mt-6 font-medium">Get to know more about who I am and what I do</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-yellow-400 border-4 border-black p-8 transform -rotate-1 shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-4">Who I Am</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="font-medium">
                  I'm a passionate <span className="bg-white px-2 py-1 font-bold">Full Stack Developer</span> who loves creating 
                  beautiful and functional web experiences.
                </p>
                <p>
                  With expertise in modern technologies, I bring ideas to life through 
                  clean code and intuitive design.
                </p>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-xl">
              <h3 className="text-2xl font-black uppercase mb-4">
                <span className="bg-purple-400 px-3 py-1">My Journey</span>
              </h3>
              <p className="text-lg leading-relaxed">
                Started as a curious learner, evolved into a problem solver. 
                Every project is an opportunity to create something amazing and 
                push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-purple-400 border-4 border-black p-8 transform rotate-1 shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-4">What I Do</h3>
              <ul className="space-y-3 text-lg">
                {[
                  "🤖 AI Engineer",
                  "⚛️ Frontend Development", 
                  "🔧 Backend Development",
                  "📱 Responsive Mobile Apps"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white border-2 border-black px-4 py-3 font-bold transform hover:translate-x-2 transition-transform">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-5xl font-black text-yellow-500 mb-2">100%</div>
              <div className="text-lg font-bold uppercase">Dedication & Passion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 border-2 border-black opacity-80 animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 border-2 border-black opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yellow-400 border-2 border-black opacity-70 animate-ping" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Pixel Art Bottom Right */}
      <div className="absolute bottom-16 right-16 opacity-60">
        <div className="relative w-20 h-20">
          <div className="absolute w-4 h-4 bg-purple-400 border-2 border-black top-0 left-8"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-4 left-4"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-12"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-8 left-0"></div>
          <div className="absolute w-4 h-4 bg-purple-400 border-2 border-black top-8 left-8"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
