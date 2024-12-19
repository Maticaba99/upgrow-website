"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "group relative transition-all duration-300",
        "bg-gradient-to-b from-[rgba(255,177,26,0.1)] to-transparent",
        "hover:from-[rgba(255,177,26,0.15)] hover:to-[rgba(255,177,26,0.05)]",
        "border border-[rgba(255,177,26,0.2)] rounded-xl cursor-pointer",
        isOpen && "from-[rgba(255,177,26,0.15)] to-[rgba(255,177,26,0.05)]"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="px-6 py-5 flex items-center justify-between">
        <h3 className="text-xl font-medium text-white group-hover:text-[#ffb11a] transition-colors">
          {question}
        </h3>
        <ChevronDown 
          className={cn(
            "w-6 h-6 text-[#ffb11a] transition-all duration-300",
            isOpen && "transform rotate-180"
          )}
        />
      </div>
      
      <div 
        className={cn(
          "px-6 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 -translate-x-full group-hover:translate-x-full transition-all duration-500" />
    </div>
  );
}