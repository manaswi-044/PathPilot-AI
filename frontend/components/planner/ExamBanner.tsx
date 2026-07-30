import React from 'react';
import { AlertTriangle, Calendar, Zap, ArrowRight } from 'lucide-react';

interface ExamBannerProps {
  examName: string;
  daysLeft: number;
  subject: string;
  onAdjustPlan?: () => void;
}

export const ExamBanner: React.FC<ExamBannerProps> = ({
  examName,
  daysLeft,
  subject,
  onAdjustPlan,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
            <AlertTriangle className="h-5 w-5 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30">
                Academic Exam Alert
              </span>
              <span className="text-xs text-amber-300 font-semibold">{daysLeft} Days Remaining</span>
            </div>
            <h3 className="text-base font-extrabold text-white mt-1">{examName}</h3>
            <p className="text-xs text-amber-200/80 mt-0.5">{subject}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onAdjustPlan}
            className="flex items-center gap-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 px-4 py-2 text-xs font-bold text-amber-200 hover:bg-amber-500/30 transition-all"
          >
            <Zap className="h-4 w-4" />
            <span>Auto-Optimize Workload</span>
          </button>
        </div>
      </div>
    </div>
  );
};