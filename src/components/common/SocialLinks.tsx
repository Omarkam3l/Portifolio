import React from "react";
import { Mail, ExternalLink, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { SocialLink } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  variant?: "icon" | "button" | "pill";
}

export function SocialLinks({ links, className, variant = "icon" }: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "mail":
      case "email":
        return <Mail className="w-4 h-4" />;
      case "twitter":
      case "x":
        return <TwitterIcon className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((item) => {
        if (variant === "button") {
          return (
            <a
              key={item.platform}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {getIcon(item.icon)}
              <span>{item.platform}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          );
        }

        return (
          <a
            key={item.platform}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${item.platform} profile`}
            title={`${item.platform} (${item.username})`}
            className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {getIcon(item.icon)}
          </a>
        );
      })}
    </div>
  );
}
