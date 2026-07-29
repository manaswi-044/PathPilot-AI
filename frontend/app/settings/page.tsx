import React, { useState } from 'react';
import { Settings as SettingsIcon, Moon, Bell, Sliders, Shield, LogOut, Trash2, CheckCircle2 } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState({
    examAlerts: true,
    roadmapReminders: true,
  });
  const [adaptiveWorkload, setAdaptiveWorkload] = useState(true);

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <SettingsIcon className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">System & App Settings</h1>
          <p className="text-xs text-slate-400">Manage notifications, copilot AI behavior, and account preferences.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Moon className="h-4 w-4 text-purple-400" />
          Appearance & Aesthetic Theme
        </h3>
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
            theme === 'dark'
              ? 'border-indigo-500 bg-indigo-600/20 text-white'
              : 'border-slate-800 bg-slate-950/60 text-slate-400'
          }`}
        >
          <div>
            <p className="font-bold">Dark Glassmorphism</p>
            <p className="text-[10px] text-slate-400">Linear / Cursor Style</p>
          </div>
          {theme === 'dark' && <CheckCircle2 className="h-4 w-4 text-indigo-400" />}
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Bell className="h-4 w-4 text-amber-400" />
          AI Copilot Notifications
        </h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div>
              <p className="font-bold text-slate-200">Exam Proximity Alerts</p>
              <p className="text-[11px] text-slate-400">Notify 7 days before mid-sem and end-sem exams.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.examAlerts}
              onChange={(e) => setNotifications({ ...notifications, examAlerts: e.target.checked })}
              className="h-4 w-4 accent-indigo-500 rounded"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Sliders className="h-4 w-4 text-indigo-400" />
          Adaptive Study Planner Engine
        </h3>
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
          <div>
            <p className="font-bold text-slate-200">Auto-reduce Workload during Exams</p>
            <p className="text-[11px] text-slate-400">Reallocate time to academic revision automatically.</p>
          </div>
          <input
            type="checkbox"
            checked={adaptiveWorkload}
            onChange={(e) => setAdaptiveWorkload(e.target.checked)}
            className="h-4 w-4 accent-indigo-500 rounded"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-rose-500/30 bg-rose-950/10 p-5 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-rose-300 flex items-center gap-2">
          <Shield className="h-4 w-4 text-rose-400" />
          Account & Danger Zone
        </h3>
        <div className="flex gap-3 text-xs">
          <button
            onClick={() => alert('Logged out successfully.')}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 font-bold text-slate-300 hover:text-white"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};