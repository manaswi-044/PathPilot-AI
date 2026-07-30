import React from 'react';
import { Grid } from 'lucide-react';

interface PriorityMatrixItem {
  skill: string;
  impact: 'High' | 'Medium' | 'Low';
  effort: 'Low' | 'Medium' | 'High';
}

interface PriorityMatrixProps {
  items: PriorityMatrixItem[];
}

export const PriorityMatrix: React.FC<PriorityMatrixProps> = ({ items }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Grid className="h-4 w-4 text-purple-400" />
          <h3 className="text-sm font-bold text-white">Skill Priority Matrix (Impact vs Effort)</h3>
        </div>
        <span className="text-[10px] text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded font-semibold">
          High Impact First
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3"
          >
            <span className="font-bold text-slate-100">{item.skill}</span>
            <div className="flex items-center gap-1.5">
              <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">
                {item.impact} Impact
              </span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                {item.effort} Effort
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};