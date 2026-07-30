import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface CalendarHeaderProps {
  currentWeekLabel: string;
  viewMode: 'day' | 'week' | 'month';
  setViewMode: (mode: 'day' | 'week' | 'month') => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentWeekLabel,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Calendar className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">Adaptive Smart Planner</h2>
          <p className="text-xs text-slate-400">{currentWeekLabel}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {(['day', 'week', 'month'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold capitalize transition-all ${
              viewMode === mode
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
          >
            {mode} View
          </button>
        ))}
      </div>
    </div>
  );
};