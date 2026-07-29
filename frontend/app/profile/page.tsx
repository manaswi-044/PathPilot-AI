import React, { useState } from 'react';
import { mockProfile as initialProfile } from '../../data/mockData';
import { GraduationCap, BookOpen, Edit3, Clock, CheckCircle2, Sparkles, Save } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 via-purple-950/60 to-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              className="h-20 w-20 rounded-full border-2 border-indigo-500/50 object-cover shadow-xl"
            />
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl font-extrabold text-white">{profile.fullName}</h1>
                <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-bold text-indigo-300 border border-indigo-500/30">
                  Sem {profile.semester}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{profile.college}</p>
              <p className="text-xs text-indigo-400 font-semibold mt-1">
                {profile.branch} • CGPA {profile.cgpa}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all"
          >
            <Edit3 className="h-4 w-4" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
          </button>
        </div>
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl space-y-4 text-xs">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            Edit Student Profile Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-400 block mb-1">Full Name</label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 p-2.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Career Goal</label>
              <input
                type="text"
                value={profile.careerGoal}
                onChange={(e) => setProfile({ ...profile, careerGoal: e.target.value })}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 p-2.5 text-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 font-bold text-white hover:bg-indigo-500 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Save Profile Updates</span>
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <GraduationCap className="h-4 w-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white">Academic Details</h3>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">College</span>
              <span className="font-semibold text-slate-200">{profile.college}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Branch</span>
              <span className="font-semibold text-slate-200">{profile.branch}</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <Clock className="h-4 w-4 text-purple-400" />
            <h3 className="text-sm font-bold text-white">Learning Preferences</h3>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Target Career</span>
              <span className="font-semibold text-indigo-300">{profile.careerGoal}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/60">
              <span className="text-slate-400">Daily Study Hours</span>
              <span className="font-semibold text-slate-200">{profile.studyHoursPerDay} hrs / day</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <BookOpen className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Current Skill Portfolio</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};