"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Mail, Copy, Check } from "lucide-react";
import { usePortfolioContent } from "@/context/ContentContext";
import { SectionEditButton } from "./admin/SectionEditButton";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const { content } = usePortfolioContent();
  const profile = content.profile;

  const [copied, setCopied] = useState(false);
  const titles = profile.roles && profile.roles.length > 0 ? profile.roles : [
    "Distributed Systems",
    "AI Systems Engineer",
    "Multi-Agent Orchestration",
    "Autonomous Code Intelligence",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex] || "Distributed Systems";
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, titles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 sm:pt-40 pb-20 overflow-hidden">
      {/* Ambient background glow matching user design */}
      <div className="pointer-events-none absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-fuchsia-500/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge & Edit Button */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#0e2733]/90 text-cyan-400 text-xs font-mono tracking-wider uppercase font-medium">
                {profile.badge}
              </span>
              <SectionEditButton section="hero" />
            </div>

            {/* Name with Gradient Last Name */}
            <div className="space-y-0 sm:space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                {profile.firstName}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent leading-tight">
                {profile.lastName}
              </h1>
            </div>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-9 flex items-center">
              <span className="text-xl sm:text-2xl font-mono text-slate-200 tracking-tight font-medium">
                {displayedText}
                <span className="text-cyan-400 font-bold animate-pulse ml-0.5">|</span>
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={profile.resumeUrl}
                download="Omar_Kamel_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00d2ff] via-[#9333ea] to-[#ec4899] hover:opacity-95 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-pink-500/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-slate-900/80 hover:bg-slate-900 text-slate-200 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-white/25 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all cursor-pointer shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-white/25 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all cursor-pointer shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-white/25 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 transition-all relative cursor-pointer group shadow-sm"
                title="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500 text-slate-950 font-bold shadow whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Circular Profile Photo with Glowing Gradient Ring */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-pink-500 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500" />

              {/* Glowing Gradient Border Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#00d2ff] via-[#a855f7] to-[#ec4899] shadow-2xl">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden relative bg-slate-950">
                  <Image
                    src={profile.avatar}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover object-[50%_15%] scale-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
