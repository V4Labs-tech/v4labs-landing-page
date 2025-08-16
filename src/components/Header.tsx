"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BookingModal from "./ui/BookingModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const calUsername = "v4labs";

  const navLinks = [
    { name: "Why Us", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Our Work", href: "#work" }, // Changed from "Products"
    { name: "Pricing", href: "#pricing" },
    { name: "Company", href: "#about" },
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0B]/80 backdrop-blur-lg mask-b-from-80%"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24">
          {/* Navbar */}
          <nav className="w-full flex justify-between items-center py-4">
            {/* Left Logo */}
            <Link
              href="#"
              className="text-lg font-semibold flex justify-center items-center gap-2"
            >
              <Image src={"/v4labs.svg"} alt="logo" width={36} height={36} />
              <span className="text-white">V4Labs</span>
            </Link>

            {/* Center Nav Links - Hidden on mobile */}
            <div className="hidden md:flex gap-8 text-sm text-gray-300">
              {navLinks.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
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

export default Header;
