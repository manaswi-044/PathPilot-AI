import React from 'react';
import { Clock, Calendar, Zap, Flag } from 'lucide-react';

interface EstimatedTimeCardProps {
  estimatedMonths: number;
  totalPhases: number;
  totalSkills: number;
  targetCompletionDate: string;
}

export const EstimatedTimeCard: React.FC<EstimatedTimeCardProps> = ({
  estimatedMonths,
  totalPhases,
  totalSkills,
  targetCompletionDate,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Clock className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Est. Completion Time</p>
          <p className="text-sm font-bold text-white">{estimatedMonths} Months (~{totalPhases * 4} Weeks)</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Flag className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Milestones & Skills</p>
          <p className="text-sm font-bold text-white">{totalPhases} Phases • {totalSkills} Skills</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Calendar className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium">Target Graduation Ready</p>
          <p className="text-sm font-bold text-emerald-400">{targetCompletionDate}</p>
        </div>
      </div>
    </div>
  );
};