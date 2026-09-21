import React from "react";
import { ExperienceItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Timeline } from "@/components/timeline/Timeline";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="journey" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="05. JOURNEY"
          title="Engineering Timeline & Milestones"
          description="Career checkpoints, system architecture milestones, and active research breakthroughs."
        />

        <div className="max-w-4xl mx-auto">
          <Timeline items={experience} />
        </div>
      </div>
    </section>
  );
}
