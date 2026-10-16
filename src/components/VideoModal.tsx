"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
}

export function VideoModal({ videoId, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {videoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-forest-950/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-white hover:text-lime-400 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="SRH Solar Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
