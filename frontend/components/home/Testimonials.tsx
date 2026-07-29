"use client";

import React from "react";

const reviews = [
  { name: "Alex Chen", role: "Computer Science Student", text: "PathPilot helped me transition from confused to focused in just a few days. The roadmap is spot on." },
  { name: "Sarah Miller", role: "Product Designer", text: "The career explorer found options I hadn't even considered. The AI insights are genuinely helpful." },
  { name: "James Wilson", role: "Engineering Lead", text: "A premium tool that feels like it belongs in the future. Clean UI and great performance." }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Pioneers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <p className="text-neutral-300 italic mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-xs text-neutral-500">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}