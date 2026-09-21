import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { CurrentFocus } from "@/components/CurrentFocus";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#060911] text-slate-100 overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-300">
      {/* Subtle technical background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-subtle opacity-60" />

      {/* Floating navigation */}
      <Navbar />

      {/* Main page content */}
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certificates />
        <CurrentFocus />
        <Contact />
      </main>

      {/* Minimal footer */}
      <Footer />
    </div>
  );
}
