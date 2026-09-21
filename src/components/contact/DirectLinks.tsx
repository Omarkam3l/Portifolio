import React from "react";
import { Mail, MapPin, FileText, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { SocialLink } from "@/types/portfolio";

interface DirectLinksProps {
  email: string;
  location: string;
  status: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export function DirectLinks({
  email,
  location,
  status,
  socialLinks,
  resumeUrl = "/resume.pdf",
}: DirectLinksProps) {
  const github = socialLinks.find((s) => s.platform.toLowerCase() === "github");
  const linkedin = socialLinks.find((s) => s.platform.toLowerCase() === "linkedin");

  return (
    <div className="space-y-4">
      {/* Email Card */}
      <a
        href={`mailto:${email}`}
        className="block p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-sky-500/50 hover:bg-slate-900 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">Direct Email</div>
            <div className="text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
              {email}
            </div>
          </div>
        </div>
      </a>

      {/* Social Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {github && (
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 group-hover:text-white">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500">GitHub</div>
                <div className="text-xs font-bold text-slate-200">@{github.username}</div>
              </div>
            </div>
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 group-hover:text-sky-400">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500">LinkedIn</div>
                <div className="text-xs font-bold text-slate-200">{linkedin.username}</div>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Location & Timezone info */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 flex items-start gap-3 text-xs text-slate-400 font-mono">
        <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <div>
          <div className="text-slate-200 font-semibold">{location}</div>
          <div className="text-slate-500 text-[11px] mt-0.5 flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>UTC+2 Standard Time</span>
          </div>
        </div>
      </div>

      {/* Resume Link */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-sky-500/30 text-xs font-mono text-slate-300 hover:text-sky-400 transition-all"
      >
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-slate-400" />
          <span>Curriculum Vitae / Resume</span>
        </div>
        <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
          PDF
        </span>
      </a>
    </div>
  );
}
