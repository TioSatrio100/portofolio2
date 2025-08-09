import React from "react";
import Image from "next/image";

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Glowsync",
      description: "Transforming ideas into visually stunning interfaces. Elevating user experiences through intuitive designs that captivate.",
      backgroundColor: "bg-purple-200",
      iconColor: "text-purple-600",
      githubUrl: "#",
      projectUrl: "#",
      illustration: (
        <div className="w-full h-48 relative">
          <Image src="/glowsync.png" alt="Glowsync Project" layout="fill" objectFit="cover" className="rounded-lg" priority />
        </div>
      ),
    },
    {
      id: 2,
      title: "Digital Photobooth",
      description: "Crafting smooth, responsive web experiences and adherence to best practices for search visibility.",
      backgroundColor: "bg-green-200",
      iconColor: "text-green-600",
      githubUrl: "#",
      projectUrl: "#",
      illustration: (
        <div className="w-full h-48 relative">
          <Image src="/photobooth.png" alt="Photobox Project" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Efishery",
      description: "Demystifying tech through engaging storytelling. Creating content that educates and inspires.",
      backgroundColor: "bg-orange-200",
      iconColor: "text-orange-600",
      githubUrl: "#",
      projectUrl: "#",
      illustration: (
        <div className="w-full h-48 relative">
          <Image src="/efishery.png" alt="Efishery Project" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-8" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-slate-600 bg-clip-text text-transparent animate-pulse mb-4">My Work Portfolio</span>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore my diverse portfolio across different domains</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Illustration */}
                <div className="bg-white rounded-2xl mb-6 p-2 group-hover:scale-105 transition-transform duration-300 border border-gray-100 overflow-hidden">{item.illustration}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-slate-600 bg-clip-text text-transparent mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">{item.description}</p>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <a href={item.githubUrl} className="flex-1 bg-black hover:bg-slate-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href={item.projectUrl} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">Want to see more projects?</p>
          <button className="group relative bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg">
            <span className="relative z-10">View More Projects</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-bold">View More Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
