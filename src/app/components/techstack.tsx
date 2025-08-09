import React from "react";
import Image from "next/image";

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
    { id: 4, name: "GO", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { id: 5, name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: 6, name: "Laravel", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { id: 7, name: "Docker", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { id: 8, name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 9, name: "Python", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-50 via-slate-50 to-blue-50 py-16 px-8 text-gray-600">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-slate-600 bg-clip-text text-transparent animate-pulse mb-4">Tech Stack</span>
          <p className="text-xl text-black max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        {/* Grid Tech Stack Icons */}
        <div className="grid grid-cols-3 gap-12 max-w-md mx-auto">
          {techStackItems.map((item) => (
            <div key={item.id} className="relative group cursor-pointer flex flex-col items-center justify-center">
              {/* Glassy glossy box */}
              <div className=" animate-bounce w-20 h-20 rounded-xl animate-glow  bg-white backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative overflow-hidden">
                {/* Glossy shine overlay */}
                <div
                  className="absolute top-0 left-0 w-full h-1/2 rounded-t-xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
                    filter: "blur(10px)",
                    transform: "translateY(-30%)",
                  }}
                />
                <Image src={item.imageUrl} alt={`${item.name} logo`} width={40} height={40} unoptimized className="object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 relative z-10" />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 shadow-lg">
                {item.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16">
          <p className="text-black text-lg leading-relaxed">Constantly learning and exploring new technologies to stay at the forefront of tech development.</p>
        </div>
      </div>
    </div>
  );
};

export default RotatingTechStack;
