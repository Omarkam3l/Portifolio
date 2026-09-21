"use client";

import React from "react";
import { coreSkillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            // Core Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills & Technical Competencies
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Technologies and engineering disciplines applied across actual systems, pipelines, and production codebases.
          </p>
        </div>

        {/* Compact, Credible Editorial Skills Treatment */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-10 backdrop-blur-sm shadow-xl divide-y divide-white/5">
          {coreSkillCategories.map((group) => (
            <div
              key={group.category}
              className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline group"
            >
              {/* Category Title */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-sm font-mono font-bold tracking-wider text-slate-200 group-hover:text-cyan-300 transition-colors uppercase">
                  {group.category}
                </h3>
              </div>

              {/* Dot-separated skills line */}
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                  {group.skills.map((skill, index) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-300 hover:text-cyan-400 transition-colors inline-block cursor-default">
                        {skill}
                      </span>
                      {index < group.skills.length - 1 && (
                        <span className="text-cyan-500/40 mx-2.5 select-none font-bold">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
