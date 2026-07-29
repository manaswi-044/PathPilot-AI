"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Calendar, 
  IndianRupee, 
  ExternalLink, 
  Info,
  CheckCircle2,
  FileText
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import BookmarkButton from "./BookmarkButton";
import BenefitCard from "./BenefitCard";

interface ScholarshipProps {
  scholarship: {
    id: string;
    name: string;
    provider: string;
    amount: string;
    deadline: string;
    eligibility: string[];
    benefits: string[];
    requiredDocuments: string[];
    matchScore: number;
    matchReasons: string[];
    officialLink: string;
  };
}

export default function ScholarshipCard({ scholarship }: ScholarshipProps) {
  return (
    <Card className="group relative bg-slate-900/40 border-white/10 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 overflow-hidden">
      {/* Match Score Badge */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <div className="bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-400">{scholarship.matchScore}% Match</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="pr-20">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
              {scholarship.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{scholarship.provider}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Scholarship Amount</p>
            <div className="flex items-center text-lg font-bold text-emerald-400">
              <IndianRupee className="w-4 h-4 mr-1" />
              {scholarship.amount}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Application Deadline</p>
            <div className="flex items-center text-sm font-semibold text-slate-200">
              <Calendar className="w-4 h-4 mr-2 text-slate-400" />
              {scholarship.deadline}
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2">Eligibility Highlights</p>
            <div className="flex flex-wrap gap-2">
              {scholarship.eligibility.slice(0, 2).map((item, i) => (
                <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-slate-300 text-[10px]">
                  {item}
                </Badge>
              ))}
              {scholarship.eligibility.length > 2 && (
                <span className="text-[10px] text-slate-500 self-center">+{scholarship.eligibility.length - 2} more</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-300 text-xs flex-1 h-10">
                  <Info className="w-3.5 h-3.5 mr-2" /> Match Analysis
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-900 border-white/10 text-slate-200 p-4 max-w-xs shadow-2xl">
                <div className="space-y-3">
                  <p className="font-bold text-xs text-emerald-400 uppercase tracking-widest">Why you match</p>
                  <ul className="space-y-2">
                    {scholarship.matchReasons.map((reason, i) => (
                      <li key={i} className="text-[11px] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-10 px-6">
            Apply Now <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </Button>
          
          <BookmarkButton />
        </div>
      </div>
    </Card>
  );
}