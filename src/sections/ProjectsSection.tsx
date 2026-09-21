"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectModal } from "@/components/projects/ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
  selectedCategory?: string;
  onCategoryChange?: (cat: string) => void;
}

export function ProjectsSection({
  projects,
  selectedCategory: controlledCategory,
  onCategoryChange,
}: ProjectsSectionProps) {
  const [internalCategory, setInternalCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const selectedCategory = controlledCategory || internalCategory;

  const handleSelectCategory = (cat: string) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  // Build categories list
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];

  // Compute counts
  const counts: Record<string, number> = {
    All: projects.length,
  };
  uniqueCategories.forEach((cat) => {
    counts[cat] = projects.filter((p) => p.category === cat).length;
  });

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            tag="04. PROJECTS"
            title="Featured Engineering Systems"
            description="Deep-dive implementations in code intelligence, graph-based retrieval, and runtime tracing."
            className="mb-0"
          />

          {/* Filter tabs */}
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            counts={counts}
          />
        </div>

        {/* Projects Grid & Featured Cards */}
        <ProjectGrid
          projects={filteredProjects}
          onPreview={(proj) => setPreviewProject(proj)}
        />

        {/* Quick Preview Modal */}
        <ProjectModal
          project={previewProject}
          isOpen={!!previewProject}
          onClose={() => setPreviewProject(null)}
        />
      </div>
    </section>
  );
}
