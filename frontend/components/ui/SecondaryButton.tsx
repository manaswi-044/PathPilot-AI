"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryButton({ children, className, ...props }: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-md transition-all",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}