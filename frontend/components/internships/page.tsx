"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Sparkles,
  Filter,
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
import { Badge } from "@/components/ui/badge";

// Internal Components (To be generated in Step 5)
import InternshipCard from "@/components/internships/InternshipCard";
import InternshipFilters from "@/components/internships/InternshipFilters";

// Mock Data (To be generated in Step 10)
import internshipData from "@/lib/mock-data/internships.json";

export default function InternshipHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  // Filtering Logic
  const filteredInternships = useMemo(() => {
    return internshipData.filter((internship) => {
      const matchesSearch = 
        internship.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        internship.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLocation = locationFilter === "all" || 
        (locationFilter === "remote" ? internship.isRemote : internship.location.toLowerCase().includes(locationFilter.toLowerCase()));
      
      const matchesType = typeFilter === "all" || 
        (typeFilter === "paid" ? internship.stipend.amount > 0 : true);

      const matchesRole = roleFilter === "all" || internship.category === roleFilter;

      return matchesSearch && matchesLocation && matchesType && matchesRole;
    });
  }, [searchQuery, locationFilter, typeFilter, roleFilter]);

  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 pb-20">
      {/* Decorative Gradient */}
      <div className="fixed top-0 left-0 w-full h-[400px] bg-gradient-to-b from-purple-600/10 to-transparent pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-purple-400 font-medium mb-3"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm uppercase tracking-widest">Opportunity Finder</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Internship Hub
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Land your dream role with AI-matched internships tailored to your skills and career trajectory.
          </p>
        </div>

        {/* Search and Filters Section */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input 
                placeholder="Search by role, company, or tech stack..." 
                className="pl-10 bg-white/5 border-white/10 focus:ring-purple-500/50 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px] bg-white/5 border-white/10 h-12">
                  <SelectValue placeholder="Career Goal" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Fullstack">Fullstack</SelectItem>
                  <SelectItem value="AI/ML">AI/ML</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[150px] bg-white/5 border-white/10 h-12">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10">
                  <SelectItem value="all">Everywhere</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 py-2">
             <span className="text-xs text-slate-500 font-medium uppercase mr-2">Quick Filters:</span>
             <Button 
                variant="outline" 
                size="sm" 
                className={`rounded-full border-white/10 text-xs ${typeFilter === 'paid' ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-white/5'}`}
                onClick={() => setTypeFilter(typeFilter === 'paid' ? 'all' : 'paid')}
              >
                <DollarSign className="w-3 h-3 mr-1" /> Paid Only
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full bg-white/5 border-white/10 text-xs"
              >
                <Clock className="w-3 h-3 mr-1" /> Under 3 Months
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full bg-white/5 border-white/10 text-xs"
              >
                <Briefcase className="w-3 h-3 mr-1" /> Experience Level
              </Button>
              
              {(searchQuery || roleFilter !== 'all' || locationFilter !== 'all' || typeFilter !== 'all') && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-500 hover:text-white text-xs"
                  onClick={() => {
                    setSearchQuery("");
                    setRoleFilter("all");
                    setLocationFilter("all");
                    setTypeFilter("all");
                  }}
                >
                  <X className="w-3 h-3 mr-1" /> Clear All
                </Button>
              )}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-medium text-slate-400">
            Found <span className="text-purple-400">{filteredInternships.length}</span> matching opportunities
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Sort by:</span>
            <select className="bg-transparent text-xs text-slate-300 border-none focus:ring-0 cursor-pointer">
              <option>Relevance</option>
              <option>Newest</option>
              <option>Highest Stipend</option>
            </select>
          </div>
        </div>

        {/* Internship Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <InternshipCard internship={internship} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredInternships.length === 0 && (
          <div className="mt-20 py-20 text-center glass-card rounded-3xl border border-dashed border-white/10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4">
              <Search className="w-8 h-8 text-purple-500/50" />
            </div>
            <h3 className="text-xl font-semibold text-white">No internships found</h3>
            <p className="text-slate-400 mt-2 max-w-sm mx-auto">
              Try adjusting your filters or search terms. We'll notify you when new opportunities match your profile.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}