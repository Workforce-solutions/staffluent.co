import React from "react";
import Image from "next/image";
import Link from "next/link";

const Advantages = () => {
  const features = [
    {
      title: "Smart Tasking",
      icon: "https://framerusercontent.com/images/sh29Ss025KGjtLmfxytiazc4EeI.svg",
    },
    {
      title: "Automated Scheduling",
      icon: "https://framerusercontent.com/images/6Hl73G12BPhpBSE40pGQMArkw.svg",
    },
    {
      title: "AI-Powered Reminders",
      icon: "https://framerusercontent.com/images/l8Yny4qzAGaJpmBlbw4y3IqqZw.svg",
    },
    {
      title: "Predictive Analytics",
      icon: "https://framerusercontent.com/images/484M7kHBnbIGJMAnW6e3OEVKI.svg",
    },
  ];

  const aiFeatures = [
    {
      title: "Task Management",
      icon: "https://framerusercontent.com/images/STx7MhL1G8tv8zPZeZrABlyiHKk.svg",
    },
    {
      title: "Collaboration Tools",
      icon: "https://framerusercontent.com/images/2Fp6sHUU5gChe0qVJmJOhelkL9w.svg",
    },
    {
      title: "Deadline Alerts",
      icon: "https://framerusercontent.com/images/0Q35L936tMwlGlWJJjIfRZ5UQ.svg",
    },
    {
      title: "Real-Time Sync",
      icon: "https://framerusercontent.com/images/Ol4qxoj2cnkGeNq0wLZxMJYI.svg",
    },
    {
      title: "Prioritization",
      icon: "https://framerusercontent.com/images/wV6LymmM5xeoIkKwXvy92GrPtM.svg",
    },
  ];

  return (
      <>
        {/* First Advantage Section */}
        <section className="py-10 md:py-16" id="advantage">
          <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl leading-tight font-bold">
                Why Choose Staffluent
              </h2>

              {/* Features Grid */}
              <div className="flex flex-col md:flex-row flex-wrap gap-4 max-w-lg mx-auto md:mx-0">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-2 flex items-center justify-center gap-3"
                    >
                      <div className="w-8 md:w-10 h-8 md:h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                        <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={24}
                            height={24}
                            className="text-white"
                        />
                      </div>
                      <span className="text-[#333333] text-sm md:text-base">{feature.title}</span>
                    </div>
                ))}
              </div>

              <Link
                  href="/contact"
                  className="inline-block bg-[#0A0A0A] text-white px-4 py-3 rounded-xl hover:bg-black/90 transition-colors text-center w-full md:w-auto"
              >
                Get Started
              </Link>
            </div>

            {/* Image Section */}
            <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden">
              <Image
                  src="https://framerusercontent.com/images/mSmtNMWqbIobNUiGm49hZpq614.svg"
                  alt="Staffluent - Centered Intelligence"
                  width={575}
                  height={530}
              />
            </div>
          </div>
        </section>

        {/* Second Advantage Section */}
        <section className="py-12 md:py-20 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section with Arrow */}
            <div className="relative">
              <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden">
                <Image
                    src="https://framerusercontent.com/images/4tAswm4VmUUUuFeWv5aNzy3XNoI.svg"
                    alt="Staffluent - Centered Intelligence"
                    width={600}
                    height={450}
                />
              </div>
              <Image
                  src="https://framerusercontent.com/images/DJaenqiURD5xYuKBLs68FRtHMB4.svg"
                  alt="Staffluent - Centered Intelligence"
                  width={120}
                  height={80}
                  className="absolute -right-16 top-3/4 -translate-y-1/2 hidden md:block"
              />
            </div>

            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl leading-tight font-bold">
                  Explore Staffluent AI-Enhanced Features
                </h2>
                <p className="text-[#3d495b] text-base md:text-lg">
                  Discover how AI streamlines tasks, predicts needs, and boosts
                  productivity effortlessly.
                </p>
              </div>

              {/* Features Grid */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {aiFeatures.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-full py-2 px-3 md:px-4 flex items-center gap-2"
                    >
                      <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={16}
                          height={16}
                          className="md:w-5 md:h-5"
                      />
                      <span className="text-sm md:text-base">{feature.title}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Advantages;