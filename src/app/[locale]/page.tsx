"use client";

import React from "react";
import Navbar from "./_components/Navbar";
import HomeSection from "./_components/Home";
import AboutSection from "./_components/About";
import RotatingTechStack from "./_components/techstack";
import PortfolioSection from "./_components/portofolio";
import ContactSection from "./_components/Contact";

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