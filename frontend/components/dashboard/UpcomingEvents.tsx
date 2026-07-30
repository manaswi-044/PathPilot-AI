import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { AcademicEvent } from '../../types';

interface UpcomingEventsProps {
  events: AcademicEvent[];
  onNavigateToPlanner: () => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  onNavigateToPlanner,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white">Upcoming Academic Events</h3>
        </div>
        <button
          onClick={onNavigateToPlanner}
          className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
        >
          Planner View →
        </button>
      </div>

      <div className="mt-3 space-y-2.5">
        {events.map((evt) => (
          <div
            key={evt.id}
            className={`flex items-start justify-between rounded-xl p-3 border text-xs transition-all ${
              evt.urgency === 'high'
                ? 'border-amber-500/30 bg-amber-500/10 text-amber-200'
                : 'border-slate-800 bg-slate-950/60 text-slate-300'
            }`}
          >
            <div className="flex items-start gap-2.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold shrink-0 ${
                  evt.urgency === 'high' ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {evt.type === 'Exam' ? 'EX' : evt.type === 'Lab Record' ? 'LAB' : 'HACK'}
              </div>
              <div>
                <h4 className="font-bold text-slate-100">{evt.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{evt.subject}</p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  evt.daysRemaining <= 5
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <Clock className="h-3 w-3" />
                In {evt.daysRemaining} days
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};