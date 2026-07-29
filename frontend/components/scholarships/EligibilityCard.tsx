import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function EligibilityCard({ criteria }: { criteria: string[] }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
      <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Eligibility Criteria</h4>
      <ul className="space-y-3">
        {criteria.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}