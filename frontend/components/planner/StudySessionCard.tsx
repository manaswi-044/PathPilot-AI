import React from 'react';
import { BookOpen, Sparkles, Clock } from 'lucide-react';

interface StudySessionCardProps {
  title: string;
  category: string;
  duration: number;
  timeSlot: string;
}

export const StudySessionCard: React.FC<StudySessionCardProps> = ({
  title,
  category,
  duration,
  timeSlot,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-xs">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <BookOpen className="h-4 w-4" />
        </div>
        <div>
          <h5 className="font-bold text-slate-100">{title}</h5>
          <p className="text-[10px] text-slate-400">{timeSlot} • {duration} mins</p>
        </div>
      </div>
      <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
        {category}
      </span>
    </div>
  );
};