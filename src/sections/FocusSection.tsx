import React from "react";
import { Network, Activity, Cpu, Sparkles, Terminal } from "lucide-react";
import { FocusArea } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";

interface FocusSectionProps {
  focusAreas: FocusArea[];
}

export function FocusSection({ focusAreas }: FocusSectionProps) {
  const getIcon = (name?: string) => {
    switch (name?.toLowerCase()) {
      case "network":
        return <Network className="w-5 h-5 text-sky-400" />;
      case "activity":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="focus" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="02. FOCUS"
          title="Core Engineering Focus Areas"
          description="Key architectural domains and systems I design, optimize, and research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm space-y-4 hover:border-slate-700 hover:bg-slate-900/80 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform">
                  {getIcon(area.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                  {area.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
