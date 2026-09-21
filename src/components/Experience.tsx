import React from "react";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
            // Engineering Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Milestones & Path.
          </h2>
          <p className="text-base text-slate-400">
            A timeline of key systems built, architectural breakthroughs, and technical explorations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Subtle Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-slate-950 group-hover:scale-125 group-hover:bg-sky-400 transition-all duration-200" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-semibold">
                    {item.period}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.context}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                  {item.role}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
