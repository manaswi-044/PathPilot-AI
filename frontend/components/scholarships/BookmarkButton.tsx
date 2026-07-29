"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookmarkButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-xl h-10 w-10 border border-white/5 transition-colors ${
          isFavorite ? "bg-rose-500/20 text-rose-500 border-rose-500/30" : "bg-white/5 text-slate-400 hover:text-white"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
        }}
      >
        <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
      </Button>
    </motion.div>
  );
}