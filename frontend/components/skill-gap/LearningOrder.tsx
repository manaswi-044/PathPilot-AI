import React from 'react';
import { ListOrdered } from 'lucide-react';

interface LearningOrderProps {
  order: string[];
}

export const LearningOrder: React.FC<LearningOrderProps> = ({ order }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
        <ListOrdered className="h-4 w-4 text-indigo-400" />
        <h3 className="text-sm font-bold text-white">Optimal AI Learning Sequence</h3>
      </div>

      <div className="mt-4 space-y-2.5">
        {order.map((step, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 text-xs"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-[11px] shrink-0 border border-indigo-500/30">
              {idx + 1}
            </span>
            <span className="font-semibold text-slate-200">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};