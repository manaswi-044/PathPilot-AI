import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  showLogo?: boolean;
}

export default function AuthHeader({ title, subtitle, showLogo = true }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      {showLogo && (
        <Link href="/" className="inline-flex items-center gap-2 group mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Rocket className="w-7 h-7 text-white" />
          </div>
        </Link>
      )}
      <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
      <p className="text-neutral-400 mt-2 text-sm md:text-base">{subtitle}</p>
    </div>
  );
}