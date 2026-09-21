"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, FileText, Calendar, X, ExternalLink } from "lucide-react";
import { CertificateItem } from "@/data/certificates";
import { usePortfolioContent } from "@/context/ContentContext";
import { SectionEditButton } from "./admin/SectionEditButton";

export function Certificates() {
  const { content } = usePortfolioContent();
  const certificatesData = content.certificates || [];
  const [activePreview, setActivePreview] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 sm:py-32 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header matching user design */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              VERIFIED QUALIFICATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
              Certifications & Credentials
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Official credentials in Deep Learning, Generative AI, RAG architectures, and Data Engineering.
            </p>
          </div>
          <SectionEditButton section="certificates" />
        </div>

        {/* 3-Column Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {certificatesData.map((cert: any) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 hover:border-sky-500/30 p-5 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Certificate Thumbnail Preview Container */}
                <div
                  onClick={() => setActivePreview(cert)}
                  className="relative overflow-hidden rounded-xl bg-slate-950/80 border border-white/5 aspect-[4/3] flex items-center justify-center p-2.5 cursor-pointer group-hover:border-sky-500/30 transition-all"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-mono text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-sky-400 font-medium leading-tight">
                    {cert.issuer}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 font-light pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Preview & PDF Viewer */}
              <div className="grid grid-cols-2 gap-2.5 pt-5 mt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setActivePreview(cert)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 hover:border-sky-500/40 text-xs font-mono font-medium transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-slate-100 border border-white/5 hover:border-white/10 text-xs font-mono font-medium transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF Viewer</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90">
              <div>
                <h4 className="text-base font-bold text-slate-100">{activePreview.title}</h4>
                <p className="text-xs text-sky-400 font-mono mt-0.5">{activePreview.issuer} • {activePreview.date}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activePreview.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 text-xs font-mono font-bold hover:bg-sky-400 transition-colors"
                >
                  <span>Open PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setActivePreview(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950">
              <Image
                src={activePreview.image}
                alt={activePreview.title}
                width={1000}
                height={750}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
