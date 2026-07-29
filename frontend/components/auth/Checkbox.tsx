import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
}

export default function Checkbox({ id, checked, onChange, label }: CheckboxProps) {
  return (
    <div className="flex items-start gap-3 select-none cursor-pointer" onClick={() => onChange(!checked)}>
      <div className={cn(
        "mt-0.5 w-5 h-5 shrink-0 rounded border flex items-center justify-center transition-all duration-200",
        checked ? "bg-blue-600 border-blue-600" : "bg-white/5 border-white/10"
      )}>
        {checked && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
      </div>
      <label htmlFor={id} className="text-sm text-neutral-400 leading-tight cursor-pointer">
        {label}
      </label>
    </div>
  );
}