"use client";

import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full h-9 w-9 border border-white/5 ${
          isBookmarked ? "bg-purple-500/20 text-purple-400 border-purple-500/30" : "bg-white/5 text-slate-400"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsBookmarked(!isBookmarked);
        }}
      >
        <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
      </Button>
    </motion.div>
  );
}