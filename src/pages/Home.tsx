"use client";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/home/About";
import Advantages from "@/components/home/Advantages";
import Comparison from "@/components/home/Comparison";
import Pricing from "@/components/home/Pricing";
import React, { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "https://app.staffluent.co/login", label: "Access Platform" }, // This only shows in mobile menu
  ];

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <>
          <Hero />
          <About />
          <Advantages />
          <Features />
          <Comparison />
          <Pricing />
          <FAQ />
          <CTA />
          <Footer />

        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-28">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={"text-black"}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
