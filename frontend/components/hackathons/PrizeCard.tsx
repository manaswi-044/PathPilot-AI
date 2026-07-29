import React from "react";
import { Trophy } from "lucide-react";

export default function PrizeCard({ amount, label }: { amount: string, label: string }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center">
      <Trophy className="w-6 h-6 text-amber-500 mx-auto mb-2" />
      <p className="text-xl font-bold text-white leading-tight">{amount}</p>
      <p className="text-[10px] text-amber-500/70 font-bold uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}