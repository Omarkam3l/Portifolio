import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  tag,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {tag && (
        <div className={cn("flex items-center gap-2", align === "center" && "justify-center")}>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase text-sky-400">
            // {tag}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
