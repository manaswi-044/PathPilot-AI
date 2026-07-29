import React from "react";

export default function RegistrationStatus({ deadline }: { deadline: string }) {
  // Logic to determine status based on date
  const isClosingSoon = true; // Mock

  return (
    <div className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter border shadow-sm ${
      isClosingSoon 
      ? "bg-rose-500/10 text-rose-500 border-rose-500/20" 
      : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    }`}>
      {isClosingSoon ? "Closing Soon" : "Open"}
    </div>
  );
}