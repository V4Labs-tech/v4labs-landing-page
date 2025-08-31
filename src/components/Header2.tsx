"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BookingModal from "./ui/BookingModal";

const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const calUsername = "v4labs";

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add Cal.com embed script for better integration (optional but recommended)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0  z-40 transition-all  border text-white border-gray-700/10 ease-in-out duration-500 ${
          isScrolled
            ? "mt-4 mx-auto w-[calc(100%-30%)] max-w-7xl rounded-full border  border-gray-700/10 bg-black  "
            : "mt-0 mx-auto w-5/6 rounded-full  border-hidden"
        }`}
      >
        <div
          className={`px-6  transition-all ease-in-out duration-300 ${
            isScrolled
              ? " rounded-full "
              : " rounded-full"
          }`}
        >
          {/* Navbar */}
          <nav className="w-full flex justify-between items-center py-4">
            {/* Left Logo */}
            <Link
              href="#"
              className="text-2xl font-extrabold flex justify-center items-center gap-2"
            >
              {/* <Image src={"/v4labs.svg"} alt="logo" width={36} height={36} /> */}
              <span className=" ">V4Labs</span>
            </Link>

            {/* Center Nav Links - Hidden on mobile */}
            <div className="hidden md:flex gap-8 text-sm font-semibold ">
              {navLinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#989BF4]/80 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-all cursor-pointer"
            >
              Book a call
            </button>
          </nav>
        </div>
      </header>

      {/* Render the Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calUser={calUsername}
      />
    </>
  );
};

export default Header2;