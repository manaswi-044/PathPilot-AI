import React from "react";

export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-blue-500/5 border border-blue-500/20 text-blue-300 group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-all cursor-default">
      {skill}
    </span>
  );
}