// app/page.tsx (or pages/index.tsx if not using App Router)
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PrincingSection from "@/components/Pricing-section";
import ServicesSection from "@/components/Services-section";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 text-white">
     
      <Hero/>
      <ServicesSection />
      <PrincingSection />
      <Contact/>
      <Footer/>
    </main>
  );
}
