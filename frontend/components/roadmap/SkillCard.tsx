import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Code
} from 'lucide-react';
import { RoadmapSkill } from '../../types';

interface SkillCardProps {
  skill: RoadmapSkill;
  onToggleComplete: (skillId: string) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onToggleComplete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        skill.completed
          ? 'border-emerald-500/20 bg-emerald-950/10'
          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleComplete(skill.id)}
            className="shrink-0 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            {skill.completed ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            ) : (
              <Circle className="h-5 w-5 text-slate-600" />
            )}
          </button>
          <div>
            <h4
              className={`font-bold text-sm ${
                skill.completed ? 'line-through text-slate-400' : 'text-white'
              }`}
            >
              {skill.name}
            </h4>
            <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
              <Clock className="h-3 w-3 text-indigo-400" />
              Est. {skill.estimatedHours} study hours
            </span>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
        >
          <span>{expanded ? 'Hide Details' : 'Deep Dive'}</span>
          {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Expanded Educational Insight Panel */}
      {expanded && (
        <div className="border-t border-slate-800/80 bg-slate-950/80 p-4 space-y-3 rounded-b-2xl text-xs">
          {/* Why Learn */}
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3">
            <h5 className="font-bold text-indigo-200 flex items-center gap-1.5 mb-1">
              <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
              Why Learn This Skill?
            </h5>
            <p className="text-indigo-300/90 leading-relaxed">{skill.whyLearn}</p>
          </div>

          {/* Mini Project */}
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3">
            <h5 className="font-bold text-purple-200 flex items-center gap-1.5 mb-1">
              <Code className="h-3.5 w-3.5 text-purple-400" />
              Practical Mini Project
            </h5>
            <p className="text-purple-300/90 leading-relaxed">{skill.miniProject}</p>
          </div>

          {/* Common Mistakes */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3">
            <h5 className="font-bold text-amber-200 flex items-center gap-1.5 mb-1">
              <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
              Common Beginner Pitfalls
            </h5>
            <p className="text-amber-300/90 leading-relaxed">{skill.commonMistakes}</p>
          </div>

          {/* Free Resources */}
          <div>
            <h5 className="font-bold text-slate-300 mb-2">Curated Free Resources</h5>
            <div className="flex flex-wrap gap-2">
              {skill.freeResources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-slate-300 hover:border-slate-700 hover:text-indigo-300 transition-colors"
                >
                  <span>{res.title}</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Interview Questions */}
          {skill.interviewQuestions.length > 0 && (
            <div>
              <h5 className="font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
                Top Technical Interview Questions
              </h5>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                {skill.interviewQuestions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};