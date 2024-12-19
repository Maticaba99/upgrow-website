"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ children, className }: CTAButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "group relative overflow-hidden",
        "flex justify-center items-center gap-3",
        "w-full max-w-[480px] h-16",
        "px-8 py-4",
        
        // Background and border
        "bg-[#FF6B00] border border-white/10",
        "rounded-xl",
        
        // Typography
        "text-xl font-bold text-white uppercase tracking-wide",
        
        // Effects
        "shadow-[0_0_20px_rgba(255,107,0,0.3),0_0_2px_rgba(255,107,0,0.5)]",
        "hover:shadow-[0_0_25px_rgba(255,107,0,0.4)]",
        "hover:-translate-y-0.5 active:translate-y-0.5",
        "transition-all duration-200",
        
        // Custom className
        className
      )}
    >
      {children}
      <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 -translate-x-full group-hover:translate-x-full transition-all duration-500" />
    </button>
  );
}