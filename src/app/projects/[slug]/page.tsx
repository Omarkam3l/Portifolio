import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { ArchitectureGraph } from "@/components/projects/ArchitectureGraph";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.author}`,
      description: project.summary,
      images: project.images && project.images[0] ? [project.images[0]] : [siteConfig.seo.ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const isGithubPlaceholder = !project.links.github || project.links.github.includes("[ADD");
  const isDemoPlaceholder = !project.links.demo || project.links.demo.includes("[ADD");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Case Study // {project.category}
          </span>
        </div>

        {/* Header Title & Intro */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" withDot>
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="success">
                <Sparkles className="w-3 h-3 mr-1" />
                Featured System
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Links & CTA Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {!isGithubPlaceholder && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-60" />
                </Button>
              </a>
            )}

            {!isDemoPlaceholder && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview */}
        {project.images && project.images[0] && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
            <Image
              src={project.images[0]}
              alt={`${project.title} system illustration`}
              width={800}
              height={450}
              className="w-full max-w-3xl h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase text-slate-400 tracking-wider">
              // Technical Metrics & Benchmarks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5"
                >
                  <div className="text-xs font-mono text-slate-500 uppercase">{metric.label}</div>
                  <div className="text-lg font-bold text-sky-400">{metric.value}</div>
                  {metric.detail && (
                    <p className="text-xs text-slate-400 leading-relaxed">{metric.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-400" />
            <span>Architecture & System Overview</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-base">
            {project.description}
          </p>
        </div>

        {/* Interactive Architecture Flow Graph */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span>Interactive Architecture Visualization</span>
          </h2>
          <ArchitectureGraph architecture={project.architecture} />
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100">
              Key Engineering Decisions & Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && project.challenges.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-rose-950/40 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-base font-mono">Challenges Overcome</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {project.challenges.map((c, i) => (
                  <li key={i} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-emerald-950/40 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="text-base font-mono">Architected Solutions</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {project.solutions.map((s, i) => (
                  <li key={i} className="leading-relaxed">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Technologies Stack */}
        <div className="space-y-3 pt-4">
          <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            Technologies & Frameworks
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Pagination between projects */}
        <div className="pt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 w-full sm:w-auto text-left"
            >
              <div className="text-[10px] font-mono uppercase text-slate-500 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Project</span>
              </div>
              <div className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors mt-1">
                {prevProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 w-full sm:w-auto text-right"
            >
              <div className="text-[10px] font-mono uppercase text-slate-500 flex items-center justify-end gap-1">
                <span>Next Project</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors mt-1">
                {nextProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
