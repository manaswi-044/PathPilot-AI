"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

export default function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={`h-2 w-full bg-white/5 rounded-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </div>
  );
}