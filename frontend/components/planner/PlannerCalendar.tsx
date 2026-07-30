import React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { DaySelector } from './DaySelector';
import { ProgressSummary } from './ProgressSummary';
import { ScheduleCard } from './ScheduleCard';
import { PlannerDaySchedule } from '../../types';

interface PlannerCalendarProps {
  schedule: PlannerDaySchedule[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
  onToggleTask: (id: string) => void;
}

export const PlannerCalendar: React.FC<PlannerCalendarProps> = ({
  schedule,
  selectedDate,
  onSelectDate,
  onToggleTask,
}) => {
  const currentDayData = schedule.find((d) => d.date === selectedDate) || schedule[0];

  const completedCount = currentDayData.tasks.filter((t) => t.completed).length;

  return (
    <div className="space-y-6">
      <DaySelector
        days={schedule.map((s) => ({
          date: s.date,
          dayName: s.dayName,
          isExamNearby: s.isExamNearby,
        }))}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
      />

      <ProgressSummary
        completedTasks={completedCount}
        totalTasks={currentDayData.tasks.length}
        totalHours={currentDayData.totalHours}
      />

      <div>
        <h3 className="text-sm font-bold text-white mb-3">
          Detailed Schedule for {currentDayData.dayName}
        </h3>
        <ScheduleCard tasks={currentDayData.tasks} onToggleTask={onToggleTask} />
      </div>
    </div>
  );
};