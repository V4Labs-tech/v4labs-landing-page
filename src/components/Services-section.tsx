"use client";
import StepsSection from "../components/ui/Steps-gridItem";
import { DotBackground } from "./ui/Dotted-Background";
import ServicesSection2 from "./ServiceSection2";
import { useState } from "react";
import BookingModal from "./ui/BookingModal";

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs";
  return (
    <>
      {/* Section 1: Introductory text without the dotted background */}
      <section
        className="w-full pt-14  md:px-6 flex flex-col items-center mb-14 md:mb-0"
        id="about"
      >
        <div className="text-2xl font-semibold text-gray-800 my-15 border border-[#ddc8f8] bg-[#ddc8f8]/30 px-6 py-1 rounded-full">
          <span>Our Process</span>
        </div>
        <p className="text-center text-2xl max-w-4xl text-gray-700">
          We turn your ideas into launch-ready MVPs in just weeks, not months.
          Affordable, scalable, and fully managed — so you can grow without
          worrying about tech.
        </p>
      </section>

      {/* Section 2: The rest of the content with the dotted background */}
      <section className="w-[90vw] pt-8 mt-10 px-6 flex flex-col items-center mb-30 md:mb-0 rounded-2xl bg-black">
        
          {/* Steps Section */}
          <h2 className="m-10 mt-30 md:mt-0 text-2xl font-semibold text-center text-white z-10">
            From Idea to MVP — In Just 3 Weeks
          </h2>

          <div className="mt-8 flex flex-col justify-around md:flex-row md:items-center gap-10 max-w-5xl w-full">
            {/* Steps List */}
            <StepsSection />

            <div className="w-full md:w-2/4 flex flex-col items-center md:items-start  min-h-[40vh] ">
              <div className="m-auto rounded-2xl p-8 text-white  relative overflow-hidden  ">
                {/* Radial gradient from bottom-right using same colors */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(236,72,153,0.5)_0%,rgba(168,85,247,0.4)_20%,transparent_80%)] pointer-events-none "></div>

                <p className="text-lg font-medium leading-relaxed mb-6 relative z-10">
                  Our 5-step process is built for momentum. We keep it lean,
                  focused, and validation-ready so you can launch without
                  delays.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary w-32 text-gray-800 px-6 py-3 mt-6 rounded-full text-md font-semibold shadow-lg hover:shadow-xl transition  bottom-20 cursor-pointer  md:m-10 md:z-10"
              >
                Book a call
              </button>
            </div>
          </div>
      
      </section>

      <ServicesSection2 />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUser={calUsername}
      />
    </>
  );
}
