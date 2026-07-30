import React from 'react';
import { Target, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { ProgressCircle } from './ProgressCircle';
import { EstimatedTimeCard } from './EstimatedTimeCard';
import { CareerRoadmap } from '../../types';

interface RoadmapHeaderProps {
  roadmap: CareerRoadmap;
  onRegenerateRoadmap?: () => void;
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
  roadmap,
  onRegenerateRoadmap,
}) => {
  const totalSkillsCount = roadmap.phases.reduce((acc, p) => acc + p.skills.length, 0);

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>AI Tailored Career Path</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {roadmap.careerGoal}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Targeting <span className="font-semibold text-indigo-300">{roadmap.targetRole}</span>. Step-by-step master sequence designed for engineering students.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <button
                onClick={onRegenerateRoadmap}
                className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Re-adapt with Gemini</span>
              </button>
            </div>
          </div>

          {/* Progress Donut */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <ProgressCircle percentage={roadmap.overallProgressPercentage} size={130} strokeWidth={11} />
          </div>
        </div>
      </div>

      {/* Time & Milestone Summary Bar */}
      <EstimatedTimeCard
        estimatedMonths={roadmap.estimatedCompletionMonths}
        totalPhases={roadmap.phases.length}
        totalSkills={totalSkillsCount}
        targetCompletionDate="May 2027"
      />
    </div>
  );
};