import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  known?: boolean;
  priority?: 'Critical' | 'High' | 'Medium';
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  known = false,
  priority,
}) => {
  if (known) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <Check className="h-3.5 w-3.5 text-emerald-400" />
        {name}
      </span>
    );
  }

  const priorityColors = {
    Critical: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
    High: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    Medium: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        priorityColors[priority || 'High']
      }`}
    >
      <AlertCircle className="h-3.5 w-3.5" />
      {name}
    </span>
  );
};