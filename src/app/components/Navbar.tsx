"use client";

import React, { useState } from "react";
import { Home, User, Code2, FolderOpen, Mail } from "lucide-react";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems: NavItem[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "techstack", icon: Code2, label: "Tech Stack" },
    { id: "project", icon: FolderOpen, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const handleNavClick = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-white/10 via-white/30 to-white/10 dark:from-black/20 dark:via-black/30 dark:to-black/20 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20 dark:border-white/10">
      <div className="flex items-center space-x-1">
        {navItems.map((item: NavItem) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-full transition-all duration-300 group relative 
                ${isActive ? "bg-white dark:bg-slate-800 text-black dark:text-white font-bold shadow-md" : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"}`}
              title={item.label}
            >
              <IconComponent size={20} />

              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
