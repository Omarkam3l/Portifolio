import React from "react";
import { Sparkles } from "lucide-react";
import { profile } from "@/data/profile";

export function CurrentFocus() {
  return (
    <section className="py-20 sm:py-24 border-t border-white/5 relative bg-gradient-to-b from-transparent via-sky-950/10 to-transparent">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Currently Exploring</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
          Active research, theoretical foundations & emerging tooling.
        </h2>

        {/* Focus Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.currentFocus.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm space-y-2 hover:border-sky-500/30 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-sky-400 font-semibold">{item.tag}</span>
                <span className="text-slate-500">0{idx + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
