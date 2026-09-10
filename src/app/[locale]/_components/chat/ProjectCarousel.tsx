"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { projects, type Project } from "./projects";

interface ProjectCarouselProps {
  onSelect: (project: Project) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  const updateProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => el.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollBy = (direction: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous projects"
        className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 sm:flex"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Next projects"
        className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 sm:flex"
      >
        <ChevronRight size={18} />
      </button>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => onSelect(project)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="relative aspect-[3/4] w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl text-left shadow-lg sm:w-[46%] md:w-[38%]"
            style={{ backgroundColor: project.accent }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 62vw, 38vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: project.statusDot }}
                />
                {project.category}
              </span>

              {project.badge && (
                <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                  {project.badge}
                </span>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">
                {project.title}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <motion.div
          className="h-full rounded-full bg-gray-500"
          style={{ width: "28%" }}
          animate={{ x: `${progress * 260}%` }}
          transition={{ type: "tween", duration: 0.15 }}
        />
      </div>

      <Link
        href={`/${locale}/portofolio`}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200"
      >
        See all projects
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ProjectCarousel;
