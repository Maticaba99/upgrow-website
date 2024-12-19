"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { colors } from "@/lib/colors";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  children: React.ReactNode;
}

export function BenefitCard({ 
  icon: Icon, 
  title, 
  value, 
  description, 
  children 
}: BenefitCardProps) {
  return (
    <Card className="relative p-8 bg-gradient-to-b from-[#1A1A1A] to-[#121212] border border-[#262626] rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[rgba(255,107,0,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <Icon className="h-8 w-8 text-[#FF6B00]" />

        <div className="mt-6">
          <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF8A33]">
            {value}
          </span>
        </div>

        <div className="h-[200px] my-8">
          {children}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#A3A3A3] text-center leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}