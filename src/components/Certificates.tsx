"use client";

import React from "react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
            // Accreditations & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Certifications & Specializations.
          </h2>
          <p className="text-base text-slate-400">
            Verified coursework, specialized technical certifications, and theoretical foundation credentials.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => {
            const isPlaceholder = cert.title.includes("[ADD");

            return (
              <div
                key={cert.id}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-sky-500/30 p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-3 text-xs font-mono">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </span>
                    <span className="text-slate-500">{cert.issueDate}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {cert.title}
                    </h3>
                    {cert.description && (
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link & Credential ID */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  {cert.credentialId && (
                    <span className="text-slate-500 truncate max-w-[200px]">
                      ID: {cert.credentialId}
                    </span>
                  )}

                  {cert.credentialUrl && !isPlaceholder ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors ml-auto"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-slate-500 italic ml-auto">
                      Editable in src/data/certificates.ts
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
