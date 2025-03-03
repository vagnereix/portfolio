"use client";

import { cn } from "@/lib/utils";
import { Suspense, lazy } from "react";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return <Spline scene={scene} className={cn("", className)} />;
}
