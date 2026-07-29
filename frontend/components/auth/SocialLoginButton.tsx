import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  provider: string;
}

export default function SocialLoginButton({ icon: Icon, provider, className, ...props }: SocialLoginButtonProps) {
  return (
    <button
      className={cn(
        "w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-white/10",
        "bg-white/5 hover:bg-white/10 text-white font-medium transition-all group",
        className
      )}
      {...props}
    >
      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
      <span>Continue with {provider}</span>
    </button>
  );
}