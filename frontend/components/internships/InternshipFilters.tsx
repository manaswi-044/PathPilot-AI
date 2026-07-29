import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function InternshipFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-white/5 border-white/10 h-10 text-xs">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">Any Duration</SelectItem>
          <SelectItem value="1-3">1-3 Months</SelectItem>
          <SelectItem value="3-6">3-6 Months</SelectItem>
          <SelectItem value="6+">6+ Months</SelectItem>
        </SelectContent>
      </Select>
      
      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-white/5 border-white/10 h-10 text-xs">
          <SelectValue placeholder="Level" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">All Levels</SelectItem>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="intermediate">Intermediate</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}