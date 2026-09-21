import React from "react";
import { SkillCategory } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SkillGroup } from "@/components/skills/SkillGroup";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="03. SKILLS"
          title="Technical Competencies & Systems Tooling"
          description="Technologies, languages, and distributed frameworks applied in active engineering projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <SkillGroup key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
