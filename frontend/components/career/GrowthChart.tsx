"use client";

import React from "react";

export default function GrowthChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  
  return (
    <div className="relative pt-4">
      <div className="h-40 flex items-end gap-3 px-2">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
            <div className="relative w-full">
              <div 
                className="w-full bg-blue-500/10 border-t-2 border-blue-500/50 rounded-t-md transition-all duration-700 group-hover:bg-blue-500/30 group-hover:border-blue-400"
                style={{ height: `${(val / max) * 100}%` }}
              />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-[10px] font-bold text-white px-1.5 py-0.5 rounded shadow-lg">
                {val}%
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-300 transition-colors uppercase">
              Y{i+1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}