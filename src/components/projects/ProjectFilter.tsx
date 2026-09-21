import React from "react";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  counts?: Record<string, number>;
  className?: string;
}

export function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
  className,
}: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Project categories"
      className={cn(
        "flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm",
        className
      )}
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-150 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
              isSelected
                ? "bg-sky-500 text-slate-950 font-bold shadow-sm shadow-sky-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            )}
          >
            <span>{category}</span>
            {typeof count === "number" && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isSelected ? "bg-slate-900/40 text-slate-900 font-bold" : "bg-slate-800 text-slate-400"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
