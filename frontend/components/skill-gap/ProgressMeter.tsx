import React from 'react';

interface ProgressMeterProps {
  label: string;
  percentage: number;
  category?: string;
}

export const ProgressMeter: React.FC<ProgressMeterProps> = ({
  label,
  percentage,
  category,
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="font-semibold text-slate-200">{label}</span>
        <span className="font-bold text-indigo-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {category && <p className="text-[10px] text-slate-500">{category}</p>}
    </div>
  );
};