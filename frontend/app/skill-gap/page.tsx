import React, { useState } from 'react';
import { GapAnalysisCard } from '../../components/skill-gap/GapAnalysisCard';
import { SkillCard } from '../../components/skill-gap/SkillCard';
import { PriorityMatrix } from '../../components/skill-gap/PriorityMatrix';
import { LearningOrder } from '../../components/skill-gap/LearningOrder';
import { RecommendationCard } from '../../components/skill-gap/RecommendationCard';
import { CertificationCard } from '../../components/skill-gap/CertificationCard';
import { mockSkillGapAnalysis as initialAnalysis, mockProfile } from '../../data/mockData';
import { CheckCircle2, AlertTriangle, Code2, Award, Sparkles, RefreshCw, Loader2 } from 'lucide-react';

export const SkillGapPage: React.FC = () => {
  const [analysis, setAnalysis] = useState(initialAnalysis);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRefreshAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/gemini/skill-gap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerGoal: mockProfile.careerGoal,
          knownSkills: mockProfile.skills,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          setAnalysis((prev) => ({
            ...prev,
            overallReadinessScorePercentage: data.overallReadinessScorePercentage ?? prev.overallReadinessScorePercentage,
            skillsToLearn: data.skillsToLearn || prev.skillsToLearn,
            priorityMatrix: data.priorityMatrix || prev.priorityMatrix,
            learningOrder: data.learningOrder || prev.learningOrder,
          }));
        }
      }
    } catch (err) {
      console.warn('API fallback', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-xl">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            AI Target Role Diagnostic
          </h2>
          <p className="text-xs text-slate-400">
            Real-time benchmarking against top employer skill requirements for {analysis.careerGoal}
          </p>
        </div>
        <button
          onClick={handleRefreshAnalysis}
          disabled={isAnalyzing}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500 disabled:opacity-50 transition-all shrink-0"
        >
          {isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          <span>Re-Run AI Analysis</span>
        </button>
      </div>

      <GapAnalysisCard
        careerGoal={analysis.careerGoal}
        readinessScore={analysis.overallReadinessScorePercentage}
        knownCount={analysis.skillsKnown.length}
        missingCount={analysis.skillsToLearn.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800 mb-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Skills Already Mastered</h3>
          </div>
          <div className="space-y-2">
            {analysis.skillsKnown.map((item, idx) => (
              <SkillCard
                key={idx}
                name={item.name}
                type="known"
                proficiencyOrPriority={item.proficiency}
                categoryOrDifficulty={item.category}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800 mb-3">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">High-Impact Missing Skills</h3>
          </div>
          <div className="space-y-2">
            {analysis.skillsToLearn.map((item, idx) => (
              <SkillCard
                key={idx}
                name={item.name}
                type="missing"
                proficiencyOrPriority={item.priority}
                categoryOrDifficulty={`Difficulty: ${item.difficulty}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PriorityMatrix items={analysis.priorityMatrix} />
        </div>
        <div>
          <LearningOrder order={analysis.learningOrder} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Code2 className="h-4 w-4 text-indigo-400" />
            Recommended Projects to Bridge Gap
          </h3>
          <div className="space-y-3">
            {analysis.recommendedProjects.map((proj, idx) => (
              <RecommendationCard
                key={idx}
                title={proj.title}
                difficulty={proj.difficulty}
                keySkills={proj.keySkills}
                impact={proj.impact}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Award className="h-4 w-4 text-purple-400" />
            Recommended Free Certifications
          </h3>
          <div className="space-y-3">
            {analysis.recommendedCertifications.map((cert, idx) => (
              <CertificationCard
                key={idx}
                title={cert.title}
                issuer={cert.issuer}
                estimatedTime={cert.estimatedTime}
                isFree={cert.isFree}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};