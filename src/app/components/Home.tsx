"use client";

import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(71,85,105,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(71,85,105,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-100 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Meet Rioo
            <span className="text-lg">👋</span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className=" animate-fade-down animate-duration-1000 animate-ease-linear text-6xl lg:text-7xl font-black leading-tight">
            <span className=" bg-gradient-to-r from-blue-600 via-slate-600 to-blue-500 bg-clip-text text-transparent">Create,</span>
            <br />
            <span className="  text-slate-700">Develop,</span>
            <br />
            <span className=" bg-gradient-to-r from-slate-700 via-blue-600 to-slate-600 bg-clip-text text-transparent animate-pulse">Inspire</span>
          </h1>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">Breathing life into designs, transforming magic into code,</p>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              and making a positive impact. <span className="text-blue-600 text-2xl animate-bounce inline-block">✨</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group relative bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-bold">View My Work</span>
            </button>

            <button className="group border-2 border-slate-700 text-slate-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get In Touch</span>
              <div className="absolute inset-0 bg-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className=" animate-fade-down animate-duration-1000 animate-ease-linear flex justify-center lg:justify-end">
          <div className="relative">
            {/* Image Container */}
            <div className="relative w-70 h-70 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 p-2">
              {/* Profile Image Placeholder */}
              <div className="w-200 h-200 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center text-3xl text-slate-600">
                <Image src="/portopict.png" alt="Profile" fill className="object-cover" />
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-slate-600 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-slate-600 rounded-full opacity-80 animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-slate-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-600 rounded-full opacity-70 animate-ping" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeSection;
