import React from "react";
import { Brain, Code, Server, Layout, Database, Wrench, Sparkles, Terminal } from "lucide-react";
import { SkillCategory } from "@/types/portfolio";
import { SkillPill } from "./SkillPill";

interface SkillGroupProps {
  category: SkillCategory;
}

export function SkillGroup({ category }: SkillGroupProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "brain":
        return <Brain className="w-4 h-4 text-sky-400" />;
      case "code":
        return <Code className="w-4 h-4 text-emerald-400" />;
      case "server":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "layout":
        return <Layout className="w-4 h-4 text-amber-400" />;
      case "database":
        return <Database className="w-4 h-4 text-rose-400" />;
      case "wrench":
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      default:
        return <Terminal className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm space-y-4 hover:border-slate-700/80 transition-all">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-slate-800 border border-slate-700">
            {getCategoryIcon(category.icon)}
          </div>
          <h3 className="text-base font-bold text-slate-100 tracking-tight">
            {category.name}
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          {category.skills.length} skills
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <SkillPill key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
