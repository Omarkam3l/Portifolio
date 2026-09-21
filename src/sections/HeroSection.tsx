"use client";

import React from "react";
import { ArrowRight, Terminal, Sparkles, MapPin } from "lucide-react";
import { PortfolioData, SocialLink } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/common/SocialLinks";
import { InteractiveTerminalHero } from "@/components/visual/InteractiveTerminalHero";

interface HeroSectionProps {
  portfolio: PortfolioData;
  socialLinks: SocialLink[];
  onOpenCommandPalette?: () => void;
}

export function HeroSection({
  portfolio,
  socialLinks,
  onOpenCommandPalette,
}: HeroSectionProps) {
  const { name, title, status, location, hero } = portfolio;

  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" withDot>
                {status}
              </Badge>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            </div>

            {/* Engineer Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
                {name}
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-sky-400 font-medium tracking-tight">
                {title}
              </p>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={hero.primaryCta.href}>
                <Button variant="primary" size="lg">
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a href={hero.secondaryCta.href}>
                <Button variant="secondary" size="lg">
                  <span>{hero.secondaryCta.label}</span>
                </Button>
              </a>

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono rounded-lg border border-slate-700/80 bg-slate-900/80 text-slate-400 hover:text-sky-300 hover:border-slate-600 transition-all"
                  title="Open Command Palette"
                >
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Cmd+K</span>
                </button>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4">
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                Connect //
              </span>
              <SocialLinks links={socialLinks} variant="button" />
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <InteractiveTerminalHero
              terminalLines={hero.terminalLines}
              onOpenCommandPalette={onOpenCommandPalette}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
