import React from 'react';
import { RefreshCw } from 'lucide-react';

interface DashboardHeaderProps {
  lastUpdated?: string;
  onRefreshData?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  lastUpdated = 'Just now',
  onRefreshData,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-white tracking-tight">Executive Copilot Overview</h2>
          <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
            Realtime AI Sync
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Synced with NIT College Academic Calendar & Career Goals
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <span className="text-slate-400 text-[11px] hidden md:inline">Last updated: {lastUpdated}</span>
        <button
          onClick={onRefreshData}
          className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
        >
          <RefreshCw className="h-3.5 w-3.5 text-indigo-400" />
          <span>Refresh Sync</span>
        </button>
      </div>
    </div>
  );
};