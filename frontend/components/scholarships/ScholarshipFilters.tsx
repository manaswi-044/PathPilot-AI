"use client";

import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function ScholarshipFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <Select>
        <SelectTrigger className="w-[160px] bg-white/5 border-white/10 h-10 text-xs">
          <SelectValue placeholder="Academic Year" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="1">1st Year</SelectItem>
          <SelectItem value="2">2nd Year</SelectItem>
          <SelectItem value="3">3rd Year</SelectItem>
          <SelectItem value="4">4th Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}