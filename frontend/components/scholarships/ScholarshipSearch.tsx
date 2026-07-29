import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ScholarshipSearch() {
  return (
    <div className="relative w-full max-w-lg">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <Input 
        placeholder="Search scholarships (e.g. Reliance Foundation, HDFC...)" 
        className="pl-10 bg-white/5 border-white/10 h-11 focus:ring-emerald-500/50"
      />
    </div>
  );
}