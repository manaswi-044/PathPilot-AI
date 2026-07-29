"use client";

import React from "react";
import { Compass, BookOpen, Target, Cpu, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Dynamic Roadmaps",
    desc: "AI-generated paths that adapt as you learn and progress.",
    icon: Compass,
    color: "text-blue-400"
  },
  {
    title: "Career Explorer",
    desc: "Find your ideal career based on skills, interests, and trends.",
    icon: Target,
    color: "text-purple-400"
  },
  {
    title: "Academic Copilot",
    desc: "Organize your subjects and track your CGPA effortlessly.",
    icon: BookOpen,
    color: "text-emerald-400"
  },
  {
    title: "AI Analysis",
    desc: "Deep insights into your learning patterns and strengths.",
    icon: Cpu,
    color: "text-orange-400"
  },
  {
    title: "Resource Finder",
    desc: "Curated learning materials tailored for your specific goals.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Secure Planning",
    desc: "Your data is encrypted and private. Always.",
    icon: Shield,
    color: "text-red-400"
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div 
          key={i}
          className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
        >
          <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${f.color}`}>
            <f.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">{f.title}</h3>
          <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}