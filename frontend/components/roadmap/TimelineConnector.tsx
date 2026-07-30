import React from 'react';

interface TimelineConnectorProps {
  isCompleted?: boolean;
}

export const TimelineConnector: React.FC<TimelineConnectorProps> = ({
  isCompleted = false,
}) => {
  return (
    <div className="flex justify-center my-2">
      <div
        className={`h-8 w-1 rounded-full transition-colors duration-500 ${
          isCompleted ? 'bg-gradient-to-b from-emerald-500 to-indigo-500' : 'bg-slate-800'
        }`}
      />
    </div>
  );
};