"use client";

import React from "react"; // Add this import
import Navbar from "@/app/components/Navbar";
import HomeSection from "@/app/components/Home";
import AboutSection from "./components/About";
import RotatingTechStack from "./components/techstack";
import PortfolioSection from "./components/portofolio";
import ContactSection from "./components/Contact";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="techstack">
        <RotatingTechStack />
      </section>
      <section id="project">
        <PortfolioSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
