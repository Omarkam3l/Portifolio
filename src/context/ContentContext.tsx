"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import initialContent from "@/data/portfolio-content.json";

export type PortfolioContent = typeof initialContent;

interface ContentContextType {
  content: PortfolioContent;
  updateContent: (newContent: PortfolioContent) => Promise<boolean>;
  resetToDefaults: () => Promise<boolean>;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  activeModal: string | null;
  setActiveModal: (section: string | null) => void;
  saveStatus: "idle" | "saving" | "saved" | "error";
  saveMessage: string;
}

const ContentContext = createContext<ContentContextType | null>(null);

const STORAGE_KEY = "portfolio_content_overrides";
const ADMIN_KEY = "portfolio_admin_unlocked";

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(initialContent);
  const [isAdmin, setIsAdminState] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState<string>("");

  // Initialize and check admin state / URL params / localStorage
  useEffect(() => {
    // Check URL params
    const params = new URLSearchParams(window.location.search);
    const hasAdminParam = params.get("admin") === "true";
    const storedAdmin = localStorage.getItem(ADMIN_KEY) === "true";

    if (hasAdminParam || storedAdmin) {
      setIsAdminState(true);
      localStorage.setItem(ADMIN_KEY, "true");
    }

    // Fetch freshest content from backend /api/content
    fetch("/api/content")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((data) => {
        if (data && typeof data === "object") {
          setContent(data);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
      })
      .catch(() => {
        // Fallback to localStorage if offline
        const local = localStorage.getItem(STORAGE_KEY);
        if (local) {
          try {
            setContent(JSON.parse(local));
          } catch {
            setContent(initialContent);
          }
        }
      });

    // Keyboard shortcut Ctrl + Shift + E to toggle admin mode
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        setIsAdminState((prev) => {
          const next = !prev;
          localStorage.setItem(ADMIN_KEY, String(next));
          return next;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const setIsAdmin = (val: boolean) => {
    setIsAdminState(val);
    localStorage.setItem(ADMIN_KEY, String(val));
  };

  // Permanently save content to filesystem via API and local state
  const updateContent = useCallback(async (newContent: PortfolioContent): Promise<boolean> => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    setSaveStatus("saving");
    setSaveMessage("Saving to codebase permanently...");

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContent),
      });

      if (!res.ok) {
        throw new Error("Failed to write to file");
      }

      setSaveStatus("saved");
      setSaveMessage("Saved permanently to project files ✓");
      setTimeout(() => setSaveStatus("idle"), 3500);
      return true;
    } catch (err) {
      console.error("Save error:", err);
      setSaveStatus("error");
      setSaveMessage("Saved in browser (API write failed)");
      setTimeout(() => setSaveStatus("idle"), 4000);
      return false;
    }
  }, []);

  const resetToDefaults = useCallback(async () => {
    localStorage.removeItem(STORAGE_KEY);
    return updateContent(initialContent);
  }, [updateContent]);

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetToDefaults,
        isAdmin,
        setIsAdmin,
        activeModal,
        setActiveModal,
        saveStatus,
        saveMessage,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function usePortfolioContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("usePortfolioContent must be used within ContentProvider");
  }
  return ctx;
}
