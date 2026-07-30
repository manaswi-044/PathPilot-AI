import React from 'react';
import { StudyTask } from '../../types';
import { TaskCard } from './TaskCard';

interface ScheduleCardProps {
  tasks: StudyTask[];
  onToggleTask: (id: string) => void;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  tasks,
  onToggleTask,
}) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </div>
  );
};