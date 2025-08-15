"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

/**
 * A component to highlight text with a rounded, animated background reveal.
 * The animation scales a rounded element from left to right, making the
 * reveal follow the border-radius.
 */
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    // The parent wrapper provides the positioning context and padding.
    // UPDATED: Increased horizontal padding from px-2 to px-3 for more space.
    <span className="relative inline-block px-3 pb-1">
      {/* This motion.span is the animated background. It's positioned
          absolutely behind the text and scales from left to right. */}
      <motion.span
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.8, // Slightly longer duration for a smoother effect
          ease: [0.22, 1, 0.36, 1], // A more expressive ease-out curve
        }}
        style={{
          // Ensures the scaling happens from the left side
          transformOrigin: "left",
        }}
        className={cn(
          // Base styles for the background element
          "absolute -z-10 h-full w-[90%] rounded-lg",
          // Green gradient for the background
          "bg-gradient-to-r from-primary to-green-400",
          className
        )}
      />
      {/* The text content sits on top of the animated background */}
      <span className="text-white">{children}</span>
    </span>
  );
};
