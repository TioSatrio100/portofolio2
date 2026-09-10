"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "./projects";

const Portofolio: React.FC = () => {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <Link
          href={`/${locale}`}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to chat
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Portofolio
          </h1>
          <p className="mt-3 max-w-xl text-gray-500">
            A collection of Rio&apos;s work across AI, machine learning, and
            web development.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.statusDot }}
                  />
                  {project.category}
                </div>
                {project.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portofolio;
