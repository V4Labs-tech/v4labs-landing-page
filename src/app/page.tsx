// app/page.tsx (or pages/index.tsx if not using App Router)
"use client"
import Contact from "@/components/Contact";
import Hero2 from "@/components/Hero2";
import PrincingSection from "@/components/Pricing-section";
import ServicesSection from "@/components/Services-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start ">
      <Hero2 />
      {/* <ServicesSection />
      <PrincingSection />
      <Contact /> */}
    </main>
  );
}
