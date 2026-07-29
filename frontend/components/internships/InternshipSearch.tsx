import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function InternshipSearch() {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <Input 
        placeholder="Search internships..." 
        className="pl-10 bg-white/5 border-white/10 h-10 focus:ring-purple-500/50"
      />
    </div>
  );
}