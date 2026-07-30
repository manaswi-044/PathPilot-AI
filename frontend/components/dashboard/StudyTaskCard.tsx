import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { StudyTask } from '../../types';

interface StudyTaskCardProps {
  tasks: StudyTask[];
  onToggleTask: (taskId: string) => void;
}

export const StudyTaskCard: React.FC<StudyTaskCardProps> = ({
  tasks,
  onToggleTask,
}) => {
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">Today's Adaptive Study Schedule</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {completedCount} of {tasks.length} tasks completed
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
          <Clock className="h-3.5 w-3.5" />
          <span>180 mins total</span>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => onToggleTask(task.id)}
            className={`flex items-center justify-between rounded-xl p-3 border text-xs cursor-pointer transition-all ${
              task.completed
                ? 'border-emerald-500/20 bg-emerald-950/10 text-slate-400 opacity-80'
                : 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-slate-700'
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
                <span
                  className={`font-semibold block ${
                    task.completed ? 'line-through text-slate-500' : 'text-slate-100'
                  }`}
                >
                  {task.title}
                </span>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
                  <span>{task.timeSlot}</span>
                  <span>•</span>
                  <span>{task.durationMinutes} mins</span>
                </div>
              </div>
            </div>

            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold shrink-0 ${
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
        ))}
      </div>
    </div>
  );
};