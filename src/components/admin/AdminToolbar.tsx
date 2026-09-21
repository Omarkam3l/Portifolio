"use client";

import React, { useState, useRef } from "react";
import { usePortfolioContent } from "@/context/ContentContext";
import {
  Shield,
  Copy,
  Download,
  Upload,
  RotateCcw,
  Lock,
  ChevronDown,
  ChevronUp,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function AdminToolbar() {
  const {
    content,
    updateContent,
    resetToDefaults,
    isAdmin,
    setIsAdmin,
    saveStatus,
    saveMessage,
  } = usePortfolioContent();

  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Copy JSON to clipboard
  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Export JSON file download
  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-content-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import JSON file
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json && typeof json === "object") {
          await updateContent(json);
          alert("Portfolio content successfully imported and permanently saved!");
        }
      } catch (err) {
        alert("Failed to parse JSON file: " + String(err));
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // If not admin, show subtle unlock trigger
  if (!isAdmin) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          type="button"
          onClick={() => setIsAdmin(true)}
          className="p-2.5 rounded-full bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-900 text-slate-500 hover:text-cyan-400 transition-all shadow-lg backdrop-blur-md cursor-pointer group"
          title="Owner Admin Mode (Ctrl + Shift + E)"
        >
          <Shield className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
      {/* Toast Save Status if saving or saved */}
      {saveStatus !== "idle" && (
        <div
          className={`mb-2 px-3 py-2 rounded-xl text-xs font-mono shadow-xl backdrop-blur-md border flex items-center gap-2 ${
            saveStatus === "saving"
              ? "bg-sky-950/90 border-sky-500/30 text-sky-300"
              : saveStatus === "saved"
              ? "bg-emerald-950/90 border-emerald-500/30 text-emerald-300"
              : "bg-rose-950/90 border-rose-500/30 text-rose-300"
          }`}
        >
          {saveStatus === "saving" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
          {saveStatus === "saved" && <Check className="w-3.5 h-3.5 text-emerald-400" />}
          {saveStatus === "error" && <AlertCircle className="w-3.5 h-3.5 text-rose-400" />}
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Main Admin Toolbar matching user screenshot */}
      <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/90 backdrop-blur-xl shadow-2xl p-4 w-72 text-slate-200 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Owner Admin Toolbar</span>
          </div>
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 cursor-pointer"
          >
            {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {!collapsed && (
          <div className="space-y-3 pt-1">
            {/* Action Buttons Row */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={handleCopyJSON}
                className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy JSON"}</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                <Download className="w-3 h-3" />
                <span>Export</span>
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 transition-colors cursor-pointer"
              >
                <Upload className="w-3 h-3" />
                <span>Import</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </div>

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => {
                  if (confirm("Reset all content back to project defaults?")) {
                    resetToDefaults();
                  }
                }}
                className="text-rose-400 hover:text-rose-300 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAdmin(false)}
                className="text-slate-400 hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>Lock Admin</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
