"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

interface InteractiveTerminalHeroProps {
  terminalLines?: string[];
  onOpenCommandPalette?: () => void;
}

export function InteractiveTerminalHero({
  terminalLines = [
    "status: initialized",
    "focus: code_knowledge_graphs + runtime_tracing",
    "architecture: decoupled_data_layer",
    "ready: press [Ctrl+K] for command palette",
  ],
  onOpenCommandPalette,
}: InteractiveTerminalHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-sky-400" />
            <span>sys://runtime/engineer.session</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
          title="Copy terminal session"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-2 text-slate-300">
        <div className="text-slate-500 flex items-center gap-2">
          <span className="text-emerald-400">omar@arch</span>
          <span className="text-slate-600">:</span>
          <span className="text-sky-400">~/systems</span>
          <span className="text-slate-400">$</span>
          <span className="text-slate-200">inspect --environment</span>
        </div>

        {terminalLines.map((line, idx) => (
          <div key={idx} className="flex items-start gap-2 pl-2 border-l border-slate-800 text-slate-400">
            <span className="text-sky-500/80 select-none">›</span>
            <span className="text-slate-300">{line}</span>
          </div>
        ))}

        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-900">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>READY</span>
          </div>
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="text-sky-400 hover:underline flex items-center gap-1"
            >
              <span>Click or [Ctrl+K] to launch</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
