"use client";

import { Lightbulb, Layout, Code2, Rocket, Repeat } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stepIcons = [
  <Lightbulb key="lightbulb" className="w-6 h-6" />,
  <Layout key="layout" className="w-6 h-6" />,
  <Code2 key="code2" className="w-6 h-6" />,
  <Rocket key="rocket" className="w-6 h-6" />,
  <Repeat key="repeat" className="w-6 h-6" />,
];

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="list-none mb-2 w-full">
      <div className="relative w-full rounded-2xl bg-[#040405] md:rounded-3xl">
        <GlowingEffect
          spread={40}
          glow={true}
          proximity={64}
          disabled={false}
        />
        <div className=" relative flex h-24 flex-col justify-between rounded-xl p-6">
          <div className="flex items-center mb-0.5 gap-2">
            <div className="w-fit rounded-lg">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </li>
  );
};

const steps = [
  {
    title: "Discovery Call",
    desc: "We understand your business idea and goals.",
  },
  {
    title: "Planning & Design",
    desc: "We wireframe the UI/UX and define the tech stack.",
  },
  {
    title: "Rapid Development",
    desc: "We build your MVP using modern, scalable tech.",
  },
  {
    title: "Launch",
    desc: "We deploy your app or site with end-to-end support.",
  },
  {
    title: "Iterate & Maintain",
    desc: "We continue to support and improve your product.",
  },
];

export default function StepsSection() {
  return (
    <ul className="w-full md:w-2/4">
      {steps.map((step, i) => (
        <GridItem
          key={i}
          icon={stepIcons[i]}
          title={step.title}
          description={step.desc}
        />
      ))}
    </ul>
  );
}
