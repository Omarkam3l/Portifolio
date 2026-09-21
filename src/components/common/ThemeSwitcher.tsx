"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex items-center gap-1 p-1 rounded-lg bg-slate-800/60 border border-slate-700/60 h-8 w-24", className)} />
    );
  }

  const modes: Array<{ mode: "dark" | "light" | "system"; label: string; icon: React.ReactNode }> = [
    { mode: "dark", label: "Dark theme", icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: "light", label: "Light theme", icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: "system", label: "System theme", icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme selector"
      className={cn(
        "flex items-center gap-1 p-1 rounded-lg bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm",
        className
      )}
    >
      {modes.map(({ mode, label, icon }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            onClick={() => setTheme(mode)}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            className={cn(
              "p-1.5 rounded-md transition-all text-slate-400 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400",
              isActive && "bg-slate-700 text-sky-400 shadow-sm"
            )}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}
