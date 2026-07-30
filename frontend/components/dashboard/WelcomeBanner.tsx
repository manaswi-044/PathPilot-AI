import React from 'react';
import { Sparkles, Calendar, Target, AlertTriangle, ArrowRight } from 'lucide-react';
import { StudentProfile } from '../../types';

interface WelcomeBannerProps {
  profile: StudentProfile;
  onNavigateToPlanner: () => void;
  onNavigateToRoadmap: () => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  profile,
  onNavigateToPlanner,
  onNavigateToRoadmap,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-2xl">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>AI Copilot Active • Semester {profile.semester}</span>
          </div>

          <h1 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300">{profile.fullName}</span> 👋
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Your target role is <span className="font-semibold text-indigo-300">{profile.careerGoal}</span>. You're on track to complete Phase 2 with a <span className="font-semibold text-emerald-400">14-day study streak</span>!
          </p>

          {/* Academic Exam Alert Notice */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5">
            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
            <div className="flex-1 text-xs">
              <p className="font-bold text-amber-200">
                Academic Priority: Mid-1 Exam in 5 Days
              </p>
              <p className="text-amber-300/80 text-[11px]">
                Adaptive Planner automatically decreased non-urgent roadmap tasks and scheduled ML revision slots.
              </p>
            </div>
            <button
              onClick={onNavigateToPlanner}
              className="hidden sm:flex items-center gap-1.5 rounded-xl bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-200 hover:bg-amber-500/30 transition-colors"
            >
              <span>View Planner</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <button
            onClick={onNavigateToRoadmap}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all"
          >
            <Target className="h-4 w-4" />
            <span>Continue AI Roadmap</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onNavigateToPlanner}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-xs font-semibold text-slate-200 hover:border-slate-600 hover:bg-slate-800 transition-all"
          >
            <Calendar className="h-4 w-4 text-purple-400" />
            <span>Today's Study Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};