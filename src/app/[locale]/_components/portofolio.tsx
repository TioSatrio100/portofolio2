import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView} from "framer-motion";
import { Pixelify_Sans } from "next/font/google";
import { Icon } from "lucide-react";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});


const PortfolioSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // components/Icons.js
  const NextJSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="currentColor"/>
  </svg>
);

  const SupabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30">
    <path d="M107.3 44.4c-3.9-7.3-13.6-9.8-20.9-5.9L31.1 67.2c-7.3 3.9-9.8 13.6-5.9 20.9l19.5 36.4c3.9 7.3 13.6 9.8 20.9 5.9l55.3-28.7c7.3-3.9 9.8-13.6 5.9-20.9L107.3 44.4z" fill="#3ECF8E"/>
    <path d="M82.6 52.8l-48.3 25c-1.3.7-1.9 2.2-1.4 3.5l7.5 18.8c.5 1.3 1.9 2 3.2 1.5l48.3-25c1.3-.7 1.9-2.2 1.4-3.5l-7.5-18.8c-.5-1.3-1.9-2-3.2-1.5z" fill="white"/>
  </svg>
);

  const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30">
    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.602 77.602 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-10.984-13.765-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 10.989 13.765 29.395 13.74 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.125 71.398 50.406 64 32.004 64z" fill="#38bdf8"/>
  </svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30">
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#B8B8B8" stop-opacity=".498"/>
      <stop offset="1" stopColor="#7F7F7F" stop-opacity="0"/>
    </radialGradient>
    <path fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" opacity=".444"/>
  </svg>
);
const TensorFlowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30">
    <defs>
      <linearGradient id="tensorflow-original-a" x1="99.264%" x2="5.199%" y1="92.586%" y2="75.004%">
        <stop offset="0%" stop-color="#FF6F00"/>
        <stop offset="100%" stop-color="#FF8F00"/>
      </linearGradient>
    </defs>
    <path fill="url(#tensorflow-original-a)" fill-rule="evenodd" d="M52.113 44.074l15.24-8.79v41.614l9.555-5.518V27.158l15.24-8.79v68.935l-15.24 8.79-15.24-8.79-15.24 8.79-15.24-8.79V44.074l15.24 8.79zm-15.24 51.796l15.24 8.79 15.24-8.79 15.24 8.79 15.24-8.79v17.579l-15.24 8.79-15.24-8.79-15.24 8.79-15.24-8.79V95.87zm60.959 17.58l15.24-8.79V62.836l-15.24-8.79v60.403zm15.24-69.193l15.24-8.79v68.935l-15.24 8.79V44.074zm-91.438 8.79l15.24-8.79v68.935l-15.24 8.79V52.864zm15.24 60.404l15.24 8.79v17.578l-15.24 8.79v-17.58zm30.48 26.368l15.24-8.79v17.58l-15.24 8.79v-17.58zm45.72-17.58v17.58l15.24 8.79v-17.58l-15.24-8.79zm15.24-86.174l15.24-8.79v17.58l-15.24 8.79V35.882zM52.113 10.514l15.24-8.79v17.58l-15.24 8.79V10.514zm30.48 8.79l15.24-8.79v17.58l-15.24 8.79V19.304zM21.873 27.158l15.24-8.79v17.58l-15.24 8.79V27.158zm76.199 69.193V44.074l15.24 8.79v52.277l-15.24-8.79z" clip-rule="evenodd"/>
  </svg>
);
  const portfolioItems = [
    {
      id: 1,
      title: "Glowsync",
      description: "GlowSync is an e-commerce platform that provides personalized skincare recommendations based on facial health analysis",
      tech:<NextJSIcon />,
      tech1:<TailwindIcon/>,
      tech2:<SupabaseIcon/>,
      githubUrl: "https://github.com/TioSatrio100/GlowSyncSkin",
      projectUrl: "https://glowsync.vercel.app/",
      imageUrl: "/glowsync.png",
    },
    {
      id: 2,
      title: "Digital Photobooth",
      description: "Capture your moments with style and create lasting memories",
      tech:<NextJSIcon />,
      tech1:<TailwindIcon/>,
      githubUrl: "https://github.com/TioSatrio100/digitalphotobox",
      projectUrl: "https://digitalphotoboks.vercel.app/",
      imageUrl: "/photobooth.png",
    },
    {
      id: 3,
      title: "Efishery",
      description: "Classifying fresh and non-fresh fish images using TensorFlow so that fish distribution from producers and consumers can be well maintained and helps increase fish sales productivity",
      tech:<PythonIcon />,
      tech1:<TensorFlowIcon/>,
      githubUrl: "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
      projectUrl: "https://github.com/TioSatrio100/classification-of-fresh-and-non-fresh-fish-images",
      imageUrl: "/efishery.png",
    }, {
      id: 4,
      title: "Lansia Paham (3rd Place Winner of Hackathon Bit Bash 2026)",
      description: "AI platform to assist seniors in filling out forms and scanning for security and fraud. It aims to create a safe community for seniors, who are a vulnerable segment of society and technologically disadvantaged",
      tech:<NextJSIcon />,
      tech1:<TailwindIcon/>,
      githubUrl: "https://github.com/TioSatrio100/Lansia-Paham-v2",
      projectUrl: "https://github.com/TioSatrio100/Lansia-Paham-v2",
      imageUrl: "/images/Lansia-Paham.png",
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
                  <div className=" grid grid-cols-6 mb-4">
                  <p>
                  {item.tech}
                  </p>
                  <p>
                  {item.tech1}
                  </p>
                  <p>
                  {item.tech2}
                  </p>
                  </div>
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