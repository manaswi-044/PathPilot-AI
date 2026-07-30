import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { TrendingUp, Clock } from 'lucide-react';

interface WeeklyChartProps {
  data: number[];
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const chartData = days.map((day, idx) => ({
    day,
    hours: data[idx] || 0,
  }));

  const totalWeeklyHours = data.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Clock className="h-4 w-4 text-indigo-400" />
            Weekly Study Activity
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Total this week: <span className="font-semibold text-indigo-300">{totalWeeklyHours.toFixed(1)} hrs</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>+18% Consistency</span>
        </div>
      </div>

      <div className="mt-4 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderColor: '#334155',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
              }}
              formatter={(value: any) => [`${value} hours`, 'Study Time']}
            />
            <Bar dataKey="hours" radius={[6, 6, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 5 ? '#a855f7' : index === 2 ? '#6366f1' : '#4f46e5'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};