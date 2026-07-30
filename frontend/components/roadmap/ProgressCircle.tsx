import React from 'react';

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 120,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-slate-800"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-indigo-500 transition-all duration-700 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-black text-white">{percentage}%</span>
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Done</span>
      </div>
    </div>
  );
};