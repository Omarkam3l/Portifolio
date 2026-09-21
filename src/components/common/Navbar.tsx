"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Search, Edit3 } from "lucide-react";
import { NavigationItem } from "@/types/portfolio";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

interface NavbarProps {
  siteName: string;
  navigation: NavigationItem[];
  onOpenCommandPalette?: () => void;
}

export function Navbar({ siteName, navigation, onOpenCommandPalette }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strip leading '#' for scroll spy
  const sectionIds = navigation
    .map((item) => item.href.replace(/^#/, ""))
    .filter(Boolean);

  const activeSection = useScrollSpy(sectionIds, 150);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono font-bold text-sm sm:text-base tracking-tight text-slate-100 hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-1 px-1.5"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span>{siteName.split("|")[0].trim()}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navigation.map((item) => {
            const sectionId = item.href.replace(/^#/, "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-all relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                  isActive
                    ? "text-sky-400 bg-sky-500/10 font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Command Palette, Editor, Theme, Mobile toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono rounded-lg border border-slate-700/80 bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Open command palette"
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Link to /editor */}
          <Link
            href="/editor"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-700/60 bg-slate-900/50 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            title="Open Content Editor"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Editor</span>
          </Link>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-base font-medium rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <Link
              href="/editor"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-sky-400 py-1"
            >
              <Edit3 className="w-4 h-4" />
              <span>Open Content Editor</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
