import React from "react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/40 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={profile.socials.email}
            className="hover:text-slate-300 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
