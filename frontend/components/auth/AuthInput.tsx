import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export default function AuthInput({ label, icon: Icon, error, className, ...props }: AuthInputProps) {
  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-neutral-300 ml-1">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
        <input
          className={cn(
            "w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-neutral-600",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all",
            error && "border-red-500/50 focus:ring-red-500/20 focus:border-red-500/50",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
    </div>
  );
}