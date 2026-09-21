"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  FolderGit2,
  Terminal,
  User,
  Wrench,
  Mail,
  Sun,
  Moon,
  Monitor,
  Copy,
  Check,
  ExternalLink,
  Compass,
  BookOpen,
} from "lucide-react";
import { Project, NavigationItem, SocialLink } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Projects" | "Actions" | "Social" | "Theme";
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  projects: Project[];
  socialLinks: SocialLink[];
  email: string;
  onSelectProjectFilter?: (category: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  navigation,
  projects,
  socialLinks,
  email,
  onSelectProjectFilter,
}: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build command items
  const items: CommandItem[] = [];

  // Navigation commands
  navigation.forEach((nav) => {
    const icon =
      nav.href.includes("about") ? <User className="w-4 h-4" /> :
      nav.href.includes("project") ? <FolderGit2 className="w-4 h-4" /> :
      nav.href.includes("skill") ? <Wrench className="w-4 h-4" /> :
      nav.href.includes("learning") ? <BookOpen className="w-4 h-4" /> :
      nav.href.includes("contact") ? <Mail className="w-4 h-4" /> :
      <Compass className="w-4 h-4" />;

    items.push({
      id: `nav-${nav.href}`,
      label: `Go to ${nav.label}`,
      category: "Navigation",
      icon,
      keywords: nav.label.toLowerCase(),
      action: () => {
        onClose();
        if (nav.href.startsWith("#")) {
          const el = document.getElementById(nav.href.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(nav.href);
        }
      },
    });
  });

  // Project pages & direct links
  projects.forEach((proj) => {
    items.push({
      id: `proj-${proj.slug}`,
      label: `Project: ${proj.title}`,
      category: "Projects",
      icon: <FolderGit2 className="w-4 h-4 text-sky-400" />,
      keywords: `${proj.title} ${proj.category} ${proj.technologies.join(" ")}`.toLowerCase(),
      action: () => {
        onClose();
        router.push(`/projects/${proj.slug}`);
      },
    });
  });

  // Filter commands
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  categories.forEach((cat) => {
    items.push({
      id: `filter-${cat}`,
      label: `Filter Projects: ${cat}`,
      category: "Actions",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      keywords: `filter category ${cat}`.toLowerCase(),
      action: () => {
        onClose();
        if (onSelectProjectFilter) onSelectProjectFilter(cat);
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    });
  });

  // Action: Copy email
  items.push({
    id: "action-copy-email",
    label: `Copy Email (${email})`,
    category: "Actions",
    icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />,
    keywords: "email contact copy address",
    action: () => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    },
  });

  // Action: Theme toggles
  items.push(
    {
      id: "theme-dark",
      label: "Switch to Dark Theme",
      category: "Theme",
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
      keywords: "theme dark mode night",
      action: () => {
        setTheme("dark");
        onClose();
      },
    },
    {
      id: "theme-light",
      label: "Switch to Light Theme",
      category: "Theme",
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      keywords: "theme light mode day",
      action: () => {
        setTheme("light");
        onClose();
      },
    },
    {
      id: "theme-system",
      label: "Use System Theme",
      category: "Theme",
      icon: <Monitor className="w-4 h-4 text-slate-400" />,
      keywords: "theme system auto",
      action: () => {
        setTheme("system");
        onClose();
      },
    }
  );

  // Social Links
  socialLinks.forEach((link) => {
    items.push({
      id: `social-${link.platform}`,
      label: `Open ${link.platform} (${link.username})`,
      category: "Social",
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      keywords: `${link.platform} ${link.username}`.toLowerCase(),
      action: () => {
        onClose();
        window.open(link.url, "_blank", "noopener,noreferrer");
      },
    });
  });

  // Filtered items based on query
  const filteredItems = items.filter((item) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      item.label.toLowerCase().includes(q) ||
      (item.keywords && item.keywords.includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl rounded-xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden flex flex-col"
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (projects, navigation, theme)..."
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            aria-autocomplete="list"
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-all",
                    isSelected
                      ? "bg-slate-800 text-sky-400 font-medium"
                      : "text-slate-300 hover:bg-slate-850"
                  )}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("p-1 rounded", isSelected ? "text-sky-400" : "text-slate-400")}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-slate-800 bg-slate-950/60 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Engineering Command Bus</span>
        </div>
      </div>
    </div>
  );
}
