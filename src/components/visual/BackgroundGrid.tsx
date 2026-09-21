import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60",
        className
      )}
    >
      <div className="absolute inset-0 bg-tech-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
    </div>
  );
}
