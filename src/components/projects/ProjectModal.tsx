import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { Project } from "@/types/portfolio";
import { Modal } from "@/components/ui/Modal";
import { ArchitectureGraph } from "./ArchitectureGraph";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isGithubPlaceholder = !project.links.github || project.links.github.includes("[ADD");
  const isDemoPlaceholder = !project.links.demo || project.links.demo.includes("[ADD");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      description={`// ${project.category} • ${project.technologies.slice(0, 4).join(" • ")}`}
    >
      <div className="space-y-6 text-slate-200">
        {/* Summary */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-950/70 border border-slate-800"
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">
                  {metric.label}
                </div>
                <div className="text-sm font-bold text-sky-400 mt-0.5">
                  {metric.value}
                </div>
                {metric.detail && (
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    {metric.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Architecture Graph */}
        <div>
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
            System Architecture
          </h4>
          <ArchitectureGraph architecture={project.architecture} compact />
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && project.challenges.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-950/60 border border-rose-950/40">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-rose-400 font-bold mb-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Technical Challenges</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-950/60 border border-emerald-950/40">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-emerald-400 font-bold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Engineered Solutions</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                {project.solutions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            {!isGithubPlaceholder && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {!isDemoPlaceholder && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Link href={`/projects/${project.slug}`} onClick={onClose}>
            <Button variant="primary" size="sm" className="w-full sm:w-auto">
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
