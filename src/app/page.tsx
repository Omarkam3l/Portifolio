"use client";

import React, { useState } from "react";
import {
  portfolio,
  projects,
  skills,
  experience,
  socialLinks,
  contactConfig,
  siteConfig,
} from "@/data";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { CommandPalette } from "@/components/command/CommandPalette";
import { BackgroundGrid } from "@/components/visual/BackgroundGrid";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { FocusSection } from "@/sections/FocusSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { LearningSection } from "@/sections/LearningSection";
import { ContactSection } from "@/sections/ContactSection";
import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function HomePage() {
  const { isOpen, open, close } = useCommandPalette();
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Subtle technical background grid */}
      <BackgroundGrid />

      {/* Navbar with active navigation & command palette trigger */}
      <Navbar
        siteName={siteConfig.siteName}
        navigation={siteConfig.navigation}
        onOpenCommandPalette={open}
      />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection
          portfolio={portfolio}
          socialLinks={socialLinks}
          onOpenCommandPalette={open}
        />

        <AboutSection portfolio={portfolio} />

        <FocusSection focusAreas={portfolio.focusAreas} />

        <ProjectsSection
          projects={projects}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <SkillsSection skills={skills} />

        <ExperienceSection experience={experience} />

        <LearningSection currentLearning={portfolio.currentLearning} />

        <ContactSection
          email={contactConfig.email}
          location={portfolio.location}
          status={portfolio.status}
          socialLinks={socialLinks}
          resumeUrl={contactConfig.resumeUrl}
        />
      </main>

      {/* Footer */}
      <Footer
        config={siteConfig}
        socialLinks={socialLinks}
        status={portfolio.status}
      />

      {/* Global Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isOpen}
        onClose={close}
        navigation={siteConfig.navigation}
        projects={projects}
        socialLinks={socialLinks}
        email={contactConfig.email}
        onSelectProjectFilter={(cat) => {
          setSelectedCategory(cat);
          const el = document.getElementById("projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
