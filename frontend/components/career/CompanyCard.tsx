import React from "react";
import { ExternalLink } from "lucide-react";

export default function CompanyCard({ name, industry }: { name: string; industry: string }) {
  return (
    <div className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-white/10 hover:border-blue-500/30 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-bold text-white border border-white/5">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">{name}</h4>
          <p className="text-[10px] text-slate-500 font-medium">{industry}</p>
        </div>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-all" />
    </div>
  );
}