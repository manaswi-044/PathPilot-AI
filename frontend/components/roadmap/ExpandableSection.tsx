import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  defaultExpanded = false,
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 overflow-hidden transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-3.5 text-left font-semibold text-xs text-slate-200 hover:bg-slate-900/80 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-indigo-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-500" />
        )}
      </button>

      {isExpanded && <div className="p-3.5 pt-0 border-t border-slate-800/60 text-xs">{children}</div>}
    </div>
  );
};