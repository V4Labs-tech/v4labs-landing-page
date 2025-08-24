import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/ui/footer-section";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "V4Labs - MVP Development & Ongoing Support for Startups",
  description:
    "V4Labs helps entrepreneurs and small businesses turn ideas into reality with fast, affordable MVPs (web, mobile, SaaS) and reliable monthly support. Built by a team of Indian student engineers for global founders.",
  keywords: [
    "MVP development India",
    "startup MVP builder",
    "affordable app development",
    "web app development for startups",
    "mobile app MVP",
    "technical support subscription",
    "SaaS MVP development",
    "startup tech partner",
    "Dubai MVP development",
    "founder support tech team",
  ],
  authors: [{ name: "V4Labs" }],
  creator: "V4Labs",
  publisher: "V4Labs",
  openGraph: {
    title: "V4Labs - Build Your Startup MVP Fast",
    description:
      "We build MVPs (apps, websites, SaaS) for founders and provide ongoing technical support via subscription plans. Reliable, affordable, and startup-focused.",
    url: "https://v4labs.tech", // update with your domain
    siteName: "V4Labs",
    images: [
      {
        url: "favicon2.png", // place an image in public/ for previews
        width: 1200,
        height: 630,
        alt: "V4Labs - MVP Development & Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V4Labs - MVP Development & Startup Support",
    description:
      "Turn your startup idea into a working MVP. Web, mobile, SaaS + monthly support plans. By V4Labs.",
    images: ["favicon2.png"],
    creator: "@v4labs", // update if you create an X (Twitter) handle
  },
icons: {
    icon: "/favicon.ico",        // main favicon
    shortcut: "/favicon2.png",    // optional
    apple: "/favicon2.png",       // for Apple devices
  },
  metadataBase: new URL("https://v4labs.tech"), // your production domain
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
{/* Google Tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LXBTLDEZBK" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXBTLDEZBK');
          `}
          </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#040405]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
