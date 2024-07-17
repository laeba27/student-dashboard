"use client";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

export const Seo = ({ progress }) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      strokeDashoffset: 283 - (283 * progress) / 100,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [progress, controls]);

  return (
    <div className="relative w-64 h-44">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>

      <div className="relative w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Outer glow */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
          />
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={controls}
            transform="rotate(-90 50 50)"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F67B1" />
              <stop offset="50%" stopColor="#3FA2F6" />
              <stop offset="100%" stopColor="#96C9F4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white drop-shadow-lg">{`${Math.round(
            progress
          )}%`}</span>
        </div>
      </div>
    </div>
  );
};
