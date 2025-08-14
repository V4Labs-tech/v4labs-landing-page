'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BookingModal from "./ui/BookingModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calUsername = "v4labs"; // <-- IMPORTANT: Change this to your Cal.com username

  const navLinks = [
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" }, // Changed from "Products"
    { name: "Pricing", href: "#pricing" },
    { name: "Company", href: "#company" },
  ];

  // Add Cal.com embed script for better integration (optional but recommended)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <>
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
              <Link href={item.href} key={item.name} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
          >
            Book a call
          </button>
        </nav>
      </div>

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