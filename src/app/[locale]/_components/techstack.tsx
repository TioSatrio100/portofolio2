"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Pixelify_Sans } from "next/font/google";
import { motion, useInView, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const pixelify = Pixelify_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
});

interface TechStackItem {
  id: number;
  name: string;
  imageUrl: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const RotatingTechStack: React.FC = () => {
  const t = useTranslations("TechStack");

  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const techStackItems: TechStackItem[] = [
    {
      id: 1,
      name: "React",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 2,
      name: "TypeScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: 3,
      name: "Next.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 4,
      name: "Go",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      id: 5,
      name: "Node.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 6,
      name: "Laravel",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      id: 7,
      name: "Docker",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      id: 8,
      name: "Git",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 9,
      name: "Python",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white px-6 py-20"
    >
      {/* =========================
          Pixel Art Decorations
      ========================= */}

      <div className="pointer-events-none absolute bottom-40 left-16 opacity-50">
        <div className="h-12 w-12 rotate-45 transform border-4 border-black bg-yellow-400" />
      </div>

      <div className="pointer-events-none absolute left-32 top-24 opacity-60">
        <div className="h-10 w-10 rounded-full border-4 border-black bg-purple-400" />
      </div>

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}

        <div className="mb-16">
          <h1 className="mb-6 text-5xl font-black uppercase leading-tight text-black lg:text-6xl">
            {/* Title Word 1 */}
            <motion.span
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                    }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className={`${pixelify.className} mr-3 inline-block -rotate-1 transform border-4 border-black bg-yellow-400 px-6 py-3 shadow-lg`}
            >
              {t("titleWord1")}
            </motion.span>

            {/* Title Word 2 */}
            <motion.span
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                    }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
              className={`${pixelify.className} inline-block -rotate-1 transform border-4 border-black bg-purple-400 px-6 py-3 shadow-lg`}
            >
              {t("titleWord2")}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl font-bold text-black">
            {t("subtitle")}{" "}
            <span className="inline-block px-3 py-1 text-3xl">🕹️</span>
          </p>
        </div>

        {/* Tech Icons Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4"
        >
          {techStackItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden border-4 border-black bg-white shadow-lg transition-all duration-300 hover:bg-yellow-400 group-hover:rotate-3 group-hover:scale-110">
                {/* Background Pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
                  <div
                    className="absolute inset-0 bg-black"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)",
                    }}
                  />
                </div>

                {/* Tech Icon */}
                <Image
                  src={item.imageUrl}
                  alt={`${item.name} logo`}
                  width={56}
                  height={56}
                  unoptimized
                  className="relative z-10 object-contain transition-transform group-hover:scale-110"
                />
              </div>

              {/* Tech Name */}
              <div className="mt-4 border-2 border-black bg-black px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-purple-400 group-hover:text-black">
                {item.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/*  Bottom Accent */}

        <div className="mt-20 text-center">
          <div className="inline-block -rotate-1 transform border-4 border-black bg-purple-400 px-8 py-4 shadow-xl">
            <p className="text-2xl font-black uppercase">
              {t("footerText")} 💪
            </p>
          </div>
        </div>
      </div>

      {/* Floating Particles */}

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Particle 1 */}
        <div className="absolute left-1/4 top-1/3 h-3 w-3 animate-ping border-2 border-black bg-yellow-400 opacity-70" />

        {/* Particle 2 */}
        <div className="absolute right-1/3 top-2/3 h-2 w-2 animate-pulse border-2 border-black bg-purple-400 opacity-60" />

        {/* Particle 3 */}
        <div
          className="absolute bottom-1/4 left-1/3 h-3 w-3 animate-ping border-2 border-black bg-yellow-400 opacity-80"
          style={{
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Pixel Art Top Left */}

      <div className="pointer-events-none absolute left-16 top-16 opacity-50">
        <div className="relative h-16 w-16">
          <div className="absolute left-4 top-0 h-4 w-4 border-2 border-black bg-yellow-400" />

          <div className="absolute left-8 top-0 h-4 w-4 bg-black" />

          <div className="absolute left-0 top-4 h-4 w-4 border-2 border-black bg-purple-400" />

          <div className="absolute left-8 top-4 h-4 w-4 bg-black" />

          <div className="absolute left-4 top-8 h-4 w-4 border-2 border-black bg-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default RotatingTechStack;