"use client";

import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function HackathonFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="w-[160px] bg-white/5 border-white/10 h-10 text-xs">
          <SelectValue placeholder="Domain" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">All Domains</SelectItem>
          <SelectItem value="web3">Web3 & Crypto</SelectItem>
          <SelectItem value="ai">AI & GenML</SelectItem>
          <SelectItem value="fintech">FinTech</SelectItem>
          <SelectItem value="open-innovation">Open Innovation</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-white/5 border-white/10 h-10 text-xs">
          <SelectValue placeholder="Team Size" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-white/10">
          <SelectItem value="all">Any Team Size</SelectItem>
          <SelectItem value="1">Solo Only</SelectItem>
          <SelectItem value="2-4">2-4 People</SelectItem>
          <SelectItem value="large">Large Teams (5+)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}