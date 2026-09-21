import React from "react";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onPreview?: (project: Project) => void;
}

export function ProjectGrid({ projects, onPreview }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-16 text-center rounded-xl border border-dashed border-slate-800 bg-slate-950/40 p-8">
        <p className="text-sm font-mono text-slate-500">
          No projects found in this category.
        </p>
      </div>
    );
  }

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      {/* Featured Projects Spotlight */}
      {featured.length > 0 && (
        <div className="space-y-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={onPreview}
              featuredLayout={true}
            />
          ))}
        </div>
      )}

      {/* Grid of Other Projects */}
      {others.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={onPreview}
              featuredLayout={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
