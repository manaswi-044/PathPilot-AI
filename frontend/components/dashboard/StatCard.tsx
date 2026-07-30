import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  colorScheme?: 'indigo' | 'purple' | 'emerald' | 'amber';
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendUp,
  colorScheme = 'indigo',
  onClick,
}) => {
  const colorMap = {
    indigo: {
      bg: 'from-indigo-950/40 to-slate-900/60',
      border: 'border-indigo-500/20 hover:border-indigo-500/40',
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      text: 'text-indigo-400',
    },
    purple: {
      bg: 'from-purple-950/40 to-slate-900/60',
      border: 'border-purple-500/20 hover:border-purple-500/40',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      text: 'text-purple-400',
    },
    emerald: {
      bg: 'from-emerald-950/40 to-slate-900/60',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      text: 'text-emerald-400',
    },
    amber: {
      bg: 'from-amber-950/40 to-slate-900/60',
      border: 'border-amber-500/20 hover:border-amber-500/40',
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      text: 'text-amber-400',
    },
  };

  const currentScheme = colorMap[colorScheme];

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b ${currentScheme.bg} ${currentScheme.border} p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">{title}</p>
          <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">{value}</h3>
          {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${currentScheme.iconBg}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {trend && (
        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
          <span className={trendUp ? 'text-emerald-400' : 'text-amber-400'}>
            {trendUp ? '↑' : '→'} {trend}
          </span>
          <span className="text-[11px] text-slate-500">vs last week</span>
        </div>
      )}
    </div>
  );
};