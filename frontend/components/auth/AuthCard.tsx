"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <GlassCard 
        hoverEffect={false} 
        className={cn("p-8 md:p-10 border-white/10 shadow-2xl backdrop-blur-2xl", className)}
      >
        {children}
      </GlassCard>
    </motion.div>
  );
}