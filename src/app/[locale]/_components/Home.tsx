"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { Pixelify_Sans } from "next/font/google";
import { useTranslations } from "next-intl";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const container: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HomeSection = () => {
  const t = useTranslations("Home");

  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  // Mengambil daftar kata animasi dari file i18n
  const words = [
    t("words.create"),
    t("words.develop"),
    t("words.inspire"),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white px-6 py-20"
    >
      {/* Purple Striped Background - Bottom */}
      <div className="absolute bottom-0 left-0 flex h-24 w-full overflow-hidden opacity-60 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`stripe-${i}`}
            className={`h-full w-12 shrink-0 ${
              i % 2 === 0 ? "bg-purple-300" : "bg-purple-400"
            }`}
          />
        ))}
      </div>

      {/* Pixel Art Clouds */}
      <div className="absolute left-20 top-20 opacity-60 pointer-events-none">
        <div className="relative h-20 w-32">
          <div className="absolute left-4 top-8 h-4 w-4 bg-gray-800" />
          <div className="absolute left-8 top-8 h-4 w-4 bg-gray-800" />
          <div className="absolute left-12 top-8 h-4 w-4 bg-gray-800" />
          <div className="absolute left-16 top-8 h-4 w-4 bg-gray-800" />

          <div className="absolute left-8 top-4 h-4 w-4 bg-gray-800" />
          <div className="absolute left-12 top-4 h-4 w-4 bg-gray-800" />

          <div className="absolute left-12 top-0 h-4 w-4 bg-gray-800" />
        </div>
      </div>

      <div className="absolute right-32 top-24 opacity-60 pointer-events-none">
        <div className="relative h-20 w-32">
          <div className="absolute left-4 top-8 h-4 w-4 bg-gray-800" />
          <div className="absolute left-8 top-8 h-4 w-4 bg-gray-800" />
          <div className="absolute left-12 top-8 h-4 w-4 bg-gray-800" />

          <div className="absolute left-8 top-4 h-4 w-4 bg-gray-800" />
          <div className="absolute left-8 top-0 h-4 w-4 bg-gray-800" />
        </div>
      </div>

      {/* Pixel Art Coffee Cup */}
      <div className="absolute bottom-32 right-24 opacity-70 pointer-events-none">
        <div className="relative h-20 w-16">
          <div className="absolute left-2 top-4 h-3 w-3 bg-gray-800" />
          <div className="absolute left-5 top-4 h-3 w-3 bg-gray-800" />

          <div className="absolute left-2 top-7 h-3 w-3 bg-gray-800" />
          <div className="absolute left-5 top-7 h-3 w-3 bg-gray-800" />

          <div className="absolute left-2 top-10 h-3 w-3 bg-gray-800" />
          <div className="absolute left-5 top-10 h-3 w-3 bg-gray-800" />
          <div className="absolute left-8 top-10 h-3 w-3 bg-gray-800" />

          <div className="absolute left-3 top-2 h-2 w-2 bg-gray-600" />
          <div className="absolute left-5 top-2 h-2 w-2 bg-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-2xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

            {t("badge")}

            <span className="text-lg">👋</span>
          </div>

          {/* Main Heading */}
          <motion.h1
            className={`text-6xl font-black uppercase leading-tight tracking-tight lg:text-7xl ${pixelify.className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {words.map((word, i) => (
              <motion.span
                key={`word-${i}`}
                variants={wordAnimation}
                className={`block ${
                  i === 2
                    ? "inline-block -rotate-1 bg-yellow-400 px-4 py-2 text-black"
                    : "text-black"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 pt-8 sm:flex-row">
            {/* View Work */}
            <a
              href="#project"
              className="group relative rounded-full border-2 border-black bg-yellow-400 px-8 py-4 text-center font-bold uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">
                {t("buttons.viewWork")}
              </span>
            </a>

            {/* Get In Touch */}
            <a
              href="#contact"
              className="group rounded-full border-2 border-black bg-white px-8 py-4 text-center font-bold uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              <span className="relative z-10">
                {t("buttons.getInTouch")}
              </span>
            </a>
          </div>
        </div>

        {/* Right Content - Photo */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: 50,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="relative mb-16 flex justify-center lg:justify-end"
        >
          <div className="relative h-96 w-full max-w-[400px] overflow-hidden rounded-2xl">
            <Image
              src="/newpictporto.png"
              alt="Profile Picture"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {/* Particle 1 */}
        <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-ping bg-yellow-400 opacity-80" />

        {/* Particle 2 */}
        <div className="absolute right-1/4 top-1/3 h-2 w-2 animate-pulse bg-purple-400 opacity-60" />

        {/* Particle 3 */}
        <div
          className="absolute bottom-1/3 left-1/3 h-2 w-2 animate-ping bg-black opacity-40"
          style={{
            animationDelay: "1s",
          }}
        />

        {/* Particle 4 */}
        <div
          className="absolute bottom-1/4 right-1/3 h-2 w-2 animate-pulse bg-yellow-400 opacity-70"
          style={{
            animationDelay: "2s",
          }}
        />
      </div>
    </section>
  );
};

export default HomeSection;

