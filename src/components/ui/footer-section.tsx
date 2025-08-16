"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

interface FooterLink {
  title: string | ReactNode;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  key: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#about", key: "1" },
      { title: "Services", href: "#services", key: "2" },
      { title: "Contact", href: "#contact", key: "3" },
    ],
  },
  {
    label: "Socials",
    links: [
      { title: <span className="text-muted-foregroun hover:text-primary pl-0.5 ">X</span>, href: "https://x.com/V4Labs", key: "4" },
      {
        title: <FaInstagram size={20} />,
        href: "https://www.instagram.com/v4labs/",
        key: "5",
      },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Terms of Service", href: "/terms", key: "6" },
      { title: "Privacy Policy", href: "/privacy", key: "7" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="text-white md:rounded-t-6xl relative w-full flex flex-col items-center justify-center rounded-t-4xl mask-t-from-90% bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.primary/20%),transparent)] px-6 sm:px-10 md:px-16 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="w-full max-w-6xl">
        <div className=" w-full flex flex-col justify-between gap-4 md:flex-row md:justify-between md:items-start">
          {/* Left: Logo */}
          <AnimatedContainer className="space-y-4">
            <Link
              href="#"
              className="text-lg font-semibold flex justify-center items-center gap-2"
            >
              <Image src={"/v4labs.svg"} alt="logo" width={36} height={36} />
            </Link>
          </AnimatedContainer>

          {/* Middle Columns */}
          <div className="flex justify-between gap-x-18  w-full md:w-100">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div>
                  <h3 className="text-xs">{section.label}</h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.key}>
                        <a
                          href={link.href}
                          className="hover:text-primary inline-flex items-center transition-all duration-300"
                        >
                          {link.icon && <link.icon className="me-1 size-4" />}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} V4labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    // Return a simple div if motion is reduced, maintaining the layout
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
