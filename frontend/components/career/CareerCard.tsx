"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Clock, BarChart3, ArrowUpRight, Banknote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SkillBadge from "./SkillBadge";
import DemandMeter from "./DemandMeter";

interface CareerCardProps {
  career: {
    id: string;
    name: string;
    domain: string;
    averageSalary: { min: number; max: number; currency: string };
    demandScore: number;
    requiredSkills: string[];
    learningDuration: string;
    difficulty: string;
    growthRate: number;
  };
}

export default function CareerCard({ career }: CareerCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-slate-900/40 border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {career.name}
            </h3>
            <p className="text-sm text-slate-500">{career.domain}</p>
          </div>
          <DemandMeter score={career.demandScore} size="sm" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Banknote className="w-4 h-4 text-emerald-400" />
            <div className="text-xs">
              <p className="text-slate-500 uppercase">Avg Salary</p>
              <p className="font-semibold text-slate-200">
                {career.averageSalary.min}k - {career.averageSalary.max}k
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <div className="text-xs">
              <p className="text-slate-500 uppercase">Growth</p>
              <p className="font-semibold text-slate-200">+{career.growthRate}%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
          {career.requiredSkills.slice(0, 3).map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
          {career.requiredSkills.length > 3 && (
            <span className="text-[10px] text-slate-500 self-center">+{career.requiredSkills.length - 3} more</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {career.learningDuration}
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3" /> {career.difficulty}
            </span>
          </div>
          
          <Link href={`/career-explorer/${career.id}`}>
            <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 gap-1 p-0 h-auto">
              Details <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}