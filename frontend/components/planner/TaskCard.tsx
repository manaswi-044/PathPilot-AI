import React from 'react';
import { CheckCircle2, Circle, Clock, Tag } from 'lucide-react';
import { StudyTask } from '../../types';

interface TaskCardProps {
  task: StudyTask;
  onToggle: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`flex items-center justify-between rounded-2xl border p-4 text-xs cursor-pointer transition-all duration-200 ${
        task.completed
          ? 'border-emerald-500/20 bg-emerald-950/10 text-slate-400 opacity-75'
          : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-700 hover:bg-slate-900'
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="shrink-0 text-slate-400 hover:text-emerald-400 transition-colors"
        >
          {task.completed ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          ) : (
            <Circle className="h-5 w-5 text-slate-600" />
          )}
        </button>

        <div>
          <h4
            className={`font-bold text-sm ${
              task.completed ? 'line-through text-slate-500' : 'text-slate-100'
            }`}
          >
            {task.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-indigo-400" />
              {task.timeSlot}
            </span>
            <span>•</span>
            <span>{task.durationMinutes} mins</span>
          </div>
        </div>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-[10px] font-bold ${
          task.category === 'Academic'
            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
            : task.category === 'Roadmap'
            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
            : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
        }`}
      >
        {task.category}
      </span>
    </div>
  );
};