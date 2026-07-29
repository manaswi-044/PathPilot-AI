"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Globe, 
  Zap, 
  ArrowRight,
  ExternalLink,
  Info
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

import Countdown from "./Countdown";
import RegistrationStatus from "./RegistrationStatus";
import BookmarkButton from "./BookmarkButton";
import OrganizerCard from "./OrganizerCard";

interface HackathonProps {
  hackathon: {
    id: string;
    name: string;
    organizer: string;
    prizePool: string;
    deadline: string;
    mode: "Online" | "Offline";
    teamSize: string;
    requiredSkills: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    matchScore: number;
    matchReasons: string[];
  };
}

export default function HackathonCard({ hackathon }: HackathonProps) {
  return (
    <Card className="group relative bg-slate-900/40 border-white/10 backdrop-blur-md hover:border-blue-500/40 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* AI Match Score Overlay */}
      <div className="absolute top-3 right-3 z-20">
        <div className="flex flex-col items-end gap-2">
          <div className="bg-blue-600 px-2 py-1 rounded-md shadow-lg shadow-blue-900/20">
            <span className="text-[10px] font-black text-white italic">{hackathon.matchScore}% MATCH</span>
          </div>
          <RegistrationStatus deadline={hackathon.deadline} />
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Organizer info */}
        <OrganizerCard name={hackathon.organizer} />

        <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {hackathon.name}
        </h3>

        {/* Prize Section */}
        <div className="mt-2 mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 relative overflow-hidden">
          <Zap className="absolute -right-2 -bottom-2 w-12 h-12 text-blue-500/10 rotate-12" />
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">Total Prize Pool</p>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-2xl font-black text-white tracking-tight">{hackathon.prizePool}</span>
          </div>
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 p-2 rounded-lg">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            {hackathon.mode}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 p-2 rounded-lg">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            {hackathon.teamSize}
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {hackathon.requiredSkills.map(skill => (
            <Badge key={skill} variant="secondary" className="bg-white/5 text-slate-400 text-[10px] border-none font-normal">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Footer info & Countdown */}
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Registration Ends In</span>
            <Countdown date={hackathon.deadline} />
          </div>

          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-blue-500/5 border-blue-500/20 text-blue-300 text-xs flex-1 h-10">
                    <Info className="w-3.5 h-3.5 mr-2" /> Why Match?
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-950 border-blue-500/30 text-slate-200 p-4 max-w-xs backdrop-blur-xl">
                  <div className="space-y-2">
                    <p className="font-bold text-xs text-blue-400 uppercase tracking-widest">AI Matching Analysis</p>
                    <ul className="space-y-2">
                      {hackathon.matchReasons.map((reason, i) => (
                        <li key={i} className="text-[11px] flex items-start gap-2">
                          <Zap className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button className="bg-white text-black hover:bg-blue-50 flex-1 h-10 font-bold text-xs">
              Register <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>

            <BookmarkButton />
          </div>
        </div>
      </div>
    </Card>
  );
}