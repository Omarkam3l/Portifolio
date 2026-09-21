import React from "react";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Label */}
        <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
          // About Me
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
          A little about me.
        </h2>

        {/* Large Typography Paragraphs with Generous Whitespace */}
        <div className="space-y-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
          {profile.aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Minimalist Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5 font-mono text-xs">
          <div className="space-y-1.5">
            <span className="text-sky-400 font-semibold block">01 / DETERMINISTIC</span>
            <p className="text-slate-400 font-sans text-sm">
              Structuring AI workflows with explicit graphs, schema guarantees, and deterministic AST checks.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-indigo-400 font-semibold block">02 / OBSERVABLE</span>
            <p className="text-slate-400 font-sans text-sm">
              Tracing runtime spans and causal events to expose actual system behavior under test.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-emerald-400 font-semibold block">03 / FUNDAMENTALS</span>
            <p className="text-slate-400 font-sans text-sm">
              Studying mathematics for machine learning and core systems architecture from first principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
