"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { GithubIcon } from "./Icons";

export function Projects() {
  const p1 = projects[0]; // CodeGraph RAG (Large)
  const p2 = projects[1]; // TraceForge (Compact)
  const p3 = projects[2]; // Kathir (Compact)
  const p4 = projects[3]; // Vision Heatmap (Large)

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
            // Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Engineered Systems.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A curated selection of code intelligence engines, runtime observability tools, and applied AI applications.
          </p>
        </div>

        {/* Editorial Layout: Large -> Two Compact -> Large */}
        <div className="space-y-8">
          {/* 1. Large Project: CodeGraph RAG */}
          {p1 && (
            <div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-sky-500/40 transition-all duration-300 overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-10">
                {/* Visual */}
                <div className="lg:col-span-7 relative overflow-hidden rounded-xl bg-slate-950/80 border border-white/5 aspect-[16/10] flex items-center justify-center p-4">
                  <Image
                    src={p1.image}
                    alt={p1.title}
                    width={700}
                    height={420}
                    className="w-full h-auto object-contain max-h-72 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Sparkles className="w-3 h-3" />
                      Featured Architecture
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                      {p1.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {p1.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {p1.description}
                  </p>

                  {p1.highlightStat && (
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono">
                      <span className="text-slate-400">{p1.highlightStat.label}: </span>
                      <span className="text-slate-100 font-semibold">{p1.highlightStat.value}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p1.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href={p1.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-slate-200 hover:text-sky-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2 & 3. Two Compact Projects: TraceForge & Kathir */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[p2, p3].filter(Boolean).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-white/20 transition-all duration-300 overflow-hidden backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative overflow-hidden bg-slate-950/80 border-b border-white/5 aspect-[16/9] flex items-center justify-center p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={280}
                      className="w-full h-auto object-contain max-h-48 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono uppercase text-sky-400">
                        {project.tagline}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Large Project: Spatial Heatmap & Vision Analytics */}
          {p4 && (
            <div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-amber-500/30 transition-all duration-300 overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-10">
                {/* Details */}
                <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                      {p4.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {p4.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {p4.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p4.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={p4.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:col-span-7 relative overflow-hidden rounded-xl bg-slate-950/80 border border-white/5 aspect-[16/10] flex items-center justify-center p-4 order-1 lg:order-2">
                  <Image
                    src={p4.image}
                    alt={p4.title}
                    width={700}
                    height={420}
                    className="w-full h-auto object-contain max-h-72 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
