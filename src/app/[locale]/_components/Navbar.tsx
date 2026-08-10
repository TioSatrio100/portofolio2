"use client";

import React, { useState, useEffect, useRef } from "react";
import { Home, User, Code2, FolderOpen, Mail, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  translationKey: string;
  fallbackLabel: string;
}

const languages = [
  {
    code: "id",
    flagUrl: "https://hatscripts.github.io/circle-flags/flags/id.svg",
    label: "Indonesia",
  },
  {
    code: "en",
    flagUrl: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    label: "English",
  },
  {
    code: "ru",
    flagUrl: "https://hatscripts.github.io/circle-flags/flags/ru.svg",
    label: "Русский",
  },
];

const Navbar: React.FC = () => {
  const t = useTranslations();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState<string>("home");
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: "home", icon: Home, translationKey: "Navigation.home", fallbackLabel: "Beranda" },
    { id: "about", icon: User, translationKey: "Navigation.about", fallbackLabel: "Tentang" },
    { id: "techstack", icon: Code2, translationKey: "Navigation.techstack", fallbackLabel: "Keahlian" },
    { id: "project", icon: FolderOpen, translationKey: "Navigation.projects", fallbackLabel: "Portofolio" },
    { id: "contact", icon: Mail, translationKey: "Navigation.contact", fallbackLabel: "Kontak" },
  ];

  const selectedLang = languages.find((lang) => lang.code === currentLocale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsLangOpen(false);
    if (newLocale === currentLocale) return;

    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.replace(newPath || `/${newLocale}`, { scroll: false });
  };

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20 dark:border-white/10 transition-all duration-300">
      <div className="flex items-center space-x-1">
        {/* Navigasi Menu */}
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          const label = t.has(item.translationKey) 
          ? t(item.translationKey) 
          : item.fallbackLabel;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-full transition-all duration-300 group relative flex items-center justify-center ${
                isActive
                  ? "bg-white dark:bg-slate-800 text-black dark:text-white font-bold shadow-md scale-105"
                  : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
              aria-label={label}
            >
              <IconComponent size={20} />

              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md z-50">
                {label}
              </span>
            </button>
          );
        })}

        {/* Pembatas / Divider */}
        <div className="h-6 w-[1px] bg-gray-400/30 dark:bg-gray-600/30 mx-1" />

        {/* --- DROPDOWN BENDERA BAHASA --- */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-1 px-3 py-2 rounded-full text-base transition-all duration-300 text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105"
            title="Pilih Bahasa"
          >
            <img
              src={selectedLang.flagUrl}
              alt={selectedLang.label}
              className="w-5 h-5 rounded-full object-cover"
            />
            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Menu Dropdown */}
          {isLangOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl p-1.5 shadow-xl border border-white/20 dark:border-white/10 z-50 animate-in fade-in zoom-in-95 duration-150">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-medium rounded-xl transition-colors ${
                    currentLocale === lang.code
                      ? "bg-black/10 dark:bg-white/10 font-bold text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <img
                    src={lang.flagUrl}
                    alt={lang.label}
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
