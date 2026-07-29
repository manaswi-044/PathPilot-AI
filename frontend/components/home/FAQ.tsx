"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How accurate are the roadmaps?", a: "Our roadmaps are generated using current industry trends and academic requirements, updated weekly." },
  { q: "Is PathPilot free to use?", a: "We offer a generous free tier for students, with premium features for advanced career tracking." },
  { q: "Can I sync my college curriculum?", a: "Yes, you can upload or select your university curriculum for a custom-tailored experience." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
      {faqs.map((f, i) => (
        <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
          <button 
            className="w-full p-6 text-left flex justify-between items-center"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold">{f.q}</span>
            <ChevronDown className={`transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-6 text-neutral-400 border-t border-white/5 pt-4">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}