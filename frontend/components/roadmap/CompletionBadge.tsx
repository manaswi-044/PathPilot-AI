import React from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface CompletionBadgeProps {
  completed: boolean;
  text?: string;
}

export const CompletionBadge: React.FC<CompletionBadgeProps> = ({
  completed,
  text,
}) => {
  if (completed) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
        <span>{text || 'Completed'}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-xs font-bold text-indigo-300">
      <Clock className="h-3.5 w-3.5 text-indigo-400" />
      <span>{text || 'In Progress'}</span>
    </span>
  );
};