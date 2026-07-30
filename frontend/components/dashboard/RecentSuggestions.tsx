import React from 'react';
import { Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { AISuggestion } from '../../types';

interface RecentSuggestionsProps {
  suggestions: AISuggestion[];
  onActionClick: (suggestion: AISuggestion) => void;
}

export const RecentSuggestions: React.FC<RecentSuggestionsProps> = ({
  suggestions,
  onActionClick,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">Recent AI Copilot Insights</h3>
        </div>
        <span className="text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded-full font-semibold">
          Auto AI Generated
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {suggestions.map((sug) => (
          <div
            key={sug.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/60 p-3.5 gap-3 transition-all hover:border-slate-700"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Lightbulb className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-100 text-xs">{sug.title}</h4>
                  <span className="text-[10px] text-slate-500">{sug.timestamp}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">{sug.description}</p>
              </div>
            </div>

            <button
              onClick={() => onActionClick(sug)}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all shrink-0"
            >
              <span>{sug.actionText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};