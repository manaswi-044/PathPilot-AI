import React from "react";
import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBadge({ children, className }: GradientBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase",
      "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400",
      className
    )}>
      {children}
    </span>
  );
}