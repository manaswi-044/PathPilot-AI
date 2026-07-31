import React, { useState } from 'react';
import { WelcomeBanner } from '../../components/dashboard/WelcomeBanner';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { StatCard } from '../../components/dashboard/StatCard';
import { QuickActionCard } from '../../components/dashboard/QuickActionCard';
import { ProgressCard } from '../../components/dashboard/ProgressCard';
import { UpcomingEvents } from '../../components/dashboard/UpcomingEvents';
import { StudyTaskCard } from '../../components/dashboard/StudyTaskCard';
import { WeeklyChart } from '../../components/dashboard/WeeklyChart';
import { RecentSuggestions } from '../../components/dashboard/RecentSuggestions';
import {
  mockProfile,
  mockDashboardStats,
  mockAcademicEvents,
  mockTodayTasks as initialTodayTasks,
  mockCareerRoadmap,
  mockAISuggestions,
} from '../../data/mockData';
import {
  Award,
  Briefcase,
  Flame,
  Calendar,
  Target,
  Zap,
  BookOpen
} from 'lucide-react';
import { AISuggestion } from '../../types';

interface DashboardPageProps {
  onNavigateTab: (tab: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigateTab }) => {
  const [tasks, setTasks] = useState(initialTodayTasks);

  const handleToggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleSuggestionAction = (suggestion: AISuggestion) => {
    if (suggestion.type === 'Planner') {
      onNavigateTab('planner');
    } else if (suggestion.type === 'Skill Gap') {
      onNavigateTab('skill-gap');
    } else if (suggestion.type === 'Opportunity') {
      onNavigateTab('roadmap');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <DashboardHeader />

      <WelcomeBanner
        profile={mockProfile}
        onNavigateToPlanner={() => onNavigateTab('planner')}
        onNavigateToRoadmap={() => onNavigateTab('roadmap')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Career Roadmap"
          value={`${mockDashboardStats.careerProgressPercentage}%`}
          subtitle="Phase 2 of 5 Active"
          icon={Target}
          trend="+8% this month"
          trendUp={true}
          colorScheme="indigo"
          onClick={() => onNavigateTab('roadmap')}
        />
        <StatCard
          title="Study Streak"
          value={`${mockDashboardStats.daysStreak} Days`}
          subtitle="Consistent Daily Activity"
          icon={Flame}
          trend="Top 5% in NIT Class"
          trendUp={true}
          colorScheme="amber"
          onClick={() => onNavigateTab('planner')}
        />
        <StatCard
          title="Internship Match"
          value={`${mockDashboardStats.internshipMatchCount} Roles`}
          subtitle="94% Highest Match"
          icon={Briefcase}
          trend="3 New this week"
          trendUp={true}
          colorScheme="purple"
          onClick={() => onNavigateTab('skill-gap')}
        />
        <StatCard
          title="Scholarship Matches"
          value={`${mockDashboardStats.scholarshipMatchCount} Eligible`}
          subtitle="Up to $2,500 Grant"
          icon={Award}
          trend="Google Gen Grant Open"
          trendUp={true}
          colorScheme="emerald"
          onClick={() => onNavigateTab('profile')}
        />
      </div>

      <div>
        <h3 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
          <Zap className="h-4 w-4 text-indigo-400" />
          Quick Actions & AI Copilot Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            title="Generate 30-Day Plan"
            description="AI creates custom weekly schedule based on exam dates & study hours."
            icon={Calendar}
            badge="Adaptive"
            accentColor="indigo"
            onClick={() => onNavigateTab('planner')}
          />
          <QuickActionCard
            title="Skill Gap Matrix"
            description="Compare current skills against top AI engineer requirements."
            icon={Target}
            badge="89% Fit"
            accentColor="purple"
            onClick={() => onNavigateTab('skill-gap')}
          />
          <QuickActionCard
            title="PyTorch Deep Dive"
            description="Start highest-impact missing skill module in Phase 3."
            icon={BookOpen}
            badge="Next Milestone"
            accentColor="emerald"
            onClick={() => onNavigateTab('roadmap')}
          />
          <QuickActionCard
            title="Academic Exam Alert"
            description="Review exam revision slots & reduced workload settings."
            icon={Zap}
            badge="5 Days Left"
            accentColor="amber"
            onClick={() => onNavigateTab('planner')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressCard
          roadmap={mockCareerRoadmap}
          onNavigateToRoadmap={() => onNavigateTab('roadmap')}
        />
        <StudyTaskCard tasks={tasks} onToggleTask={handleToggleTask} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyChart data={mockDashboardStats.weeklyStudyHours} />
        </div>
        <div>
          <UpcomingEvents
            events={mockAcademicEvents}
            onNavigateToPlanner={() => onNavigateTab('planner')}
          />
        </div>
      </div>

      <RecentSuggestions
        suggestions={mockAISuggestions}
        onActionClick={handleSuggestionAction}
      />
    </div>
  );
};