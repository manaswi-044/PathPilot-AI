"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  /** Alias for hoverEffect, used by DashboardCard. */
  gradientHover?: boolean;
  id?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
  gradientHover,
  id,
  onClick,
}: GlassCardProps) {
  const shouldHover = gradientHover ?? hoverEffect;
  return (
    <motion.div
      id={id}
      onClick={onClick}
      whileHover={shouldHover ? { y: -5, borderColor: "rgba(255, 255, 255, 0.2)" } : {}}
      className={cn(
        "p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl",
        onClick ? "cursor-pointer" : "",
        className
      )}
    >
      {children}
    </motion.div>
  );
}