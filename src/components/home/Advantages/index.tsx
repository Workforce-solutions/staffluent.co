import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Crosshair, Target, Database, Share2, GitBranch } from "lucide-react";

const Advantages = () => {
  const features = [
    {
      title: "Smart Tasking",
      icon: "https://framerusercontent.com/images/sh29Ss025KGjtLmfxytiazc4EeI.svg",
    },
    {
      title: "Automated Scheduling",
      icon: "https://framerusercontent.com/images/TFPLWOVt43fxJQ2k2LQqnAd3Obs.svg",
    },
    {
      title: "AI-Powered Reminders",
      icon: "https://framerusercontent.com/images/484M7kHBnbIGJMAnW6e3OEVKI.svg",
    },
    {
      title: "Predictive Analytics",
      icon: "https://framerusercontent.com/images/wpnZoP3QjADuGfntbYdd3adrVpg.svg",
    },
  ];

  const aiFeatures = [
    { title: "Task Management", icon: Crosshair },
    { title: "Collaboration Tools", icon: Share2 },
    { title: "Deadline Alerts", icon: Target },
    { title: "Real-Time Sync", icon: Database },
    { title: "Prioritization", icon: GitBranch },
  ];

  return (
    <>
      {/* First Advantage Section */}
      <section className="py-20" id="advantage">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="md:text-6xl text-5xl leading-tight font-bold">
              Why Choose Staffluent
            </h2>

            {/* Features Grid */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-xl p-2 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={30}
                      height={30}
                      className="text-white"
                    />
                  </div>
                  <span className="text-[#333333]">{feature.title}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block bg-[#0A0A0A] text-white px-6 py-4 rounded-xl hover:bg-black/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden aspect-[4/3]">
            <Image
              src="/api/placeholder/600/450"
              alt="Advantage illustration"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Second Advantage Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative rounded-3xl border border-[#DEE5ED] overflow-hidden aspect-[4/3]">
            <Image
              src="/api/placeholder/600/450"
              alt="AI Features illustration"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="md:text-6xl text-5xl leading-tight font-bold">
                Explore Staffluent AI-Enhanced Features
              </h2>
              <p className="text-[#3d495b] text-lg">
                Discover how AI streamlines tasks, predicts needs, and boosts
                productivity effortlessly.
              </p>
            </div>

            {/* Features Grid */}
            <div className="flex flex-wrap gap-3">
              {aiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-full py-2 px-4 flex items-center gap-2"
                >
                  <feature.icon className="h-5 w-5" />
                  <span>{feature.title}</span>
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
