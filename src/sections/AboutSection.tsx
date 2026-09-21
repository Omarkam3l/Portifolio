import React from "react";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";
import { PortfolioData } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";

interface AboutSectionProps {
  portfolio: PortfolioData;
}

export function AboutSection({ portfolio }: AboutSectionProps) {
  const { fullBio, shortBio } = portfolio;

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="01. ABOUT"
          title="Engineering Philosophy & Technical Foundations"
          description={shortBio}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {fullBio.map((paragraph, idx) => (
              <p key={idx} className="p-4 rounded-xl border border-slate-800/60 bg-slate-900/40">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Terminal className="w-4 h-4" />
                <span>Deterministic Structure</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Preferring explicit AST trees, causal DAGs, and knowledge graphs over fragile probabilistic shortcuts.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Bounded Exploration</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Constraining multi-hop reasoning and depth traversals to eliminate context explosions and runaway queries.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Runtime Visibility</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Tracing real execution spans and events to verify actual system behavior rather than relying on guesswork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
