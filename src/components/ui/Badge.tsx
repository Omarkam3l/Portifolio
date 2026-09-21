import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "outline" | "secondary";
  withDot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  withDot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border transition-colors";

  const variants = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/80",
    accent: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    outline: "bg-transparent text-slate-400 border-slate-700",
    secondary: "bg-slate-800 text-slate-200 border-transparent",
  };

  const dotColors = {
    default: "bg-slate-400",
    accent: "bg-sky-400 animate-pulse",
    success: "bg-emerald-400",
    outline: "bg-slate-500",
    secondary: "bg-slate-400",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {withDot && (
        <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
