"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const SubscriptionPageWrapper = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/request-demo", label: "Request a Demo" },
    { href: "https://app.staffluent.co/login", label: "Access Platform" },
  ];

  useEffect(() => {
    // Auto redirect to the dashboard after countdown
    if (countdown <= 0) {
      router.push("https://app.staffluent.co");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <>
      <Header
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        navLinks={navLinks}
      />
      {!isHamburgerMenuOpen ? (
        <div>
          <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-[#F8FAFC] py-16">
            <div className="max-w-md w-full mx-4">
              <div className="bg-white p-8 rounded-2xl border border-[#DEE5ED] shadow-sm text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                  Subscription Complete!
                </h1>
                <p className="text-[#3D495B] mb-6">
                  Your account has been set up successfully. Your 14-day free trial starts now!
                </p>
                <div className="mb-6 p-4 bg-[#F8FAFC] rounded-lg">
                  <p className="text-[#3D495B]">
                    You&apos;ll be redirected to your dashboard in <span className="font-bold">{countdown}</span> seconds...
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link
                    href="https://app.staffluent.co/dashboard"
                    className="block w-full bg-[#0A0A0A] text-white text-center py-3 px-6 rounded-xl hover:bg-black/90 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/"
                    className="block w-full bg-white border border-[#DEE5ED] text-[#0A0A0A] text-center py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Homepage
                  </Link>
                </div>
                <div className="mt-8 text-sm text-[#3D495B]">
                  <p>Need help getting started?</p>
                  <Link href="/contact" className="text-[#0A0A0A] underline hover:text-[#171717]">
                    Contact our support team
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
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

export default SubscriptionPageWrapper;