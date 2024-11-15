"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { useState } from "react";
import Link from "next/link";
import AboutPageComponent from "@/components/about";
import StatsSection from "@/components/about/Statistics";
import FAQSection from "@/components/about/FAQSection";
import HeroSection from "@/components/about/HeroSection";

const AboutPage = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <div>
          <AboutPageComponent />
          <StatsSection />
          <FAQSection />
          <HeroSection />
          <Footer />
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-[calc(100vh-100px)] bg-white flex flex-col items-center gap-4 pr-6 mt-24">
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

export default AboutPage;
