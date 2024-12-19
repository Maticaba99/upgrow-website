"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b",
        isScrolled
          ? "bg-black/80 border-white/10"
          : "bg-transparent border-transparent"
      )}
      style={{
        boxShadow: isScrolled
          ? "0 4px 30px rgba(255, 107, 0, 0.1)"
          : "none"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          <Logo />
        </div>
      </div>
    </header>
  );
}