"use client";

import React from "react";

const stats = [
  { label: "Active Users", value: "50k+" },
  { label: "Roadmaps Created", value: "120k+" },
  { label: "Partner Universities", value: "200+" },
  { label: "AI Accuracy", value: "99.2%" },
];

export default function Statistics() {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            {s.value}
          </div>
          <div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}