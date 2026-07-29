import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ValidationMessageProps {
  message: string;
  type: "error" | "success";
}

export default function ValidationMessage({ message, type }: ValidationMessageProps) {
  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
      type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
    }`}>
      {type === "error" ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
      {message}
    </div>
  );
}