import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Code2 } from "lucide-react";
import { SiteConfig, SocialLink } from "@/types/portfolio";
import { SocialLinks } from "./SocialLinks";

interface FooterProps {
  config: SiteConfig;
  socialLinks: SocialLink[];
  status: string;
}

export function Footer({ config, socialLinks, status }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/60 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-mono font-bold text-slate-100">
              <div className="w-7 h-7 rounded-md bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span>{config.author}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {config.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{status}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase text-slate-300 tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {config.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/editor"
                  className="text-sky-400 hover:underline flex items-center gap-1"
                >
                  <Code2 className="w-3 h-3" />
                  <span>Content Editor</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase text-slate-300 tracking-wider mb-3">
              Connect
            </h4>
            <SocialLinks links={socialLinks} variant="icon" />
            <p className="text-xs text-slate-500 mt-4 font-mono">
              Architecture: Decoupled Data Layer
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {config.author}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
