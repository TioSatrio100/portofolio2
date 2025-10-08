import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView} from "framer-motion";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});


const PortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const portfolioItems = [
    {
      id: 1,
      title: "Glowsync",
      description: "GlowSync is an e-commerce platform that provides personalized skincare recommendations based on facial health analysis",
      stripeColors: ["bg-orange-400", "bg-red-400"],
      githubUrl: "https://github.com/TioSatrio100/GlowSyncSkin",
      projectUrl: "https://glowsync.vercel.app/",
      imageUrl: "/glowsync.png",
    },
    {
      id: 2,
      title: "Digital Photobooth",
      description: "Capture your moments with style and create lasting memories",
      stripeColors: ["bg-yellow-400", "bg-purple-400"],
      githubUrl: "https://github.com/TioSatrio100/digitalphotobox",
      projectUrl: "https://digitalphotoboks.vercel.app/",
      imageUrl: "/photobooth.png",
    },
    {
      id: 3,
      title: "Efishery",
      description: "Classifying fresh and non-fresh fish images using TensorFlow so that fish distribution from producers and consumers can be well maintained and helps increase fish sales productivity",
      stripeColors: ["bg-green-400", "bg-teal-400"],
      githubUrl: "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
      projectUrl: "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
      imageUrl: "/efishery.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 relative overflow-hidden" id="portfolio">
      {/* Pixel Art Decorations */}
      <div className="absolute top-20 right-24 opacity-40">
        <div className="relative w-16 h-16">
          <div className="absolute w-4 h-4 bg-yellow-400 border-2 border-black top-0 left-4"></div>
          <div className="absolute w-4 h-4 bg-purple-400 border-2 border-black top-4 left-0"></div>
          <div className="absolute w-4 h-4 bg-black top-4 left-8"></div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16 opacity-40">
        <div className="w-14 h-14 bg-yellow-400 border-4 border-black transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black uppercase mb-6">
            <motion.span
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${pixelify.className} bg-purple-400 px-6 py-3 text-black inline-block border-4 border-black transform -rotate-1 shadow-lg`}>My Work</motion.span>{" "}
            <motion.span 
              ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${pixelify.className} bg-yellow-400 px-6 py-3 text-black inline-block border-4 border-black transform -rotate-1 shadow-lg`}>Portfolio</motion.span>
          </h2>
          <p className="text-xl text-black font-bold">
            Explore my diverse portfolio across different domains{" "}
            <span className="inline-block text-white px-3 py-1">👾</span>
          </p>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="group">
              <div className="bg-gray-100 border-4 border-black overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">

                {/* Image Preview */}
                <div className="relative w-full h-56 bg-white border-b-4 border-black overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col bg-white">
                  <h3 className="text-3xl font-black uppercase mb-4 text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow font-medium">
                    {item.description}
                  </p>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-3 px-4 font-bold uppercase text-sm border-4 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={item.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-yellow-400 text-black py-3 px-4 font-bold uppercase text-sm border-4 border-black hover:bg-purple-400 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-black text-xl font-bold mb-6">Want to see more projects?</p>
          <button className="bg-purple-400 text-black px-10 py-4 font-black uppercase text-lg border-4 border-black hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-lg">
            View More Projects →
          </button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 border-2 border-black opacity-70 animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 border-2 border-black opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-400 border-2 border-black opacity-80 animate-ping" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  );
};

export default PortfolioSection;