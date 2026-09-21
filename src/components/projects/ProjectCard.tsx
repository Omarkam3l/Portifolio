import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight, Eye, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onPreview?: (project: Project) => void;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, onPreview, featuredLayout = false }: ProjectCardProps) {
  const isGithubPlaceholder = !project.links.github || project.links.github.includes("[ADD");
  const isDemoPlaceholder = !project.links.demo || project.links.demo.includes("[ADD");

  return (
    <div
      className={cn(
        "group relative rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-sky-500/5",
        featuredLayout && "lg:grid lg:grid-cols-12 lg:gap-8 p-1 sm:p-2"
      )}
    >
      {/* Featured visual / image preview */}
      <div
        className={cn(
          "relative overflow-hidden bg-slate-950 border-b border-slate-800/80",
          featuredLayout ? "lg:col-span-6 lg:border-b-0 lg:border-r lg:rounded-lg" : "h-48"
        )}
      >
        {project.images && project.images[0] ? (
          <div className="relative w-full h-full min-h-[190px] flex items-center justify-center p-4">
            <Image
              src={project.images[0]}
              alt={`${project.title} diagram`}
              width={600}
              height={340}
              className="w-full h-auto object-contain max-h-56 group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-mono text-slate-600">
            [PROJECT SCHEMATIC]
          </div>
        )}

        {/* Featured ribbon / badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="accent" withDot>
              <Sparkles className="w-3 h-3 mr-1" />
              Featured System
            </Badge>
          </div>
        )}
      </div>

      {/* Content details */}
      <div
        className={cn(
          "p-6 flex flex-col flex-1 justify-between",
          featuredLayout && "lg:col-span-6 lg:p-8"
        )}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              {project.architecture.nodes.length} nodes
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.summary}
          </p>

          {/* Metrics snippet if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              {project.metrics.slice(0, 2).map((m, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-left"
                >
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{m.label}</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card footer actions */}
        <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            {onPreview && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPreview(project)}
                className="text-xs"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                Preview
              </Button>
            )}

            <Link href={`/projects/${project.slug}`}>
              <Button variant="secondary" size="sm" className="text-xs">
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {!isGithubPlaceholder && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {!isDemoPlaceholder && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
