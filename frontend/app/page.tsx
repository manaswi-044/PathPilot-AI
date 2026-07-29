"use client";

import React from "react";
import { motion } from "framer-motion";

// Placeholder imports for components to be built in Step 2
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Statistics from "@/components/home/Statistics";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import BackgroundEffects from "@/components/home/BackgroundEffects";

/**
 * PathPilot AI - Landing Page
 * 
 * Features:
 * - Premium AI Startup Aesthetic (Linear/Vercel style)
 * - Glassmorphism effects
 * - Smooth scroll & Framer Motion reveal animations
 * - Responsive design (Mobile -> Desktop)
 */
export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Shared Background Effects: Gradients, Grids, and Blobs */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section: High-impact value proposition and CTA */}
        <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24">
          <Hero />
        </section>

        {/* Statistics Preview: Trust building with numbers */}
        <section className="py-12 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <Statistics />
        </section>

        {/* Features Section: Bento grid showcasing AI capabilities */}
        <section id="features" className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Powerful Features for Your Future
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Everything you need to navigate your academic journey and professional career in one unified AI-powered platform.
            </p>
          </motion.div>
          <Features />
        </section>

        {/* How It Works: Stepper or visual flow */}
        <section id="how-it-works" className="py-24 relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
          <HowItWorks />
        </section>

        {/* Testimonials: Social Proof */}
        <section id="testimonials" className="py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <Testimonials />
        </section>

        {/* FAQ Section: Handling common queries */}
        <section id="faq" className="py-24 px-4 max-w-3xl mx-auto">
          <FAQ />
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent backdrop-blur-md text-center relative overflow-hidden"
          >
            {/* Animated Glow behind CTA */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to chart your path?
            </h2>
            <p className="text-neutral-300 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of students and professionals using PathPilot AI to accelerate their growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Get Started for Free
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold backdrop-blur-sm">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}