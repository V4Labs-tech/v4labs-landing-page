import Link from "next/link";
import React from "react";
import { BeamsBackground } from "./ui/Beams-background";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* <BeamsBackground> */}

          <section className="text-center mt-20 max-w-2xl ">
      <div className="mb-8">
        <h1 className="text-5xl font-semibold leading-snug">
          From Vision To Version , We’re Your <span className="bg-primary p-1 text-black">Tech Team</span>
        </h1>
        <p className="mt-4 text-md text-gray-400">
          Get a full-stack team to build and maintain your product from idea to
          launch and beyond. <br />
          We’re here to build your dream, not own it
        </p>
      </div>
      <Link
        href="#"
        className="bg-primary text-gray-800 px-6 py-4  rounded-4xl text-md font-semibold"
        >
        Book a call
      </Link>
      
    </section>
      {/* </BeamsBackground> */}
      
      {/* video below */}
      <div className="mt-16 mb-16 w-full max-w-[50rem] h-110 rounded-lg overflow-hidden">
  <video
    src="/v4labs.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>
      
    </div>


  );
};

export default Hero;


