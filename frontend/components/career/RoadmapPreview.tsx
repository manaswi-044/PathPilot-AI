import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function RoadmapPreview({ steps }: { steps: any[] }) {
  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div key={i} className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-slate-400'}`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-white/5" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{step.title}</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase">{step.duration}</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-all" />
        </div>
      ))}
    </div>
  );
}