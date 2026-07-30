import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-44 w-full rounded-3xl bg-slate-900/80 border border-slate-800" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-28 rounded-2xl bg-slate-900/80 border border-slate-800" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-72 rounded-2xl bg-slate-900/80 border border-slate-800" />
        <div className="h-72 rounded-2xl bg-slate-900/80 border border-slate-800" />
      </div>
    </div>
  );
};