
"use client";

import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="min-h-screen w-full relative bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Violet Storm Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(200, 200, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(200, 200, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Spotlight Effect - Diubah warna menjadi ungu */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge - Diubah warna untuk kontras dengan background gelap */}
          <div className="inline-flex items-center gap-3 bg-purple-900 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            Meet Rioo
            <span className="text-lg">👋</span>
          </div>

          {/* Main Heading with Gradient Text - Diubah warna untuk kontras */}
          <h1 className="animate-fade-down animate-duration-1000 animate-ease-linear text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">Create,</span>
            <br />
            <span className="text-slate-200">Develop,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">Inspire</span>
          </h1>

          {/* Description - Diubah warna teks untuk kontras */}
          <div className="space-y-4">
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">Breathing life into designs, transforming magic into code,</p>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              and making a positive impact. <span className="text-purple-400 text-2xl animate-bounce inline-block">✨</span>
            </p>
          </div>

          {/* CTA Buttons - Diubah warna untuk kontras */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group relative bg-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-bold">View My Work</span>
            </button>

            <button className="group border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get In Touch</span>
              <div className="absolute inset-0 bg-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="animate-fade-down animate-duration-1000 animate-ease-linear flex justify-center lg:justify-end">
          <div className="relative">
            {/* Image Container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-2 shadow-xl">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-purple-900 rounded-full flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/portopict.png" 
                  alt="Profile" 
                  fill 
                  className="object-cover rounded-full"
                  style={{ filter: "brightness(1.1) contrast(1.1)" }}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_50px_5px_rgba(139,92,246,0.4)]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>

      {/* Floating Particles - Diubah warna menjadi ungu/biru */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-500 rounded-full opacity-80 animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-300 rounded-full opacity-70 animate-ping" style={{ animationDelay: "0.5s" }}></div>
      </div>
    </section>
  );
};

export default HomeSection;