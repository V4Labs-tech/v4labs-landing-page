// app/page.tsx (or pages/index.tsx if not using App Router)
"use client"
import Contact from "@/components/Contact";
import Hero3 from "@/components/Hero3";
import PrincingSection from "@/components/Pricing-section";
import ServicesSection from "@/components/Services-section";

export default function Home() {
  return (
<main
  className="min-h-screen flex flex-col items-center justify-start 
             bg-[linear-gradient(to_right,#ddc8f8_0%,white_30%,white_90%,#AED6FF_100%)]"
>
  <Hero3 />
  <ServicesSection />
  <PrincingSection />
  <Contact />
</main>


  );
}
