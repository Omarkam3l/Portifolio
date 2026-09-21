import React from "react";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
            // Core Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills & Competencies.
          </h2>
          <p className="text-base text-slate-400">
            Technologies, frameworks, and programming paradigms applied across active systems.
          </p>
        </div>

        {/* Grouped Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/30 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all duration-200"
            >
              <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider pb-2 border-b border-white/5">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/5 bg-slate-950/70 text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
