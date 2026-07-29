"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * PathPilot AI - Enhanced Navbar
 * 
 * Features:
 * - Sticky Glassmorphism with scroll detection
 * - Framer Motion animated Mobile Hamburger Menu
 * - Smooth scrolling for anchor links
 * - Premium SaaS design with gradient accents
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-[100] transition-all duration-500",
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-5 h-5 text-white fill-white/20" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              PathPilot <span className="text-blue-500">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/login" 
              className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-[#030303] flex flex-col pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-12 flex flex-col gap-4">
              <Link 
                href="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-2xl border border-white/10 text-center text-lg font-semibold text-white"
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-2xl bg-blue-600 text-center text-lg font-bold text-white flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
            </div>

            {/* Background Accent for Mobile Menu */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}