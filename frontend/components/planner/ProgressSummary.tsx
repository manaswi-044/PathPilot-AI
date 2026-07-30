import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProgressSummaryProps {
  completedTasks: number;
  totalTasks: number;
  totalHours: number;
}

export const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  completedTasks,
  totalTasks,
  totalHours,
}) => {
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400">Daily Task Completion</p>
          <p className="text-sm font-bold text-white">{completedTasks} of {totalTasks} Done ({percentage}%)</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Clock className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400">Total Planned Focus</p>
          <p className="text-sm font-bold text-white">{totalHours} Hours Scheduled</p>
        </div>
      </div>
    </div>
  );
};