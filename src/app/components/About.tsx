"use client";
import Image from "next/image";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 sm:px-8 lg:px-12 font-istok">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="max-w-sm mx-auto">
              <div className="w-100 h-130 mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#e6f0fa] flex items-center justify-center">
                <Image src="/rio.jpeg" alt="My Photo" width={320} height={320} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                {/* Heading with Gradient */}
                <h1 className=" animate-fade-down animate-duration-1000 animate-ease-linear text-4xl lg:text-5xl font-white leading-tight mb-4 flex flex-wrap items-start">
                  <div className="flex flex-col">
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-500 bg-clip-text text-transparent">My Exciting</span>
                    <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-slate-600 bg-clip-text text-transparent animate-pulse">Journey</span>
                  </div>
                  <span className="ml-3 text-4xl">🤓</span>
                </h1>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 text-lg leading-relaxed text-white font-bold">
                <p>
                  Starting as a <span className="underline">Frontend Engineer</span> and evolving into a <span className="underline">FullStack Engineer</span>, I’ve always been passionate about building seamless, user-friendly experiences.
                </p>
                <p>
                  Beyond coding, I love sharing knowledge—breaking down frontend and backend concepts through content and mentorship. For me, tech is about more than just code; it’s about innovation, collaboration, and creating meaningful
                  experiences that inspire others. <span className="ml-2">💡</span>
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">10.8K+</div>
                  <div className="text-base font-semibold text-white">TikTok</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">1.8K+</div>
                  <div className="text-base font-semibold text-white">Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
