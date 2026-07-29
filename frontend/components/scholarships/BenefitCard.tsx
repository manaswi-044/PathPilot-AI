import React from "react";
import { Gift } from "lucide-react";

export default function BenefitCard({ benefits }: { benefits: string[] }) {
  return (
    <div className="space-y-2">
      {benefits.map((benefit, i) => (
        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
          <Gift className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-slate-300 font-medium">{benefit}</span>
        </div>
      ))}
    </div>
  );
}