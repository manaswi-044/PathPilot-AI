import React from "react";
import { MapPin, Globe } from "lucide-react";

export default function CompanyCard({ name, location, isRemote }: { name: string, location: string, isRemote: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-lg font-bold text-white shadow-inner">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white leading-tight">{name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-[10px] text-slate-500">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
          {isRemote && (
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Remote
            </span>
          )}
        </div>
      </div>
    </div>
  );
}