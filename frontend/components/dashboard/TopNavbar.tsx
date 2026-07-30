import React, { useState } from 'react';
import {
  Search,
  Flame,
  Bell,
  Sparkles,
  Menu,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { mockProfile } from '../../data/mockData';

interface TopNavbarProps {
  onToggleMobileMenu: () => void;
  onOpenSearch?: () => void;
  activeTabTitle: string;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  onToggleMobileMenu,
  onOpenSearch,
  activeTabTitle,
}) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 md:px-8 backdrop-blur-md">
      {/* Left section: Mobile menu & Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h1 className="text-lg font-bold text-white tracking-tight">{activeTabTitle}</h1>
          <p className="hidden sm:block text-[11px] text-slate-400">
            Welcome back, <span className="text-indigo-400 font-medium">{mockProfile.fullName}</span> • {mockProfile.college}
          </p>
        </div>
      </div>

      {/* Middle section: Global Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md mx-6">
        <button
          onClick={onOpenSearch}
          className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs text-slate-400 transition-all hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200"
        >
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-500" />
            <span>Search skills, roadmap phases, exam topics, or internships...</span>
          </div>
          <kbd className="hidden lg:inline-flex items-center gap-1 rounded border border-slate-800 bg-slate-950 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right section: Quick Stats & Profile */}
      <div className="flex items-center gap-3">
        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
          <Flame className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse" />
          <span>14 Day Streak</span>
        </div>

        {/* AI Copilot Quick Action / Notification */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-slate-950" />
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-2xl z-50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                  AI Copilot Insights
                </span>
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="text-slate-400 hover:text-white text-xs"
                >
                  Close
                </button>
              </div>

              <div className="mt-3 space-y-2.5 text-xs">
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5">
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-200">Exam Alert Adjusted</p>
                      <p className="text-[11px] text-amber-300/80 mt-0.5">
                        Mid-1 exam in 5 days. Reduced roadmap load by 35%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-200">3 Tasks Completed Today</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Great job! 2 remaining tasks for 180 total study minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Thumbnail */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
          <img
            src={mockProfile.avatarUrl}
            alt={mockProfile.fullName}
            className="h-8 w-8 rounded-full border border-indigo-500/40 object-cover"
          />
          <div className="hidden xl:block text-left">
            <p className="text-xs font-semibold text-slate-200">{mockProfile.fullName}</p>
            <p className="text-[10px] text-slate-400">CGPA {mockProfile.cgpa}</p>
          </div>
        </div>
      </div>
    </header>
  );
};