"use client";

import React, { useState, useEffect } from "react";
import { usePortfolioContent } from "@/context/ContentContext";
import { X, Plus, Trash2, Save, Check } from "lucide-react";

export function EditSectionModal() {
  const { content, updateContent, activeModal, setActiveModal, saveStatus } = usePortfolioContent();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (activeModal && content) {
      setFormData(JSON.parse(JSON.stringify(content)));
    }
  }, [activeModal, content]);

  if (!activeModal || !formData) return null;

  const handleClose = () => setActiveModal(null);

  const handleSave = async () => {
    await updateContent(formData);
    setActiveModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl max-h-[90vh] bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Owner Editor
            </span>
            <span className="text-slate-500">/</span>
            <h2 className="text-base font-bold text-slate-100 capitalize">
              Edit {activeModal}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Dynamic by Section */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* 1. HERO & PROFILE EDITOR */}
          {activeModal === "hero" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.profile?.firstName || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, firstName: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.profile?.lastName || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, lastName: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Top Badge</label>
                <input
                  type="text"
                  value={formData.profile?.badge || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, badge: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Bio Description</label>
                <textarea
                  rows={3}
                  value={formData.profile?.bio || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, bio: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Typing Roles (comma-separated)</label>
                <input
                  type="text"
                  value={(formData.profile?.roles || []).join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        roles: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                />
              </div>
            </div>
          )}

          {/* 2. PROJECTS EDITOR */}
          {activeModal === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Total Projects: {formData.projects?.length || 0}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newProj = {
                      id: "project-" + Date.now(),
                      title: "New Project",
                      description: "Project description goes here.",
                      technologies: ["Python", "FastAPI"],
                      github: "https://github.com/Omarkam3l",
                    };
                    setFormData({
                      ...formData,
                      projects: [newProj, ...(formData.projects || [])],
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.projects || []).map((proj: any, index: number) => (
                  <div
                    key={proj.id || index}
                    className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[index].title = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        placeholder="Project Title"
                        className="font-bold text-sm text-slate-100 bg-transparent border-b border-white/10 focus:border-cyan-400 focus:outline-none w-full pb-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete project "${proj.title}"?`)) {
                            const updated = formData.projects.filter((_: any, i: number) => i !== index);
                            setFormData({ ...formData, projects: updated });
                          }
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => {
                        const updated = [...formData.projects];
                        updated[index].description = e.target.value;
                        setFormData({ ...formData, projects: updated });
                      }}
                      placeholder="Project Description"
                      className="w-full text-xs text-slate-300 bg-slate-950 p-2 rounded border border-white/5 focus:border-cyan-400 focus:outline-none leading-relaxed"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">
                          Technologies (comma-separated)
                        </label>
                        <input
                          type="text"
                          value={(proj.technologies || []).join(", ")}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[index].technologies = e.target.value
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean);
                            setFormData({ ...formData, projects: updated });
                          }}
                          className="w-full px-2.5 py-1.5 text-xs font-mono bg-slate-950 border border-white/5 rounded text-slate-200 focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 mb-1">
                          GitHub Link
                        </label>
                        <input
                          type="text"
                          value={proj.github || ""}
                          onChange={(e) => {
                            const updated = [...formData.projects];
                            updated[index].github = e.target.value;
                            setFormData({ ...formData, projects: updated });
                          }}
                          className="w-full px-2.5 py-1.5 text-xs font-mono bg-slate-950 border border-white/5 rounded text-slate-200 focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. SKILLS EDITOR */}
          {activeModal === "skills" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Core Categories: {formData.skills?.length || 0}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newCat = {
                      category: "New Category",
                      skills: ["Sample Skill"],
                    };
                    setFormData({
                      ...formData,
                      skills: [...(formData.skills || []), newCat],
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Category</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.skills || []).map((cat: any, cIdx: number) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <input
                        type="text"
                        value={cat.category}
                        onChange={(e) => {
                          const updated = [...formData.skills];
                          updated[cIdx].category = e.target.value;
                          setFormData({ ...formData, skills: updated });
                        }}
                        className="font-bold text-sm text-cyan-400 uppercase font-mono bg-transparent border-b border-white/10 focus:border-cyan-400 focus:outline-none w-full pb-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete category "${cat.category}"?`)) {
                            const updated = formData.skills.filter((_: any, i: number) => i !== cIdx);
                            setFormData({ ...formData, skills: updated });
                          }
                        }}
                        className="text-rose-400 hover:text-rose-300 p-1"
                        title="Delete Category"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        Skills (comma-separated, no duplicates)
                      </label>
                      <textarea
                        rows={2}
                        value={(cat.skills || []).join(", ")}
                        onChange={(e) => {
                          const updated = [...formData.skills];
                          updated[cIdx].skills = e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean);
                          setFormData({ ...formData, skills: updated });
                        }}
                        className="w-full text-xs text-slate-200 bg-slate-950 p-2.5 rounded border border-white/5 focus:border-cyan-400 focus:outline-none leading-relaxed font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. EXPERIENCE & EDUCATION EDITOR */}
          {activeModal === "experience" && (
            <div className="space-y-6">
              <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase">Work Experience</h3>
              {(formData.workExperience || []).map((exp: any, eIdx: number) => (
                <div key={eIdx} className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => {
                        const updated = [...formData.workExperience];
                        updated[eIdx].company = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      placeholder="Company"
                      className="text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => {
                        const updated = [...formData.workExperience];
                        updated[eIdx].role = e.target.value;
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      placeholder="Role"
                      className="text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => {
                      const updated = [...formData.workExperience];
                      updated[eIdx].period = e.target.value;
                      setFormData({ ...formData, workExperience: updated });
                    }}
                    placeholder="Period (e.g. April 2024 — October 2024)"
                    className="w-full text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                  />
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Bullet points (one per line)
                    </label>
                    <textarea
                      rows={3}
                      value={(exp.bulletPoints || []).join("\n")}
                      onChange={(e) => {
                        const updated = [...formData.workExperience];
                        updated[eIdx].bulletPoints = e.target.value.split("\n").filter(Boolean);
                        setFormData({ ...formData, workExperience: updated });
                      }}
                      className="w-full text-xs text-slate-200 bg-slate-950 p-2 rounded border border-white/5 focus:border-cyan-400 focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 5. EDUCATION EDITOR */}
          {activeModal === "education" && (
            <div className="space-y-6">
              <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase">Education</h3>
              {(formData.education || []).map((edu: any, edIdx: number) => (
                <div key={edIdx} className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-3">
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[edIdx].institution = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                    placeholder="Institution"
                    className="w-full text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[edIdx].degree = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                    placeholder="Degree"
                    className="w-full text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="text"
                    value={edu.period}
                    onChange={(e) => {
                      const updated = [...formData.education];
                      updated[edIdx].period = e.target.value;
                      setFormData({ ...formData, education: updated });
                    }}
                    placeholder="Period"
                    className="w-full text-xs font-mono text-slate-100 bg-slate-950 p-2 rounded border border-white/5 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 6. CERTIFICATES EDITOR */}
          {activeModal === "certificates" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Total Credentials: {formData.certificates?.length || 0}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newCert = {
                      id: "cert-" + Date.now(),
                      title: "New Certification",
                      issuer: "Issuer / Academy",
                      date: "2025",
                      description: "Certification details",
                      image: "/certificates/nvidia-beginner.jpg",
                      pdfUrl: "/certificates/Course_Certificate_En.pdf",
                    };
                    setFormData({
                      ...formData,
                      certificates: [newCert, ...(formData.certificates || [])],
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Certificate</span>
                </button>
              </div>

              {(formData.certificates || []).map((cert: any, cIdx: number) => (
                <div key={cIdx} className="p-4 rounded-xl border border-white/10 bg-slate-900/50 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <input
                      type="text"
                      value={cert.title}
                      onChange={(e) => {
                        const updated = [...formData.certificates];
                        updated[cIdx].title = e.target.value;
                        setFormData({ ...formData, certificates: updated });
                      }}
                      className="text-xs font-bold text-slate-100 bg-transparent border-b border-white/10 focus:border-cyan-400 focus:outline-none w-full pb-1"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete certificate "${cert.title}"?`)) {
                          const updated = formData.certificates.filter((_: any, i: number) => i !== cIdx);
                          setFormData({ ...formData, certificates: updated });
                        }
                      }}
                      className="text-rose-400 hover:text-rose-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => {
                        const updated = [...formData.certificates];
                        updated[cIdx].issuer = e.target.value;
                        setFormData({ ...formData, certificates: updated });
                      }}
                      placeholder="Issuer"
                      className="text-xs font-mono text-slate-200 bg-slate-950 p-1.5 rounded border border-white/5"
                    />
                    <input
                      type="text"
                      value={cert.date}
                      onChange={(e) => {
                        const updated = [...formData.certificates];
                        updated[cIdx].date = e.target.value;
                        setFormData({ ...formData, certificates: updated });
                      }}
                      placeholder="Date"
                      className="text-xs font-mono text-slate-200 bg-slate-950 p-1.5 rounded border border-white/5"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-slate-900/60">
          <div className="text-xs font-mono text-slate-400">
            {saveStatus === "saving" ? "Writing to files..." : "Edits write permanently to codebase"}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              {saveStatus === "saved" ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Permanently</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
