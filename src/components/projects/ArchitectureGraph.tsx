"use client";

import React, { useState } from "react";
import { ProjectArchitecture, ArchitectureNode } from "@/types/portfolio";
import { ArrowRight, Info, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureGraphProps {
  architecture: ProjectArchitecture;
  className?: string;
  compact?: boolean;
}

export function ArchitectureGraph({
  architecture,
  className,
  compact = false,
}: ArchitectureGraphProps) {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);

  if (!architecture || !architecture.nodes || architecture.nodes.length === 0) {
    return (
      <div className="p-6 text-center text-sm font-mono text-slate-500 border border-dashed border-slate-800 rounded-xl">
        No architecture graph defined for this project.
      </div>
    );
  }

  const { nodes, edges } = architecture;

  const getNodeColor = (type?: string) => {
    switch (type) {
      case "input":
        return {
          bg: "bg-sky-950/60",
          border: "border-sky-500/60",
          text: "text-sky-300",
          badge: "bg-sky-500/20 text-sky-400",
        };
      case "process":
        return {
          bg: "bg-indigo-950/60",
          border: "border-indigo-500/60",
          text: "text-indigo-300",
          badge: "bg-indigo-500/20 text-indigo-400",
        };
      case "storage":
        return {
          bg: "bg-emerald-950/60",
          border: "border-emerald-500/60",
          text: "text-emerald-300",
          badge: "bg-emerald-500/20 text-emerald-400",
        };
      case "output":
        return {
          bg: "bg-amber-950/60",
          border: "border-amber-500/60",
          text: "text-amber-300",
          badge: "bg-amber-500/20 text-amber-400",
        };
      default:
        return {
          bg: "bg-slate-900",
          border: "border-slate-700",
          text: "text-slate-300",
          badge: "bg-slate-800 text-slate-400",
        };
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-slate-800 bg-slate-950/70 p-5 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h4 className="text-sm font-semibold text-slate-200">
            System Architecture Flow
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          {nodes.length} Nodes • {edges.length} Edges
        </span>
      </div>

      {/* Nodes grid / flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {nodes.map((node) => {
          const style = getNodeColor(node.type);
          const isSelected = selectedNode?.id === node.id;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(isSelected ? null : node)}
              className={cn(
                "p-3 rounded-lg border text-left transition-all relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                style.bg,
                style.border,
                isSelected
                  ? "ring-2 ring-sky-400 shadow-lg shadow-sky-500/10"
                  : "hover:border-slate-500 hover:scale-[1.01]"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className={cn("text-xs font-bold font-mono tracking-tight", style.text)}>
                  {node.label}
                </span>
                {node.type && (
                  <span className={cn("text-[10px] font-mono uppercase px-1.5 py-0.5 rounded", style.badge)}>
                    {node.type}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                {node.role}
              </p>
            </button>
          );
        })}
      </div>

      {/* Edges & Pipeline connections list */}
      <div className="pt-3 border-t border-slate-800/60">
        <h5 className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2">
          Causal Pipelines & Data Flow:
        </h5>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {edges.map((edge, idx) => {
            const fromNode = nodes.find((n) => n.id === edge.from);
            const toNode = nodes.find((n) => n.id === edge.to);

            return (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                <span className="text-sky-400 font-semibold">{fromNode?.label || edge.from}</span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
                <span className="text-emerald-400 font-semibold">{toNode?.label || edge.to}</span>
                {edge.label && (
                  <span className="text-[10px] text-slate-500 italic">({edge.label})</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && (
        <div className="mt-4 p-3 rounded-lg bg-slate-900/90 border border-sky-500/40 text-xs font-mono animate-in fade-in duration-150 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-sky-300">{selectedNode.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                id: {selectedNode.id}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">{selectedNode.role}</p>
          </div>
          <button
            onClick={() => setSelectedNode(null)}
            className="text-slate-400 hover:text-slate-200 text-xs px-1.5 py-0.5"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
