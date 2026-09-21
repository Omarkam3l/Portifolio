"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, Copy, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-white/5 relative overflow-hidden">
      {/* Soft atmospheric background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8 relative z-10">
        <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
          // Contact & Collaboration
        </div>

        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-slate-400 font-light">
            Have an interesting problem?
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100">
            Let&apos;s build something.
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
          Whether you want to discuss knowledge graph RAG, runtime observability, systems architecture, or engineering opportunities—my inbox is open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-xl shadow-sky-500/15 hover:shadow-sky-500/25 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-mono transition-all duration-200 hover:-translate-y-0.5"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied {profile.socials.emailRaw}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{profile.socials.emailRaw}</span>
              </>
            )}
          </button>
        </div>

        {/* Links row */}
        <div className="pt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="text-xs font-mono">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-600" />
          </a>

          <span className="text-white/10">•</span>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-slate-100 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span className="text-xs font-mono">LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-slate-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
