"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface ToastProps {
  isVisible: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({ isVisible, message, type = "success", onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-[200] w-full max-w-sm"
        >
          <div className={`mx-4 p-4 rounded-2xl border flex items-center gap-4 shadow-2xl backdrop-blur-xl ${
            type === "success" 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}>
            {type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
            <p className="text-sm font-medium flex-1">{message}</p>
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-md transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}