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
       "elative p-8 bg-gradient-to-b from-[#1A1A1A] to-[#121212] border border-[#262626] rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 group",
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