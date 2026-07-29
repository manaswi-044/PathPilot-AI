"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Trophy, 
  Users, 
  Globe, 
  Zap, 
  Calendar,
  Rocket
} from "lucide-react";

// shadcn/ui components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Internal Components (To be generated in Step 9)
import HackathonCard from "@/components/hackathons/HackathonCard";

// Mock Data
import hackathonData from "@/lib/mock-data/hackathons.json";

export default function HackathonHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modeFilter, setModeFilter] = useState("all");

  const filteredHackathons = useMemo(() => {
    return hackathonData.filter((hack) => {
      const matchesSearch = hack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hack.organizer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMode = modeFilter === "all" || hack.mode.toLowerCase() === modeFilter.toLowerCase();
      
      return matchesSearch && matchesMode;
    });
  }, [searchQuery, modeFilter]);

  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 pb-20">
      {/* Background Gradient */}
      <div className="fixed top-0 right-0 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Build the Future</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Hackathon Hub
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Collaborate, innovate, and win. Find the world's best technical challenges tailored to your tech stack.
          </p>
        </div>

        {/* Sticky Search & Filter Bar */}
        <div className="sticky top-6 z-40 mb-12">
          <div className="glass-card p-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Search hackathons, themes, or organizers..." 
                className="pl-11 bg-white/5 border-white/5 focus:border-blue-500/50 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={modeFilter} onValueChange={setModeFilter}>
                <SelectTrigger className="w-[140px] bg-white/5 border-white/10 h-12">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="all">All Modes</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-6">
                <Rocket className="w-4 h-4 mr-2" /> Find Matches
              </Button>
            </div>
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredHackathons.map((hack, index) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <HackathonCard hackathon={hack} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredHackathons.length === 0 && (
          <div className="mt-20 py-20 text-center border border-dashed border-white/10 rounded-3xl">
            <Trophy className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-300">No hackathons found</h3>
            <p className="text-slate-500">Try broadening your search criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}