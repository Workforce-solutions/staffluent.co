import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SparklesIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };


  const scrollToPricing = (e) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <section className="pt-10 w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          {/* Tag Button */}
          <div className="p-1 border border-[rgba(222,229,237,0.27)] rounded-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(222,229,237,50)] hover:bg-black/5 transition-colors">
              <Image
                  src="https://framerusercontent.com/images/IMr6LHJrnxrNlwu88UNWxCvghkA.svg"
                  alt="Staffluent - Centered Intelligence"
                  width={24}
                  height={24}
              />
              <span className="text-[#0A0A0A] text-sm md:text-base">
              Coordinate • Schedule • Empower – Elevate Your Team Management
            </span>
              <div className="bg-[#0A0A0A] p-1 rounded-full">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                      d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-8 md:mt-10 mb-4 md:mb-6"
          >
            <h1 className="text-[42px] md:text-[68px] leading-[1.1] md:leading-[1.2] font-bold font-['Bricolage_Grotesque'] text-[#0c0c0c] max-w-[800px] mx-auto">
              Elevate Your Staff Management with Cloud-Based Solutions
            </h1>
            <p className="text-base md:text-lg text-[#3d495b] max-w-[600px] mx-auto mt-4 md:mt-6">
              The ultimate cloud‑based platform for project tracking,
              time & attendance, quality inspections, and client management.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col items-center gap-6 md:gap-8"
          >
            <Link
                href="/contact"
                className="bg-[#0A0A0A] text-white text-base md:text-[17px] px-6 py-3 md:py-4 rounded-xl hover:bg-black/90 transition-colors w-full md:w-auto"
            >
              Start Free Trial
            </Link>

            <div
                className="flex items-center gap-3 border p-1 rounded-full pr-2 cursor-pointer hover:bg-black/5"
                onClick={scrollToPricing}
            >
              <div className="flex">
                <div className="flex -space-x-2">
                  <Image
                      src="https://framerusercontent.com/images/VLgy4LHFmPRcroCjnlXTid9rvcc.png"
                      alt="Staffluent - Team member"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-white relative z-30 md:w-8 md:h-8"
                  />
                  <Image
                      src="https://framerusercontent.com/images/UENPQ6M5gthstqeACgcVeN76TZk.png"
                      alt="Staffluent - Team member"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-white relative z-20 md:w-8 md:h-8"
                  />
                  <Image
                      src="https://framerusercontent.com/images/prQs9tObWVtpStifstN0OexkE.png"
                      alt="Staffluent - Team member"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-white relative z-10 md:w-8 md:h-8"
                  />
                </div>
              </div>
              <span className="text-[#3d495b] text-sm md:text-base">View Pricing</span>
            </div>
          </motion.div>

          {/* Dashboard and Features combined container for proper overlap */}
          <div className="relative w-full mt-20">
            {/* Dashboard Preview */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[min(90vw,1140px)] mx-auto backdrop-blur-[6px] bg-gradient-to-b from-white to-white/20 rounded-[24px] p-1.5 shadow-lg overflow-visible relative z-10 opacity-100"
            >
              <div className="w-full rounded-[20px] bg-white">
                <Image
                    src="https://framerusercontent.com/images/6R7Itar4Nwn8lsiojWr72ZW1uKk.png?scale-down-to=1024"
                    alt="Staffluent - Platform Dashboard Preview"
                    width={1140}
                    height={600}
                    className="w-full h-auto"
                    priority
                />
              </div>
            </motion.div>

            {/* Features Section - positioned for proper overlap */}
            <div className="w-[115%] mt-[-80px] mx-auto left-1/2 -translate-x-1/2 relative">
              <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full bg-[#111111] rounded-[48px] pt-48 pb-16 px-4 md:px-20"
              >
                {/* Caption */}
                <div className="flex items-center justify-center gap-2 bg-[#1E1E1E] text-white px-4 py-2.5 rounded-full w-fit mx-auto mb-12">
                  <SparklesIcon className="w-5 h-5" />
                  <p className="text-[17px] text-white">
                    Unlock smarter productivity with AI-driven tools, personalized
                    workflows, and seamless collaboration.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                  {[
                    {
                      title: "Smart Task Prioritization with AI Insights",
                      icon: "brain",
                      url: "https://framerusercontent.com/images/sh29Ss025KGjtLmfxytiazc4EeI.svg",
                    },
                    {
                      title: "Unified Workspace for Teamwork",
                      icon: "users",
                      url: "https://framerusercontent.com/images/TFPLWOVt43fxJQ2k2LQqnAd3Obs.svg",
                    },
                    {
                      title: "Advanced Project Tracking & Analytics",
                      icon: "chart",
                      url: "https://framerusercontent.com/images/484M7kHBnbIGJMAnW6e3OEVKI.svg",
                    },
                    {
                      title: "Real-time Sync Across All Devices",
                      icon: "sync",
                      url: "https://framerusercontent.com/images/wpnZoP3QjADuGfntbYdd3adrVpg.svg",
                    },
                  ].map((feature, index) => (
                      <div key={feature.title} className="relative">
                        {index > 0 && (
                            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-28 border-l border-gray-400 border-dashed" />
                        )}
                        <div className="flex flex-col items-center gap-4 px-4">
                          <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center border border-[#2A2A2A]">
                            <Image
                                src={feature.url}
                                alt={feature.icon}
                                width={28}
                                height={28}
                            />
                          </div>
                          <p className="text-white text-center text-[17px] max-w-[200px]">
                            {feature.title}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;