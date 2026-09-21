"use client";

import React from "react";
import { usePortfolioContent } from "@/context/ContentContext";
import { Pencil } from "lucide-react";

export function SectionEditButton({ section }: { section: string }) {
  const { isAdmin, setActiveModal } = usePortfolioContent();

  if (!isAdmin) return null;

  return (
    <button
      type="button"
      onClick={() => setActiveModal(section)}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-sm cursor-pointer ml-auto"
      title={`Edit ${section} section`}
    >
      <Pencil className="w-3 h-3" />
      <span>Edit</span>
    </button>
  );
}
