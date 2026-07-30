import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  Zap
} from 'lucide-react';
import { RoadmapPhase } from '../../types';
import { SkillCard } from './SkillCard';
import { ProjectCard } from './ProjectCard';
import { CompletionBadge } from './CompletionBadge';

interface PhaseCardProps {
  phase: RoadmapPhase;
  onToggleSkillComplete: (skillId: string) => void;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  onToggleSkillComplete,
}) => {
  const [expanded, setExpanded] = useState(true);

  const completedSkillsCount = phase.skills.filter((s) => s.completed).length;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-300 border border-indigo-500/20">
              Phase {phase.phaseNumber}
            </span>
            <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
              {phase.difficulty}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-purple-400" />
              {phase.estimatedDurationWeeks} Weeks
            </span>
          </div>
          <h3 className="text-lg font-extrabold text-white">{phase.title}</h3>
          <p className="text-xs text-slate-300 mt-0.5 max-w-xl">{phase.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-black text-indigo-400">
              {completedSkillsCount} / {phase.skills.length} Skills
            </div>
            <p className="text-[10px] text-slate-400">{phase.progressPercentage}% Complete</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950/80 text-slate-400 hover:text-white"
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Body */}
      {expanded && (
        <div className="mt-5 space-y-6">
          {/* Skill Cards List */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
              Core Skills & Technologies
            </h4>
            <div className="space-y-3">
              {phase.skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onToggleComplete={onToggleSkillComplete}
                />
              ))}
            </div>
          </div>

          {/* Mini Projects Section */}
          {phase.miniProjects.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                Phase Capstone & Portfolio Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phase.miniProjects.map((proj, idx) => (
                  <ProjectCard
                    key={idx}
                    name={proj.name}
                    description={proj.description}
                    techStack={proj.techStack}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};