import React from "react";
import { FileText, CheckSquare } from "lucide-react";

export default function DocumentChecklist({ documents }: { documents: string[] }) {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-blue-400" />
        <h4 className="text-xs font-bold text-white uppercase tracking-widest">Required Documents</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {documents.map((doc, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
            <CheckSquare className="w-3.5 h-3.5 text-slate-600" />
            {doc}
          </div>
        ))}
      </div>
    </div>
  );
}