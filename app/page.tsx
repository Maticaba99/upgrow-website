"use client";

import { Hero } from "@/components/sections/Hero";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <SuccessStories />
      <Services />
      <Benefits />
      <FAQ />
    </main>
  );
}