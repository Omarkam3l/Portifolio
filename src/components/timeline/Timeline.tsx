import React from "react";
import { Briefcase, Flag, Code2, MapPin, Calendar } from "lucide-react";
import { ExperienceItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items: ExperienceItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const getTypeBadge = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "work":
        return {
          icon: <Briefcase className="w-3.5 h-3.5 text-sky-400" />,
          badge: <Badge variant="accent">Experience</Badge>,
          border: "border-sky-500/50",
          nodeBg: "bg-sky-950",
        };
      case "milestone":
        return {
          icon: <Flag className="w-3.5 h-3.5 text-amber-400" />,
          badge: <Badge variant="default" className="border-amber-500/40 text-amber-300">Milestone</Badge>,
          border: "border-amber-500/50",
          nodeBg: "bg-amber-950",
        };
      case "project":
      default:
        return {
          icon: <Code2 className="w-3.5 h-3.5 text-emerald-400" />,
          badge: <Badge variant="success">Research / Project</Badge>,
          border: "border-emerald-500/50",
          nodeBg: "bg-emerald-950",
        };
    }
  };

  return (
    <div className={cn("relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10", className)}>
      {items.map((item, idx) => {
        const typeStyle = getTypeBadge(item.type);

        return (
          <div key={idx} className="relative group">
            {/* Timeline Marker Node */}
            <div
              className={cn(
                "absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110",
                typeStyle.border,
                typeStyle.nodeBg
              )}
            >
              {typeStyle.icon}
            </div>

            {/* Card Content */}
            <div className="rounded-xl border border-slate-800/90 bg-slate-900/50 p-5 sm:p-6 backdrop-blur-sm transition-all group-hover:border-slate-700 group-hover:bg-slate-900/80">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {typeStyle.badge}
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>
                {item.location && (
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                {item.role}
              </h3>
              <div className="text-sm font-medium text-sky-400 font-mono mb-3">
                @ {item.organization}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-400 font-mono mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech stack tags */}
              {item.tech && item.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
