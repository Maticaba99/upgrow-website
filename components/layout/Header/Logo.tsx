"use client";

import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-0", className)}>
      <div className="relative">
        <div className="absolute inset-0 bg-[#FF6B00] blur-lg opacity-20" />
        
      </div>
      <img className="w-24" src="/logo.png" />
      <TrendingUp className="w-8 h-8 text-[#FF6B00] relative" />
    </div>
  );
}