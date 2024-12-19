"use client";

import { cn } from "@/lib/utils";

interface CardGlowProps {
  children: React.ReactNode;
  className?: string;
}

export function CardGlow({ children, className }: CardGlowProps) {
  return (
    <div 
      className={cn(
        "relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)]",
        "rounded-2xl p-6 transition-all duration-200",
        "hover:transform hover:-translate-y-1",
        className
      )}
      style={{
        boxShadow: "0 0 20px rgba(79, 169, 169, 0.15)"
      }}
    >
      {children}
    </div>
  );
}