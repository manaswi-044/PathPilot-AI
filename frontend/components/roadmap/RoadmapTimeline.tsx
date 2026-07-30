import React from 'react';
import { RoadmapPhase } from '../../types';
import { PhaseCard } from './PhaseCard';
import { TimelineConnector } from './TimelineConnector';

interface RoadmapTimelineProps {
  phases: RoadmapPhase[];
  onToggleSkillComplete: (skillId: string) => void;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({
  phases,
  onToggleSkillComplete,
}) => {
  return (
    <div className="space-y-4">
      {phases.map((phase, index) => (
        <React.Fragment key={phase.id}>
          <PhaseCard phase={phase} onToggleSkillComplete={onToggleSkillComplete} />
          {index < phases.length - 1 && (
            <TimelineConnector isCompleted={phase.progressPercentage === 100} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};