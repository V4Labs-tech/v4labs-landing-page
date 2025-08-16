"use client";

import React, { useState } from "react";
import BookingModal from "./ui/BookingModal";
import { Highlight } from "./ui/hero-highlight";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs";

  return (
    // This parent div is now the container for the shader background.
    // 'relative' contains the 'absolute' positioned canvas.
    // 'overflow-hidden' ensures the canvas doesn't spill out.
    <div className="relative w-full flex flex-col items-center overflow-hidden ">
      {/* All content is now a sibling to the background, and will render on top */}
      <section className="text-center mt-20 max-w-2xl z-10">
        <div className="mb-8">
          <h1 className="text-3xl  md:text-5xl font-semibold leading-snug text-white">
            From Vision To Version , We’re Your{" "}
            <Highlight className="">Tech Team</Highlight>
          </h1>
          <p className="mt-4 text-md text-gray-400">
            Get a full-stack team to build and maintain your product from idea
            to launch and beyond. <br />
            We’re here to build your dream.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-gray-900 px-6 py-3 rounded-4xl text-md font-semibold hover:bg-opacity-90 transition cursor-pointer"
        >
          Book a call
        </button>
      </section>

      <div className="mt-16 mb-6 w-full max-w-[50rem] h-auto aspect-video rounded-lg overflow-hidden z-10 ">
        <video
          src="/v4labs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUser={calUsername}
      />
    </div>
  );
};

export default Hero;
