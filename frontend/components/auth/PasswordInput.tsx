"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function PasswordInput({ label, error, className, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-neutral-300 ml-1">{label}</label>
      <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
        <input
          type={show ? "text" : "password"}
          className={cn(
            "w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-neutral-600",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all",
            error && "border-red-500/50 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
    </div>
  );
}