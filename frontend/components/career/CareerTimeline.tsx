import React from "react";

export default function CareerTimeline({ activities }: { activities: any[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
      {activities.map((item, idx) => (
        <div key={idx} className="relative pl-10">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded">
              {item.time}
            </span>
            <h4 className="text-md font-semibold text-slate-100 mt-2">{item.task}</h4>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}