"use client";

import React from "react";

const steps = [
  { title: "Define Goals", desc: "Tell us about your background and where you want to go." },
  { title: "AI Generation", desc: "Our models analyze thousands of data points to build your path." },
  { title: "Execute & Track", desc: "Follow the roadmap and track your progress in real-time." }
];

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
        {steps.map((s, i) => (
          <div key={i} className="relative flex-1 text-center group">
            <div className="text-[120px] font-bold text-white/5 absolute -top-20 left-1/2 -translate-x-1/2 group-hover:text-blue-500/10 transition-colors">
              0{i + 1}
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">{s.title}</h3>
            <p className="text-neutral-400 relative z-10">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}