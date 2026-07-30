import React from 'react';
import { Sparkles } from 'lucide-react';

interface GapAnalysisCardProps {
  careerGoal: string;
  readinessScore: number;
  knownCount: number;
  missingCount: number;
}

export const GapAnalysisCard: React.FC<GapAnalysisCardProps> = ({
  careerGoal,
  readinessScore,
  knownCount,
  missingCount,
}) => {
  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>AI Skill Diagnostics</span>
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
            Skill Gap Matrix for {careerGoal}
          </h2>
          <p className="mt-1 text-xs text-slate-300 max-w-xl">
            Comparing your technical profile against 5,000+ entry-level AI & Software job descriptions.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-center">
            <span className="text-3xl font-black text-indigo-400">{readinessScore}%</span>
            <p className="text-[10px] uppercase font-bold text-slate-400">Readiness</p>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="text-xs space-y-1">
            <p className="text-emerald-400 font-semibold">{knownCount} Mastered Skills</p>
            <p className="text-amber-400 font-semibold">{missingCount} Skills to Learn</p>
          </div>
        </div>
      </div>
    </div>
  );
};