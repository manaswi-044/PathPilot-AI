"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming standard shadcn utility

interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export default function PrimaryButton({ children, className, isLoading, ...props }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all",
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : children}
      </span>
    </motion.button>
  );
}