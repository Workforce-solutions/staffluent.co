import React from "react";
import Image from "next/image";

const StatsSection = () => {
  const stats = [
    {
      value: "10+",
      label: "Core Features",
      description:
          "From project management to performance analytics, our platform offers comprehensive tools for modern team collaboration.",
    },
    {
      value: "24/7",
      label: "Real-time Tracking",
      description:
          "Monitor project progress, team performance, and key metrics in real-time with our advanced tracking capabilities.",
    },
    {
      value: "360°",
      label: "Team Overview",
      description:
          "Get complete visibility of your team's activities, projects, and performance with our comprehensive dashboard.",
    },
    {
      value: "100%",
      label: "Integration",
      description:
          "Seamlessly connect project management, time tracking, and client communication in one unified platform.",
    },
  ];

  return (
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white border border-[#DEE5ED] rounded-full px-4 py-2 mb-4">
              <Image src="/api/placeholder/24/24" alt="Stats icon" width={24} height={24} className="mr-2" />
              <span className="text-[#0A0A0A]">Our Impact</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">We do this differently</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white border border-[#DEE5ED] rounded-2xl p-8">
                  <div className="text-5xl font-bold text-[#0A0A0A] mb-4">{stat.value}</div>
                  <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-2">{stat.label}</h3>
                  <p className="text-[#3d495b]">{stat.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default StatsSection;