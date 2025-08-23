"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";
import BookingModal from "./ui/BookingModal";

const Basic = ["MVP Building", "Website", "Mobile App", "AI Tools & Agents"];
const Standard = [
  "Everything in Basic",
  "Feature Development",
  "Bug Fixes & Updates",
  "Monitoring & Maintenance",
];
const Flexible = [
  "Everything in Standard",
  "Tailored to Your Needs",
  "Custom Features",
  "Dedicated Support",
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs";
  return (
    <div
      className="min-h-screen text-center w-full bg-black text-white mt-6 mb-16 px-6"
      id="pricing"
    >
      <h1 className="text-3xl font-bold">Pricing Plans</h1>
      <p className="text-gray-400 text-lg mt-3 mb-10">
        We offer a range of pricing options to suit your needs
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-6">
        {/* Basic Plan */}
        <div className="rounded-2xl h-[60vh] md:h-[70vh] w-full md:w-[320px] backdrop-blur-md bg-white/5 shadow-lg border border-white/10 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold">Basic Plan</h2>
            <p className="text-purple-300 text-3xl font-bold mt-2">$699</p>
            <ul className="text-gray-300 mt-6 space-y-2 text-left">
              {Basic.map((item) => {
                return (
                  <li className="flex gap-3">
                    <Check strokeWidth={4} /> {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 px-6 font-medium cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        {/* Standard Plan */}
        <div className="rounded-2xl h-[65vh] md:h-[75vh] w-full md:w-[340px] backdrop-blur-md bg-gradient-to-b from-purple-800/30 to-purple-500/10 shadow-xl border border-purple-400/20 flex flex-col justify-between p-6 scale-105">
          <div>
            <h2 className="text-2xl font-semibold">Standard Plan</h2>
            <p className="text-purple-300 text-3xl font-bold mt-2">
              $699 + $299/mo
            </p>
            <ul className="text-gray-300 mt-6 space-y-2 text-left">
              {Standard.map((item) => {
                return (
                  <li className="flex gap-3">
                    <Check strokeWidth={4} /> {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 px-6 font-medium cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        {/* Custom Plan */}
        <div className="rounded-2xl h-[60vh] md:h-[70vh] w-full md:w-[320px] backdrop-blur-md bg-white/5 shadow-lg border border-white/10 flex flex-col justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold">Custom Plan</h2>
            <p className="text-purple-300 text-3xl font-bold mt-2">Flexible</p>
            <ul className="text-gray-300 mt-6 space-y-2 text-left">
              {Flexible.map((item) => {
                return (
                  <li className="flex gap-3">
                    <Check strokeWidth={4} /> {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-purple-600 hover:bg-purple-700 transition rounded-lg py-3 px-6 font-medium cursor-pointer"
          >
            Book a Call
          </button>
        </div>
      </div>
      {/* Render the Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUser={calUsername}
      />
    </div>
  );
};

export default PricingSection;
