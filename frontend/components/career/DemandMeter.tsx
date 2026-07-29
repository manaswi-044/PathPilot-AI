import React from "react";

interface DemandMeterProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function DemandMeter({ score, size = "md" }: DemandMeterProps) {
  const getStatusColor = (s: number) => {
    if (s >= 80) return "stroke-emerald-400";
    if (s >= 50) return "stroke-blue-400";
    return "stroke-amber-400";
  };

  const dimensions = {
    sm: "w-12 h-12 text-[10px]",
    md: "w-20 h-20 text-xs",
    lg: "w-28 h-28 text-sm"
  };

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center ${dimensions[size]}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50" cy="50" r={radius}
          className="fill-none stroke-white/5"
          strokeWidth="8"
        />
        <circle
          cx="50" cy="50" r={radius}
          className={`fill-none ${getStatusColor(score)} transition-all duration-1000`}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-bold text-white">{score}%</span>
        {size !== "sm" && <span className="text-[8px] text-slate-500 uppercase font-bold">Demand</span>}
      </div>
    </div>
  );
}