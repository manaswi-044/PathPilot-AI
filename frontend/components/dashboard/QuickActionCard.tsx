import React from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  onClick: () => void;
  accentColor?: 'indigo' | 'purple' | 'emerald' | 'amber';
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  description,
  icon: Icon,
  badge,
  onClick,
  accentColor = 'indigo',
}) => {
  const accentStyles = {
    indigo: 'border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-950/20 text-indigo-400',
    purple: 'border-purple-500/30 hover:border-purple-500/60 bg-purple-950/20 text-purple-400',
    emerald: 'border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20 text-emerald-400',
    amber: 'border-amber-500/30 hover:border-amber-500/60 bg-amber-950/20 text-amber-400',
  };

  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full flex-col justify-between rounded-2xl border bg-slate-900/60 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentStyles[accentColor]}`}
    >
      <div className="flex items-start justify-between w-full">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 ${accentStyles[accentColor]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1.5">
          {badge && (
            <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300 border border-indigo-500/30">
              {badge}
            </span>
          )}
          <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
          {title}
        </h4>
        <p className="mt-1 text-xs text-slate-400 leading-normal">{description}</p>
      </div>
    </button>
  );
};