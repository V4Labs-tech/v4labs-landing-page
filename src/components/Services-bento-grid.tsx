import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";

export function ServicesBento() {
  return (
    <section className="w-full mt-16 px-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Our Services</h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] bg-red-400">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={item.className }
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const ServiceCard = ({ children, gradient }: any) => (
  <div
    className={cn(
      "relative w-full h-full min-h-[6rem] rounded-xl border border-transparent p-6 text-white text-center text-lg overflow-hidden"
    )}
  >
    {/* Dark base */}
    <div className="absolute inset-0 bg-black"></div>
    {/* Gradient highlight */}
    <div className={cn("absolute inset-0", gradient)}></div>
    {/* Content */}
    <div className="relative z-10">{children}</div>
  </div>
);

const items = [
  {
    header: (
      <ServiceCard gradient="bg-[radial-gradient(circle_at_90%_90%,rgba(236,72,153,0.5)_0%,rgba(147,51,234,0.4)_20%,transparent_80%)]">
        <h1 className="text-xl font-bold">Websites & Web Applications</h1>
      </ServiceCard>
    ),
    className: "md:col-span-2",
  },
  {
    header: (
      <ServiceCard gradient="bg-[radial-gradient(circle_at_10%_90%,rgba(147,51,234,0.5)_0%,rgba(59,130,246,0.4)_20%,transparent_80%)]">
        <h1 className="text-xl font-bold">Mobile Applications</h1>
      </ServiceCard>
    ),
    className: "md:col-span-1",
  },
  {
    header: (
      <ServiceCard gradient="bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.5)_0%,rgba(29,78,216,0.4)_20%,transparent_80%)]">
        <h1 className="text-xl font-bold">Support & Updates</h1>
      </ServiceCard>
    ),
    className: "md:col-span-1",
  },
  {
    header: (
      <ServiceCard gradient="bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,0.4)_0%,rgba(59,130,246,0.4)_20%,transparent_80%)]">
        <h1 className="text-xl font-bold">AI Tools & Agents</h1>
      </ServiceCard>
    ),
    className: "md:col-span-2",
  },
];
