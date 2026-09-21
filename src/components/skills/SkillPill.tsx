import React from "react";
import { SkillItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SkillPillProps {
  skill: SkillItem;
  className?: string;
}

export function SkillPill({ skill, className }: SkillPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-150",
        skill.highlight
          ? "bg-slate-900 border-sky-500/50 text-slate-100 hover:border-sky-400 hover:shadow-sm hover:shadow-sky-500/10"
          : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-slate-100",
        className
      )}
    >
      <span className={cn(skill.highlight && "text-sky-300 font-semibold")}>
        {skill.name}
      </span>
      {skill.level && (
        <span
          className={cn(
            "text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded font-sans",
            skill.level === "proficient"
              ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
              : "bg-slate-800 text-slate-400"
          )}
        >
          {skill.level}
        </span>
      )}
    </div>
  );
}
