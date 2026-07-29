"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookmarkButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-lg h-10 w-10 border border-white/5 ${
          isActive ? "bg-amber-500/20 text-amber-500 border-amber-500/30" : "bg-white/5 text-slate-500 hover:text-white"
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <Star className={`w-4 h-4 ${isActive ? "fill-current" : ""}`} />
      </Button>
    </motion.div>
  );
}