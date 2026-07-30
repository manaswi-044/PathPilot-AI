import React from 'react';
import { PlannerDaySchedule } from '../../types';

interface WeeklyTimelineProps {
  schedule: PlannerDaySchedule[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const WeeklyTimeline: React.FC<WeeklyTimelineProps> = ({
  schedule,
  selectedDate,
  onSelectDate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {schedule.map((day) => {
        const isSelected = day.date === selectedDate;
        return (
          <div
            key={day.date}
            onClick={() => onSelectDate(day.date)}
            className={`rounded-2xl border p-4 text-xs cursor-pointer transition-all ${
              isSelected
                ? 'border-indigo-500 bg-slate-900/90 shadow-xl shadow-indigo-500/10'
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="font-bold text-slate-100">{day.dayName}</h4>
                <p className="text-[10px] text-slate-400">{day.date}</p>
              </div>
              <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                {day.totalHours} hrs
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {day.tasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className="rounded-lg bg-slate-950/60 p-2 border border-slate-800/80 text-[11px] font-medium text-slate-300 truncate"
                >
                  {task.title}
                </div>
              ))}
              {day.tasks.length > 3 && (
                <p className="text-[10px] text-indigo-400 text-center font-semibold mt-1">
                  +{day.tasks.length - 3} more tasks
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};