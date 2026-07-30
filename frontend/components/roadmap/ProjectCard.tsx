import React from 'react';
import { FolderGit2, Code2, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  techStack,
}) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 text-xs transition-all hover:border-slate-700">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-slate-100 flex items-center gap-2">
          <FolderGit2 className="h-4 w-4 text-purple-400" />
          {name}
        </h5>
        <ArrowUpRight className="h-3.5 w-3.5 text-slate-500" />
      </div>
      <p className="mt-1.5 text-slate-400 text-[11px] leading-relaxed">{description}</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="rounded-md bg-slate-900 border border-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};