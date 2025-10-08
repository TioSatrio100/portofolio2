"use client";

import Image from "next/image";
import React,  { useRef }  from "react";
import { Pixelify_Sans } from "next/font/google";
import { motion, useInView} from "framer-motion";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

interface TechStackItem {
  id: number;
  name: string;
  imageUrl: string;
}

const RotatingTechStack: React.FC = () => {
  const techStackItems: TechStackItem[] = [
    { id: 1, name: "React", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 2, name: "TypeScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { id: 3, name: "Next.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { id: 4, name: "Go", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { id: 5, name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: 6, name: "Laravel", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { id: 7, name: "Docker", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { id: 8, name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 9, name: "Python", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section className="relative min-h-screen bg-white py-20 px-6 overflow-hidden">

      {/* Pixel Art Decorations */}
      <div className="absolute top-32 right-24 opacity-60">
        <div className="relative w-16 h-16">
          <div className="absolute w-4 h-4 bg-purple-400 border-2 border-black top-0 left-4"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-4 left-0"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-8"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-8 left-4"></div>
        </div>
      </div>

      <div className="absolute bottom-40 left-16 opacity-50">
        <div className="w-12 h-12 bg-yellow-400 border-4 border-black transform rotate-45"></div>
      </div>

      <div className="absolute top-24 left-32 opacity-60">
        <div className="w-10 h-10 rounded-full bg-purple-400 border-4 border-black"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-black text-black mb-6 leading-tight uppercase">
            <motion.span
             ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
           className={`${pixelify.className} bg-yellow-400 px-6 py-3 inline-block border-4 border-black transform -rotate-1 shadow-lg`}>Tech</motion.span>{" "}
            <motion.span 
             ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${pixelify.className} bg-purple-400 px-6 py-3 inline-block border-4 border-black transform -rotate-1 shadow-lg`}>Stack</motion.span>
          </h1>
          <p className="text-xl font-bold text-black">
            Technologies and tools I use to bring ideas to life{" "}
            <span className="inline-block px-3 py-1 text-3xl">🕹️</span>
          </p>
        </div>

        {/* Tech Icons Grid */}
        <motion.div 
         ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStackItems.map((item, index) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-28 h-28 border-4 border-black flex items-center justify-center bg-white hover:bg-yellow-400 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-lg relative overflow-hidden">
                {/* Background pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10">
                  <div className="absolute inset-0 bg-black" 
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)`
                    }}
                  ></div>
                </div>
                
                <Image
                  src={item.imageUrl}
                  alt={`${item.name} logo`}
                  width={56}
                  height={56}
                  unoptimized
                  className="object-contain relative z-10 group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="mt-4 bg-black text-white px-4 py-2 font-bold text-sm uppercase tracking-wide border-2 border-black group-hover:bg-purple-400 group-hover:text-black transition-colors">
                {item.name}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-purple-400 border-4 border-black px-8 py-4 transform -rotate-1 shadow-xl">
            <p className="text-2xl font-black uppercase">
              Always Learning, Always Growing 💪
            </p>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-400 border-2 border-black opacity-70 animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 border-2 border-black opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-400 border-2 border-black opacity-80 animate-ping" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Pixel Art Top Left */}
      <div className="absolute top-16 left-16 opacity-50">
        <div className="relative w-16 h-16">
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-0 left-4"></div>
          <div className="absolute w-4 h-4 bg-black top-0 left-8"></div>
          <div className="absolute w-4 h-4 bg-purple-400 border-2 border-black top-4 left-0"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-8"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-8 left-4"></div>
        </div>
      </div>
    </section>
  );
};

export default RotatingTechStack;