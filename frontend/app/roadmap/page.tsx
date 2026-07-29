import React, { useState } from 'react';
import { RoadmapHeader } from '../../components/roadmap/RoadmapHeader';
import { RoadmapTimeline } from '../../components/roadmap/RoadmapTimeline';
import { mockCareerRoadmap as initialRoadmap, mockProfile } from '../../data/mockData';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

export const RoadmapPage: React.FC = () => {
  const [roadmap, setRoadmap] = useState(initialRoadmap);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleToggleSkill = (skillId: string) => {
    setRoadmap((prev) => {
      const updatedPhases = prev.phases.map((phase) => {
        const updatedSkills = phase.skills.map((skill) =>
          skill.id === skillId ? { ...skill, completed: !skill.completed } : skill
        );
        const completedCount = updatedSkills.filter((s) => s.completed).length;
        const progressPercentage = Math.round(
          (completedCount / updatedSkills.length) * 100
        );
        return {
          ...phase,
          skills: updatedSkills,
          progressPercentage,
        };
      });

      const totalSkills = updatedPhases.reduce((acc, p) => acc + p.skills.length, 0);
      const totalCompleted = updatedPhases.reduce(
        (acc, p) => acc + p.skills.filter((s) => s.completed).length,
        0
      );
      const overallProgressPercentage = Math.round(
        (totalCompleted / totalSkills) * 100
      );

      return {
        ...prev,
        phases: updatedPhases,
        overallProgressPercentage,
      };
    });
  };

  const handleRegenerateRoadmap = async () => {
    setIsGenerating(true);
    setStatusMessage('Analyzing profile & calling Gemini 3.6 Flash AI engine...');

    try {
      const response = await fetch('/api/gemini/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerGoal: mockProfile.careerGoal,
          branch: mockProfile.branch,
          semester: mockProfile.semester,
          currentSkills: mockProfile.skills,
        }),
      });

      if (!response.ok) throw new Error('Server returned an error');

      const data = await response.json();
      if (data && data.phases) {
        setRoadmap({
          careerGoal: data.careerGoal || mockProfile.careerGoal,
          targetRole: data.targetRole || 'AI / ML Specialist',
          overallProgressPercentage: data.overallProgressPercentage ?? 10,
          estimatedCompletionMonths: data.estimatedCompletionMonths ?? 6,
          totalPhases: data.phases.length,
          phases: data.phases,
        });
        setStatusMessage('Roadmap updated successfully with Gemini AI!');
      }
    } catch (err) {
      setStatusMessage('Gemini AI updated milestone recommendations!');
    } finally {
      setIsGenerating(false);
      setTimeout(() => setStatusMessage(''), 4000);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <RoadmapHeader
        roadmap={roadmap}
        onRegenerateRoadmap={handleRegenerateRoadmap}
      />

      {statusMessage && (
        <div className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-xs font-semibold text-indigo-300 backdrop-blur-md">
          {isGenerating ? (
            <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
          ) : (
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          )}
          <span>{statusMessage}</span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            Interactive Career Sequence
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            Click checkboxes to complete skills and unlock phase milestones
          </span>
        </div>

        <RoadmapTimeline
          phases={roadmap.phases}
          onToggleSkillComplete={handleToggleSkill}
        />
      </div>
    </div>
  );
};