import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface SkillCardProps {
  name: string;
  type: 'known' | 'missing';
  proficiencyOrPriority: string | number;
  categoryOrDifficulty?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  name,
  type,
  proficiencyOrPriority,
  categoryOrDifficulty,
}) => {
  return (
    <div
      className={`flex items-center justify-between rounded-xl p-3 border text-xs transition-all ${
        type === 'known'
          ? 'border-emerald-500/20 bg-emerald-950/10'
          : 'border-amber-500/20 bg-amber-950/10'
      }`}
    >
      <div className="flex items-center gap-2.5">
        {type === 'known' ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
        ) : (
          <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
        )}
        <div>
          <p className="font-bold text-slate-100">{name}</p>
          {categoryOrDifficulty && (
            <p className="text-[10px] text-slate-400">{categoryOrDifficulty}</p>
          )}
        </div>
      </div>

      <span
        className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold ${
          type === 'known'
            ? 'bg-emerald-500/20 text-emerald-300'
            : 'bg-amber-500/20 text-amber-300'
        }`}
      >
        {type === 'known' ? `${proficiencyOrPriority}% Proficient` : proficiencyOrPriority}
      </span>
    </div>
  );
};