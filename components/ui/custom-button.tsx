"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  arrow?: boolean;
  onClick?: () => void;
}

export function CustomButton({ 
  children, 
  className, 
  size = "default",
  arrow = false,
  onClick 
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      size={size}
      className={cn(
        "bg-[#ffb11a] hover:bg-[#ffb11a]/90 text-black font-semibold",
        "transition-all duration-300 relative overflow-hidden",
        "animate-[button-glow_3s_ease-in-out_infinite]",
        "shadow-[0_0_20px_rgba(255,177,26,0.3)]",
        className
      )}
    >
      {children}
      {arrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  );
}