import React from 'react';
import {
  LayoutDashboard,
  Map,
  Target,
  Calendar,
  User,
  Settings as SettingsIcon,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isMobileOpen = false,
  setIsMobileOpen,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'roadmap', label: 'AI Roadmap', icon: Map, badge: 'Phase 2' },
    { id: 'skill-gap', label: 'Skill Gap', icon: Target, badge: '89% Fit' },
    { id: 'planner', label: 'Adaptive Planner', icon: Calendar, badge: 'Exam Alert' },
    { id: 'profile', label: 'Student Profile', icon: User, badge: '92%' },
    { id: 'settings', label: 'Settings', icon: SettingsIcon, badge: null },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 border-r border-slate-800/80 bg-slate-950/90 backdrop-blur-xl transition-transform duration-300 md:translate-x-0 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div>
          {/* Brand Logo */}
          <div className="mb-8 flex items-center space-x-3 px-3 pt-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/25">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg tracking-tight text-white">PathPilot</span>
                <span className="rounded-md bg-indigo-500/10 px-1.5 py-0.5 font-semibold text-[10px] text-indigo-400 border border-indigo-500/20">AI</span>
              </div>
              <p className="text-[11px] font-medium text-slate-400">Academic & Career Copilot</p>
            </div>
          </div>

          {/* Target Career Quick Badge */}
          <div className="mb-6 mx-1 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/40 p-3 border border-indigo-800/40">
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-300 mb-1">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-indigo-400" />
                Target Goal
              </span>
              <span className="text-[10px] bg-indigo-500/20 px-1.5 py-0.5 rounded text-indigo-300">NIT CS 5th Sem</span>
            </div>
            <p className="text-sm font-bold text-white truncate">AI / ML Engineer</p>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Roadmap Progress</span>
              <span className="font-semibold text-indigo-400">42%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: '42%' }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (setIsMobileOpen) setIsMobileOpen(false);
                  }}
                  className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-transparent text-white border border-indigo-500/30 shadow-inner'
                      : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          item.badge.includes('Alert')
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : isActive
                            ? 'bg-indigo-500/30 text-indigo-200'
                            : 'bg-slate-800/80 text-slate-400'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight
                      className={`h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 ${
                        isActive ? 'text-indigo-400 opacity-100' : 'text-slate-500'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* AI Copilot Status Card Footer */}
        <div className="rounded-xl border border-purple-500/20 bg-gradient-to-b from-purple-950/30 via-slate-900/40 to-slate-950/80 p-3.5">
          <div className="flex items-center space-x-2">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-xs font-semibold text-slate-200">AI Copilot Active</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
            Monitoring Mid-1 Exams. Schedule automatically optimized.
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-indigo-400 font-medium">
            <Zap className="h-3 w-3" />
            Adaptive Planner Live
          </div>
        </div>
      </div>
    </aside>
  );
};