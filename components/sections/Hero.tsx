"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { gridPattern, radialGradient } from "@/lib/patterns";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0" style={gridPattern}></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0" style={radialGradient}></div>
      
      <div className="container max-w-6xl relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Discover How We Help Businesses{" "}
            <span className="text-[#ffb11a]">10X Their Revenue</span> in 12 Months
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Watch this short video to learn our proven system that has helped over 500+ businesses scale their operations
          </p>
          
          {/* Video Container with Enhanced Border Effect */}
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Additional glow effects */}
            <div className="absolute -inset-4 bg-[#ffb11a] opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -inset-8 bg-[#ffb11a] opacity-10 blur-3xl rounded-full animate-pulse"></div>
            
            <div className="video-border relative">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/824804225?autoplay=0&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <CustomButton size="lg" arrow>
            Start Your Journey Now
          </CustomButton>
        </div>
      </div>
    </section>
  );
}