"use client";
import { ReactLenis } from "lenis/react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function SmoothScrollingProvider({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
    {children}
    </ReactLenis>
  );
}
