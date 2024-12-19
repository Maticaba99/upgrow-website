"use client";

import { FAQItem } from './faq/FAQItem';
import { FAQCTAButton } from './faq/CTAButton';
import { faqData } from './faq/faq-data';

export function FAQ() {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Large FAQ Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[180px] font-black text-[rgba(255,177,26,0.03)] transform -rotate-12">
          FAQ
        </span>
      </div>

      <div className="container mx-auto max-w-[900px] relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FF6B00]">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#ffb11a] to-[#ff8c00] rounded-full" />
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4 mb-16">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <FAQCTAButton />
        </div>
      </div>
    </section>
  );
}