"use client";

import React from "react";
import { ArrowRight, Mail, Sparkles, Terminal, Activity, Layers, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle ambient radial glow behind hero */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-sky-500/10 blur-[130px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>{profile.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-sm font-mono tracking-wider uppercase text-slate-400">
                {profile.role}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
                Building intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">software systems</span>.
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Socials & Meta */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-5 text-sm text-slate-400">
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

              <span className="text-white/10">•</span>

              <span className="text-xs font-mono text-slate-500">
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Abstract Technical Interface */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-2xl shadow-black/40 space-y-5">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>runtime.telemetry</span>
                </div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider">v2.4.0</span>
              </div>

              {/* Composition Modules */}
              <div className="space-y-3">
                {/* Module 1: Code Knowledge Graph */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between group hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Code Knowledge Graph</div>
                      <div className="text-[11px] text-slate-400 font-mono">Neo4j • AST • Bounded Hops</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ACTIVE
                  </span>
                </div>

                {/* Module 2: Runtime Tracing */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between group hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Execution DAG Observer</div>
                      <div className="text-[11px] text-slate-400 font-mono">Spans • Events • Causal Bus</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    IDLE
                  </span>
                </div>

                {/* Module 3: System Pipeline Stats */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Deterministic Synthesis</div>
                      <div className="text-[11px] text-slate-400 font-mono">Adversarial Eval • Zero Leakage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    SYNCED
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry Snippet */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  <span>Architecture: Decoupled Data</span>
                </span>
                <span>UTC+2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
