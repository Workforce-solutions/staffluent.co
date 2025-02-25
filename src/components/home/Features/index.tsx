import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI Task Management",
      description: "Automatically prioritize and organize your daily tasks.",
      icon: "dr6GD1t1ONXQwbFmH89FVAeK1fM.svg",
    },
    {
      title: "Real-Time Collaboration",
      description: "Work together seamlessly with live updates.",
      icon: "p5McfwFP7uurSKgF6PViQA4Gtc4.svg",
    },
    {
      title: "Customizable Dashboards",
      description: "Tailor your workspace to fit your workflow.",
      icon: "qQeZEnuuvvo8KgCmqFiT3Ti7fw.svg",
    },
    {
      title: "Automated Reminders",
      description: "Stay on track with smart deadline alerts.",
      icon: "euaBpQVAMFZkJzzAmPHqkPmUQoY.svg",
    },
    {
      title: "Time-Blocking Tools",
      description: "Plan and manage your time efficiently and effectively.",
      icon: "KAxSGCHUlTP7V9W9PSAIhI9DaTo.svg",
    },
    {
      title: "Integrated Calendars",
      description: "Sync with your existing calendar apps effortlessly.",
      icon: "W4FbcyGRxahhSiKZQSpElKkQpec.svg",
    },
  ];

  return (
    <section className="md:py-10 py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DEE5ED] bg-[#F8FAFC] mb-6">
            <Star className="h-5 w-5" />
            <span className="text-[#0A0A0A] text-base">Features</span>
          </div>
          <h2 className="md:text-6xl text-5xl font-bold text-[#0A0A0A] mb-4">
            What Staffluent Offers You
          </h2>
          <p className="text-[#3D495B] text-lg max-w-[600px] mx-auto">
            Explore the tools and capabilities that elevate your productivity
            and streamline tasks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#F8FAFC] border border-[#DEE5ED] rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-[#0A0A0A] rounded-xl flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#3D495B]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
