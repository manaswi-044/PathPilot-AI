import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}