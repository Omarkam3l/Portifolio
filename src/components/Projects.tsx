"use client";

import React, { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { projects, projectFilterTags } from "@/data/projects";
import { GithubIcon } from "./Icons";

export function Projects() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((project) =>
      project.technologies.some(
        (t) => t.toLowerCase() === activeTag.toLowerCase()
      )
    );
  }, [activeTag]);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            FEATURED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            AI & Engineering Projects
          </h2>
        </div>

        {/* Filter Tags Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {projectFilterTags.map((tag) => {
            const isActive = activeTag.toLowerCase() === tag.toLowerCase();
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-7 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm shadow-lg hover:shadow-cyan-500/5"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-100 tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0c2430]/80 text-[#38bdf8] border border-[#0284c7]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-5 mt-6 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 rounded-2xl border border-dashed border-white/10 bg-slate-900/20">
            <p className="text-sm text-slate-400 font-mono">
              No projects found tagged with &ldquo;{activeTag}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setActiveTag("All")}
              className="mt-3 text-xs font-mono text-cyan-400 hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
