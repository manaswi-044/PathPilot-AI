"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rocket, 
  User, 
  School, 
  BookOpen, 
  Calendar, 
  Mail, 
  Lock, 
  Chrome, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

// Importing reusable UI components from Step 3
import PrimaryButton from "@/components/ui/PrimaryButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

/**
 * PathPilot AI - Signup Page
 * 
 * Features:
 * - Comprehensive onboarding fields (Academic & Account)
 * - Premium Glassmorphism UI
 * - Responsive grid for desktop readability
 * - Animated form entry
 */
export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsLoading(true);
    // Simulation of API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#030303] flex items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <AnimatedContainer direction="up" className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white tracking-tight">Create your account</h1>
          <p className="text-neutral-400 mt-2">Start your AI-powered academic journey today</p>
        </div>

        <GlassCard className="border-white/10 shadow-2xl backdrop-blur-2xl p-8">
          <form onSubmit={handleSignup} className="space-y-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>
            </div>

            {/* Academic Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">College / University</label>
                <div className="relative group">
                  <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="University Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">Branch / Major</label>
                <div className="relative group">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    required
                    placeholder="Computer Science"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Year & Email Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-medium text-neutral-300 ml-1">Current Year</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all">
                    <option className="bg-[#0c0c0c]">1st Year</option>
                    <option className="bg-[#0c0c0c]">2nd Year</option>
                    <option className="bg-[#0c0c0c]">3rd Year</option>
                    <option className="bg-[#0c0c0c]">4th Year</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Passwords Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300 ml-1">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 ml-1">
              <button 
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  agreed ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/10"
                }`}
              >
                {agreed && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
              <label className="text-sm text-neutral-400 leading-tight">
                I agree to the <Link href="#" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit & Google */}
            <div className="space-y-4 pt-2">
              <PrimaryButton 
                type="submit" 
                className="w-full py-4 text-lg" 
                isLoading={isLoading}
                disabled={!agreed}
              >
                Create Account
                {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
              </PrimaryButton>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all"
              >
                <Chrome className="w-5 h-5 text-blue-400" />
                Continue with Google
              </button>
            </div>
          </form>
        </GlassCard>

        {/* Footer Link */}
        <p className="text-center mt-8 text-neutral-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            Log in
          </Link>
        </p>
      </AnimatedContainer>
    </div>
  );
}