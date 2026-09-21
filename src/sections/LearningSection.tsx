import React from "react";
import { BookOpen, Sparkles, Clock } from "lucide-react";
import { LearningTopic } from "@/types/portfolio";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/Badge";

interface LearningSectionProps {
  currentLearning: LearningTopic[];
}

export function LearningSection({ currentLearning }: LearningSectionProps) {
  const getStatusBadge = (status: LearningTopic["status"]) => {
    switch (status) {
      case "in-progress":
        return <Badge variant="accent" withDot>In Progress</Badge>;
      case "exploring":
        return <Badge variant="success">Active Exploration</Badge>;
      case "planned":
      default:
        return <Badge variant="outline">Scheduled</Badge>;
    }
  };

  return (
    <section id="learning" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="06. LEARNING"
          title="Theoretical Studies & Continuous Research"
          description="Active mathematical foundations, systems programming explorations, and advanced AI concepts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentLearning.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm space-y-3 hover:border-slate-700 hover:bg-slate-900/80 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                {getStatusBadge(item.status)}
              </div>

              <h3 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>{item.topic}</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
