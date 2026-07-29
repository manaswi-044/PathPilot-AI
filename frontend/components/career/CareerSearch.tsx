"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CareerSearchProps {
  value: string;
  onChange: (val: string) => void;
}

export default function CareerSearch({ value, onChange }: CareerSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <Input 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for roles (e.g. AI Engineer, Fullstack...)" 
        className="h-12 pl-11 bg-white/5 border-white/10 focus:ring-blue-500/50 backdrop-blur-md"
      />
    </div>
  );
}