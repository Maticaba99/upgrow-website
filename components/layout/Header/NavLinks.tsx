"use client";

import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#success-stories", label: "Success Stories" },
  { href: "#benefits", label: "Benefits" },
  { href: "#faq", label: "FAQ" },
];

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className }: NavLinksProps) {
  return (
    <nav className={cn("hidden md:flex items-center gap-8", className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}