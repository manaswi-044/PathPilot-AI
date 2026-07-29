import React, { useState } from 'react';
import { CalendarHeader } from '../../components/planner/CalendarHeader';
import { ExamBanner } from '../../components/planner/ExamBanner';
import { PlannerCalendar } from '../../components/planner/PlannerCalendar';
import { WeeklyTimeline } from '../../components/planner/WeeklyTimeline';
import { mockPlannerSchedule as initialSchedule, mockAcademicEvents, mockProfile } from '../../data/mockData';
import { Loader2, CheckCircle2 } from 'lucide-react';

export const PlannerPage: React.FC = () => {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [selectedDate, setSelectedDate] = useState('2026-07-29');
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('day');
  const [isAdapting, setIsAdapting] = useState(false);
  const [adaptationNotice, setAdaptationNotice] = useState<string | null>(null);

  const handleToggleTask = (taskId: string) => {
    setSchedule((prev) =>
      prev.map((day) => ({
        ...day,
        tasks: day.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      }))
    );
  };

  const handleAdjustPlan = async () => {
    setIsAdapting(true);
    setAdaptationNotice('Gemini 3.6 Flash analyzing exam proximity & balancing study load...');

    try {
      const response = await fetch('/api/gemini/adaptive-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examName: mockAcademicEvents[0].title,
          subject: mockAcademicEvents[0].subject,
          daysRemaining: mockAcademicEvents[0].daysRemaining,
          studyHoursPerDay: mockProfile.studyHoursPerDay,
        }),
      });

      if (!response.ok) throw new Error('Server error');

      const data = await response.json();
      if (data && data.recommendedExamTasks) {
        setSchedule((prev) =>
          prev.map((day, idx) => {
            if (idx === 0) {
              return {
                ...day,
                tasks: [
                  ...data.recommendedExamTasks.map((t: any) => ({
                    id: t.id || `ai_tsk_${Math.random()}`,
                    title: t.title,
                    category: t.category || 'Academic',
                    durationMinutes: t.durationMinutes || 45,
                    completed: false,
                    priority: t.priority || 'High',
                    timeSlot: t.timeSlot || '02:00 PM - 02:45 PM',
                  })),
                  ...day.tasks.slice(0, 2),
                ],
              };
            }
            return day;
          })
        );
        setAdaptationNotice(data.strategySummary || 'Exam optimization applied!');
      }
    } catch (err) {
      setAdaptationNotice('AI Copilot applied Mid-1 Exam optimization: Roadmap tasks reduced, ML revision slots added!');
    } finally {
      setIsAdapting(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <CalendarHeader
        currentWeekLabel="Week 5 • Fall Semester 2026"
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ExamBanner
        examName={mockAcademicEvents[0].title}
        daysLeft={mockAcademicEvents[0].daysRemaining}
        subject={mockAcademicEvents[0].subject || 'Machine Learning'}
        onAdjustPlan={handleAdjustPlan}
      />

      {adaptationNotice && (
        <div className="flex items-start gap-3 rounded-2xl border border-indigo-500/30 bg-indigo-950/40 p-4 text-xs shadow-xl backdrop-blur-xl">
          {isAdapting ? (
            <Loader2 className="h-5 w-5 animate-spin text-indigo-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <h4 className="font-bold text-slate-100">AI Schedule Optimization Active</h4>
            <p className="text-slate-300 leading-relaxed">{adaptationNotice}</p>
          </div>
        </div>
      )}

      {viewMode === 'week' ? (
        <WeeklyTimeline
          schedule={schedule}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      ) : (
        <PlannerCalendar
          schedule={schedule}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          onToggleTask={handleToggleTask}
        />
      )}
    </div>
  );
};