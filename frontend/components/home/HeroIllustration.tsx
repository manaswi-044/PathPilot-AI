"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      {/* Center AI Core */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 m-auto w-48 h-48 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl shadow-[0_0_80px_rgba(37,99,235,0.4)] z-10"
      />

      {/* Orbital Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-white/10 rounded-full"
          style={{ margin: `${i * 40}px` }}
        />
      ))}

      {/* Floating Nodes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white]"
          style={{ 
            top: `${20 + i * 20}%`, 
            left: `${15 + (i % 2) * 60}%` 
          }}
        />
      ))}
    </div>
  );
}