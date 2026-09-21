"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  AlertTriangle,
  Plus,
  Trash2,
  CheckCircle2,
  RefreshCw,
  Terminal,
  Code2,
  User,
  FolderGit2,
  Wrench,
  FileCode,
} from "lucide-react";
import {
  portfolio as initialPortfolio,
  projects as initialProjects,
  skills as initialSkills,
  experience as initialExperience,
  siteConfig,
} from "@/data";
import { PortfolioData, Project, SkillCategory } from "@/types/portfolio";
import { validatePortfolioData, validateProjects, validateSkills, ValidationIssue } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type EditorTab = "profile" | "hero" | "projects" | "skills" | "export";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<EditorTab>("profile");

  // Editable state initialized from src/data/
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() =>
    JSON.parse(JSON.stringify(initialPortfolio))
  );
  const [projectsData, setProjectsData] = useState<Project[]>(() =>
    JSON.parse(JSON.stringify(initialProjects))
  );
  const [skillsData, setSkillsData] = useState<SkillCategory[]>(() =>
    JSON.parse(JSON.stringify(initialSkills))
  );

  // Selected project for editing
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Export copy states
  const [copiedTs, setCopiedTs] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  // Run validations
  const portfolioIssues = validatePortfolioData(portfolioData);
  const projectIssues = validateProjects(projectsData);
  const skillIssues = validateSkills(skillsData);
  const allIssues = [...portfolioIssues, ...projectIssues, ...skillIssues];

  // Reset to original data
  const handleReset = () => {
    if (confirm("Reset all edits back to current src/data/ files?")) {
      setPortfolioData(JSON.parse(JSON.stringify(initialPortfolio)));
      setProjectsData(JSON.parse(JSON.stringify(initialProjects)));
      setSkillsData(JSON.parse(JSON.stringify(initialSkills)));
    }
  };

  // Generate exported TypeScript code
  const generateExportTs = () => {
    return `// ========================================================
// EXPORTED FROM BROWSER CONTENT EDITOR
// Paste into the respective files in src/data/
// ========================================================

// File: src/data/portfolio.ts
import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = ${JSON.stringify(portfolioData, null, 2)};

// File: src/data/projects.ts
import { Project } from "@/types/portfolio";

export const projects: Project[] = ${JSON.stringify(projectsData, null, 2)};

// File: src/data/skills.ts
import { SkillCategory } from "@/types/portfolio";

export const skills: SkillCategory[] = ${JSON.stringify(skillsData, null, 2)};
`;
  };

  // Generate JSON bundle
  const generateExportJson = () => {
    return JSON.stringify(
      {
        portfolio: portfolioData,
        projects: projectsData,
        skills: skillsData,
      },
      null,
      2
    );
  };

  const handleCopyTs = () => {
    navigator.clipboard.writeText(generateExportTs());
    setCopiedTs(true);
    setTimeout(() => setCopiedTs(false), 2000);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(generateExportJson());
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([generateExportJson()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-content-export-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Helper for projects
  const currentProject = projectsData[selectedProjectIndex] || projectsData[0];

  const updateCurrentProject = (field: keyof Project, value: any) => {
    setProjectsData((prev) => {
      const copy = [...prev];
      copy[selectedProjectIndex] = {
        ...copy[selectedProjectIndex],
        [field]: value,
      };
      return copy;
    });
  };

  const handleAddProject = () => {
    const newId = `new-system-${Date.now()}`;
    const newProj: Project = {
      id: newId,
      slug: newId,
      title: "New Engineered System",
      summary: "Short summary of this system and its architectural purpose.",
      description: "Detailed description of the problem, implementation, and engineering outcomes.",
      category: "AI & RAG",
      technologies: ["Python", "TypeScript"],
      featured: false,
      links: { github: "[ADD GITHUB LINK]", demo: "[ADD DEMO LINK]" },
      metrics: [{ label: "Throughput", value: "[ADD METRIC]", detail: "Benchmark detail" }],
      architecture: {
        nodes: [
          { id: "input", label: "Input Handler", role: "Receives raw request", type: "input" },
          { id: "engine", label: "Core Processing Unit", role: "Executes pipeline logic", type: "process" },
          { id: "output", label: "Output Dispatcher", role: "Returns verified response", type: "output" },
        ],
        edges: [
          { from: "input", to: "engine", label: "stream" },
          { from: "engine", to: "output", label: "resolve" },
        ],
      },
      highlights: ["Core engineering contribution"],
      challenges: ["Primary challenge faced during implementation"],
      solutions: ["Engineered resolution to bypass bottleneck"],
      results: ["Validated impact and benchmark result"],
      images: ["/images/projects/codegraph-rag.svg"],
    };
    setProjectsData((prev) => [...prev, newProj]);
    setSelectedProjectIndex(projectsData.length);
  };

  const handleDeleteProject = (idx: number) => {
    if (projectsData.length <= 1) {
      alert("At least one project is required.");
      return;
    }
    if (confirm(`Remove project "${projectsData[idx].title}"?`)) {
      setProjectsData((prev) => prev.filter((_, i) => i !== idx));
      setSelectedProjectIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Live Portfolio</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
              <Code2 className="w-7 h-7 text-sky-400" />
              <span>Local Content Editor</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Pure client-side editor. No database or CMS needed. Edit → Export → Update src/data/.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset} className="text-xs font-mono">
              <RefreshCw className="w-3.5 h-3.5 mr-1" />
              <span>Reset</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setActiveTab("export")}
              className="text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              <span>Export Code</span>
            </Button>
          </div>
        </div>

        {/* Informational Guidance Notice */}
        <div className="p-4 rounded-xl border border-sky-900/60 bg-sky-950/20 text-xs text-slate-300 font-mono flex items-start gap-3">
          <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-sky-400 font-bold">Content-Driven Architecture:</span>
            <p className="text-slate-400 font-sans text-xs leading-relaxed">
              Modifications made here update the in-memory runtime preview. To persist changes permanently in your codebase, switch to the <strong>Export</strong> tab, click <strong>Copy TypeScript</strong>, and paste the code into your <code>src/data/</code> files.
            </p>
          </div>
        </div>

        {/* Validation Issues Alert */}
        {allIssues.length > 0 && (
          <div className="p-4 rounded-xl border border-amber-900/60 bg-amber-950/20 text-xs space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>Data Validation Warnings ({allIssues.length})</span>
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-slate-400 font-mono text-[11px]">
              {allIssues.slice(0, 4).map((issue, idx) => (
                <li key={idx}>
                  <span className="text-slate-300">[{issue.field}]:</span> {issue.message}
                </li>
              ))}
              {allIssues.length > 4 && <li>...and {allIssues.length - 4} more warnings</li>}
            </ul>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {[
            { id: "profile", label: "Profile & Bio", icon: <User className="w-4 h-4" /> },
            { id: "hero", label: "Hero Configuration", icon: <Terminal className="w-4 h-4" /> },
            { id: "projects", label: `Projects (${projectsData.length})`, icon: <FolderGit2 className="w-4 h-4" /> },
            { id: "skills", label: `Skills (${skillsData.length})`, icon: <Wrench className="w-4 h-4" /> },
            { id: "export", label: "Export & Persist", icon: <FileCode className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as EditorTab)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all",
                  isActive
                    ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="pt-2">
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="max-w-3xl space-y-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h2 className="text-base font-bold text-slate-100 font-mono uppercase text-sky-400">
                // Edit Profile Data
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={portfolioData.name}
                    onChange={(e) => setPortfolioData({ ...portfolioData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Professional Title</label>
                  <input
                    type="text"
                    value={portfolioData.title}
                    onChange={(e) => setPortfolioData({ ...portfolioData, title: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={portfolioData.location}
                    onChange={(e) => setPortfolioData({ ...portfolioData, location: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Status Banner</label>
                  <input
                    type="text"
                    value={portfolioData.status}
                    onChange={(e) => setPortfolioData({ ...portfolioData, status: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Short Bio</label>
                <textarea
                  rows={2}
                  value={portfolioData.shortBio}
                  onChange={(e) => setPortfolioData({ ...portfolioData, shortBio: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Full Bio (Paragraphs)</label>
                {portfolioData.fullBio.map((para, i) => (
                  <div key={i} className="mb-3">
                    <span className="text-[10px] font-mono text-slate-500">Paragraph {i + 1}</span>
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => {
                        const copy = [...portfolioData.fullBio];
                        copy[i] = e.target.value;
                        setPortfolioData({ ...portfolioData, fullBio: copy });
                      }}
                      className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HERO TAB */}
          {activeTab === "hero" && (
            <div className="max-w-3xl space-y-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h2 className="text-base font-bold text-slate-100 font-mono uppercase text-sky-400">
                // Edit Hero Section
              </h2>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Hero Headline</label>
                <input
                  type="text"
                  value={portfolioData.hero.headline}
                  onChange={(e) =>
                    setPortfolioData({
                      ...portfolioData,
                      hero: { ...portfolioData.hero, headline: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Hero Description</label>
                <textarea
                  rows={3}
                  value={portfolioData.hero.description}
                  onChange={(e) =>
                    setPortfolioData({
                      ...portfolioData,
                      hero: { ...portfolioData.hero, description: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Primary CTA Label</label>
                  <input
                    type="text"
                    value={portfolioData.hero.primaryCta.label}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        hero: {
                          ...portfolioData.hero,
                          primaryCta: { ...portfolioData.hero.primaryCta, label: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Secondary CTA Label</label>
                  <input
                    type="text"
                    value={portfolioData.hero.secondaryCta.label}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        hero: {
                          ...portfolioData.hero,
                          secondaryCta: { ...portfolioData.hero.secondaryCta, label: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Project selector column */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase">Catalog</span>
                  <Button variant="outline" size="sm" onClick={handleAddProject} className="text-xs">
                    <Plus className="w-3 h-3 mr-1" />
                    <span>Add Project</span>
                  </Button>
                </div>

                <div className="space-y-2">
                  {projectsData.map((p, idx) => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedProjectIndex(idx)}
                      className={cn(
                        "p-3 rounded-lg border text-left cursor-pointer transition-all flex items-center justify-between",
                        idx === selectedProjectIndex
                          ? "bg-slate-800 border-sky-400 text-slate-100 shadow-sm"
                          : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900"
                      )}
                    >
                      <div>
                        <div className="text-xs font-bold font-mono text-slate-200">{p.title}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{p.category}</div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProject(idx);
                        }}
                        className="p-1 rounded text-slate-500 hover:text-rose-400"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Editor Form */}
              <div className="lg:col-span-8 bg-slate-900/50 p-6 rounded-xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-sm font-bold font-mono text-sky-400 uppercase">
                    Editing: {currentProject.title}
                  </h3>
                  <label className="flex items-center gap-2 text-xs font-mono text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentProject.featured}
                      onChange={(e) => updateCurrentProject("featured", e.target.checked)}
                      className="rounded bg-slate-950 border-slate-700 text-sky-500"
                    />
                    <span>Featured System</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Title</label>
                    <input
                      type="text"
                      value={currentProject.title}
                      onChange={(e) => updateCurrentProject("title", e.target.value)}
                      className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Slug (URL)</label>
                    <input
                      type="text"
                      value={currentProject.slug}
                      onChange={(e) => updateCurrentProject("slug", e.target.value)}
                      className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Category</label>
                  <input
                    type="text"
                    value={currentProject.category}
                    onChange={(e) => updateCurrentProject("category", e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Summary</label>
                  <textarea
                    rows={2}
                    value={currentProject.summary}
                    onChange={(e) => updateCurrentProject("summary", e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Description</label>
                  <textarea
                    rows={4}
                    value={currentProject.description}
                    onChange={(e) => updateCurrentProject("description", e.target.value)}
                    className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">GitHub Link</label>
                    <input
                      type="text"
                      value={currentProject.links.github || ""}
                      onChange={(e) =>
                        updateCurrentProject("links", {
                          ...currentProject.links,
                          github: e.target.value,
                        })
                      }
                      className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Live Demo Link</label>
                    <input
                      type="text"
                      value={currentProject.links.demo || ""}
                      onChange={(e) =>
                        updateCurrentProject("links", {
                          ...currentProject.links,
                          demo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Technologies (comma separated)
                  </label>
                  <input
                    type="text"
                    value={currentProject.technologies.join(", ")}
                    onChange={(e) =>
                      updateCurrentProject(
                        "technologies",
                        e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                      )
                    }
                    className="w-full px-3 py-1.5 text-sm rounded bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="max-w-4xl space-y-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h2 className="text-base font-bold text-slate-100 font-mono uppercase text-sky-400">
                  // Edit Categorized Skills
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setSkillsData((prev) => [
                      ...prev,
                      { name: "New Category", icon: "Code", skills: [{ name: "New Skill", level: "proficient" }] },
                    ])
                  }
                  className="text-xs"
                >
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  <span>Add Category</span>
                </Button>
              </div>

              <div className="space-y-6">
                {skillsData.map((category, catIdx) => (
                  <div key={catIdx} className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        type="text"
                        value={category.name}
                        onChange={(e) => {
                          const copy = [...skillsData];
                          copy[catIdx].name = e.target.value;
                          setSkillsData(copy);
                        }}
                        className="text-sm font-bold text-slate-100 bg-transparent border-b border-slate-700 px-1 py-0.5 focus:outline-none focus:border-sky-400"
                      />
                      <button
                        onClick={() =>
                          setSkillsData((prev) => prev.filter((_, i) => i !== catIdx))
                        }
                        className="text-xs text-rose-400 hover:underline font-mono"
                      >
                        Remove Category
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono"
                        >
                          <span>{skill.name}</span>
                          <button
                            onClick={() => {
                              const copy = [...skillsData];
                              copy[catIdx].skills = copy[catIdx].skills.filter((_, i) => i !== sIdx);
                              setSkillsData(copy);
                            }}
                            className="text-slate-500 hover:text-rose-400 text-xs ml-1"
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      <button
                        onClick={() => {
                          const skillName = prompt("Enter skill name:");
                          if (skillName && skillName.trim()) {
                            const copy = [...skillsData];
                            copy[catIdx].skills.push({ name: skillName.trim(), level: "proficient" });
                            setSkillsData(copy);
                          }
                        }}
                        className="px-2.5 py-1 rounded border border-dashed border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-500 text-xs font-mono flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Skill</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPORT TAB */}
          {activeTab === "export" && (
            <div className="max-w-4xl space-y-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
                <div>
                  <h2 className="text-base font-bold text-slate-100 font-mono uppercase text-sky-400">
                    // Generated TypeScript Data
                  </h2>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Copy and replace your files in <code>src/data/</code> to commit your changes.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopyJson} className="text-xs font-mono">
                    {copiedJson ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                    <span>Copy JSON</span>
                  </Button>
                  <Button variant="secondary" size="sm" onClick={handleDownloadJson} className="text-xs font-mono">
                    <Download className="w-3.5 h-3.5 mr-1" />
                    <span>Download JSON</span>
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleCopyTs} className="text-xs font-mono">
                    {copiedTs ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                    <span>Copy TypeScript</span>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-[500px] leading-relaxed">
                  {generateExportTs()}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
