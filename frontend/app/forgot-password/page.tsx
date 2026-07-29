"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowLeft, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

// Importing reusable UI components from Step 3
import PrimaryButton from "@/components/ui/PrimaryButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

/**
 * PathPilot AI - Forgot Password Page
 * 
 * Features:
 * - Premium Glassmorphism UI
 * - Success state handling with animations
 * - Responsive layout
 * - Brand consistent iconography
 */
export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation of API call to send reset link
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#030303] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <AnimatedContainer direction="up" className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {isSubmitted ? "Check your email" : "Reset Password"}
          </h1>
          <p className="text-neutral-400 mt-2">
            {isSubmitted 
              ? `We've sent a password reset link to ${email}`
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>

        <GlassCard className="border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="reset-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleResetRequest}
                className="space-y-6"
              >
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@university.edu"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                    />
                  </div>
                </div>

                <PrimaryButton 
                  type="submit" 
                  className="w-full py-4 text-lg" 
                  isLoading={isLoading}
                >
                  Send Reset Link
                  {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                </PrimaryButton>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  Didn't receive the email? Check your spam folder or try again in 5 minutes.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  Try a different email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>

        {/* Back to Login Link */}
        <div className="text-center mt-8">
          <Link 
            href="/login" 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </AnimatedContainer>
    </div>
  );
}