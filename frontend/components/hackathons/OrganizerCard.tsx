import React from "react";

export default function OrganizerCard({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
        <span className="text-[10px] font-bold text-blue-400">{name.charAt(0)}</span>
      </div>
      <span className="text-xs font-medium text-slate-400">{name}</span>
    </div>
  );
}