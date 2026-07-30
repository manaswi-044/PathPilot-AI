import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  estimatedTime: string;
  isFree: boolean;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  estimatedTime,
  isFree,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-xs transition-all hover:border-slate-700">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
          <Award className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-slate-100">{title}</h4>
          <p className="text-[10px] text-slate-400">{issuer} • {estimatedTime}</p>
        </div>
      </div>

      <span
        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
          isFree ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-slate-800 text-slate-300'
        }`}
      >
        {isFree ? 'Free Course' : 'Paid'}
      </span>
    </div>
  );
};