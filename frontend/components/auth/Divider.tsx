import React from "react";

export default function Divider({ text = "or continue with" }: { text?: string }) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-white/10"></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-[#0c0c0c] px-4 text-neutral-500 font-medium tracking-widest">
          {text}
        </span>
      </div>
    </div>
  );
}