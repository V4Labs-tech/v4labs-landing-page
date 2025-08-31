"use client";
import React, { useState } from "react";
import BookingModal from "./ui/BookingModal";
import { Highlight } from "./ui/hero-highlight";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Hero2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs";

  return (
<BackgroundGradientAnimation
  gradientBackgroundStart="rgb(0, 0, 0)"
  gradientBackgroundEnd="rgb(0, 0, 0)"
  firstColor="164, 168, 247"
  secondColor="255, 242, 0"
  thirdColor="118, 123, 241"
  fourthColor="235, 164, 196"
  fifthColor="164, 168, 247"
  pointerColor="149, 152, 241"
  size="100%"
  blendingValue="soft-light"
>
<div className="absolute z-10 inset-0 w-[100vw] h-screen bg-transparent text-white overflow-hidden 
                flex items-end justify-start p-10 pb-20">
  {/* content sits bottom-left because of flex + items-end + justify-start */}
  
  <section className="text-left  max-w-[700px] z-10">
    <div className="mb-8">
      <h1 className="text-6xl md:text-[3.5rem] font-bold leading-snug ">
              From Vision To Version , We’re Your 
              <Highlight>
Tech Team
              </Highlight>
      </h1>
      <p className="mt-4 text-lg text-gray-300 font-semibold">
        Get a full-stack team to build and maintain your product from
        idea to launch and beyond. <br />
        We’re here to build your dream.
      </p>
    </div>

    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center justify-center gap-1 bg-[#989BF4]/80 text-white px-8 py-5 hover:pl-6
                 rounded-4xl text-lg font-semibold cursor-pointer transition-all transform hover:scale-105 hover:gap-4 ease-in-out duration-200"
    >
      <span>Book a call</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  </section>

  <BookingModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    calUser={calUsername}
  />
</div>

    </BackgroundGradientAnimation>
  );
};

export default Hero2;
