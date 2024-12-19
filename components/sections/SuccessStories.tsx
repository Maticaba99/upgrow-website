"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { gridPattern, radialGradient } from "@/lib/patterns";

const stories = [
  {
    name: "Jorge Salaberry",
    company: "Salaberry",
    username: "salaberryrepuestos",
    revenue: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    videoThumbnail: "/salaberry-success.png",
    videoUrl: "https://player.vimeo.com/video/1040623634",
    title: "De 0 a +200k de views en 3 meses",
    description: "Utilizamos estrategias de contenido para hacer crecer su redes sociales para que pueda vender sus productos.",
    socialStats: {
      posts: "1.2K",
      followers: "45.6K",
      following: "892"
    }
  },
/*   {
    name: "Sarah Johnson",
    company: "Digital Dynamics",
    revenue: "$1.8M",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    videoThumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=1280&fit=crop",
    videoUrl: "https://player.vimeo.com/video/824804225",
    title: "Breaking Through the 7-Figure Ceiling",
    description: "Sarah shares how she implemented our systematic approach to achieve consistent growth and breakthrough the million-dollar barrier.",
    socialStats: {
      posts: "2.3K",
      followers: "38.9K",
      following: "1.1K"
    }
  } */
];

export function SuccessStories() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0" style={gridPattern}></div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0" style={radialGradient}></div>
      
      <div className="container mx-auto relative">
        <h2 className="text-5xl font-black text-center mb-16">
          RESULTADOS DE{" "}
          <span className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r to-white from-[#FF6B00]">
            NUESTROS CLIENTES
          </span>
        </h2>
        
        <div className="flex flex-col gap-8 items-center">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="group flex flex-col md:flex-row bg-[#0A0A0A] rounded-2xl p-6 max-w-[720px] w-full overflow-hidden border border-white/5 hover:border-[#ffb11a]/20 transition-colors duration-300"
              style={{
                boxShadow: "0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,177,26,0.05)"
              }}
            >
              {/* Left Side - Video Thumbnail */}
              <div className="md:w-[45%] relative mb-6 md:mb-0">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black">
                  <Image
                    src={story.videoThumbnail}
                    alt={`${story.name}'s Success Story`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <button className="w-12 h-12 rounded-full bg-[#ffb11a] flex items-center justify-center hover:bg-[#ff8c00] transition-colors">
                      <Play className="w-6 h-6 text-black" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm py-1 px-2">
                    12:34
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-[55%] md:pl-6 flex flex-col">
                <div className="text-gray-400 flex items-center">
                  <span>{story.name}</span>
                  <span className="mx-2">|</span>
                  <span>{story.company}</span>
                </div>
                
                <h3 className="text-2xl font-semibold mt-2">
                  <span className="bg-[#FF6B00]/20 px-2 py-1 rounded text-white">
                    {story.title}
                  </span>
                </h3>
                
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Social Media Card */}
                <div className="mt-6 bg-black/40 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-gray-400">@{story.username}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{story.socialStats.posts} posts</span>
                    <span>{story.socialStats.followers} followers</span>
                    <span>{story.socialStats.following} following</span>
                  </div>
                </div>

                {/* Metrics Card */}
                {story.revenue && <div className="mt-4 bg-black/40 rounded-xl p-4 border border-white/5">
                  <div className="text-sm text-gray-400">Revenue (USD)</div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {story.revenue}
                  </div>
                </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}