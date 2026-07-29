"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  GraduationCap, 
  SlidersHorizontal, 
  Sparkles,
  Info,
  X
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

// Internal Components (To be generated in Step 7)
import ScholarshipCard from "@/components/scholarships/ScholarshipCard";

// Mock Data (To be generated in Step 10)
import scholarshipData from "@/lib/mock-data/scholarships.json";

// Import shared interface from frontend/types once available
// import { Scholarship } from "@/types/scholarship";

export default function ScholarshipFinderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Detailed Filters
  const [filters, setFilters] = useState({
    state: "all",
    gender: "all",
    category: "all",
    income: "all",
    branch: "all",
    year: "all",
    cgpa: "all"
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      state: "all",
      gender: "all",
      category: "all",
      income: "all",
      branch: "all",
      year: "all",
      cgpa: "all"
    });
    setSearchQuery("");
  };

  // Filtering Logic
  const filteredScholarships = useMemo(() => {
    return scholarshipData.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.provider.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = filters.state === "all" || item.state === filters.state;
      const matchesGender = filters.gender === "all" || item.gender === filters.gender || item.gender === "Any";
      const matchesCategory = filters.category === "all" || item.category === filters.category;
      // Note: Income, branch, year, cgpa logic would be more complex in production
      // For mock purposes, we check if the key exists or is "all"
      
      return matchesSearch && matchesState && matchesGender && matchesCategory;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 pb-20">
      {/* Premium Ambient Background */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header Section */}
        <header className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-400 font-medium mb-3"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">AI Scholarship Matching</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Scholarship Finder
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            PathPilot AI scans thousands of grants to find financial aid that matches your unique academic and demographic profile.
          </p>
        </header>

        {/* Multi-Filter Dashboard */}
        <section className="glass-card p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl mb-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6 text-slate-300 font-semibold">
            <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
            <h3>Personalized Filters</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Search scholarships, providers, or fields..." 
                className="pl-10 bg-white/5 border-white/10 focus:ring-emerald-500/50 h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* State Filter */}
            <Select value={filters.state} onValueChange={(v) => handleFilterChange("state", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={filters.category} onValueChange={(v) => handleFilterChange("category", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="OBC">OBC</SelectItem>
                <SelectItem value="SC">SC</SelectItem>
                <SelectItem value="ST">ST</SelectItem>
                <SelectItem value="Minority">Minority</SelectItem>
              </SelectContent>
            </Select>

            {/* Branch Filter */}
            <Select value={filters.branch} onValueChange={(v) => handleFilterChange("branch", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Branch/Stream" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">All Streams</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Medical">Medical</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
              </SelectContent>
            </Select>

            {/* Income Filter */}
            <Select value={filters.income} onValueChange={(v) => handleFilterChange("income", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Annual Income" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">Any Income</SelectItem>
                <SelectItem value="lt2l">Below 2 Lakhs</SelectItem>
                <SelectItem value="lt5l">Below 5 Lakhs</SelectItem>
                <SelectItem value="lt8l">Below 8 Lakhs</SelectItem>
              </SelectContent>
            </Select>

            {/* Gender Filter */}
            <Select value={filters.gender} onValueChange={(v) => handleFilterChange("gender", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            {/* CGPA Filter */}
            <Select value={filters.cgpa} onValueChange={(v) => handleFilterChange("cgpa", v)}>
              <SelectTrigger className="bg-white/5 border-white/10 h-11">
                <SelectValue placeholder="Minimum CGPA" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10">
                <SelectItem value="all">Any CGPA</SelectItem>
                <SelectItem value="7">7.0+</SelectItem>
                <SelectItem value="8">8.0+</SelectItem>
                <SelectItem value="9">9.0+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
            <p className="text-xs text-slate-500 italic flex items-center gap-1">
              <Info className="w-3 h-3" />
              Matches are based on your profile and current academic year.
            </p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-400 hover:text-white"
              onClick={clearFilters}
            >
              <X className="w-4 h-4 mr-1" /> Reset Filters
            </Button>
          </div>
        </section>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-medium text-slate-400">
            Available Opportunities: <span className="text-emerald-400 font-bold">{filteredScholarships.length}</span>
          </h2>
        </div>

        {/* Scholarship Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ScholarshipCard scholarship={scholarship} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-24 bg-white/5 border border-dashed border-white/10 rounded-3xl">
            <GraduationCap className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white">No scholarships found</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto">
              We couldn't find matches for these specific filters. Try widening your criteria or searching for different keywords.
            </p>
            <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700" onClick={clearFilters}>
              Reset Search
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}