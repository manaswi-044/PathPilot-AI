import React from 'react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { CareerRoadmap } from '../../types';

interface ProgressCardProps {
  roadmap: CareerRoadmap;
  onNavigateToRoadmap: () => void;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  roadmap,
  onNavigateToRoadmap,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Career Progress</h3>
            <p className="text-[11px] text-slate-400">{roadmap.careerGoal}</p>
          </div>
        </div>
        <span className="text-2xl font-black text-indigo-400">
          {roadmap.overallProgressPercentage}%
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1.5">
            <span>Overall Milestone Completion</span>
            <span className="font-semibold text-slate-200">
              {roadmap.phases.filter((p) => p.progressPercentage === 100).length} / {roadmap.phases.length} Phases Done
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${roadmap.overallProgressPercentage}%` }}
            />
          </div>
        </div>

        {/* Phase Timeline Pills */}
        <div className="space-y-2 pt-2">
          {roadmap.phases.slice(0, 3).map((phase) => (
            <div
              key={phase.id}
              className="flex items-center justify-between rounded-xl bg-slate-950/60 p-2.5 text-xs border border-slate-800/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className={`h-4 w-4 ${
                    phase.progressPercentage === 100
                      ? 'text-emerald-400'
                      : phase.progressPercentage > 0
                      ? 'text-indigo-400'
                      : 'text-slate-600'
                  }`}
                />
                <span className="font-semibold text-slate-200 truncate max-w-[180px]">
                  Phase {phase.phaseNumber}: {phase.title}
                </span>
              </div>
              <span
                className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                  phase.progressPercentage === 100
                    ? 'bg-emerald-500/10 text-emerald-300'
                    : phase.progressPercentage > 0
                    ? 'bg-indigo-500/10 text-indigo-300'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {phase.progressPercentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNavigateToRoadmap}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 py-2.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all"
      >
        <span>View Full 5-Phase Interactive Roadmap</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};