"use client";

import { Settings2 } from "lucide-react";

export function SettingsDisplay() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <Settings2 className="w-24 h-24 text-[#FF6B00] animate-spin-slow" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[rgba(255,107,0,0.15)] to-transparent" />
      </div>
    </div>
  );
}