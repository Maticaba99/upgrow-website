"use client";

import { Check } from "lucide-react";
import { gridPattern, radialGradient } from "@/lib/patterns";
import { CardGlow } from "@/components/ui/card-glow";
import { FAQCTAButton } from "./faq/CTAButton";

const deliverables = [
  {
    title: "Custom Marketing Strategy",
    description: "Tailored plan based on your business goals and market analysis"
  },
  {
    title: "Campaign Management",
    description: "Full management of your marketing campaigns across all channels"
  },
  {
    title: "Performance Analytics",
    description: "Detailed monthly reports and real-time performance dashboards"
  },
  {
    title: "Content Creation",
    description: "Professional content creation for all your marketing needs"
  },
  {
    title: "Lead Generation System",
    description: "Complete setup of your lead generation and nurturing system"
  },
  {
    title: "Conversion Optimization",
    description: "Continuous optimization of your conversion rates"
  }
];

export function Services() {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0" style={gridPattern}></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0" style={radialGradient}></div>
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
          Cómo te ayudamos a escalar tu negocio{" "}
          <br/>
            <span className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF6B00]">
              PASO A PASO
            </span>
          </h2>
          <p className="text-l text-gray-300 max-w-2xl mx-auto">
          Un enfoque personalizado para transformar tu negocio y aumentar tus ingresos
          </p>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#ffb11a] to-[#ff8c00] rounded-full mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((item, index) => (
            <CardGlow key={index}>
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ffb11a] blur-md opacity-20 rounded-full" />
                  <div className="relative bg-gradient-to-br from-[#ffb11a] to-[#ff8c00] rounded-full p-2">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ffb11a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardGlow>
          ))}
        </div>
      </div>
      <div className="flex mt-24 justify-center">
          <FAQCTAButton />
      </div>
    </section>
  );
}