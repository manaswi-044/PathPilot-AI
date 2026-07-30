import React from 'react';

interface DaySelectorProps {
  days: Array<{ date: string; dayName: string; isExamNearby: boolean }>;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  days,
  selectedDate,
  onSelectDate,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {days.map((d) => {
        const isSelected = d.date === selectedDate;
        return (
          <button
            key={d.date}
            onClick={() => onSelectDate(d.date)}
            className={`flex flex-col items-center justify-center min-w-[100px] rounded-2xl p-3 border text-xs font-semibold transition-all ${
              isSelected
                ? 'border-indigo-500 bg-indigo-600/20 text-white shadow-lg shadow-indigo-500/20'
                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">{d.dayName.split(' ')[0]}</span>
            <span className="text-sm font-bold text-slate-100 mt-0.5">{d.date.slice(8)}</span>
            {d.isExamNearby && (
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
};