import React from 'react';
import GlassCard from '../ui/GlassCard';

interface DashboardCardProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ElementType;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  badge,
  icon: Icon,
  action,
  children,
  className = '',
  onClick,
  id,
}) => {
  return (
    <GlassCard id={id} onClick={onClick} gradientHover={!!onClick} className={className}>
      {(title || subtitle || badge || Icon || action) && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            {Icon && (
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Icon className="h-4 w-4" />
              </div>
            )}
            <div>
              {title && <h3 className="text-sm font-bold text-white tracking-tight">{title}</h3>}
              {subtitle && <p className="text-[11px] text-slate-400">{subtitle}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {badge && (
              <span className="rounded-full bg-indigo-500/20 border border-indigo-500/30 px-2.5 py-0.5 text-[10px] font-bold text-indigo-300">
                {badge}
              </span>
            )}
            {action}
          </div>
        </div>
      )}
      {children}
    </GlassCard>
  );
};