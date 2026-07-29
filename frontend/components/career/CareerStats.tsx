import React from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

export default function CareerStats({ stats }: { stats: any }) {
  const items = [
    { label: "Market Growth", value: stats.growth, icon: TrendingUp, color: "text-blue-400" },
    { label: "Open Roles", value: stats.openings, icon: Users, color: "text-purple-400" },
    { label: "Success Rate", value: stats.success, icon: Target, color: "text-emerald-400" },
    { label: "AI Match", value: stats.aiMatch, icon: Zap, color: "text-amber-400" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-white/20 transition-all">
          <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
          <p className="text-2xl font-bold text-white">{item.value}</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{item.label}</p>
        </div>
      ))}
    </div>
  );
}