"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  "🎓 Studying at ITMO University",
  "🤖 Machine Learning practitioner",
  "🏆 Hackathon builder & community lead",
];

const AboutCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
    >
      <div className="flex items-center gap-4 bg-gradient-to-r from-gray-900 to-gray-700 p-5">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70">
          <Image
            src="/portopict.png"
            alt="Rio"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Rio (Satrio Bas)</h3>
          <p className="text-sm text-gray-300">
            Full Stack Developer & ML Practitioner
          </p>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-[15px] leading-relaxed text-gray-700">
          I&apos;m a passionate Full Stack Developer who loves creating
          AI-powered, scalable web applications — blending frontend design,
          backend logic, and machine learning into seamless solutions.
        </p>

        <div className="flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
