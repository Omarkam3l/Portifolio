"use client";

import React, { useState } from "react";
import { skillGroups, allSkillsList } from "@/data/skills";
import { Cpu, Eye, Database, Server, Sparkles } from "lucide-react";

export function Skills() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes("AI")) return <Cpu className="w-4 h-4 text-cyan-400" />;
    if (category.includes("Vision")) return <Eye className="w-4 h-4 text-sky-400" />;
    if (category.includes("Data")) return <Database className="w-4 h-4 text-blue-400" />;
    return <Server className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills & Competencies
          </h2>
          <p className="text-base text-slate-400">
            Core technologies, distributed frameworks, and deep learning tools applied across active production systems.
          </p>
        </div>

        {/* All Skills Pill Cloud (Exact 42 Skills) */}
        <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Verified Technical Stack ({allSkillsList.length})
            </span>
            {selectedTag && (
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
              >
                Clear highlight
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {allSkillsList.map((skill) => {
              const isSelected = selectedTag === skill;
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => setSelectedTag(isSelected ? null : skill)}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105"
                      : "bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-white"
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grouped Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const hasHighlightedSkill = selectedTag && group.skills.includes(selectedTag);

            return (
              <div
                key={group.category}
                className={`p-7 rounded-2xl border transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${
                  hasHighlightedSkill
                    ? "border-cyan-500/50 bg-slate-900/80 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 bg-slate-900/40 hover:border-white/20"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5">
                        {getCategoryIcon(group.category)}
                      </div>
                      <h3 className="text-base font-bold text-slate-100 tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {group.skills.length} tools
                    </span>
                  </div>

                  {group.description && (
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      {group.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill) => {
                      const isHighlighted = selectedTag === skill;
                      return (
                        <span
                          key={skill}
                          onClick={() => setSelectedTag(isHighlighted ? null : skill)}
                          className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                            isHighlighted
                              ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm shadow-cyan-500/30"
                              : "bg-[#0c2430]/70 text-[#38bdf8] border-[#0284c7]/30 hover:border-cyan-400 hover:text-white"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
