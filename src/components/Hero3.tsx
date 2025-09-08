"use client";
import React, { useState } from "react";
import BookingModal from "./ui/BookingModal";
import { Highlight } from "./ui/hero-highlight";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs";

  // Scroll hook for parallax
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -20]); 
  // tweak [0,500] range + [0,150] movement for stronger/weaker effect

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:h-[95vh] max-h-[45rem] h-[85vh] w-[90vw] max-w-7xl bg-white relative mt-24 rounded-2xl overflow-hidden"
    >
      {/* Section Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-[700px] z-10 mx-auto  flex flex-col items-center text-center"
      >
        <div className="text-lg min-w-60 font-semibold text-gray-800 mt-10 border border-[#ddc8f8] bg-[#ddc8f8]/30 px-6 rounded-full">
          <span>🚀 Book a slot for September </span>
        </div>
              <div className="mb-8 mt-3 ">
          <h1 className="text-3xl md:text-[3rem] font-bold text-black">
            From Vision To Version , We’re Your
            Tech Team
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-semibold">
            Get a full-stack team to build and maintain your product from idea
            to launch and beyond. <br />
            We’re here to build your dream.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-1 max-w-50 bg-black text-white px-8 py-5 z-10
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
      </motion.section>

      {/* Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUser={calUsername}
      />

      {/* Bottom V4Labs with parallax */}
      <motion.div
        style={{ y: yParallax }} // 👈 parallax effect here
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.9 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="w-full md:h-35 h-16 rounded-b-2xl absolute bottom-0 flex items-center justify-center "
      >
     <p
  className="bg-gradient-to-r from-black via-[#d7b9ff] to-black 
             bg-clip-text text-transparent 
             md:text-[16rem] text-[6.5rem] font-extrabold 
             select-none tracking-[0.15em] pl-8"
>
  V4Labs
</p>

      </motion.div>
    </motion.div>
  );
};

export default Hero3;
