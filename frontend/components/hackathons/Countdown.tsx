"use client";

import React, { useState, useEffect } from "react";

export default function Countdown({ date }: { date: string }) {
  // Simple countdown logic for visual representation
  const [timeLeft, setTimeLeft] = useState("02d : 14h : 05m");

  useEffect(() => {
    // In production, use real date calculation logic
    const timer = setInterval(() => {
      // Logic would go here
    }, 60000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex items-center gap-1 font-mono text-xs font-bold text-blue-400">
      {timeLeft}
    </div>
  );
}