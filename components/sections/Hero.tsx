"use client";

import { gridPattern, radialGradient } from "@/lib/patterns";
import { FAQCTAButton } from "./faq/CTAButton";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0" style={gridPattern}></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0" style={radialGradient}></div>
      
      <div className="container max-w-6xl relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          CÓMO ESCALAR
          {" "}
            <span className="font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r to-white from-[#FF6B00]">TU NEGOCIO ONLINE</span> 
            <br/>
            EN 90 DÍAS
          </h1>
          <p className="text-l mb-8 text-gray-300 max-w-3xl mx-auto">
          Deja de improvisar y descubrí el camino correcto para hacer crecer tu negocio.
          <br/>
          Te ayudamos con un enfoque personalizado que se adapta a tus necesidades específicas
          </p>
          
          {/* Video Container with Enhanced Border Effect */}
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* Additional glow effects */}
            <div className="absolute -inset-4 bg-[#ffb11a] opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -inset-8 bg-[#ffb11a] opacity-10 blur-3xl rounded-full animate-pulse"></div>
            
            <div className="video-border relative">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1007071154?autoplay=0&title=0&byline=0&portrait=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
           <div className="flex justify-center">
                    <FAQCTAButton />
           </div>
        </div>
      </div>
    </section>
  );
}