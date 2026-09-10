"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillGroup {
  title: string;
  accent: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    accent: "#0EA5E9",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    accent: "#7C3AED",
    skills: ["Node.js", "Supabase", "REST APIs"],
  },
  {
    title: "Data & ML",
    accent: "#F59E0B",
    skills: ["Python", "TensorFlow", "Machine Learning"],
  },
  {
    title: "Mobile",
    accent: "#EC4899",
    skills: ["Cross-Platform Apps"],
  },
];

const SkillsCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full overflow-hidden rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5"
    >
      <h3 className="mb-4 text-lg font-bold text-gray-900">Skills & Tools</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-2 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: group.accent }}
              />
              <span className="text-sm font-semibold text-gray-800">
                {group.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-[13px] font-medium text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
