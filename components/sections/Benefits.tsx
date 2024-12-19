"use client";

import { gridPattern, radialGradient } from "@/lib/patterns";
import { BenefitCard } from "./benefits/BenefitCard";
import { RevenueChart } from "./benefits/RevenueChart";
import { IconDisplay } from "./benefits/IconDisplay";
import { SettingsDisplay } from "./benefits/SettingsDisplay";
import { benefits } from "./benefits/benefits-data";
import { FAQCTAButton } from "./faq/CTAButton";

export function Benefits() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#0A0A0A]">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-50" 
        style={{
          ...gridPattern,
          backgroundImage: `linear-gradient(to right, rgba(255,107,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,107,0,0.1) 1px, transparent 1px)`
        }}
      />
      
      {/* Radial Gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          ...radialGradient,
          background: `radial-gradient(circle at center, rgba(255,107,0,0.15) 0%, transparent 70%)`
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF6B00]">
            AL FINAL DEL PROGRAMA TENDRÁS
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              value={benefit.value}
              description={benefit.description}
            >
              {benefit.type === 'chart' && <RevenueChart />}
              {benefit.type === 'icon' && <IconDisplay icon={benefit.icon} />}
              {benefit.type === 'settings' && <SettingsDisplay />}
            </BenefitCard>
          ))}
        </div>
      </div>
      <div className="flex mt-24 justify-center">
          <FAQCTAButton />
      </div>
    </section>
  );
}