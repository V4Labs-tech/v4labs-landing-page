"use client";

import { Globe, Smartphone, Wrench, Bot } from "lucide-react";
import StepsSection from "../components/ui/Steps-gridItem";
import { DotBackground } from "./ui/Dotted-Background";
import { GradientCard } from "./ui/Gradient-card";
import Link from "next/link";
import { ServicesBento } from "./Services-bento-grid";

const services = [
  {
    title: "Websites & Web Applications",
    icon: Globe,
    description: "Fast, scalable web solutions.",
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    description: "iOS & Android apps for your users.",
  },
  {
    title: "Support & Updates",
    icon: Wrench,
    description: "Continuous improvements & fixes.",
  },
  {
    title: "AI Tools & Agents",
    icon: Bot,
    description: "Custom AI to automate and innovate.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <DotBackground>
        <section className="w-full py-14 px-6 flex flex-col items-center z-50">
          {/* Intro Text */}
          <p className="text-center text-2xl max-w-4xl text-gray-400">
            We turn your ideas into launch-ready MVPs in just weeks, not months.
            Affordable, scalable, and fully managed — so you can grow without
            worrying about tech.
          </p>

          {/* Steps Section */}
          <h2 className="m-10 text-2xl font-semibold text-center">
            From Idea to MVP — In Just 3 Weeks
          </h2>

          <div className="mt-8 flex flex-col justify-around md:flex-row gap-10 max-w-5xl w-full">
            {/* Steps List */}
            <StepsSection />

            {/* Right Image/Video Placeholder */}
            {/* <div className="flex-1 rounded-xl h-80 relative overflow-hidden border border-[#19E09A]">
         
          <div className="absolute inset-0 bg-[#DBC2F4]/10 flex items-center justify-center text-[#DBC2F4]">
            Video / Image
          </div>
        </div> */}

            {/* <div className="flex-1 bg-pink-300 -mt-14">
                      <GradientCard/>
                      
                  </div>
                   */}
            <div className="w-2/4 flex flex-col items-center relative">
              <div className="m-auto rounded-2xl p-8 text-white bg-black relative overflow-hidden">
                {/* Radial gradient from bottom-right using same colors */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(236,72,153,0.5)_0%,rgba(168,85,247,0.4)_20%,transparent_80%)] pointer-events-none"></div>

                <p className="text-lg font-medium leading-relaxed mb-6 relative z-10">
                  Our 5-step process is built for momentum. We keep it lean,
                  focused, and validation-ready so you can launch without
                  delays.
                </p>
              </div>

              <Link
                href="#"
                className="bg-primary text-gray-800 px-6 py-3 rounded-full text-md font-semibold shadow-lg hover:shadow-xl transition absolute left-2 bottom-20"
              >
                Book a call
              </Link>
            </div>
          </div>
        </section>
      </DotBackground>

      <div className="w-full">
      <div className="min-h-screen w-full px-40 pb-20">
  <h1 className="text-2xl font-bold text-center">Our Services</h1>
  <div className="w-full min-h-[100vh] mt-10 bg-black relative overflow-hidden">
    {/* Radial gradient overlay with animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,151,241,.2)_0%,transparent_80%)]"></div>

    {/* Content */}
    <div className="relative z-10 h-full">
      {/* Top Row */}
      <div className="h-[50vh] w-full flex justify-around gap-6 mb-6 px-6">
        {/* Web Development */}
        <div className="flex-1/2 backdrop-blur-md bg-blue-400/10 rounded-xl shadow-lg p-6 flex flex-col justify-around">
          <h2 className="text-2xl font-semibold text-white mb-3 text-center">Web Development</h2>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Custom websites & web apps</li>
            <li>Responsive & SEO-friendly designs</li>
            <li>Performance optimized</li>
          </ul>
        </div>

        {/* Mobile App Development */}
        <div className="flex-1/3 backdrop-blur-md bg-primary/10 rounded-xl shadow-lg p-6 flex flex-col justify-around">
          <h2 className="text-xl font-semibold text-white mb-3 text-center">Mobile App Development</h2>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Android & iOS apps</li>
            <li>Cross-platform solutions</li>
            <li>User-friendly & high-performing</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="h-[50vh] w-full flex justify-around gap-6 px-6">
        {/* AI Tools & Agents */}
        <div className="flex-1/3 backdrop-blur-md bg-red-400/10 rounded-xl shadow-lg p-6 flex flex-col justify-around">
          <h2 className="text-xl font-semibold text-white mb-3 text-center">AI Tools & Agents</h2>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Custom AI-powered solutions</li>
            <li>Chatbots & automation tools</li>
            <li>Integration with your workflows</li>
          </ul>
        </div>

        {/* Support & Maintenance */}
        <div className="flex-1/2 backdrop-blur-md bg-purple-400/10 rounded-xl shadow-lg p-6 flex flex-col justify-around">
          <h2 className="text-xl font-semibold text-white mb-3 text-center">Support & Maintenance</h2>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Regular updates & bug fixes</li>
            <li>Performance monitoring</li>
            <li>24/7 technical assistance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
