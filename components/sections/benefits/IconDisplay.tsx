"use client";

import { LucideIcon } from "lucide-react";

interface IconDisplayProps {
  icon: LucideIcon;
}

export function IconDisplay({ icon: Icon }: IconDisplayProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-[#FF6B00] rounded-full opacity-10 animate-pulse" />
        <div className="absolute inset-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] rounded-full opacity-20" />
        <div className="absolute inset-8 flex items-center justify-center">
          <Icon className="w-16 h-16 text-[#FF6B00]" />
        </div>
      </div>
    </div>
  );
}