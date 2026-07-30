import React from 'react';
import { Code2 } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  difficulty: string;
  keySkills: string[];
  impact: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  difficulty,
  keySkills,
  impact,
}) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs transition-all hover:border-slate-700">
      <div className="flex items-start justify-between">
        <h4 className="font-bold text-slate-100 flex items-center gap-2">
          <Code2 className="h-4 w-4 text-indigo-400 shrink-0" />
          {title}
        </h4>
        <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-300 border border-indigo-500/20 shrink-0">
          {difficulty}
        </span>
      </div>

      <p className="mt-2 text-indigo-300 text-[11px] font-semibold">{impact}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {keySkills.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-md bg-slate-900 border border-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};