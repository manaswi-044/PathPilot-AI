"use client";

import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function CareerFilters({ 
  onDomainChange, 
  onDifficultyChange 
}: { 
  onDomainChange: (val: string) => void;
  onDifficultyChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Select onValueChange={onDomainChange}>
        <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10 h-12">
          <SelectValue placeholder="Domain" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">All Domains</SelectItem>
          <SelectItem value="AI/ML">AI & ML</SelectItem>
          <SelectItem value="Development">Development</SelectItem>
          <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
          <SelectItem value="Cloud">Cloud</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onDifficultyChange}>
        <SelectTrigger className="w-full sm:w-[180px] bg-white/5 border-white/10 h-12">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}