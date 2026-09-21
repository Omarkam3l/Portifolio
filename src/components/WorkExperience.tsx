"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { workExperience } from "@/data/experience";

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header matching screenshot */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            CAREER JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            Work Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {workExperience.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 p-6 sm:p-9 backdrop-blur-sm"
            >
              {/* Header row: Icon, Company, Role, Date */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Cyan-blue gradient squircle with Briefcase icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                      {item.company}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-sky-400">
                      {item.role}
                    </div>
                  </div>
                </div>

                {/* Date Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet Points with Cyan Dots */}
              <ul className="mt-6 sm:mt-7 space-y-3 pl-1 sm:pl-2">
                {item.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 mr-3 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
