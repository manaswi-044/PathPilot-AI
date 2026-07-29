import React from "react";
import { Banknote, ArrowUpRight } from "lucide-react";

export default function SalaryCard({ min, max, currency }: any) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-emerald-500/20">
          <Banknote className="w-5 h-5 text-emerald-400" />
        </div>
        <span className="text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1">
          Competitive <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
      <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">Avg Annual Salary</p>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-4xl font-bold text-white">{currency}{min}k</span>
        <span className="text-xl text-slate-500">-</span>
        <span className="text-4xl font-bold text-white">{currency}{max}k</span>
      </div>
    </div>
  );
}