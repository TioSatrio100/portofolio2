"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "brahmantoro.subagio@gmail.com",
    href: "mailto:brahmantoro.subagio@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "TioSatrio100",
    href: "https://github.com/TioSatrio100",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "in/satriobas",
    href: "https://www.linkedin.com/in/satriobas",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    value: "@rioriririr60562",
    href: "https://x.com/rioriririr60562?s=21",
    icon: Twitter,
  },
];

const ContactCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full overflow-hidden rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5"
    >
      <h3 className="mb-1 text-lg font-bold text-gray-900">Get in touch</h3>
      <p className="mb-4 text-sm text-gray-500">
        Have a project in mind? Let&apos;s build something together.
      </p>

      <div className="grid gap-2">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 transition-colors hover:bg-gray-100"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-105">
                <Icon size={16} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {link.label}
                </span>
                <span className="block truncate text-sm font-medium text-gray-800">
                  {link.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactCard;
