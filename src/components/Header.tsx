import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    { name: "Why Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Products", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Company", href: "#" },
  ];
  return (
    <div className="px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4">
        {/* Left Logo */}
        <Link
          href="#"
          className="text-lg font-semibold flex justify-center items-center"
        >
          <Image src={"v4labs.svg"} alt="logo" width={36} height={36} />
          V4Labs
        </Link>

        {/* Center Nav Links */}
              <div className="flex gap-8 text-sm">
                  {navLinks.map((item) => {
                      return (
                          <Link href={item.href} key={item.name} className="hover:text-primary">{item.name}</Link>
                      )
                  })}
        </div>

        {/* Right CTA */}
        <Link
          href="#"
          className="bg-primary text-gray-800 px-3 py-2 rounded-4xl text-sm font-semibold"
        >
          Book a call
        </Link>
      </nav>
    </div>
  );
};

export default Header;
